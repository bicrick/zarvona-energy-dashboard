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
        { id: 'bigmax-14-4', name: 'Big Max 14 #4', oilCol: 55, waterCol: 56, gasCol: 57, status: 'active' }
    ],
    productionConfig: {
        sheet: 'Total',
        headerRowIndex: 6,
        dateCol: 0,
        oilProdCol: 1,
        waterProdCol: 3,
        gasProdCol: 2
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
        const today = new Date();
        today.setHours(0, 0, 0, 0);

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
            
            // Skip future dates
            const rowDate = new Date(dateStr);
            if (rowDate > today) continue;
            
            rowCount++;

            this.wells.forEach((wellDef, idx) => {
                let oil = this.parseNumber(row[wellDef.oilCol]);
                let water = this.parseNumber(row[wellDef.waterCol]);
                let gas = this.parseNumber(row[wellDef.gasCol]);

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
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 3; i < data.length; i++) {
            const row = data[i];
            if (!row || !row[1]) continue;

            const dateStr = this.parseDate(row[0]);
            
            // Skip future dates
            if (dateStr) {
                const ticketDate = new Date(dateStr);
                if (ticketDate > today) continue;
            }

            tickets.push({
                date: dateStr,
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

    parseBatteryProduction(workbook) {
        const config = this.productionConfig;
        if (!config) return [];
        const sheet = workbook.Sheets[config.sheet];
        if (!sheet) return [];

        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
        if (!data || data.length === 0) return [];

        const production = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = config.headerRowIndex + 2; i < data.length; i++) {
            const row = data[i];
            if (!row) continue;
            const dateStr = this.parseDate(row[config.dateCol]);
            if (!dateStr) continue;

            // Skip future dates
            const prodDate = new Date(dateStr);
            if (prodDate > today) continue;

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

    parseDate(val) {
        if (!val) return null;
        if (val instanceof Date) {
            const year = val.getFullYear();
            const month = String(val.getMonth() + 1).padStart(2, '0');
            const day = String(val.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
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
