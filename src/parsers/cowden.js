/**
 * Cowden Gauge Sheet Parser
 * Expected file: Cowden Gauge Sheet1.xlsx
 * Sheets: Cowden, Run Tickets, Well Test, Graphs
 * Wells: Cowden 601H, Cowden 602H, Angus 7-18-1H
 */

export const CowdenParser = {
    id: 'cowden',
    name: 'Cowden',
    expectedFileName: 'Cowden Gauge Sheet1.xlsx',

    // Well definitions with their column positions in Well Test sheet
    wells: [
        { id: '601h', name: 'Cowden 601H', oilCol: 1, waterCol: 2, gasCol: 3 },
        { id: '602h', name: 'Cowden 602H', oilCol: 7, waterCol: 8, gasCol: 9 },
        { id: 'angus', name: 'Angus 7-18-1H', oilCol: 13, waterCol: 14, gasCol: 15 }
    ],
    pressureConfig: {
        sheet: 'Cowden',
        headerRowIndex: 6,
        dateCol: 0,
        wells: {
            '601h': { csg: 28, tbg: 29, fl: 30, inj: 31 },
            '602h': { csg: 33, tbg: 34, fl: 35, inj: 40 },
            'angus': { csg: 42, tbg: 43, fl: 44, inj: 47 }
        }
    },

    /**
     * Parse the uploaded workbook
     * @param {Object} workbook - SheetJS workbook object
     * @returns {Object} Parsed data structure
     */
    parse(workbook) {
        const result = {
            id: this.id,
            name: this.name,
            lastUpdated: new Date().toISOString(),
            wells: [],
            runTickets: [],
            rawRowCount: 0
        };

        // Parse Well Test sheet
        if (workbook.Sheets['Well Test']) {
            const wellTestData = this.parseWellTestSheet(workbook.Sheets['Well Test']);
            result.wells = wellTestData.wells;
            result.rawRowCount = wellTestData.rowCount;
        }

        if (result.wells.length > 0) {
            this.applyPressureReadings(workbook, result.wells);
        }

        // Parse Run Tickets sheet
        if (workbook.Sheets['Run Tickets']) {
            result.runTickets = this.parseRunTicketsSheet(workbook.Sheets['Run Tickets']);
        }

        return result;
    },

    /**
     * Parse the Well Test sheet
     */
    parseWellTestSheet(sheet) {
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });

        // Initialize wells
        const wells = this.wells.map(w => ({
            id: w.id,
            name: w.name,
            status: 'active',
            wellTests: [],
            production: [],
            chemicalProgram: {
                continuous: { rate: null, chems: '-', ppm: null },
                truckTreat: { rate: null, chems: '-', ppm: null }
            },
            failureHistory: [],
            pressureReadings: [],
            actionItems: []
        }));

        // Data starts at row 4 (0-indexed)
        let rowCount = 0;
        for (let i = 4; i < data.length; i++) {
            const row = data[i];
            if (!row || !row[0]) continue;

            // Parse date from column 0
            const dateVal = row[0];
            let dateStr = null;

            if (dateVal instanceof Date) {
                dateStr = dateVal.toISOString().split('T')[0];
            } else if (typeof dateVal === 'number') {
                // Excel serial date
                const date = XLSX.SSF.parse_date_code(dateVal);
                if (date) {
                    dateStr = `${date.y}-${String(date.m).padStart(2, '0')}-${String(date.d).padStart(2, '0')}`;
                }
            } else if (typeof dateVal === 'string') {
                dateStr = dateVal.split(' ')[0];
            }

            if (!dateStr) continue;
            rowCount++;

            // Extract data for each well
            this.wells.forEach((wellDef, idx) => {
                const oil = this.parseNumber(row[wellDef.oilCol]);
                const water = this.parseNumber(row[wellDef.waterCol]);
                const gas = this.parseNumber(row[wellDef.gasCol]);

                // Only add if at least one value exists
                if (oil !== null || water !== null || gas !== null) {
                    wells[idx].wellTests.push({
                        date: dateStr,
                        oil: oil,
                        water: water,
                        gas: gas
                    });

                    // Also add to production (oil, water, gas for charts)
                    wells[idx].production.push({
                        date: new Date(dateStr),
                        oil: oil,
                        water: water,
                        gas: gas
                    });
                }
            });
        }

        // Sort well tests (most recent first) and production (chronological)
        wells.forEach(well => {
            well.wellTests.sort((a, b) => new Date(b.date) - new Date(a.date));
            well.wellTests = well.wellTests.slice(0, 60);  // Increased from 20 to 60
            well.production.sort((a, b) => a.date - b.date);
        });

        return { wells, rowCount };
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

    /**
     * Parse the Run Tickets sheet
     */
    parseRunTicketsSheet(sheet) {
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
        const tickets = [];

        // Data starts at row 3 (0-indexed)
        for (let i = 3; i < data.length; i++) {
            const row = data[i];
            if (!row) continue;

            // Ticket # is in column 1
            const ticketNum = row[1];
            if (!ticketNum) continue;

            // Parse date from column 0 (may be empty for continuation rows)
            let dateStr = null;
            const dateVal = row[0];

            if (dateVal) {
                if (dateVal instanceof Date) {
                    dateStr = dateVal.toISOString().split('T')[0];
                } else if (typeof dateVal === 'number') {
                    const date = XLSX.SSF.parse_date_code(dateVal);
                    if (date) {
                        dateStr = `${date.y}-${String(date.m).padStart(2, '0')}-${String(date.d).padStart(2, '0')}`;
                    }
                } else if (typeof dateVal === 'string' && dateVal.trim()) {
                    dateStr = dateVal.split(' ')[0];
                }
            }

            tickets.push({
                date: dateStr,
                ticketNum: String(ticketNum),
                tank: this.parseNumber(row[2]),
                ftTop: this.parseNumber(row[3]),
                inTop: this.parseNumber(row[4]),
                ftBttm: this.parseNumber(row[5]),
                inBttm: this.parseNumber(row[6]),
                calcVol: this.parseNumber(row[7]),
                vol: this.parseNumber(row[8]),
                gravity: this.parseNumber(row[9]),
                bsw: this.parseNumber(row[10])
            });
        }

        // Sort by date (most recent first) and limit
        tickets.sort((a, b) => {
            if (!a.date && !b.date) return 0;
            if (!a.date) return 1;
            if (!b.date) return -1;
            return new Date(b.date) - new Date(a.date);
        });

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

    /**
     * Parse a number from cell value
     */
    parseNumber(val) {
        if (val === null || val === undefined || val === '') return null;
        const num = parseFloat(val);
        if (isNaN(num)) return null;
        return num < 0 ? 0 : num;
    }
};

export default CowdenParser;
