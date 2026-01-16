import { appState, GAUGE_SHEETS } from './config.js';

// Data validation and cleaning utilities
const DATA_QUALITY_THRESHOLDS = {
    water: 10000,  // Maximum valid daily water production (BBL)
    gas: 10000     // Maximum valid daily gas production (MCF)
};

function isValidValue(value) {
    return value !== null && value !== undefined && !isNaN(value);
}

function sanitizeValue(dataType, value) {
    if (!isValidValue(value)) return null;
    
    const numValue = Number(value);
    
    // Negative gas values are invalid
    if (dataType === 'gas' && numValue < 0) return 0;
    
    // Filter out unrealistic values for water and gas
    const threshold = DATA_QUALITY_THRESHOLDS[dataType];
    if (threshold && numValue > threshold) return null;
    
    return numValue;
}

function roundValue(value) {
    return Math.round(value * 100) / 100;
}

// Date utilities
function getTodayEnd() {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return today;
}

function getBucketDate(date, aggregation) {
    const bucketDate = new Date(date);
    
    if (aggregation === 'week') {
        const day = bucketDate.getUTCDay();
        const diff = day === 0 ? -6 : 1 - day;
        bucketDate.setUTCDate(bucketDate.getUTCDate() + diff);
    } else if (aggregation === 'month') {
        bucketDate.setUTCDate(1);
    }
    
    bucketDate.setUTCHours(0, 0, 0, 0);
    return bucketDate;
}

function isInDateRange(date, startDate, endDate) {
    const time = date.getTime();
    if (startDate && time < startDate.getTime()) return false;
    if (endDate && time > endDate.getTime()) return false;
    return true;
}

// Aggregate statistics
export function getAggregateStats() {
    let totalOil = 0;
    let totalWater = 0;
    let totalGas = 0;

    if (appState.dashboardData?.topProducers) {
        Object.values(appState.appData).forEach(sheet => {
            if (!sheet?.wells) return;

            sheet.wells.forEach(well => {
                if (well.status === 'inactive' || !well.latestProduction) return;
                
                totalOil += Number(well.latestProduction.oil) || 0;
                totalWater += Number(well.latestProduction.water) || 0;
                totalGas += Math.max(0, Number(well.latestProduction.gas) || 0);
            });
        });
        
        if (totalOil > 0 || totalWater > 0 || totalGas > 0) {
            return {
                totalOil: roundValue(totalOil),
                totalWater: roundValue(totalWater),
                totalGas: roundValue(totalGas)
            };
        }
    }

    // Fallback: use battery production or well tests
    const today = getTodayEnd();

    Object.values(appState.appData).forEach(sheet => {
        if (!sheet) return;

        if (sheet.batteryProduction?.length > 0) {
            const validProduction = sheet.batteryProduction
                .filter(p => new Date(p.date) <= today)
                .sort((a, b) => new Date(b.date) - new Date(a.date));

            if (validProduction.length > 0) {
                const latest = validProduction[0];
                if (isValidValue(latest.oil)) totalOil += Number(latest.oil);
                if (isValidValue(latest.water)) totalWater += Number(latest.water);
                if (isValidValue(latest.gas)) totalGas += Math.max(0, Number(latest.gas));
            }
        } else if (sheet.wells?.length > 0) {
            sheet.wells.forEach(well => {
                if (well.status === 'inactive' || !well.wellTests?.length) return;

                const validTests = well.wellTests.filter(t => new Date(t.date) <= today);
                if (validTests.length === 0) return;

                const latestTest = validTests[0];
                if (isValidValue(latestTest.oil)) totalOil += Number(latestTest.oil);
                if (isValidValue(latestTest.water)) totalWater += Number(latestTest.water);
                if (isValidValue(latestTest.gas)) totalGas += Math.max(0, Number(latestTest.gas));
            });
        }
    });

    return {
        totalOil: roundValue(totalOil),
        totalWater: roundValue(totalWater),
        totalGas: roundValue(totalGas)
    };
}

