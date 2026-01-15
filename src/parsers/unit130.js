/**
 * 1-30 Unit 1H Gauge Sheet Parser
 * Expected file: 1-30 Unit 1H Gauge Sheet.xlsx
 * Single well: ULS 1-30-1H
 */

export const Unit130Parser = {
    id: 'unit130',
    name: '1-30 Unit 1H',
    expectedFileName: '1-30 Unit 1H Gauge Sheet.xlsx',

    wells: [
        { id: 'uls-1-30-1h', name: 'ULS 1-30-1H', oilCol: 1, waterCol: 2, gasCol: 3 }
    ],
    pressureConfig: {
        sheet: '1-30-1H Gauge Sheet',
        headerRowIndex: 5,
        dateCol: 0,
        wells: {
            'uls-1-30-1h': { csg: 37, tbg: 38, fl: null, inj: 39 }
        }
    },
    productionConfig: {
        sheet: '1-30-1H Gauge Sheet',
        headerRowIndex: 5,
        dateCol: 0,
        oilProdCol: 30,
        waterProdCol: 31,
        gasProdCol: 32
    },

    parse(workbook) {
        const result = {
            id: this.id,
            name: this.name,
            lastUpdated: new Date().toISOString(),
            wells: [],
            runTickets: [],
            rawRowCount: 0,
            batteryProduction: []
        };

        if (workbook.Sheets['Well Test']) {
            const wellTestData = this.parseWellTestSheet(workbook.Sheets['Well Test']);
            result.wells = wellTestData.wells;
            result.rawRowCount = wellTestData.rowCount;
        }

        if (result.wells.length > 0) {
            this.applyPressureReadings(workbook, result.wells);
        }

        // Parse battery-level production
        result.batteryProduction = this.parseBatteryProduction(workbook);

        return result;
    },

    parseWellTestSheet(sheet) {
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });

        const wells = this.wells.map(w => ({
            id: w.id,
            name: w.name,
            status: 'active',
            wellTests: [],
            production: [],
            chemicalProgram: { continuous: { rate: null, chems: '-', ppm: null }, truckTreat: { rate: null, chems: '-', ppm: null } },
            failureHistory: [],
            pressureReadings: [],
            actionItems: []
        }));

        let rowCount = 0;
        for (let i = 4; i < data.length; i++) {
            const row = data[i];
            if (!row || !row[0]) continue;

            const dateStr = this.parseDate(row[0]);
            if (!dateStr) continue;
            rowCount++;

            this.wells.forEach((wellDef, idx) => {
                const oil = this.parseNumber(row[wellDef.oilCol]);
                const water = this.parseNumber(row[wellDef.waterCol]);
                const gas = this.parseNumber(row[wellDef.gasCol]);

                if (oil !== null || water !== null || gas !== null) {
                    wells[idx].wellTests.push({ date: dateStr, oil, water, gas });
                    wells[idx].production.push({ date: new Date(dateStr), oil, water, gas });
                }
            });
        }

        wells.forEach(well => {
            well.wellTests.sort((a, b) => new Date(b.date) - new Date(a.date));
            well.wellTests = well.wellTests.slice(0, 60);  // Increased from 20
            well.production.sort((a, b) => a.date - b.date);
        });

        return { wells, rowCount };
    },

    parseBatteryProduction(workbook) {
        const config = this.productionConfig;
        if (!config) return [];
        const sheet = workbook.Sheets[config.sheet];
        if (!sheet) return [];

        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
        if (!data || data.length === 0) return [];

        const production = [];

        for (let i = config.headerRowIndex + 2; i < data.length; i++) {
            const row = data[i];
            if (!row) continue;
            const dateStr = this.parseDate(row[config.dateCol]);
            if (!dateStr) continue;

            const oil = this.parseNumber(row[config.oilProdCol]);
            const water = this.parseNumber(row[config.waterProdCol]);
            const gas = config.gasProdCol !== null ? this.parseNumber(row[config.gasProdCol]) : null;

            if (oil !== null || water !== null || gas !== null) {
                production.push({
                    date: new Date(dateStr),
                    oil: oil,
                    water: water,
                    gas: gas
                });
            }
        }

        production.sort((a, b) => a.date - b.date);
        return production;
    },

    applyPressureReadings(workbook, wells) {
        const config = this.pressureConfig;
        if (!config) return;
        const sheet = workbook.Sheets[config.sheet];
        if (!sheet) return;

        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
        if (!data || data.length === 0) return;

        const readingsByWell = {};
        wells.forEach(well => {
            readingsByWell[well.id] = [];
        });

        for (let i = config.headerRowIndex + 1; i < data.length; i++) {
            const row = data[i];
            if (!row) continue;
            const dateStr = this.parseDate(row[config.dateCol]);
            if (!dateStr) continue;

            Object.entries(config.wells).forEach(([wellId, cols]) => {
                if (!readingsByWell[wellId]) return;
                const casingPsi = this.parseNumber(row[cols.csg]);
                const tubingPsi = this.parseNumber(row[cols.tbg]);
                const flowlinePsi = cols.fl === null ? null : this.parseNumber(row[cols.fl]);
                const injVol = this.parseNumber(row[cols.inj]);

                if (casingPsi !== null || tubingPsi !== null || flowlinePsi !== null || injVol !== null) {
                    readingsByWell[wellId].push({
                        date: dateStr,
                        casingPsi,
                        tubingPsi,
                        flowlinePsi,
                        injVol
                    });
                }
            });
        }

        wells.forEach(well => {
            const readings = readingsByWell[well.id] || [];
            readings.sort((a, b) => new Date(b.date) - new Date(a.date));
            well.pressureReadings = readings.slice(0, 60);
        });
    },

    parseDate(val) {
        if (!val) return null;
        if (val instanceof Date) return val.toISOString().split('T')[0];
        if (typeof val === 'number') {
            const date = XLSX.SSF.parse_date_code(val);
            if (date) return `${date.y}-${String(date.m).padStart(2, '0')}-${String(date.d).padStart(2, '0')}`;
        }
        if (typeof val === 'string') return val.split(' ')[0];
        return null;
    },

    parseNumber(val) {
        if (val === null || val === undefined || val === '') return null;
        const num = parseFloat(val);
        if (isNaN(num)) return null;
        return num < 0 ? 0 : num;
    }
};

export default Unit130Parser;
