/**
 * Fluid Level Sheet Parser
 * Expected file: West Texas Fluid Level Sheet.xlsx
 * Extracts fluid level readings for wells over time
 * 
 * Format Notes:
 * - Column A: Date
 * - Column C: Well Name
 * - Column E (SL): Stroke Length
 * - Column F (SPM): Strokes Per Minute
 * - Column G: Run Time
 * - Column P: Gas & Liquid Above Pump
 * - Column Q: Gas Free Liquid Above Pump (ft)
 * - Column R: Pump Intake Pressure
 * 
 * Each row represents one reading for one well on one date
 * Multiple readings per well over time (time-series data)
 */

export const FluidLevelParser = {
    id: 'fluid-level',
    name: 'Fluid Level Sheet',
    expectedFileName: 'West Texas Fluid Level Sheet.xlsx',

    /**
     * Normalize well name for matching with database wells
     * Handles variations in naming conventions between Excel and database
     */
    normalizeWellName(rawName) {
        if (!rawName) return '';
        
        let wellName = String(rawName).trim();
        
        // Remove "University" prefix when followed by specific battery names
        // E.g., "University7 Berkley#1" → "Berkley #1", "University 30 Cobra 3012" → "Cobra 3012"
        wellName = wellName.replace(/^University\s*\d*\s+(Berkley|Berkely|Cobra|Sawgrass|Pinnacle|FN)\s*/gi, '$1 ');
        
        // Fix common typos and naming variations
        wellName = wellName
            .replace(/BIG Max/gi, 'Big Max')       // Standardize Big Max casing
            .replace(/Universtiy/gi, 'University') // Fix typo
            .replace(/Univ\s+/gi, 'University ')   // Expand Univ to University
            .replace(/University\s+/gi, 'ULS ')    // Convert University to ULS (database uses ULS)
            .replace(/UL-CDU/gi, 'ULS')            // Alternate ULS naming
            .replace(/ULS CDU/gi, 'ULS')           // Alternate ULS naming
            .replace(/Shusua/gi, 'Shusa')          // Fix typo
            .replace(/Berkely/gi, 'Berkley')       // Fix typo (Berkely → Berkley)
            .replace(/\s+/g, ' ')                  // Normalize multiple spaces
            .trim();
        
        // For bare number patterns that might be Big Max wells
        // (e.g., "13-3" → "Big Max 13-3", "5-2" → "Big Max 5-2")
        // Only if it matches X-X pattern where X is 1-2 digits (NOT ending in H)
        if (/^\d{1,2}-\d{1,2}$/.test(wellName)) {
            wellName = `Big Max ${wellName}`;
        }
        
        // For University/ULS patterns that need "ULS" prefix:
        // Only add "ULS" to patterns like "1-3 1H", "1-3 3H" (1-3 series)
        // Do NOT add prefix to 1-30, 1-31, 1-36, 1-37 series (stored without prefix)
        if (/^1-3\s+\d*[Hh]$/i.test(wellName)) {
            // Pattern: "1-3 1H" → "ULS 1-3 1H"
            wellName = wellName.replace(/^1-3\s+/i, 'ULS 1-3-');
        }
        
        return wellName;
    },

    parse(workbook) {
        const result = {
            id: this.id,
            name: this.name,
            lastUpdated: new Date().toISOString(),
            readings: [],
            rawRowCount: 0
        };

        // Try to find the correct sheet
        // Common sheet names: 'Sheet1', 'Fluid Levels', 'Data', etc.
        let sheet = null;
        const sheetNames = workbook.SheetNames;
        
        // Try common sheet names
        const possibleNames = ['Sheet1', 'Fluid Levels', 'Data', 'Fluid Level', 'Sheet'];
        for (const name of possibleNames) {
            if (sheetNames.includes(name)) {
                sheet = workbook.Sheets[name];
                break;
            }
        }
        
        // If not found, use the first sheet
        if (!sheet && sheetNames.length > 0) {
            sheet = workbook.Sheets[sheetNames[0]];
        }
        
        if (!sheet) {
            console.error('No valid sheet found in Fluid Level file');
            return result;
        }

        const range = XLSX.utils.decode_range(sheet['!ref']);
        
        // Column indices (0-based)
        const COL_DATE = 0;           // Column A
        const COL_WELL_NAME = 2;      // Column C
        const COL_STROKE_LENGTH = 4;  // Column E
        const COL_SPM = 5;            // Column F
        const COL_RUN_TIME = 6;       // Column G
        const COL_GAS_LIQUID = 15;    // Column P
        const COL_GAS_FREE = 16;      // Column Q
        const COL_PUMP_INTAKE = 17;   // Column R

        // Filter to 2025+ data
        const filterDate = new Date('2025-01-01');
        
        // Parse data rows (assuming row 0 is header, data starts at row 1)
        for (let row = 1; row <= range.e.r; row++) {
            // Get date
            const dateCell = sheet[XLSX.utils.encode_cell({ r: row, c: COL_DATE })];
            if (!dateCell || !dateCell.v) {
                continue; // Skip rows without dates
            }

            let date;
            if (dateCell.t === 'n') {
                // Excel date number
                date = XLSX.SSF.parse_date_code(dateCell.v);
                date = new Date(date.y, date.m - 1, date.d);
            } else if (dateCell.t === 'd') {
                // Date object
                date = new Date(dateCell.v);
            } else {
                // Try parsing as string
                date = new Date(dateCell.v);
            }

            // Filter to 2025+
            if (!date || isNaN(date.getTime()) || date < filterDate) {
                continue;
            }

            // Get well name
            const wellNameCell = sheet[XLSX.utils.encode_cell({ r: row, c: COL_WELL_NAME })];
            if (!wellNameCell || !wellNameCell.v) {
                continue; // Skip rows without well names
            }

            const rawWellName = String(wellNameCell.v).trim();
            if (!rawWellName) {
                continue;
            }

            // Normalize the well name to match database conventions
            const wellName = this.normalizeWellName(rawWellName);
            if (!wellName) {
                continue;
            }

            result.rawRowCount++;

            // Extract all fluid level data
            const reading = {
                wellName: wellName,
                rawWellName: rawWellName,  // Keep original for debugging
                date: date.toISOString(),
                strokeLength: this.getCellValue(sheet, row, COL_STROKE_LENGTH),
                spm: this.getCellValue(sheet, row, COL_SPM),
                runTime: this.getCellValue(sheet, row, COL_RUN_TIME),
                gasLiquidLevel: this.getCellValue(sheet, row, COL_GAS_LIQUID),
                gasFreeLevel: this.getCellValue(sheet, row, COL_GAS_FREE),
                pumpIntakePressure: this.getCellValue(sheet, row, COL_PUMP_INTAKE)
            };

            result.readings.push(reading);
        }

        console.log(`Parsed ${result.readings.length} fluid level readings from ${result.rawRowCount} total rows (2025+)`);
        return result;
    },

    getCellValue(sheet, row, col) {
        const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
        const cell = sheet[cellAddress];
        
        if (!cell || cell.v === undefined || cell.v === null || cell.v === '') {
            return null;
        }
        
        // Convert to number if it's numeric
        const value = cell.v;
        if (typeof value === 'number') {
            return value;
        }
        
        // Try to parse as number
        const parsed = parseFloat(value);
        if (!isNaN(parsed)) {
            return parsed;
        }
        
        // Return as string if not a number
        return String(value);
    }
};