// Battery production time series
export function getBatteryProductionTimeSeries(
    dataType = 'oil',
    startDate = null,
    endDate = null,
    aggregation = 'month',
    selectedBatteries = null
) {
    const dateMap = new Map();
    let minDate = null;
    let maxDate = null;
    const today = getTodayEnd();

    Object.entries(appState.appData).forEach(([sheetId, sheet]) => {
        if (!sheet) return;
        
        // If selectedBatteries is provided and not empty, filter by it
        // If selectedBatteries is an empty Set, skip all batteries (show no data)
        if (selectedBatteries !== null) {
            if (selectedBatteries.size === 0) return; // Empty Set = no batteries selected
            if (!selectedBatteries.has(sheetId)) return; // Battery not in selection
        }

        const batteryProduction = sheet.batteryProduction || [];

        batteryProduction.forEach(item => {
            const date = new Date(item.date);
            if (!item.date || isNaN(date.getTime()) || date > today) return;

            const value = sanitizeValue(dataType, item[dataType]);
            if (value === null) return;

            const bucketDate = getBucketDate(date, aggregation);
            const dateKey = bucketDate.toISOString().split('T')[0];

            if (!minDate || bucketDate < minDate) minDate = bucketDate;
            if (!maxDate || bucketDate > maxDate) maxDate = bucketDate;

            dateMap.set(dateKey, (dateMap.get(dateKey) || 0) + value);
        });
    });

    let data = Array.from(dateMap.entries())
        .map(([dateStr, value]) => ({ x: new Date(dateStr), y: value }))
        .sort((a, b) => a.x - b.x);

    if (startDate || endDate) {
        data = data.filter(point => isInDateRange(point.x, startDate, endDate));
    }

    return { data, dateRange: { min: minDate, max: maxDate } };
}

// Well production time series (for backward compatibility)
export function getAggregateProductionTimeSeries(
    dataType = 'oil',
    startDate = null,
    endDate = null,
    aggregation = 'month',
    selectedWells = null
) {
    const dateMap = new Map();
    let minDate = null;
    let maxDate = null;
    const today = getTodayEnd();

    Object.values(appState.appData).forEach(sheet => {
        if (!sheet?.wells) return;

        sheet.wells.forEach(well => {
            if (well.status === 'inactive') return;
            
            // If selectedWells is provided and not empty, filter by it
            // If selectedWells is an empty Set, skip all wells (show no data)
            if (selectedWells !== null) {
                if (selectedWells.size === 0) return; // Empty Set = no wells selected
                if (!selectedWells.has(well.id)) return; // Well not in selection
            }

            const production = well.production || [];

            production.forEach(item => {
                const date = new Date(item.date);
                if (!item.date || isNaN(date.getTime()) || date > today) return;

                const value = sanitizeValue(dataType, item[dataType]);
                if (value === null) return;

                const bucketDate = getBucketDate(date, aggregation);
                const dateKey = bucketDate.toISOString().split('T')[0];

                if (!minDate || bucketDate < minDate) minDate = bucketDate;
                if (!maxDate || bucketDate > maxDate) maxDate = bucketDate;

                dateMap.set(dateKey, (dateMap.get(dateKey) || 0) + value);
            });
        });
    });

    let data = Array.from(dateMap.entries())
        .map(([dateStr, value]) => ({ x: new Date(dateStr), y: value }))
        .sort((a, b) => a.x - b.x);

    if (startDate || endDate) {
        data = data.filter(point => isInDateRange(point.x, startDate, endDate));
    }

    return { data, dateRange: { min: minDate, max: maxDate } };
}

// Top producing wells
export function getTopProducingWells(limit = 10) {
    if (appState.dashboardData?.topProducers) {
        return appState.dashboardData.topProducers.slice(0, limit).map(well => {
            const sheetConfig = GAUGE_SHEETS.find(s => s.id === well.sheetId);
            return {
                wellId: well.id,
                wellName: well.name,
                sheetId: well.sheetId,
                batteryName: sheetConfig?.name || 'Unknown',
                oil: well.latestProduction ? roundValue(well.latestProduction.oil) : 0,
                water: well.latestProduction ? roundValue(well.latestProduction.water) : 0
            };
        });
    }

    // Fallback
    const allWells = [];
    const today = getTodayEnd();

    Object.entries(appState.appData).forEach(([sheetId, sheet]) => {
        const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);
        if (!sheet?.wells || !sheetConfig) return;

        sheet.wells.forEach(well => {
            if (well.status === 'inactive') return;

            let latestOil = 0;
            let latestWater = 0;

            if (well.wellTests?.length > 0) {
                const validTests = well.wellTests.filter(t => new Date(t.date) <= today);
                if (validTests.length > 0) {
                    const latestTest = validTests[0];
                    latestOil = latestTest.oil;
                    latestWater = latestTest.water;
                }
            }

            allWells.push({
                wellId: well.id,
                wellName: well.name,
                sheetId,
                batteryName: sheetConfig.name,
                oil: isValidValue(latestOil) ? roundValue(latestOil) : 0,
                water: isValidValue(latestWater) ? roundValue(latestWater) : 0
            });
        });
    });

    return allWells.sort((a, b) => b.oil - a.oil).slice(0, limit);
}

