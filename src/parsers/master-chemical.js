/**
 * Master Chemical Sheet Parser
 * Expected file: Master Chemical Sheet.xlsx
 * Extracts chemical program data for all wells
 * 
 * Format Notes:
 * - New format (Jan 2026): 
 *   - Sheet name: 'MASTER SHEET' (all caps)
 *   - Row 1: Category headers (Truck Treating, Continuous)
 *   - Row 2: Chemical names
 *   - Row 3+: Well data
 *   - Column A: Well names
 *   - No Oil/Water/Total test data columns
 * - Truck Treating chemicals: CW-1224, CO-634, TSN-516, WCI2010s, SP3, CAT222EB, WWT1954, CI Pellets
 * - Continuous chemicals: ASF-376, SI-415, CS-6248GL, CS-6248, CW-679, WCI2010s, CAT222EB
 */

export const MasterChemicalParser = {
    id: 'master-chemical',
    name: 'Master Chemical Sheet',
    expectedFileName: 'Master Chemical Sheet.xlsx',

    parse(workbook) {
        const result = {
            id: this.id,
            name: this.name,
            lastUpdated: new Date().toISOString(),
            chemicalPrograms: [],
            rawRowCount: 0
        };

        // Try new format first (MASTER SHEET)
        let sheet = workbook.Sheets['MASTER SHEET'];
        if (sheet) {
            const data = this.parseNewFormat(sheet);
            result.chemicalPrograms = data.programs;
            result.rawRowCount = data.rowCount;
            return result;
        }

        // Fall back to old format (Sheet1)
        sheet = workbook.Sheets['Sheet1'];
        if (sheet) {
            const data = this.parseOldFormat(sheet);
            result.chemicalPrograms = data.programs;
            result.rawRowCount = data.rowCount;
            return result;
        }

        console.error('No valid sheet found in Master Chemical Sheet (tried MASTER SHEET and Sheet1)');
        return result;
    },

    parseNewFormat(sheet) {
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const programs = [];
        let rowCount = 0;

        // Row 0: Category headers (Truck Treating, Continuous)
        // Row 1: Chemical names
        // Row 2+: Well data
        
        // Build column mapping: col index -> {category, chemicalName}
        const columnMap = {};
        
        for (let col = range.s.c; col <= range.e.c; col++) {
            const categoryCell = sheet[XLSX.utils.encode_cell({ r: 0, c: col })];
            const chemNameCell = sheet[XLSX.utils.encode_cell({ r: 1, c: col })];
            
            if (chemNameCell && chemNameCell.v) {
                const chemName = String(chemNameCell.v).trim();
                
                // Find category by looking backwards for non-empty category cell
                let category = null;
                if (categoryCell && categoryCell.v) {
                    category = String(categoryCell.v).trim();
                } else {
                    // Look backwards for the category header (handles merged cells)
                    for (let prevCol = col - 1; prevCol >= range.s.c; prevCol--) {
                        const prevCategoryCell = sheet[XLSX.utils.encode_cell({ r: 0, c: prevCol })];
                        if (prevCategoryCell && prevCategoryCell.v) {
                            category = String(prevCategoryCell.v).trim();
                            break;
                        }
                    }
                }
                
                columnMap[col] = {
                    chemicalName: chemName,
                    category: category,
                    isTruckTreating: category && category.includes('Truck Treating'),
                    isContinuous: category && category.includes('Continuous')
                };
            }
        }

        // Find Well Name column (should be column A, row 1)
        const wellNameCol = range.s.c; // Column A (0)
        
        // Parse data rows (starting from row 2, which is index 2)
        for (let row = 2; row <= range.e.r; row++) {
            const wellNameCell = sheet[XLSX.utils.encode_cell({ r: row, c: wellNameCol })];
            
            if (!wellNameCell || !wellNameCell.v) {
                continue; // Skip empty rows
            }

            const wellName = String(wellNameCell.v).trim();
            rowCount++;

            // Extract chemicals by category
            const truckTreating = {};
            const continuous = {};
            
            for (let col = range.s.c; col <= range.e.c; col++) {
                if (!columnMap[col]) continue;
                
                const value = this.getCellValue(sheet, row, col);
                if (value !== null && value !== undefined && !isNaN(value) && value !== 0) {
                    const { chemicalName, isTruckTreating, isContinuous } = columnMap[col];
                    
                    if (isTruckTreating) {
                        // Handle duplicate chemical names by appending .1, .2, etc
                        let finalName = chemicalName;
                        let suffix = 1;
                        while (truckTreating[finalName] !== undefined) {
                            finalName = chemicalName + '.' + suffix;
                            suffix++;
                        }
                        truckTreating[finalName] = Number(value);
                    } else if (isContinuous) {
                        // Handle duplicate chemical names by appending .1, .2, etc
                        let finalName = chemicalName;
                        let suffix = 1;
                        while (continuous[finalName] !== undefined) {
                            finalName = chemicalName + '.' + suffix;
                            suffix++;
                        }
                        continuous[finalName] = Number(value);
                    }
                }
            }

            // Only add program if there's chemical data
            if (Object.keys(truckTreating).length > 0 || Object.keys(continuous).length > 0) {
                programs.push({
                    wellName: wellName,
                    batteryName: this.extractBatteryName(wellName),
                    testData: {}, // No test data in new format
                    truckTreating: truckTreating,
                    continuous: continuous
                });
            }
        }

        return { programs, rowCount };
    },

    parseOldFormat(sheet) {
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const programs = [];
        let rowCount = 0;

        // Header is at row 1 (0-indexed), data starts at row 2
        const headerRow = 1;
        
        // Extract column headers and handle duplicates (like pandas does)
        const headers = {};  // col -> header name
        const colIndices = {};  // header name -> col index
        
        for (let col = range.s.c; col <= range.e.c; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: headerRow, c: col });
            const cell = sheet[cellAddress];
            if (cell && cell.v) {
                let headerName = String(cell.v).trim();
                
                // Handle duplicate headers by appending .1, .2, etc (like pandas)
                if (colIndices[headerName] !== undefined) {
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

        // Old format chemical lists
        const truckTreatingChemicals = [
            'WCI2010s', 'SP3', 'CI Pellets', 'CAT222EB', 'WWT1954', 
            'CS-6248', 'CW-679', 'ASF-376', 'CS-6248GL', 'SI-415',
            'CO-634', 'CAT222EB.1',
            'PPM', 'OPS 2538', 'CI2356 Pellets', 'CAT 222EB', 'WWT 1954', 'PPM.1'
        ];
        
        const continuousChemicals = [
            'WCI2010s.1', 'CW-1224', 'TSN-516', 'PPM.2'
        ];

        // Data starts at row 2 (0-indexed)
        for (let row = headerRow + 1; row <= range.e.r; row++) {
            const wellNameCell = sheet[XLSX.utils.encode_cell({ r: row, c: colIndices['Well Name'] })];
            
            if (!wellNameCell || !wellNameCell.v) {
                continue; // Skip empty rows
            }

            const wellName = String(wellNameCell.v).trim();
            rowCount++;

            // Extract test data (optional - new format doesn't have these)
            const testData = {};
            if (colIndices['Oil'] !== undefined) {
                testData.oil = this.getCellValue(sheet, row, colIndices['Oil']);
            }
            if (colIndices['Water'] !== undefined) {
                testData.water = this.getCellValue(sheet, row, colIndices['Water']);
            }
            if (colIndices['Total'] !== undefined) {
                testData.total = this.getCellValue(sheet, row, colIndices['Total']);
            }

            // Extract truck treating chemicals
            const truckTreating = {};
            for (const chemName of truckTreatingChemicals) {
                if (colIndices[chemName] !== undefined) {
                    const value = this.getCellValue(sheet, row, colIndices[chemName]);
                    if (value !== null && value !== undefined && !isNaN(value)) {
                        truckTreating[chemName] = Number(value);
                    }
                }
            }

            // Extract continuous chemicals
            const continuous = {};
            for (const chemName of continuousChemicals) {
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
