/**
 * Big Max 1H Gauge Sheet Parser
 * Expected file: Big Max 1H Gauge Sheet.xlsx
 * Single well: Big Max 1-1H
 */

export const BigMax1HParser = {
    id: 'bigmax1h',
    name: 'Big Max 1H',
    expectedFileName: 'Big Max 1H Gauge Sheet.xlsx',

    wells: [
        { id: 'bigmax-1-1h', name: 'Big Max 1-1H', oilCol: 1, waterCol: 2, gasCol: 3 }
    ],
    productionConfig: {
        sheet: 'Big Max 1H',
        headerRowIndex: 6,
        dateCol: 0,
        oilProdCol: 21,
        waterProdCol: 22,
        gasProdCol: 23
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

        // Parse battery-level production
        result.batteryProduction = this.parseBatteryProduction(workbook);

        if (workbook.Sheets['Run Tickets']) {
            result.runTickets = this.parseRunTicketsSheet(workbook.Sheets['Run Tickets']);
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

export default BigMax1HParser;
