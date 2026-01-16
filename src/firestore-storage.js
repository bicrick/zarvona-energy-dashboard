import { 
    collection, 
    doc, 
    getDoc, 
    setDoc, 
    getDocs,
    writeBatch,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    collectionGroup,
    Timestamp
} from 'firebase/firestore';
import { db } from './firebase.js';
import { appState } from './config.js';

// ============================================================================
// OPTIMIZED DATA MODEL - SAVE FUNCTIONS
// ============================================================================

/**
 * Save a gauge sheet's data to Firestore with optimized structure
 * @param {string} sheetId - The gauge sheet ID
 * @param {object} sheetData - The sheet data to save
 * @param {boolean} fullReplace - If true, replace all data. If false, only update new/changed data
 * @param {Function} progressCallback - Optional callback to report progress (message, percent)
 * @returns {Promise<boolean>} Success status
 */
export async function saveSheetToFirestore(sheetId, sheetData, fullReplace = false, progressCallback = null) {
    try {
        const logProgress = (message, percent) => {
            console.log(message);
            if (progressCallback) progressCallback(message, percent);
        };
        
        logProgress(`Saving sheet ${sheetId} to Firestore with optimized structure...`, 0);
        
        // Calculate wellList for fast navigation
        const wellList = (sheetData.wells || []).map(w => ({
            id: w.id,
            name: w.name,
            status: w.status || 'active'
        })).filter(w => w.status !== 'inactive');
        
        logProgress('Saving gauge sheet metadata...', 5);
        
        // Save gauge sheet document with wellList
        const sheetRef = doc(db, 'gaugeSheets', sheetId);
        await setDoc(sheetRef, {
            id: sheetData.id,
            name: sheetData.name,
            lastUpdated: Timestamp.fromDate(new Date(sheetData.lastUpdated)),
            rawRowCount: sheetData.rawRowCount || 0,
            wellList: wellList,
            wellCount: wellList.length
        }, { merge: true });
        
        // Save wells with optimized fields
        if (sheetData.wells && sheetData.wells.length > 0) {
            const totalWells = sheetData.wells.length;
            for (let i = 0; i < totalWells; i++) {
                const well = sheetData.wells[i];
                const wellPercent = 10 + Math.floor((i / totalWells) * 60);
                logProgress(`Saving well ${i + 1}/${totalWells}: ${well.name}`, wellPercent);
                await saveWellToFirestore(sheetId, well, fullReplace);
            }
        }
        
        logProgress('Saving battery production data...', 70);
        
        // Save battery production (incremental)
        if (sheetData.batteryProduction && sheetData.batteryProduction.length > 0) {
            await saveBatteryProductionToFirestore(sheetId, sheetData.batteryProduction, fullReplace);
        }
        
        logProgress('Saving run tickets...', 80);
        
        // Save run tickets (incremental)
        if (sheetData.runTickets && sheetData.runTickets.length > 0) {
            await saveRunTicketsToFirestore(sheetId, sheetData.runTickets, fullReplace);
        }
        
        logProgress(`Sheet ${sheetId} saved successfully`, 90);
        return true;
    } catch (error) {
        console.error(`Error saving sheet ${sheetId}:`, error);
        return false;
    }
}

/**
 * Save a well's data to Firestore with optimized denormalized fields
 * @param {string} sheetId - The gauge sheet ID
 * @param {object} wellData - The well data to save
 * @param {boolean} fullReplace - If true, replace all data. If false, only update recent data
 * @returns {Promise<boolean>} Success status
 */
