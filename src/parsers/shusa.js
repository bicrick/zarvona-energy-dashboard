/**
 * Shusa Gauge Sheet Parser
 * Expected file: Shusa Gauge Sheet.xlsx
 * Has two Well Test sheets with many wells
 * Note: Most wells only have OIL and WATER columns (no GAS)
 */

export const ShusaParser = {
    id: 'shusa',
    name: 'Shusa',
    expectedFileName: 'Shusa Gauge Sheet.xlsx',

    // Wells from Well Test 20 RB Link (4-column spacing: OIL, WATER, 2x monthly avg)
    // Note: Most wells do NOT have gas columns
    wells20RB: [
        { id: 'shusa-20-1', name: 'Shusa 20 #1', oilCol: 1, waterCol: 2, gasCol: null },
        { id: 'shusa-20-2', name: 'Shusa 20 #2', oilCol: 5, waterCol: 6, gasCol: null },
        { id: 'shusa-20-3', name: 'Shusa 20 #3', oilCol: 9, waterCol: 10, gasCol: null },
        { id: 'shusa-20-4', name: 'Shusa 20 #4', oilCol: 13, waterCol: 14, gasCol: null },
        { id: 'shusa-20-5', name: 'Shusa 20 #5', oilCol: 17, waterCol: 18, gasCol: null },
        { id: 'rosebud-20-1', name: 'Rosebud 20 #1', oilCol: 21, waterCol: 22, gasCol: null },
        { id: 'rosebud-20-3', name: 'Rosebud 20 #3', oilCol: 25, waterCol: 26, gasCol: null },
        { id: 'rosebud-20-4', name: 'Rosebud 20 #4', oilCol: 29, waterCol: 30, gasCol: null },
        { id: 'rosebud-yates-1', name: 'Rosebud-Yates #1', oilCol: 33, waterCol: 34, gasCol: 35 },  // Only well with gas in this sheet
        { id: 'link-2', name: 'Link #2', oilCol: 39, waterCol: 40, gasCol: null },
        { id: 'link-3', name: 'Link #3', oilCol: 43, waterCol: 44, gasCol: null },
        { id: 'link-4', name: 'Link #4', oilCol: 47, waterCol: 48, gasCol: null },
        { id: 'link-5', name: 'Link #5', oilCol: 51, waterCol: 52, gasCol: null },
        { id: 'link-6', name: 'Link #6', oilCol: 55, waterCol: 56, gasCol: null }
    ],

    productionConfig: {
        sheet: 'Total',
        headerRowIndex: 2,
        dateCol: 0,
        oilProdCol: 2,     // Oil Prod
        waterProdCol: 3,   // Water Prod
        gasProdCol: null   // No gas production in Total sheet
    },

    // Wells from Well Test 14 15 (4-column spacing: OIL, WATER, 2x monthly avg)
    // Note: None of these wells have gas columns
    wells1415: [
        // Shusa 14 series
        { id: 'shusa-14-1', name: 'Shusa 14 #1', oilCol: 4, waterCol: 5, gasCol: null },
        { id: 'shusa-14-2', name: 'Shusa 14 #2', oilCol: 8, waterCol: 9, gasCol: null },
        { id: 'shusa-14-3', name: 'Shusa 14 #3', oilCol: 12, waterCol: 13, gasCol: null },
        { id: 'shusa-14-4', name: 'Shusa 14 #4', oilCol: 16, waterCol: 17, gasCol: null },
        { id: 'shusa-14-5', name: 'Shusa 14 #5', oilCol: 20, waterCol: 21, gasCol: null },
        { id: 'shusa-14-6', name: 'Shusa 14 #6', oilCol: 24, waterCol: 25, gasCol: null },
        { id: 'shusa-14-7', name: 'Shusa 14 #7', oilCol: 28, waterCol: 29, gasCol: null },
        { id: 'shusa-14-8', name: 'Shusa 14 #8', oilCol: 32, waterCol: 33, gasCol: null },
        { id: 'shusa-14-9', name: 'Shusa 14 #9', oilCol: 36, waterCol: 37, gasCol: null },
        { id: 'shusa-14-10', name: 'Shusa 14 #10', oilCol: 40, waterCol: 41, gasCol: null },
        { id: 'shusa-14-12', name: 'Shusa 14 #12', oilCol: 44, waterCol: 45, gasCol: null },  // Note: #11 doesn't exist
        // Shusa 15 series
        { id: 'shusa-15-1', name: 'Shusa 15 #1', oilCol: 48, waterCol: 49, gasCol: null },
        { id: 'shusa-15-2', name: 'Shusa 15 #2', oilCol: 52, waterCol: 53, gasCol: null },  // Sheet shows "15 #2X" but user says same as 15 #2
        { id: 'shusa-15-3', name: 'Shusa 15 #3', oilCol: 56, waterCol: 57, gasCol: null },
        { id: 'shusa-15-4', name: 'Shusa 15 #4', oilCol: 60, waterCol: 61, gasCol: null },
        { id: 'shusa-15-6', name: 'Shusa 15 #6', oilCol: 64, waterCol: 65, gasCol: null },  // Note: #5 doesn't exist
        { id: 'shusa-15-7', name: 'Shusa 15 #7', oilCol: 68, waterCol: 69, gasCol: null },
        { id: 'shusa-15-8', name: 'Shusa 15 #8', oilCol: 72, waterCol: 73, gasCol: null },
        { id: 'shusa-15-9', name: 'Shusa 15 #9', oilCol: 76, waterCol: 77, gasCol: null },
        { id: 'shusa-15-10', name: 'Shusa 15 #10', oilCol: 80, waterCol: 81, gasCol: null },
        { id: 'shusa-15-11', name: 'Shusa 15 #11', oilCol: 84, waterCol: 85, gasCol: null },
        { id: 'shusa-15-12', name: 'Shusa 15 #12', oilCol: 88, waterCol: 89, gasCol: null },
        { id: 'shusa-15-13', name: 'Shusa 15 #13', oilCol: 92, waterCol: 93, gasCol: null },
        { id: 'shusa-15-14', name: 'Shusa 15 #14', oilCol: 96, waterCol: 97, gasCol: null },
        { id: 'shusa-15-15', name: 'Shusa 15 #15', oilCol: 100, waterCol: 101, gasCol: null },
        { id: 'shusa-15-16', name: 'Shusa 15 #16', oilCol: 104, waterCol: 105, gasCol: null }
    ],

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

        // Parse both well test sheets
        if (workbook.Sheets['Well Test 20 RB Link']) {
            const data = this.parseWellTestSheet(workbook.Sheets['Well Test 20 RB Link'], this.wells20RB);
            result.wells.push(...data.wells);
            result.rawRowCount = data.rowCount;
        }

        if (workbook.Sheets['Well Test 14 15']) {
            const data = this.parseWellTestSheet(workbook.Sheets['Well Test 14 15'], this.wells1415);
            result.wells.push(...data.wells);
        }

        // Parse battery-level production
        result.batteryProduction = this.parseBatteryProduction(workbook);

        // Parse run tickets from multiple sheets
        ['14-15 Run Tickets', '20-RB Run Tickets', 'Link Run Tickets', 'Yates Run Tickets'].forEach(sheetName => {
            if (workbook.Sheets[sheetName]) {
                const tickets = this.parseRunTicketsSheet(workbook.Sheets[sheetName]);
                result.runTickets.push(...tickets);
            }
        });

        result.runTickets.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        result.runTickets = result.runTickets.slice(0, 100);

        return result;
    },

    parseWellTestSheet(sheet, wellDefs) {
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });

        const wells = wellDefs.map(w => ({
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

            wellDefs.forEach((wellDef, idx) => {
                const oil = this.parseNumber(row[wellDef.oilCol]);
                const water = this.parseNumber(row[wellDef.waterCol]);
                // Only parse gas if the well has a gas column defined
                const gas = wellDef.gasCol !== null ? this.parseNumber(row[wellDef.gasCol]) : null;

                if (oil !== null || water !== null || gas !== null) {
                    wells[idx].wellTests.push({ date: dateStr, oil, water, gas });
                    wells[idx].production.push({ date: new Date(dateStr), oil, water, gas });
                }
            });
        }

        wells.forEach(well => {
            well.wellTests.sort((a, b) => new Date(b.date) - new Date(a.date));
            well.wellTests = well.wellTests.slice(0, 60);  // Increased from 20 to 60
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

        return tickets;
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

export default ShusaParser;
