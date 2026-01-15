/**
 * MW-Wemac-Sabrina-Berkley Gauge Sheet Parser
 * Expected file: Mw-Wemac-Sabrina-Berkley.xlsx
 * Wells: Berkley #1, #4, #5, #6, Sabrina #5
 */

export const MWWemacParser = {
    id: 'mwwemac',
    name: 'MW-Wemac-Sabrina-Berkley',
    expectedFileName: 'Mw-Wemac-Sabrina-Berkley.xlsx',

    // Wells from Well_Test sheet (6-column spacing, no "24HR Test" suffix)
    // Note: Many wells in this battery are inactive per user
    wells: [
        { id: 'berkley-1', name: 'Berkley #1', oilCol: 1, waterCol: 2, gasCol: 3, status: 'active' },
        { id: 'berkley-4', name: 'Berkley #4', oilCol: 7, waterCol: 8, gasCol: 9, status: 'inactive' },  // Inactive per user
        { id: 'berkley-5', name: 'Berkley #5', oilCol: 13, waterCol: 14, gasCol: 15, status: 'active' },
        { id: 'berkley-6', name: 'Berkley #6', oilCol: 19, waterCol: 20, gasCol: 21, status: 'active' },
        { id: 'sabrina-5', name: 'Sabrina #5', oilCol: 25, waterCol: 26, gasCol: 27, status: 'inactive' },  // Inactive per user
        { id: 'sabrina-7', name: 'Sabrina #7', oilCol: 31, waterCol: 32, gasCol: 33, status: 'inactive' },  // Inactive per user
        { id: 'sabrina-3', name: 'Sabrina #3', oilCol: 37, waterCol: 38, gasCol: 39, status: 'inactive' },  // Inactive per user
        { id: 'sabrina-12', name: 'Sabrina #12', oilCol: 43, waterCol: 44, gasCol: 45, status: 'inactive' }  // Inactive per user
    ],
    productionConfig: {
        sheet: 'Berkley',
        headerRowIndex: 3,
        dateCol: 0,
        oilProdCol: 25,
        waterProdCol: 26,
        gasProdCol: 27
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

        if (workbook.Sheets['Well_Test']) {
            const wellTestData = this.parseWellTestSheet(workbook.Sheets['Well_Test']);
            result.wells = wellTestData.wells;
            result.rawRowCount = wellTestData.rowCount;
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

export default MWWemacParser;