async function saveWellToFirestore(sheetId, wellData, fullReplace = false) {
    try {
        const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellData.id);
        
        // Calculate latest production (most recent date)
        let latestProduction = null;
        if (wellData.production && wellData.production.length > 0) {
            const sortedProduction = [...wellData.production].sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            );
            const latest = sortedProduction[0];
            latestProduction = {
                date: Timestamp.fromDate(new Date(latest.date)),
                oil: latest.oil || 0,
                water: latest.water || 0,
                gas: latest.gas || 0
            };
        }
        
        // Calculate latest test (most recent date)
        let latestTest = null;
        if (wellData.wellTests && wellData.wellTests.length > 0) {
            const sortedTests = [...wellData.wellTests].sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            );
            const latest = sortedTests[0];
            latestTest = {
                date: Timestamp.fromDate(new Date(latest.date)),
                oil: latest.oil || 0,
                water: latest.water || 0,
                gas: latest.gas || 0
            };
        }
        
        // Calculate 30-day average stats
        let dailyStats = null;
        if (wellData.production && wellData.production.length > 0) {
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            
            const recentProduction = wellData.production.filter(p => 
                new Date(p.date) >= thirtyDaysAgo
            );
            
            if (recentProduction.length > 0) {
                const totalOil = recentProduction.reduce((sum, p) => sum + (p.oil || 0), 0);
                const totalWater = recentProduction.reduce((sum, p) => sum + (p.water || 0), 0);
                const totalGas = recentProduction.reduce((sum, p) => sum + (p.gas || 0), 0);
                const days = recentProduction.length;
                
                dailyStats = {
                    avgOil: Math.round(totalOil / days * 100) / 100,
                    avgWater: Math.round(totalWater / days * 100) / 100,
                    avgGas: Math.round(totalGas / days * 100) / 100,
                    days: days
                };
            }
        }
        
        // Check if well has action items
        const hasActionItems = wellData.actionItems && wellData.actionItems.length > 0;
        
        // Save well document with optimized fields
        await setDoc(wellRef, {
            id: wellData.id,
            name: wellData.name,
            sheetId: sheetId,
            status: wellData.status || 'active',
            latestProduction: latestProduction,
            latestTest: latestTest,
            dailyStats: dailyStats,
            hasActionItems: hasActionItems,
            pressureReadings: wellData.pressureReadings || [],
            chemicalProgram: wellData.chemicalProgram || {},
            failureHistory: wellData.failureHistory || [],
            actionItems: wellData.actionItems || []
        }, { merge: true });
        
        // Save production data incrementally
        if (wellData.production && wellData.production.length > 0) {
            await saveProductionDataIncremental(sheetId, wellData.id, wellData.production, fullReplace);
        }
        
        // Save well tests incrementally
        if (wellData.wellTests && wellData.wellTests.length > 0) {
            await saveWellTestsIncremental(sheetId, wellData.id, wellData.wellTests, fullReplace);
        }
        
        return true;
    } catch (error) {
        console.error(`Error saving well ${wellData.id}:`, error);
        return false;
    }
}

/**
 * Save production data incrementally (only new/recent data)
 */
async function saveProductionDataIncremental(sheetId, wellId, production, fullReplace) {
    try {
        // If full replace, save last 500 records
        if (fullReplace) {
            const batch = writeBatch(db);
            const productionToSave = production.slice(-500);
            
            productionToSave.forEach((prod) => {
                const dateKey = new Date(prod.date).toISOString().split('T')[0];
                const prodRef = doc(db, `gaugeSheets/${sheetId}/wells/${wellId}/production`, dateKey);
                batch.set(prodRef, {
                    date: Timestamp.fromDate(new Date(prod.date)),
                    oil: prod.oil || 0,
                    water: prod.water || 0,
                    gas: prod.gas || 0
                });
            });
            
            await batch.commit();
        } else {
            // Incremental: only save last 30 days of data
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            
            const recentProduction = production.filter(p => new Date(p.date) >= thirtyDaysAgo);
            
            if (recentProduction.length > 0) {
                const batch = writeBatch(db);
                let batchCount = 0;
                
                for (const prod of recentProduction) {
                    const dateKey = new Date(prod.date).toISOString().split('T')[0];
                    const prodRef = doc(db, `gaugeSheets/${sheetId}/wells/${wellId}/production`, dateKey);
                    batch.set(prodRef, {
                        date: Timestamp.fromDate(new Date(prod.date)),
                        oil: prod.oil || 0,
                        water: prod.water || 0,
                        gas: prod.gas || 0
                    }, { merge: true });
                    
                    batchCount++;
                    
                    // Firestore batch limit is 500 operations
                    if (batchCount >= 500) {
                        await batch.commit();
                        batchCount = 0;
                    }
                }
                
                if (batchCount > 0) {
                    await batch.commit();
                }
            }
        }
        
        return true;
    } catch (error) {
        console.error('Error saving production data:', error);
        return false;
    }
}

/**
 * Save well tests incrementally
 */
