/**
 * ULS 3-5H Gauge Sheet Parser
 * Expected file: ULS 3-5H Gauge Sheet.xlsx
 * Wells: ULS 1-3-1H, 1-3-3H, 1-3-5H, 1-3-7H
 */

export const ULS35HParser = {
    id: 'uls35h',
    name: 'ULS 3-5H',
    expectedFileName: 'ULS 3-5H Gauge Sheet.xlsx',

    // Wells from Well Test (6-column spacing)
    wells: [
        { id: 'uls-1-3-1h', name: 'ULS 1-3-1H', oilCol: 1, waterCol: 2, gasCol: 3 },
        { id: 'uls-1-3-3h', name: 'ULS 1-3-3H', oilCol: 7, waterCol: 8, gasCol: 9 },
        { id: 'uls-1-3-5h', name: 'ULS 1-3-5H', oilCol: 13, waterCol: 14, gasCol: 15 },
        { id: 'uls-1-3-7h', name: 'ULS 1-3-7H', oilCol: 19, waterCol: 20, gasCol: 21 }
    ],
    pressureConfig: {
        sheet: 'University 3-5H',
        headerRowIndex: 3,
        dateCol: 0,
        wells: {
            'uls-1-3-1h': { csg: 34, tbg: 35, fl: 36, inj: 37 },
            'uls-1-3-3h': { csg: 39, tbg: 40, fl: 41, inj: 42 },
            'uls-1-3-5h': { csg: 46, tbg: 47, fl: 48, inj: 49 },
            'uls-1-3-7h': { csg: 51, tbg: 52, fl: 53, inj: 54 }
        }
    },

    parse(workbook) {
        const result = {
            id: this.id,
            name: this.name,
            lastUpdated: new Date().toISOString(),
            wells: [],
            runTickets: [],
            rawRowCount: 0
        };

        if (workbook.Sheets['Well Test']) {
            const wellTestData = this.parseWellTestSheet(workbook.Sheets['Well Test']);
            result.wells = wellTestData.wells;
            result.rawRowCount = wellTestData.rowCount;
        }

        if (result.wells.length > 0) {
            this.applyPressureReadings(workbook, result.wells);
        }

        if (workbook.Sheets['3-5H Run Tickets']) {
            result.runTickets = this.parseRunTicketsSheet(workbook.Sheets['3-5H Run Tickets']);
        }

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

    parseRunTicketsSheet(sheet) {
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
        const tickets = [];

        for (let i = 3; i < data.length; i++) {
            const row = data[i];
            if (!row || !row[1]) continue;

            tickets.push({
                date: this.parseDate(row[0]),
                ticketNum: String(row[1] || ''),
                tank: this.parseNumber(row[2]),
                ftTop: this.parseNumber(row[3]),
                inTop: this.parseNumber(row[4]),
                ftBttm: this.parseNumber(row[5]),
                inBttm: this.parseNumber(row[6]),
                vol: this.parseNumber(row[8])
            });
        }

        tickets.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        return tickets.slice(0, 100);
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
                const flowlinePsi = this.parseNumber(row[cols.fl]);
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

export default ULS35HParser;