// Recent well tests
export function getRecentWellTests(limit = 10) {
    if (appState.dashboardData?.recentTests) {
        return appState.dashboardData.recentTests.slice(0, limit).map(well => {
            const sheetConfig = GAUGE_SHEETS.find(s => s.id === well.sheetId);
            const testDate = well.latestTest?.date
                ? (well.latestTest.date.toDate?.() || new Date(well.latestTest.date))
                : new Date();
            
            return {
                date: testDate,
                wellId: well.id,
                wellName: well.name,
                sheetId: well.sheetId,
                batteryName: sheetConfig?.name || 'Unknown',
                oil: well.latestTest ? roundValue(well.latestTest.oil) : null,
                water: well.latestTest ? roundValue(well.latestTest.water) : null,
                gas: well.latestTest ? roundValue(Math.max(0, well.latestTest.gas)) : null
            };
        });
    }

    // Fallback
    const allTests = [];
    const today = getTodayEnd();

    Object.entries(appState.appData).forEach(([sheetId, sheet]) => {
        const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);
        if (!sheet?.wells || !sheetConfig) return;

        sheet.wells.forEach(well => {
            if (well.status === 'inactive' || !well.wellTests) return;

            well.wellTests.forEach(test => {
                const testDate = new Date(test.date);
                if (!test.date || testDate > today) return;

                allTests.push({
                    date: testDate,
                    wellId: well.id,
                    wellName: well.name,
                    sheetId,
                    batteryName: sheetConfig.name,
                    oil: isValidValue(test.oil) ? roundValue(test.oil) : null,
                    water: isValidValue(test.water) ? roundValue(test.water) : null,
                    gas: isValidValue(test.gas) ? roundValue(Math.max(0, test.gas)) : null
                });
            });
        });
    });

    return allTests.sort((a, b) => b.date - a.date).slice(0, limit);
}

// Action items
export function getAllActionItems(limit = 15) {
    const allItems = [];

    const wells = appState.dashboardData?.actionItems || 
        Object.values(appState.appData).flatMap(sheet => sheet?.wells || []);

    wells.forEach(well => {
        if (well.status === 'inactive' || !well.actionItems?.length) return;

        const sheetConfig = GAUGE_SHEETS.find(s => s.id === well.sheetId);
        
        well.actionItems.forEach(item => {
            if (item?.trim()) {
                allItems.push({
                    content: item,
                    wellId: well.id,
                    wellName: well.name,
                    sheetId: well.sheetId,
                    batteryName: sheetConfig?.name || 'Unknown'
                });
            }
        });
    });

    return allItems.slice(0, limit);
}

// Battery-level statistics
export function getBatteryStats(sheetId) {
    const sheetData = appState.appData[sheetId];
    if (!sheetData) return { totalOil: 0, totalWater: 0, totalGas: 0 };
    
    // Use batteryProduction data (same as Oil Production Explorer)
    const batteryProduction = sheetData.batteryProduction || [];
    
    if (batteryProduction.length > 0) {
        // Get the latest production entry (most recent by date)
        const latestProduction = batteryProduction
            .filter(p => p.date)
            .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
        
        if (latestProduction) {
            return {
                totalOil: roundValue(Number(latestProduction.oil) || 0),
                totalWater: roundValue(Number(latestProduction.water) || 0),
                totalGas: roundValue(Math.max(0, Number(latestProduction.gas) || 0))
            };
        }
    }
    
    return { totalOil: 0, totalWater: 0, totalGas: 0 };
}

// Check if data has been uploaded
export function hasUploadedData() {
    return Object.values(appState.appData).some(
        sheet => sheet?.wells?.length > 0
    );
}