async function saveWellTestsIncremental(sheetId, wellId, wellTests, fullReplace) {
    try {
        const testsToSave = fullReplace ? wellTests : wellTests.slice(-50);
        
        if (testsToSave.length > 0) {
            const batch = writeBatch(db);
            
            testsToSave.forEach((test) => {
                const dateKey = new Date(test.date).toISOString().split('T')[0];
                const testRef = doc(db, `gaugeSheets/${sheetId}/wells/${wellId}/wellTests`, dateKey);
                batch.set(testRef, {
                    date: Timestamp.fromDate(new Date(test.date)),
                    oil: test.oil || 0,
                    water: test.water || 0,
                    gas: test.gas || 0
                }, { merge: true });
            });
            
            await batch.commit();
        }
        
        return true;
    } catch (error) {
        console.error('Error saving well tests:', error);
        return false;
    }
}

/**
 * Save battery production data to Firestore
 */
async function saveBatteryProductionToFirestore(sheetId, batteryProduction, fullReplace = false) {
    try {
        let productionToSave;
        if (fullReplace) {
            productionToSave = batteryProduction.slice(-500);
        } else {
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            productionToSave = batteryProduction.filter(p => new Date(p.date) >= thirtyDaysAgo);
        }
        
        if (productionToSave.length > 0) {
            const batch = writeBatch(db);
            
            productionToSave.forEach((prod) => {
                const dateKey = new Date(prod.date).toISOString().split('T')[0];
                const prodRef = doc(db, `gaugeSheets/${sheetId}/batteryProduction`, dateKey);
                batch.set(prodRef, {
                    date: Timestamp.fromDate(new Date(prod.date)),
                    oil: prod.oil || 0,
                    water: prod.water || 0,
                    gas: prod.gas || 0
                }, { merge: true });
            });
            
            await batch.commit();
        }
        
        return true;
    } catch (error) {
        console.error('Error saving battery production:', error);
        return false;
    }
}

/**
 * Save run tickets to Firestore
 */
async function saveRunTicketsToFirestore(sheetId, runTickets, fullReplace = false) {
    try {
        let ticketsToSave;
        if (fullReplace) {
            ticketsToSave = runTickets;
        } else {
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            ticketsToSave = runTickets.filter(t => {
                if (!t.date) return false;
                const ticketDate = new Date(t.date);
                return !isNaN(ticketDate.getTime()) && ticketDate >= thirtyDaysAgo;
            });
        }
        
        if (ticketsToSave.length > 0) {
            const batch = writeBatch(db);
            
            ticketsToSave.forEach((ticket, index) => {
                const dateKey = ticket.date ? new Date(ticket.date).toISOString().split('T')[0] : 'unknown';
                const ticketRef = doc(db, `gaugeSheets/${sheetId}/runTickets`, `${dateKey}_${index}`);
                
                let dateValue = null;
                if (ticket.date) {
                    const parsedDate = new Date(ticket.date);
                    if (!isNaN(parsedDate.getTime())) {
                        dateValue = Timestamp.fromDate(parsedDate);
                    }
                }
                
                batch.set(ticketRef, {
                    ...ticket,
                    date: dateValue
                }, { merge: true });
            });
            
            await batch.commit();
        }
        
        return true;
    } catch (error) {
        console.error('Error saving run tickets:', error);
        return false;
    }
}

// ============================================================================
// OPTIMIZED DATA MODEL - LOAD FUNCTIONS
// ============================================================================

/**
 * Load ALL data at startup - SIMPLE AND FAST
 * Loads all battery metadata and all well summary data in one go
 * @param {Function} progressCallback - Optional callback to report progress (message)
 * @returns {Promise<boolean>} Success status
 */
