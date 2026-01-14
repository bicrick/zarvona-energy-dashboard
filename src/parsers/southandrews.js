/**
 * South Andrews Gauge Sheet Parser
 * Expected file: South Andrews Gauge Sheet.xlsm
 * Has two Well Test sheets: pg1 and pg2
 */

export const SouthAndrewsParser = {
    id: 'southandrews',
    name: 'South Andrews',
    expectedFileName: 'South Andrews Gauge Sheet.xlsm',

    // Wells from Well Test pg1 (6-column spacing)
    wellsPg1: [
        { id: 'uls-1-30-6h', name: '1-30-6H', oilCol: 1, waterCol: 2, gasCol: 3 },
        { id: 'uls-1-30-8h', name: '1-30-8H', oilCol: 7, waterCol: 8, gasCol: 9 },
        { id: 'uls-1-31-2h', name: '1-31-2H', oilCol: 13, waterCol: 14, gasCol: 15 },
        { id: 'uls-1-36-1h', name: '1-36-1H', oilCol: 19, waterCol: 20, gasCol: 21 },
        { id: 'uls-1-36-2h', name: '1-36-2H', oilCol: 25, waterCol: 26, gasCol: 27 },
        { id: 'uls-1-36-3h', name: '1-36-3H', oilCol: 31, waterCol: 32, gasCol: 33 },
        { id: 'uls-1-36-4h', name: '1-36-4H', oilCol: 37, waterCol: 38, gasCol: 39 },
        { id: 'uls-1-36-5h', name: '1-36-5H', oilCol: 43, waterCol: 44, gasCol: 45 },
        { id: 'uls-1-36-6h', name: '1-36-6H', oilCol: 49, waterCol: 50, gasCol: 51 },
        { id: 'uls-1-37-1h', name: '1-37-1H', oilCol: 55, waterCol: 56, gasCol: 57 },
        { id: 'uls-1-37-3h', name: '1-37-3H', oilCol: 61, waterCol: 62, gasCol: 63 },
        { id: 'uls-1-37-4h', name: '1-37-4H', oilCol: 67, waterCol: 68, gasCol: 69 },
        { id: 'uls-1-37-6h', name: '1-37-6H', oilCol: 73, waterCol: 74, gasCol: 75 }
    ],

    // Wells from Well Test pg2
    wellsPg2: [
        { id: 'cobra-5h', name: 'Cobra 5H', oilCol: 1, waterCol: 2, gasCol: 3, status: 'active' },
        { id: 'cobra-3012', name: 'Cobra 3012', oilCol: 7, waterCol: 8, gasCol: 9, status: 'active' },
        { id: 'cobra-3033', name: 'Cobra 3033', oilCol: 13, waterCol: 14, gasCol: 15, status: 'active' },
        { id: 'fn-3731', name: 'FN 3731', oilCol: 19, waterCol: 20, gasCol: 21, status: 'active' },
        { id: 'pinnacle-1', name: 'Pinnacle #1', oilCol: 25, waterCol: 26, gasCol: 27, status: 'active' },
        { id: 'pinnacle-2h', name: 'Pinnacle 2H', oilCol: 31, waterCol: 32, gasCol: 33, status: 'active' },
        { id: 'sawgrass-2h', name: 'Sawgrass 2H', oilCol: 37, waterCol: 38, gasCol: 39, status: 'inactive' },  // Inactive per user
        { id: 'sawgrass-5h', name: 'Sawgrass 5H', oilCol: 43, waterCol: 44, gasCol: 45, status: 'active' }
    ],

    pressureConfig: [
        {
            sheet: '36-4H',
            headerRowIndex: 8,
            dateCol: 0,
            wells: {
                'uls-1-36-1h': { csg: 61, tbg: 62, fl: 63, inj: 64 },
                'uls-1-36-2h': { csg: 68, tbg: 69, fl: 70, inj: 71 },
                'uls-1-36-3h': { csg: 73, tbg: 74, fl: 75, inj: 76 },
                'uls-1-36-4h': { csg: 78, tbg: 79, fl: 80, inj: 81 },
                'uls-1-36-5h': { csg: 86, tbg: 87, fl: 88, inj: 89 },
                'uls-1-36-6h': { csg: 91, tbg: 92, fl: 93, inj: 94 },
                'uls-1-37-1h': { csg: 96, tbg: 97, fl: 98, inj: 99 },
                'uls-1-37-3h': { csg: 101, tbg: 102, fl: 103, inj: 104 }
            }
        },
        {
            sheet: '37-6H',
            headerRowIndex: 8,
            dateCol: 0,
            wells: {
                'uls-1-31-2h': { csg: 34, tbg: 35, fl: 36, inj: 37 },
                'uls-1-37-4h': { csg: 39, tbg: 40, fl: 41, inj: 42 },
                'uls-1-37-6h': { csg: 44, tbg: 45, fl: 46, inj: 47 },
                'uls-1-30-6h': { csg: 49, tbg: 50, fl: 51, inj: 52 },
                'uls-1-30-8h': { csg: 54, tbg: 55, fl: 56, inj: 57 }
            }
        }
    ],

    parse(workbook) {
        const result = {
            id: this.id,
            name: this.name,
            lastUpdated: new Date().toISOString(),
            wells: [],
            runTickets: [],
            rawRowCount: 0
        };

        // Parse both well test pages
        if (workbook.Sheets['Well Test pg1']) {
            const pg1Data = this.parseWellTestSheet(workbook.Sheets['Well Test pg1'], this.wellsPg1);
            result.wells.push(...pg1Data.wells);
            result.rawRowCount = pg1Data.rowCount;
        }

        if (workbook.Sheets['Well Test pg2']) {
            const pg2Data = this.parseWellTestSheet(workbook.Sheets['Well Test pg2'], this.wellsPg2);
            result.wells.push(...pg2Data.wells);
        }

        if (result.wells.length > 0) {
            this.applyPressureReadings(workbook, result.wells);
        }

        // Parse run tickets from multiple sheets
        ['36-4H Tickets', '37-6H Tickets', '36 6H Tickets'].forEach(sheetName => {
            if (workbook.Sheets[sheetName]) {
                const tickets = this.parseRunTicketsSheet(workbook.Sheets[sheetName]);
                result.runTickets.push(...tickets);
            }
        });

        // Sort and limit run tickets
        result.runTickets.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        result.runTickets = result.runTickets.slice(0, 100);

        return result;
    },

    parseWellTestSheet(sheet, wellDefs) {
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });

        const wells = wellDefs.map(w => ({
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

            wellDefs.forEach((wellDef, idx) => {
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

        return tickets;
    },

    applyPressureReadings(workbook, wells) {
        const wellsById = {};
        wells.forEach(well => {
            wellsById[well.id] = well;
            well.pressureReadings = [];
        });

        const readingsByWell = {};
        Object.keys(wellsById).forEach(id => {
            readingsByWell[id] = [];
        });

        this.pressureConfig.forEach(config => {
            const sheet = workbook.Sheets[config.sheet];
            if (!sheet) return;

            const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
            if (!data || data.length === 0) return;

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
        });

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

export default SouthAndrewsParser;
