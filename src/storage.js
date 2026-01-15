import { appState, STORAGE_KEY } from './config.js';

export function loadDataFromStorage() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            appState.appData = JSON.parse(stored);
            // Convert date strings back to Date objects for production, wellTests, and batteryProduction
            Object.values(appState.appData).forEach(sheet => {
                if (sheet.batteryProduction) {
                    sheet.batteryProduction = sheet.batteryProduction.map(p => ({
                        ...p,
                        date: new Date(p.date)
                    }));
                }
                if (sheet.wells) {
                    sheet.wells.forEach(well => {
                        if (well.production) {
                            well.production = well.production.map(p => ({
                                ...p,
                                date: new Date(p.date)
                            }));
                        }
                        if (well.wellTests) {
                            well.wellTests = well.wellTests.map(t => ({
                                ...t,
                                date: new Date(t.date)
                            }));
                        }
                    });
                }
            });
        }
    } catch (e) {
        console.error('Error loading from storage:', e);
        appState.appData = {};
    }
}

export function saveDataToStorage() {
    try {
        // Create a copy of appData without batteryProduction to reduce storage size
        // batteryProduction can be large and will be re-parsed from uploaded files
        const dataToStore = {};
        
        Object.keys(appState.appData).forEach(sheetId => {
            const sheet = appState.appData[sheetId];
            dataToStore[sheetId] = {
                ...sheet,
                // Exclude batteryProduction - it will be re-parsed on next upload
                batteryProduction: []
            };
        });
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
    } catch (e) {
        console.error('Error saving to storage:', e);
        // Storage quota exceeded - try to save without any production data
        try {
            const minimalData = {};
            Object.keys(appState.appData).forEach(sheetId => {
                const sheet = appState.appData[sheetId];
                minimalData[sheetId] = {
                    id: sheet.id,
                    name: sheet.name,
                    lastUpdated: sheet.lastUpdated,
                    rawRowCount: sheet.rawRowCount,
                    batteryProduction: [],
                    wells: sheet.wells ? sheet.wells.map(well => ({
                        ...well,
                        production: [], // Remove production history
                        wellTests: well.wellTests ? well.wellTests.slice(0, 10) : [], // Keep only 10 most recent tests
                        pressureReadings: well.pressureReadings ? well.pressureReadings.slice(0, 10) : []
                    })) : [],
                    runTickets: []
                };
            });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(minimalData));
            console.warn('Saved minimal data due to storage quota. Re-upload files to restore full data.');
        } catch (e2) {
            console.error('Error saving minimal data:', e2);
            // Last resort - just clear storage
            localStorage.removeItem(STORAGE_KEY);
        }
    }
}