export async function loadNavigationData(progressCallback = null) {
    try {
        const logProgress = (message) => {
            console.log(message);
            if (progressCallback) progressCallback(message);
        };
        
        logProgress('Loading all data...');
        const startTime = performance.now();
        
        logProgress('Fetching gauge sheets...');
        const gaugeSheetsColl = collection(db, 'gaugeSheets');
        const gaugeSheetSnapshot = await getDocs(gaugeSheetsColl);
        
        const newAppData = {};
        let totalWells = 0;
        const totalSheets = gaugeSheetSnapshot.docs.length;
        
        // Load each battery and ALL its wells
        for (let i = 0; i < totalSheets; i++) {
            const sheetDoc = gaugeSheetSnapshot.docs[i];
            const sheetData = sheetDoc.data();
            const sheetId = sheetDoc.id;
            
            logProgress(`Loading battery ${i + 1}/${totalSheets}: ${sheetData.name}...`);
            
            newAppData[sheetId] = {
                id: sheetData.id,
                name: sheetData.name,
                lastUpdated: sheetData.lastUpdated?.toDate?.() || sheetData.lastUpdated,
                rawRowCount: sheetData.rawRowCount || 0,
                wellList: sheetData.wellList || [],
                wellCount: sheetData.wellCount || 0,
                wells: [],
                batteryProduction: [],
                runTickets: [],
                _metadataLoaded: true,
                _wellsLoaded: true
            };
            
            // Load ALL wells for this battery
            const wellsColl = collection(db, `gaugeSheets/${sheetId}/wells`);
            const wellsSnapshot = await getDocs(wellsColl);
            
            wellsSnapshot.docs.forEach(wellDoc => {
                const wellData = wellDoc.data();
                newAppData[sheetId].wells.push({
                    id: wellData.id,
                    name: wellData.name,
                    sheetId: wellData.sheetId,
                    status: wellData.status || 'active',
                    latestProduction: wellData.latestProduction,
                    latestTest: wellData.latestTest,
                    dailyStats: wellData.dailyStats,
                    hasActionItems: wellData.hasActionItems || false,
                    pressureReadings: wellData.pressureReadings || [],
                    chemicalProgram: wellData.chemicalProgram || {},
                    failureHistory: wellData.failureHistory || [],
                    actionItems: wellData.actionItems || [],
                    production: [],  // Will lazy-load when viewing well
                    wellTests: [],   // Will lazy-load when viewing well
                    _detailsLoaded: false
                });
                totalWells++;
            });
        }
        
        logProgress('Updating app state...');
        
        // Update app state
        appState.appData = newAppData;
        appState.loadedSheets = Object.keys(newAppData);
        
        // Populate metadata cache
        for (const sheetId in newAppData) {
            appState.metadataCache.wellCounts[sheetId] = newAppData[sheetId].wells.length;
            appState.metadataCache.wellNames[sheetId] = newAppData[sheetId].wells.map(w => ({
                id: w.id,
                name: w.name
            }));
        }
        
        const endTime = performance.now();
        logProgress(`✓ Loaded ${Object.keys(newAppData).length} batteries, ${totalWells} wells in ${Math.round(endTime - startTime)}ms`);
        return true;
    } catch (error) {
        console.error('Error loading data:', error);
        appState.appData = {};
        return false;
    }
}

/**
 * Prepare dashboard data from already-loaded wells (NO QUERIES NEEDED)
 * @param {Function} progressCallback - Optional callback to report progress (message)
 * @returns {Promise<boolean>} Success status
 */
export async function loadDashboardData(progressCallback = null) {
    try {
        const logProgress = (message) => {
            console.log(message);
            if (progressCallback) progressCallback(message);
        };
        
        logProgress('Preparing dashboard data from loaded wells...');
        
        // Everything is already loaded! Just organize it for the dashboard
        const allWells = [];
        
        Object.keys(appState.appData).forEach(sheetId => {
            const sheet = appState.appData[sheetId];
            if (sheet && sheet.wells) {
                allWells.push(...sheet.wells.map(w => ({...w, sheetId})));
            }
        });
        
        logProgress('Calculating top producers...');
        
        // Sort for top producers (in JavaScript - it's instant)
        const topProducers = allWells
            .filter(w => w.status !== 'inactive' && w.latestProduction)
            .sort((a, b) => (b.latestProduction?.oil || 0) - (a.latestProduction?.oil || 0))
            .slice(0, 10);
        
        logProgress('Finding recent tests...');
        
        // Sort for recent tests
        const recentTests = allWells
            .filter(w => w.status !== 'inactive' && w.latestTest)
            .sort((a, b) => {
                const dateA = a.latestTest?.date?.toDate?.() || a.latestTest?.date || 0;
                const dateB = b.latestTest?.date?.toDate?.() || b.latestTest?.date || 0;
                return dateB - dateA;
            })
            .slice(0, 10);
        
        logProgress('Filtering action items...');
        
        // Filter for action items
        const actionItems = allWells.filter(w => w.hasActionItems);
        
        appState.dashboardData = {
            topProducers,
            recentTests,
            actionItems
        };
        
        logProgress(`✓ Dashboard prepared: ${topProducers.length} top producers, ${recentTests.length} recent tests, ${actionItems.length} action items`);
        return true;
    } catch (error) {
        console.error('Error preparing dashboard data:', error);
        return false;
    }
}

