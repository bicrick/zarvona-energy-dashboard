/**
 * Big Max Gauge Sheet Parser
 * Expected file: Big Max Gauge Sheet.xlsx
 * Sheets: Total, Big Max 11 #1, etc., Run Tickets, Well Test, Chem. Inv.
 */

export const BigMaxParser = {
    id: 'bigmax',
    name: 'Big Max',
    expectedFileName: 'Big Max Gauge Sheet.xlsx',

    // Wells from Well Test sheet (6-column spacing)
    wells: [
        { id: 'bigmax-1-1', name: 'Big Max 1 #1', oilCol: 1, waterCol: 2, gasCol: 3, status: 'active' },
        { id: 'bigmax-4-1', name: 'Big Max 4 #1', oilCol: 7, waterCol: 8, gasCol: 9, status: 'active' },
        { id: 'bigmax-5-2', name: 'Big Max 5 #2', oilCol: 13, waterCol: 14, gasCol: 15, status: 'active' },
        { id: 'bigmax-11-1', name: 'Big Max 11 #1', oilCol: 19, waterCol: 20, gasCol: 21, status: 'active' },
        { id: 'bigmax-11-2', name: 'Big Max 11 #2', oilCol: 25, waterCol: 26, gasCol: 27, status: 'active' },
        { id: 'bigmax-12-1', name: 'Big Max 12 #1', oilCol: 31, waterCol: 32, gasCol: 33, status: 'active' },
        { id: 'bigmax-12-2', name: 'Big Max 12 #2', oilCol: 37, waterCol: 38, gasCol: 39, status: 'active' },
        { id: 'bigmax-13-3', name: 'Big Max 13 #3', oilCol: 43, waterCol: 44, gasCol: 45, status: 'active' },
        { id: 'bigmax-13-5', name: 'Big Max 13 #5', oilCol: 49, waterCol: 50, gasCol: 51, status: 'active' },
        { id: 'bigmax-14-4', name: 'Big Max 14 #4', oilCol: 55, waterCol: 56, gasCol: 57, status: 'active' },
        { id: 'bigmax-swd', name: 'Big Max 12-101 SWD', oilCol: 61, waterCol: 62, gasCol: 63, status: 'active', wellType: 'swd' }  // SWD well
    ],

    parse(workbook) {
        const result = {
            id: this.id,
            name: this.name,
            lastUpdated: new Date().toISOString(),
            wells: [],
            runTickets: [],
            rawRowCount: 0,
            batteryProduction: []  // No battery-level production for Big Max
        };

        if (workbook.Sheets['Well Test']) {
            const wellTestData = this.parseWellTestSheet(workbook.Sheets['Well Test']);
            result.wells = wellTestData.wells;
            result.rawRowCount = wellTestData.rowCount;
        }

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
            status: w.status || 'active',
            wellType: w.wellType || 'production',
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
                let oil = this.parseNumber(row[wellDef.oilCol]);
                let water = this.parseNumber(row[wellDef.waterCol]);
                let gas = this.parseNumber(row[wellDef.gasCol]);

                // Big Max 12-101 SWD has no oil/gas - the "oil" column is actually water
                if (wellDef.id === 'bigmax-swd') {
                    water = oil;  // What we thought was oil is actually water
                    oil = 0;      // No oil production for SWD well
                    gas = 0;      // No gas production for SWD well
                }

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

export default BigMaxParser;
