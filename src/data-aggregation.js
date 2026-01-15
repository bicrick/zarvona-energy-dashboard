import { appState, GAUGE_SHEETS } from './config.js';

export function getAggregateStats() {
    let totalOil = 0;
    let totalWater = 0;
    let totalGas = 0;
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    Object.keys(appState.appData).forEach(sheetId => {
        const sheet = appState.appData[sheetId];
        if (!sheet) return;

        // Use battery production if available, otherwise fall back to well tests
        if (sheet.batteryProduction && sheet.batteryProduction.length > 0) {
            // Get the latest battery production entry
            const validProduction = sheet.batteryProduction.filter(p => {
                const prodDate = new Date(p.date);
                return prodDate <= today;
            });

            if (validProduction.length > 0) {
                // Sort by date descending and get the most recent
                validProduction.sort((a, b) => new Date(b.date) - new Date(a.date));
                const latest = validProduction[0];
                
                if (latest.oil !== null && !isNaN(latest.oil)) {
                    totalOil += Number(latest.oil);
                }
                if (latest.water !== null && !isNaN(latest.water)) {
                    totalWater += Number(latest.water);
                }
                if (latest.gas !== null && !isNaN(latest.gas)) {
                    totalGas += Math.max(0, Number(latest.gas));
                }
            }
        } else if (sheet.wells && sheet.wells.length > 0) {
            // Fall back to aggregating well tests
            sheet.wells.forEach(well => {
                if (well.status === 'inactive') return;

                if (well.wellTests && well.wellTests.length > 0) {
                    const validTests = well.wellTests.filter(t => {
                        const testDate = new Date(t.date);
                        return testDate <= today;
                    });

                    if (validTests.length > 0) {
                        const latestTest = validTests[0];
                        if (latestTest.oil !== null && !isNaN(latestTest.oil)) {
                            totalOil += Number(latestTest.oil);
                        }
                        if (latestTest.water !== null && !isNaN(latestTest.water)) {
                            totalWater += Number(latestTest.water);
                        }
                        if (latestTest.gas !== null && !isNaN(latestTest.gas)) {
                            totalGas += Math.max(0, Number(latestTest.gas));
                        }
                    }
                }
            });
        }
    });

    return {
        totalOil: Math.round(totalOil * 100) / 100,
        totalWater: Math.round(totalWater * 100) / 100,
        totalGas: Math.round(totalGas * 100) / 100
    };
}

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
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    const getBucketDate = (date) => {
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
    };

    Object.keys(appState.appData).forEach(sheetId => {
        const sheet = appState.appData[sheetId];
        if (!sheet) return;
        
        // Filter by selected batteries
        if (selectedBatteries && !selectedBatteries.has(sheetId)) return;

        const batteryProduction = sheet.batteryProduction || [];

        batteryProduction.forEach(item => {
            if (!item.date) return;

            const date = new Date(item.date);
            if (isNaN(date.getTime())) return;
            if (date > today) return;

            let value = item[dataType];
            if (value === null || value === undefined || isNaN(value)) return;

            if (dataType === 'gas' && value < 0) value = 0;

            const bucketDate = getBucketDate(date);

            if (!minDate || bucketDate < minDate) minDate = bucketDate;
            if (!maxDate || bucketDate > maxDate) maxDate = bucketDate;

            const dateKey = bucketDate.toISOString().split('T')[0];
            const currentVal = dateMap.get(dateKey) || 0;
            dateMap.set(dateKey, currentVal + Number(value));
        });
    });

    let data = Array.from(dateMap.entries())
        .map(([dateStr, value]) => ({
            x: new Date(dateStr),
            y: value
        }))
        .sort((a, b) => a.x - b.x);

    if (startDate || endDate) {
        data = data.filter(point => {
            const pointTime = point.x.getTime();
            if (startDate && pointTime < startDate.getTime()) return false;
            if (endDate && pointTime > endDate.getTime()) return false;
            return true;
        });
    }

    return {
        data,
        dateRange: { min: minDate, max: maxDate }
    };
}