/**
 * Get metric-specific data (Oil, Water, or Gas leaderboard) - INSTANT
 * @param {string} metric - 'oil', 'water', or 'gas'
 * @returns {Promise<Array>} Array of well data sorted by metric
 */
export async function loadMetricData(metric) {
    try {
        console.log(`Preparing ${metric} leaderboard...`);
        
        // Everything is already loaded! Just sort in JavaScript
        const allWells = [];
        
        Object.keys(appState.appData).forEach(sheetId => {
            const sheet = appState.appData[sheetId];
            if (sheet && sheet.wells) {
                allWells.push(...sheet.wells.map(w => ({...w, sheetId})));
            }
        });
        
        const metricData = allWells
            .filter(w => w.status !== 'inactive' && w.latestProduction)
            .sort((a, b) => (b.latestProduction?.[metric] || 0) - (a.latestProduction?.[metric] || 0))
            .slice(0, 50);
        
        console.log(`✓ ${metric} leaderboard prepared: ${metricData.length} wells`);
        return metricData;
    } catch (error) {
        console.error(`Error preparing ${metric} data:`, error);
        return [];
    }
}

/**
 * Load wells list for a specific gauge sheet - ALREADY LOADED
 * @param {string} sheetId - The gauge sheet ID
 * @returns {Promise<boolean>} Success status
 */
export async function loadWellsList(sheetId) {
    // Wells are already loaded at startup - just return success
    const sheetData = appState.appData[sheetId];
    if (!sheetData) {
        console.error(`Sheet ${sheetId} not found in appData`);
        return false;
    }
    
    console.log(`✓ Wells already loaded for ${sheetId}: ${sheetData.wells.length} wells`);
    return true;
}

/**
 * Load full details for a specific well - OPTIMIZED
 * @param {string} sheetId - The gauge sheet ID
 * @param {string} wellId - The well ID
 * @returns {Promise<boolean>} Success status
 */
export async function loadWellDetails(sheetId, wellId) {
    try {
        console.log(`Loading full details for well ${wellId} in sheet ${sheetId}...`);
        
        const sheetData = appState.appData[sheetId];
        if (!sheetData) {
            console.error(`Sheet ${sheetId} not found in appData`);
            return false;
        }
        
        let well = sheetData.wells.find(w => w.id === wellId);
        
        // If well doesn't exist in the list, load it
        if (!well) {
            const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellId);
            const wellDoc = await getDoc(wellRef);
            
            if (!wellDoc.exists()) {
                console.error(`Well ${wellId} not found in sheet ${sheetId}`);
                return false;
            }
            
            const wellData = wellDoc.data();
            well = {
                id: wellData.id,
                name: wellData.name,
                production: [],
                wellTests: [],
                pressureReadings: wellData.pressureReadings || [],
                chemicalProgram: wellData.chemicalProgram || {},
                failureHistory: wellData.failureHistory || [],
                actionItems: wellData.actionItems || [],
                _detailsLoaded: false
            };
            sheetData.wells.push(well);
        }
        
        // If details are already loaded, skip
        if (well._detailsLoaded && !well._summaryOnly) {
            console.log(`Well details already loaded for ${wellId}`);
            return true;
        }
        
        // Load full production data
        const productionColl = collection(db, `gaugeSheets/${sheetId}/wells/${wellId}/production`);
        const productionSnapshot = await getDocs(productionColl);
        well.production = productionSnapshot.docs.map(doc => ({
            ...doc.data(),
            date: doc.data().date?.toDate?.() || new Date(doc.data().date)
        }));
        
        // Load all well tests
        const wellTestsColl = collection(db, `gaugeSheets/${sheetId}/wells/${wellId}/wellTests`);
        const wellTestsSnapshot = await getDocs(wellTestsColl);
        well.wellTests = wellTestsSnapshot.docs.map(doc => ({
            ...doc.data(),
            date: doc.data().date?.toDate?.() || new Date(doc.data().date)
        }));
        
        // Reload well metadata to get latest pressureReadings, etc.
        const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellId);
        const wellDoc = await getDoc(wellRef);
        if (wellDoc.exists()) {
            const wellData = wellDoc.data();
            well.pressureReadings = wellData.pressureReadings || [];
            well.chemicalProgram = wellData.chemicalProgram || {};
            well.failureHistory = wellData.failureHistory || [];
            well.actionItems = wellData.actionItems || [];
            well.status = wellData.status || 'active';
        }
        
        well._detailsLoaded = true;
        well._summaryOnly = false;
        
        console.log(`Loaded full details for well ${wellId}`);
        return true;
    } catch (error) {
        console.error(`Error loading well details for ${wellId}:`, error);
        return false;
    }
}

