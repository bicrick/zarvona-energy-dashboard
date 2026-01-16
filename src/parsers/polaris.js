/**
 * Polaris Gauge Sheet Parser
 * Expected file: Polaris Gauge Sheet.xlsx
 * Wells: Polaris #1, Polaris #2 (also has Lepus 1 sheet)
 */

export const PolarisParser = {
    id: 'polaris',
    name: 'Polaris',
    expectedFileName: 'Polaris Gauge Sheet.xlsx',

    // Wells from Well Test (4-column spacing, different from standard)
    // Note: Well Test sheet does NOT have gas columns - col 3 is "24HR Monthly Avg Oil", not gas
    wells: [
        { id: 'polaris-1', name: 'Polaris #1', oilCol: 1, waterCol: 2, gasCol: null, status: 'active' },
        { id: 'polaris-2', name: 'Polaris #2', oilCol: 5, waterCol: 6, gasCol: null, status: 'inactive' }  // Inactive per user
    ],
    productionConfig: {
        sheet: 'Polaris 1',
        headerRowIndex: 3,
        dateCol: 0,
        oilProdCol: 16,
        waterProdCol: 17,
        gasProdCol: 14,  // Gas meter column (cumulative MCF)
        gasMeterType: 'cumulative'  // Calculate daily production from meter differences
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
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // First pass: collect all data with meter readings
        const rawData = [];
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
            const gasMeter = config.gasProdCol !== null ? this.parseNumber(row[config.gasProdCol]) : null;

            rawData.push({
                date: new Date(dateStr),
                oil: oil,
                water: water,
                gasMeter: gasMeter
            });
        }

        // Sort by date
        rawData.sort((a, b) => a.date - b.date);

        // Second pass: calculate gas production from meter differences
        for (let i = 0; i < rawData.length; i++) {
            const current = rawData[i];
            let gas = null;

            // If we have a cumulative gas meter, calculate daily production
            if (config.gasMeterType === 'cumulative' && current.gasMeter !== null && i > 0) {
                const previous = rawData[i - 1];
                if (previous.gasMeter !== null) {
                    const diff = current.gasMeter - previous.gasMeter;
                    // Only use positive differences (ignore meter resets or no change)
                    if (diff > 0) {
                        gas = diff;
                    }
                }
            } else if (config.gasMeterType !== 'cumulative') {
                // Direct daily production value
                gas = current.gasMeter;
            }

            if (current.oil !== null || current.water !== null || gas !== null) {
                production.push({
                    date: current.date,
                    oil: current.oil,
                    water: current.water,
                    gas: gas
                });
            }
        }

        return production;
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

export default PolarisParser;