// Keep the old function for backward compatibility (used by dashboard stats)
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
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    const getBucketDate = (date) => {
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
    };

    Object.keys(appState.appData).forEach(sheetId => {
        const sheet = appState.appData[sheetId];
        if (sheet && sheet.wells && sheet.wells.length > 0) {
            sheet.wells.forEach(well => {
                if (well.status === 'inactive') return;
                if (selectedWells && !selectedWells.has(well.id)) return;

                const production = well.production || [];

                production.forEach(item => {
                    if (!item.date) return;

                    const date = new Date(item.date);
                    if (isNaN(date.getTime())) return;
                    if (date > today) return;

                    let value = item[dataType];
                    if (value === null || value === undefined || isNaN(value)) return;

                    if (dataType === 'gas' && value < 0) value = 0;

                    const bucketDate = getBucketDate(date);

                    if (!minDate || bucketDate < minDate) minDate = bucketDate;
                    if (!maxDate || bucketDate > maxDate) maxDate = bucketDate;

                    const dateKey = bucketDate.toISOString().split('T')[0];
                    const currentVal = dateMap.get(dateKey) || 0;
                    dateMap.set(dateKey, currentVal + Number(value));
                });
            });
        }
    });

    let data = Array.from(dateMap.entries())
        .map(([dateStr, value]) => ({
            x: new Date(dateStr),
            y: value
        }))
        .sort((a, b) => a.x - b.x);

    if (startDate || endDate) {
        data = data.filter(point => {
            const pointTime = point.x.getTime();
            if (startDate && pointTime < startDate.getTime()) return false;
            if (endDate && pointTime > endDate.getTime()) return false;
            return true;
        });
    }

    return {
        data,
        dateRange: { min: minDate, max: maxDate }
    };
}

export function getTopProducingWells(limit = 10) {
    const allWells = [];
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    Object.keys(appState.appData).forEach(sheetId => {
        const sheet = appState.appData[sheetId];
        const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);

        if (sheet && sheet.wells && sheetConfig) {
            sheet.wells.forEach(well => {
                if (well.status === 'inactive') return;

                let latestOil = null;
                let latestWater = null;

                if (well.wellTests && well.wellTests.length > 0) {
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
                    sheetId: sheetId,
                    batteryName: sheetConfig.name,
                    oil: latestOil !== null ? Math.round(Number(latestOil) * 100) / 100 : 0,
                    water: latestWater !== null ? Math.round(Number(latestWater) * 100) / 100 : 0
                });
            });
        }
    });

    allWells.sort((a, b) => b.oil - a.oil);

    return allWells.slice(0, limit);
}

export function getRecentWellTests(limit = 10) {
    const allTests = [];
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    Object.keys(appState.appData).forEach(sheetId => {
        const sheet = appState.appData[sheetId];
        const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);

        if (sheet && sheet.wells && sheetConfig) {
            sheet.wells.forEach(well => {
                if (well.status === 'inactive') return;

                if (well.wellTests && well.wellTests.length > 0) {
                    well.wellTests.forEach(test => {
                        if (test.date) {
                            const testDate = new Date(test.date);
                            if (testDate > today) return;

                            allTests.push({
                                date: testDate,
                                wellId: well.id,
                                wellName: well.name,
                                sheetId: sheetId,
                                batteryName: sheetConfig.name,
                                oil: test.oil !== null ? Math.round(test.oil * 100) / 100 : null,
                                water: test.water !== null ? Math.round(test.water * 100) / 100 : null,
                                gas: test.gas !== null ? Math.round(Math.max(0, test.gas) * 100) / 100 : null
                            });
                        }
                    });
                }
            });
        }
    });

    allTests.sort((a, b) => b.date - a.date);

    return allTests.slice(0, limit);
}

export function getAllActionItems(limit = 15) {
    const allItems = [];

    Object.keys(appState.appData).forEach(sheetId => {
        const sheet = appState.appData[sheetId];
        const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);

        if (sheet && sheet.wells && sheetConfig) {
            sheet.wells.forEach(well => {
                if (well.status === 'inactive') return;

                if (well.actionItems && well.actionItems.length > 0) {
                    well.actionItems.forEach(item => {
                        if (item && item.trim()) {
                            allItems.push({
                                content: item,
                                wellId: well.id,
                                wellName: well.name,
                                sheetId: sheetId,
                                batteryName: sheetConfig.name
                            });
                        }
                    });
                }
            });
        }
    });

    return allItems.slice(0, limit);
}

export function hasUploadedData() {
    return Object.keys(appState.appData).some(k => appState.appData[k] && appState.appData[k].wells && appState.appData[k].wells.length > 0);
}