/**
 * Load battery production and run tickets for a specific sheet
 * This is loaded on-demand when viewing aggregate charts
 * @param {string} sheetId - The gauge sheet ID
 * @returns {Promise<boolean>} Success status
 */
export async function loadSheetAggregateData(sheetId) {
    try {
        console.log(`Loading aggregate data for ${sheetId}...`);
        
        const sheetData = appState.appData[sheetId];
        if (!sheetData) {
            console.error(`Sheet ${sheetId} not found in appData`);
            return false;
        }
        
        // Load battery production
        const batteryProdColl = collection(db, `gaugeSheets/${sheetId}/batteryProduction`);
        const batteryProdSnapshot = await getDocs(batteryProdColl);
        sheetData.batteryProduction = batteryProdSnapshot.docs.map(doc => ({
            ...doc.data(),
            date: doc.data().date?.toDate?.() || new Date(doc.data().date)
        }));
        
        // Load run tickets
        const runTicketsColl = collection(db, `gaugeSheets/${sheetId}/runTickets`);
        const runTicketsSnapshot = await getDocs(runTicketsColl);
        sheetData.runTickets = runTicketsSnapshot.docs.map(doc => doc.data());
        
        // Mark aggregate data as loaded
        sheetData._aggregateLoaded = true;
        
        console.log(`Loaded aggregate data for ${sheetId}`);
        return true;
    } catch (error) {
        console.error(`Error loading aggregate data for ${sheetId}:`, error);
        return false;
    }
}

/**
 * Load gauge sheet metadata only (for backward compatibility)
 */
export async function loadGaugeSheetMetadata() {
    return await loadNavigationData();
}

/**
 * Load dashboard summary (for backward compatibility)
 */
export async function loadDashboardSummary() {
    return await loadDashboardData();
}

/**
 * Fetch a single sheet's data from Firestore (for merge during upload)
 * @param {string} sheetId - The gauge sheet ID
 * @returns {Promise<object|null>} Sheet data or null if not found
 */
export async function fetchSheetFromFirestore(sheetId) {
    try {
        console.log(`Fetching existing data for ${sheetId} from Firestore...`);
        
        // Get sheet document
        const sheetRef = doc(db, 'gaugeSheets', sheetId);
        const sheetDoc = await getDoc(sheetRef);
        
        if (!sheetDoc.exists()) {
            console.log(`No existing data found for ${sheetId}`);
            return null;
        }
        
        const sheetData = sheetDoc.data();
        
        // Load all wells for this sheet
        const wellsColl = collection(db, `gaugeSheets/${sheetId}/wells`);
        const wellsSnapshot = await getDocs(wellsColl);
        
        const wells = wellsSnapshot.docs.map(wellDoc => {
            const wellData = wellDoc.data();
            return {
                id: wellData.id,
                name: wellData.name,
                status: wellData.status || 'active',
                pressureReadings: wellData.pressureReadings || [],
                chemicalProgram: wellData.chemicalProgram || {},
                failureHistory: wellData.failureHistory || [],
                actionItems: wellData.actionItems || [],
                production: [],  // Don't load production history for merge
                wellTests: []    // Don't load well tests for merge
            };
        });
        
        console.log(`✓ Fetched ${wells.length} wells with manual edits from Firestore`);
        
        return {
            id: sheetData.id,
            name: sheetData.name,
            lastUpdated: sheetData.lastUpdated?.toDate?.() || sheetData.lastUpdated,
            rawRowCount: sheetData.rawRowCount || 0,
            wells: wells,
            batteryProduction: [],
            runTickets: []
        };
    } catch (error) {
        console.error(`Error fetching sheet ${sheetId} from Firestore:`, error);
        return null;
    }
}

