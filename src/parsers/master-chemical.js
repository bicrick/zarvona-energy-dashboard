/**
 * Master Chemical Sheet Parser
 * Expected file: Master Chemical Sheet.xlsx
 * Extracts chemical program data for all wells
 */

export const MasterChemicalParser = {
    id: 'master-chemical',
    name: 'Master Chemical Sheet',
    expectedFileName: 'Master Chemical Sheet.xlsx',

    // Chemical columns grouped by type
    truckTreatingChemicals: [
        'WCI2010s', 'PPM', 'OPS 2538', 'SP3', 'CI2356 Pellets', 
        'CAT 222EB', 'WWT 1954', 'CS-6248', 'CW-679', 'ASF-376', 
        'CS-6248GL', 'SI-415', 'PPM.1'
    ],
    
    continuousChemicals: [
        'WCI2010s.1', 'CW-1224', 'TSN-516', 'PPM.2'
    ],

    parse(workbook) {
        const result = {
            id: this.id,
            name: this.name,
            lastUpdated: new Date().toISOString(),
            chemicalPrograms: [],
            rawRowCount: 0
        };

        const sheet = workbook.Sheets['Sheet1'];
        if (!sheet) {
            console.error('Sheet1 not found in Master Chemical Sheet');
            return result;
        }

        const data = this.parseChemicalSheet(sheet);
        result.chemicalPrograms = data.programs;
        result.rawRowCount = data.rowCount;

        return result;
    },

    parseChemicalSheet(sheet) {
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const programs = [];
        let rowCount = 0;

        // Header is at row 1 (0-indexed), data starts at row 2
        const headerRow = 1;
        
        // Extract column headers and handle duplicates (like pandas does)
        const headers = {};  // col -> header name
        const colIndices = {};  // header name -> col index
        const headerCounts = {};  // track occurrences of each header name
        
        for (let col = range.s.c; col <= range.e.c; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: headerRow, c: col });
            const cell = sheet[cellAddress];
            if (cell && cell.v) {
                let headerName = String(cell.v).trim();
                
                // Handle duplicate headers by appending .1, .2, etc (like pandas)
                if (colIndices[headerName] !== undefined) {
                    // This header already exists, need to add suffix
                    let suffix = 1;
                    let newHeaderName = headerName + '.' + suffix;
                    while (colIndices[newHeaderName] !== undefined) {
                        suffix++;
                        newHeaderName = headerName + '.' + suffix;
                    }
                    headerName = newHeaderName;
                }
                
                headers[col] = headerName;
                colIndices[headerName] = parseInt(col);
            }
        }

        // Data starts at row 2 (0-indexed)
        for (let row = headerRow + 1; row <= range.e.r; row++) {
            const wellNameCell = sheet[XLSX.utils.encode_cell({ r: row, c: colIndices['Well Name'] })];
            
            if (!wellNameCell || !wellNameCell.v) {
                continue; // Skip empty rows
            }

            const wellName = String(wellNameCell.v).trim();
            rowCount++;

            // Extract test data
            const testData = {
                oil: this.getCellValue(sheet, row, colIndices['Oil']),
                water: this.getCellValue(sheet, row, colIndices['Water']),
                total: this.getCellValue(sheet, row, colIndices['Total'])
            };

            // Extract truck treating chemicals
            const truckTreating = {};
            for (const chemName of this.truckTreatingChemicals) {
                if (colIndices[chemName] !== undefined) {
                    const value = this.getCellValue(sheet, row, colIndices[chemName]);
                    if (value !== null && value !== undefined && !isNaN(value)) {
                        truckTreating[chemName] = Number(value);
                    }
                }
            }

            // Extract continuous chemicals
            const continuous = {};
            for (const chemName of this.continuousChemicals) {
                if (colIndices[chemName] !== undefined) {
                    const value = this.getCellValue(sheet, row, colIndices[chemName]);
                    if (value !== null && value !== undefined && !isNaN(value)) {
                        continuous[chemName] = Number(value);
                    }
                }
            }

            // Only add program if there's chemical data
            if (Object.keys(truckTreating).length > 0 || Object.keys(continuous).length > 0) {
                programs.push({
                    wellName: wellName,
                    batteryName: this.extractBatteryName(wellName),
                    testData: testData,
                    truckTreating: truckTreating,
                    continuous: continuous
                });
            }
        }

        return { programs, rowCount };
    },

    getCellValue(sheet, row, col) {
        if (col === undefined) return null;
        
        const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
        const cell = sheet[cellAddress];
        
        if (!cell || cell.v === undefined || cell.v === null || cell.v === '') {
            return null;
        }
        
        return cell.v;
    },

    extractBatteryName(wellName) {
        // Extract battery/field name from well name
        // e.g., "Shusa 14-1" -> "Shusa"
        // e.g., "Big Max 1-1" -> "Big Max"
        const parts = wellName.split(/\s+/);
        
        // Handle multi-word battery names
        const numericPattern = /\d/;
        const batteryParts = [];
        
        for (const part of parts) {
            if (numericPattern.test(part)) {
                break; // Stop at first part with numbers
            }
            batteryParts.push(part);
        }
        
        return batteryParts.join(' ') || wellName;
    }
};