/**
 * Update well data in Firestore (for manual edits)
 * Handles updates to actionItems, chemicalProgram, failureHistory, pressureReadings
 */
export async function updateWellInFirestore(sheetId, wellId, updates) {
    try {
        // If actionItems are being updated, recalculate hasActionItems flag
        if (updates.actionItems !== undefined) {
            updates.hasActionItems = updates.actionItems && updates.actionItems.length > 0;
        }
        
        const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellId);
        await setDoc(wellRef, updates, { merge: true });
        
        // Update local state immediately
        const well = appState.appData[sheetId]?.wells.find(w => w.id === wellId);
        if (well) {
            Object.assign(well, updates);
        }
        
        console.log(`✓ Manual edit saved for well ${wellId}`);
        return true;
    } catch (error) {
        console.error('Error updating well:', error);
        return false;
    }
}

/**
 * Clear all data from Firestore (for cache clearing)
 */
export async function clearFirestoreData() {
    try {
        console.log('Clearing Firestore data...');
        
        const gaugeSheetsColl = collection(db, 'gaugeSheets');
        const gaugeSheetSnapshot = await getDocs(gaugeSheetsColl);
        
        // Delete each gauge sheet and its subcollections
        for (const sheetDoc of gaugeSheetSnapshot.docs) {
            await deleteSheetFromFirestore(sheetDoc.id);
        }
        
        // Clear local state
        appState.appData = {};
        appState.dashboardData = null;
        
        console.log('Firestore data cleared successfully');
        return true;
    } catch (error) {
        console.error('Error clearing Firestore data:', error);
        return false;
    }
}

/**
 * Delete a sheet and all its subcollections from Firestore
 */
async function deleteSheetFromFirestore(sheetId) {
    try {
        // Delete wells and their subcollections
        const wellsColl = collection(db, `gaugeSheets/${sheetId}/wells`);
        const wellsSnapshot = await getDocs(wellsColl);
        
        for (const wellDoc of wellsSnapshot.docs) {
            // Delete production subcollection
            const productionColl = collection(db, `gaugeSheets/${sheetId}/wells/${wellDoc.id}/production`);
            const productionSnapshot = await getDocs(productionColl);
            for (const prodDoc of productionSnapshot.docs) {
                await deleteDoc(prodDoc.ref);
            }
            
            // Delete well tests subcollection
            const wellTestsColl = collection(db, `gaugeSheets/${sheetId}/wells/${wellDoc.id}/wellTests`);
            const wellTestsSnapshot = await getDocs(wellTestsColl);
            for (const testDoc of wellTestsSnapshot.docs) {
                await deleteDoc(testDoc.ref);
            }
            
            // Delete well document
            await deleteDoc(wellDoc.ref);
        }
        
        // Delete battery production
        const batteryProdColl = collection(db, `gaugeSheets/${sheetId}/batteryProduction`);
        const batteryProdSnapshot = await getDocs(batteryProdColl);
        for (const prodDoc of batteryProdSnapshot.docs) {
            await deleteDoc(prodDoc.ref);
        }
        
        // Delete run tickets
        const runTicketsColl = collection(db, `gaugeSheets/${sheetId}/runTickets`);
        const runTicketsSnapshot = await getDocs(runTicketsColl);
        for (const ticketDoc of runTicketsSnapshot.docs) {
            await deleteDoc(ticketDoc.ref);
        }
        
        // Delete sheet document
        const sheetRef = doc(db, 'gaugeSheets', sheetId);
        await deleteDoc(sheetRef);
        
        return true;
    } catch (error) {
        console.error(`Error deleting sheet ${sheetId}:`, error);
        return false;
    }
}

// Legacy function for backward compatibility
export async function loadDataFromFirestore() {
    console.warn('loadDataFromFirestore is deprecated. Use loadNavigationData + loadDashboardData instead.');
    await loadNavigationData();
    await loadDashboardData();
    return true;
}
