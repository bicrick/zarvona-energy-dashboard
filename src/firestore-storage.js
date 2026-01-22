import { 
    collection, 
    doc, 
    getDoc, 
    setDoc, 
    getDocs,
    writeBatch,
    deleteDoc,
    deleteField,
    query,
    where,
    orderBy,
    limit,
    collectionGroup,
    Timestamp
} from 'firebase/firestore';
import { db } from './firebase.js';
import { appState } from './config.js';
import { deleteFailureFile } from './firebase-storage-service.js';

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
            actionItems: wellData.actionItems || [],
            completedActions: wellData.completedActions || []
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
                    completedActions: wellData.completedActions || [],
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
                completedActions: wellData.completedActions || [],
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
            well.completedActions = wellData.completedActions || [];
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
                completedActions: wellData.completedActions || [],
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
 * Update well tests in Firestore (stored in subcollection)
 * @param {string} sheetId - The gauge sheet ID
 * @param {string} wellId - The well ID
 * @param {array} newTests - Array of new/edited well tests
 * @param {array} originalTests - Array of original well tests (for comparison)
 * @returns {Promise<boolean>} Success status
 */
export async function updateWellTests(sheetId, wellId, newTests, originalTests) {
    try {
        console.log(`Updating well tests for well ${wellId}`);
        
        const batch = writeBatch(db);
        let batchCount = 0;
        
        // Get sets of dates for comparison
        const newDates = new Set(newTests.filter(t => t.date).map(t => {
            const date = new Date(t.date);
            return date.toISOString().split('T')[0];
        }));
        
        const originalDates = new Set(originalTests.filter(t => t.date).map(t => {
            const date = new Date(t.date);
            return date.toISOString().split('T')[0];
        }));
        
        // Upsert new/modified tests
        for (const test of newTests) {
            if (!test.date) continue; // Skip tests without dates
            
            const dateKey = new Date(test.date).toISOString().split('T')[0];
            const testRef = doc(db, `gaugeSheets/${sheetId}/wells/${wellId}/wellTests`, dateKey);
            
            batch.set(testRef, {
                date: Timestamp.fromDate(new Date(test.date)),
                oil: test.oil !== null && test.oil !== undefined ? Number(test.oil) : 0,
                water: test.water !== null && test.water !== undefined ? Number(test.water) : 0,
                gas: test.gas !== null && test.gas !== undefined ? Number(test.gas) : 0
            }, { merge: true });
            
            batchCount++;
            
            // Commit if we reach batch limit
            if (batchCount >= 500) {
                await batch.commit();
                batchCount = 0;
            }
        }
        
        // Delete tests that were removed
        for (const dateKey of originalDates) {
            if (!newDates.has(dateKey)) {
                const testRef = doc(db, `gaugeSheets/${sheetId}/wells/${wellId}/wellTests`, dateKey);
                batch.delete(testRef);
                batchCount++;
                
                // Commit if we reach batch limit
                if (batchCount >= 500) {
                    await batch.commit();
                    batchCount = 0;
                }
            }
        }
        
        // Commit remaining operations
        if (batchCount > 0) {
            await batch.commit();
        }
        
        // Recalculate latestTest from newTests
        let latestTest = null;
        if (newTests.length > 0) {
            const validTests = newTests.filter(t => t.date);
            if (validTests.length > 0) {
                const sortedTests = [...validTests].sort((a, b) => 
                    new Date(b.date) - new Date(a.date)
                );
                const latest = sortedTests[0];
                latestTest = {
                    date: Timestamp.fromDate(new Date(latest.date)),
                    oil: latest.oil !== null && latest.oil !== undefined ? Number(latest.oil) : 0,
                    water: latest.water !== null && latest.water !== undefined ? Number(latest.water) : 0,
                    gas: latest.gas !== null && latest.gas !== undefined ? Number(latest.gas) : 0
                };
            }
        }
        
        // Update well document with new latestTest
        const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellId);
        await setDoc(wellRef, {
            latestTest: latestTest
        }, { merge: true });
        
        // Update local state
        const well = appState.appData[sheetId]?.wells.find(w => w.id === wellId);
        if (well) {
            well.wellTests = newTests.map(t => ({
                ...t,
                date: new Date(t.date)
            }));
            well.latestTest = latestTest;
        }
        
        console.log(`✓ Well tests updated successfully for well ${wellId}`);
        return true;
    } catch (error) {
        console.error('Error updating well tests:', error);
        return false;
    }
}

/**
 * Clear only extracted data from Firestore (preserve manual edits)
 * @param {Function} progressCallback - Optional callback to report progress (message)
 */
export async function clearExtractedDataOnly(progressCallback = null) {
    try {
        const logProgress = (message) => {
            console.log(message);
            if (progressCallback) progressCallback(message);
        };
        
        logProgress('Starting to clear extracted data...');
        
        const gaugeSheetsColl = collection(db, 'gaugeSheets');
        const gaugeSheetSnapshot = await getDocs(gaugeSheetsColl);
        
        const totalSheets = gaugeSheetSnapshot.docs.length;
        logProgress(`Found ${totalSheets} gauge sheets`);
        
        // Process each gauge sheet
        for (let i = 0; i < totalSheets; i++) {
            const sheetDoc = gaugeSheetSnapshot.docs[i];
            const sheetId = sheetDoc.id;
            const sheetData = sheetDoc.data();
            logProgress(`Processing ${i + 1}/${totalSheets}: ${sheetData.name || sheetId}`);
            
            try {
                // Delete wells' production and test data, but preserve manual fields
                const wellsColl = collection(db, `gaugeSheets/${sheetId}/wells`);
                const wellsSnapshot = await getDocs(wellsColl);
                const totalWells = wellsSnapshot.docs.length;
                
                logProgress(`Clearing production data for ${totalWells} wells...`);
                
                let wellsProcessed = 0;
                for (const wellDoc of wellsSnapshot.docs) {
                    const wellId = wellDoc.id;
                    wellsProcessed++;
                    logProgress(`Clearing well ${wellsProcessed}/${totalWells}: ${wellId}`);
                    
                    // Delete production subcollection in batches
                    await deleteBatchedSubcollection(
                        db, 
                        `gaugeSheets/${sheetId}/wells/${wellId}/production`
                    );
                    
                    // Delete well tests subcollection in batches
                    await deleteBatchedSubcollection(
                        db, 
                        `gaugeSheets/${sheetId}/wells/${wellId}/wellTests`
                    );
                    
                    // Update well document to clear computed fields, but preserve manual fields
                    const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellId);
                    await setDoc(wellRef, {
                        latestProduction: null,
                        latestTest: null,
                        dailyStats: null,
                        hasActionItems: wellDoc.data().hasActionItems || false
                        // Keep: actionItems, chemicalProgram, failureHistory, pressureReadings
                    }, { merge: true });
                }
                
                logProgress(`Clearing battery production and run tickets...`);
                
                // Delete battery production in batches
                await deleteBatchedSubcollection(db, `gaugeSheets/${sheetId}/batteryProduction`);
                
                // Delete run tickets in batches
                await deleteBatchedSubcollection(db, `gaugeSheets/${sheetId}/runTickets`);
                
                // Update sheet document to clear extracted data metadata
                const sheetRef = doc(db, 'gaugeSheets', sheetId);
                await setDoc(sheetRef, {
                    lastUpdated: Timestamp.now(),
                    rawRowCount: 0,
                    wellList: [],
                    wellCount: 0
                }, { merge: true });
                
                logProgress(`✓ Cleared extracted data for ${sheetData.name || sheetId}`);
            } catch (error) {
                logProgress(`⚠ Error clearing ${sheetData.name || sheetId}: ${error.message}`);
                console.error(`Error clearing sheet ${sheetId}:`, error);
                // Continue with next sheet instead of stopping
            }
        }
        
        logProgress('Clearing local state...');
        
        // Clear local state
        appState.appData = {};
        appState.dashboardData = null;
        
        logProgress('Extracted data cleared successfully! Manual edits preserved.');
        return true;
    } catch (error) {
        console.error('Error clearing extracted data:', error);
        if (progressCallback) progressCallback(`Error: ${error.message}`);
        return false;
    }
}

/**
 * Clear all data from Firestore (for complete database clearing)
 * @param {Function} progressCallback - Optional callback to report progress (message)
 */
export async function clearFirestoreData(progressCallback = null) {
    try {
        const logProgress = (message) => {
            console.log(message);
            if (progressCallback) progressCallback(message);
        };
        
        logProgress('Starting to clear all data...');
        
        const gaugeSheetsColl = collection(db, 'gaugeSheets');
        const gaugeSheetSnapshot = await getDocs(gaugeSheetsColl);
        
        const totalSheets = gaugeSheetSnapshot.docs.length;
        logProgress(`Found ${totalSheets} gauge sheets to delete`);
        
        // Delete each gauge sheet and its subcollections
        for (let i = 0; i < totalSheets; i++) {
            const sheetDoc = gaugeSheetSnapshot.docs[i];
            const sheetData = sheetDoc.data();
            logProgress(`Deleting ${i + 1}/${totalSheets}: ${sheetData.name || sheetDoc.id}`);
            
            try {
                await deleteSheetFromFirestore(sheetDoc.id, logProgress);
            } catch (error) {
                logProgress(`⚠ Error deleting ${sheetData.name || sheetDoc.id}: ${error.message}`);
                console.error(`Error deleting sheet ${sheetDoc.id}:`, error);
                // Continue with next sheet instead of stopping
            }
        }
        
        logProgress('Clearing local state...');
        
        // Clear local state
        appState.appData = {};
        appState.dashboardData = null;
        
        logProgress('All data cleared successfully!');
        return true;
    } catch (error) {
        console.error('Error clearing Firestore data:', error);
        if (progressCallback) progressCallback(`Error: ${error.message}`);
        return false;
    }
}

/**
 * Delete a sheet and all its subcollections from Firestore
 * @param {string} sheetId - The sheet ID to delete
 * @param {Function} progressCallback - Optional callback to report progress
 */
async function deleteSheetFromFirestore(sheetId, progressCallback = null) {
    try {
        const logProgress = (message) => {
            if (progressCallback) progressCallback(message);
        };
        
        // Delete wells and their subcollections
        const wellsColl = collection(db, `gaugeSheets/${sheetId}/wells`);
        const wellsSnapshot = await getDocs(wellsColl);
        const totalWells = wellsSnapshot.docs.length;
        
        logProgress(`Deleting ${totalWells} wells and their data...`);
        
        let wellsProcessed = 0;
        for (const wellDoc of wellsSnapshot.docs) {
            wellsProcessed++;
            logProgress(`Deleting well ${wellsProcessed}/${totalWells}: ${wellDoc.id}`);
            
            // Delete production subcollection in batches
            await deleteBatchedSubcollection(
                db, 
                `gaugeSheets/${sheetId}/wells/${wellDoc.id}/production`
            );
            
            // Delete well tests subcollection in batches
            await deleteBatchedSubcollection(
                db, 
                `gaugeSheets/${sheetId}/wells/${wellDoc.id}/wellTests`
            );
            
            // Delete well document
            await deleteDoc(wellDoc.ref);
        }
        
        logProgress(`Deleting battery production and run tickets...`);
        
        // Delete battery production in batches
        await deleteBatchedSubcollection(db, `gaugeSheets/${sheetId}/batteryProduction`);
        
        // Delete run tickets in batches
        await deleteBatchedSubcollection(db, `gaugeSheets/${sheetId}/runTickets`);
        
        // Delete sheet document
        const sheetRef = doc(db, 'gaugeSheets', sheetId);
        await deleteDoc(sheetRef);
        
        logProgress(`✓ Deleted sheet ${sheetId}`);
        return true;
    } catch (error) {
        console.error(`Error deleting sheet ${sheetId}:`, error);
        throw error; // Re-throw to let caller handle it
    }
}

/**
 * Helper function to delete a subcollection in batches
 * @param {object} db - Firestore database instance
 * @param {string} collectionPath - Path to the collection to delete
 */
async function deleteBatchedSubcollection(db, collectionPath) {
    const coll = collection(db, collectionPath);
    const snapshot = await getDocs(coll);
    
    if (snapshot.empty) {
        return;
    }
    
    // Delete in batches of 500 (Firestore limit)
    const batchSize = 500;
    let batch = writeBatch(db);
    let operationCount = 0;
    let batchesCommitted = 0;
    
    for (const docSnapshot of snapshot.docs) {
        batch.delete(docSnapshot.ref);
        operationCount++;
        
        // Commit batch when it reaches 500 operations
        if (operationCount >= batchSize) {
            await batch.commit();
            batchesCommitted++;
            console.log(`  Committed batch ${batchesCommitted} (${batchSize} deletes)`);
            batch = writeBatch(db);
            operationCount = 0;
            
            // Small delay to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    
    // Commit remaining operations
    if (operationCount > 0) {
        await batch.commit();
        batchesCommitted++;
        console.log(`  Committed final batch (${operationCount} deletes)`);
    }
}

// ============================================================================
// FAILURE HISTORY CRUD OPERATIONS
// ============================================================================

/**
 * Add a new failure history entry to a well
 * @param {string} sheetId - The gauge sheet ID
 * @param {string} wellId - The well ID
 * @param {object} failureData - The failure data including file metadata
 * @param {string} failureData.id - Unique failure ID (UUID)
 * @param {Date} failureData.failureDate - Failure date (required)
 * @param {string} failureData.notes - Notes (optional)
 * @param {string} failureData.fileName - Original file name
 * @param {string} failureData.fileUrl - Firebase Storage download URL
 * @param {string} failureData.filePath - Firebase Storage path
 * @param {number} failureData.fileSize - File size in bytes
 * @returns {Promise<boolean>} Success status
 */
export async function addFailureHistoryEntry(sheetId, wellId, failureData) {
    try {
        console.log(`Adding failure history entry for well ${wellId} in sheet ${sheetId}`);
        
        const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellId);
        const wellDoc = await getDoc(wellRef);
        
        if (!wellDoc.exists()) {
            console.error(`Well ${wellId} not found in sheet ${sheetId}`);
            return false;
        }
        
        const wellData = wellDoc.data();
        const currentFailureHistory = wellData.failureHistory || [];
        
        // Create new failure entry with Timestamp
        const newEntry = {
            id: failureData.id,
            failureDate: Timestamp.fromDate(new Date(failureData.failureDate)),
            notes: failureData.notes || '',
            fileName: failureData.fileName,
            fileUrl: failureData.fileUrl,
            filePath: failureData.filePath,
            fileSize: failureData.fileSize,
            uploadedAt: Timestamp.now()
        };
        
        // Add to array
        const updatedFailureHistory = [...currentFailureHistory, newEntry];
        
        // Sort by failure date (newest first)
        updatedFailureHistory.sort((a, b) => {
            const dateA = a.failureDate?.toDate?.() || new Date(a.failureDate);
            const dateB = b.failureDate?.toDate?.() || new Date(b.failureDate);
            return dateB - dateA;
        });
        
        // Update Firestore
        await setDoc(wellRef, {
            failureHistory: updatedFailureHistory
        }, { merge: true });
        
        // Update local state
        const well = appState.appData[sheetId]?.wells.find(w => w.id === wellId);
        if (well) {
            well.failureHistory = updatedFailureHistory;
        }
        
        console.log(`✓ Failure history entry added successfully`);
        return true;
    } catch (error) {
        console.error('Error adding failure history entry:', error);
        return false;
    }
}

/**
 * Delete a failure history entry from a well
 * @param {string} sheetId - The gauge sheet ID
 * @param {string} wellId - The well ID
 * @param {string} failureId - The failure entry ID to delete
 * @returns {Promise<boolean>} Success status
 */
export async function deleteFailureHistoryEntry(sheetId, wellId, failureId) {
    try {
        console.log(`Deleting failure history entry ${failureId} for well ${wellId}`);
        
        const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellId);
        const wellDoc = await getDoc(wellRef);
        
        if (!wellDoc.exists()) {
            console.error(`Well ${wellId} not found in sheet ${sheetId}`);
            return false;
        }
        
        const wellData = wellDoc.data();
        const currentFailureHistory = wellData.failureHistory || [];
        
        // Find the entry to delete (to get file path)
        const entryToDelete = currentFailureHistory.find(f => f.id === failureId);
        
        if (!entryToDelete) {
            console.warn(`Failure entry ${failureId} not found`);
            return false;
        }
        
        // Delete file from Storage
        if (entryToDelete.filePath) {
            try {
                await deleteFailureFile(entryToDelete.filePath);
                console.log(`✓ Deleted file from storage: ${entryToDelete.filePath}`);
            } catch (error) {
                console.error('Error deleting file from storage:', error);
                // Continue with Firestore deletion even if storage deletion fails
            }
        }
        
        // Remove from array
        const updatedFailureHistory = currentFailureHistory.filter(f => f.id !== failureId);
        
        // Update Firestore
        await setDoc(wellRef, {
            failureHistory: updatedFailureHistory
        }, { merge: true });
        
        // Update local state
        const well = appState.appData[sheetId]?.wells.find(w => w.id === wellId);
        if (well) {
            well.failureHistory = updatedFailureHistory;
        }
        
        console.log(`✓ Failure history entry deleted successfully`);
        return true;
    } catch (error) {
        console.error('Error deleting failure history entry:', error);
        return false;
    }
}

/**
 * Toggle completion status of an action item
 * @param {string} sheetId - The gauge sheet ID
 * @param {string} wellId - The well ID
 * @param {number} itemIndex - Index of the action item to toggle
 * @param {string} completedBy - Email of user who completed the action
 * @returns {Promise<boolean>} Success status
 */
export async function toggleActionItemCompletion(sheetId, wellId, itemIndex, completedBy) {
    try {
        const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellId);
        const wellDoc = await getDoc(wellRef);
        
        if (!wellDoc.exists()) {
            console.error(`Well ${wellId} not found in sheet ${sheetId}`);
            return false;
        }
        
        const wellData = wellDoc.data();
        const currentActionItems = wellData.actionItems || [];
        
        if (itemIndex < 0 || itemIndex >= currentActionItems.length) {
            console.error(`Invalid action item index: ${itemIndex}`);
            return false;
        }
        
        // Get the action item
        const actionItem = currentActionItems[itemIndex];
        
        // Handle both old string format and new object format
        let updatedActionItems = [...currentActionItems];
        
        if (typeof actionItem === 'string') {
            // Convert old format to new format and mark as completed
            updatedActionItems[itemIndex] = {
                text: actionItem,
                completed: true,
                completedDate: Timestamp.now(),
                completedBy: completedBy
            };
        } else {
            // Toggle completion status
            if (actionItem.completed) {
                // Uncomplete: remove completion metadata
                updatedActionItems[itemIndex] = {
                    text: actionItem.text,
                    completed: false,
                    completedDate: null,
                    completedBy: null
                };
            } else {
                // Complete: add completion metadata
                updatedActionItems[itemIndex] = {
                    ...actionItem,
                    completed: true,
                    completedDate: Timestamp.now(),
                    completedBy: completedBy
                };
            }
        }
        
        // Check if there are any active (non-completed) action items
        const hasActiveItems = updatedActionItems.some(item => 
            typeof item === 'string' || !item.completed
        );
        
        // Update Firestore
        const updates = {
            actionItems: updatedActionItems,
            hasActionItems: hasActiveItems
        };
        
        await setDoc(wellRef, updates, { merge: true });
        
        // Update local state
        const well = appState.appData[sheetId]?.wells.find(w => w.id === wellId);
        if (well) {
            well.actionItems = updatedActionItems;
            well.hasActionItems = hasActiveItems;
        }
        
        return true;
    } catch (error) {
        console.error('Error toggling action item completion:', error);
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

// ============================================================================
// FLUID LEVELS - SAVE/LOAD FUNCTIONS
// ============================================================================

/**
 * Save fluid level data to Firestore
 * Data structure: fluidLevels/{normalizedWellName}/{ wellName, readings: [] }
 * Merges new readings with existing ones by date
 * @param {array} readings - Array of reading objects from parser
 * @param {Function} progressCallback - Optional callback to report progress (message, percent)
 * @returns {Promise<boolean>} Success status
 */
export async function saveFluidLevelData(readings, progressCallback = null) {
    try {
        const logProgress = (message, percent) => {
            console.log(message);
            if (progressCallback) progressCallback(message, percent);
        };
        
        logProgress('Organizing fluid level readings by well...', 0);
        
        if (!readings || readings.length === 0) {
            logProgress('No fluid level readings to save', 100);
            return true;
        }
        
        // Group readings by normalized well name
        const readingsByWell = {};
        
        for (const reading of readings) {
            const normalizedName = reading.wellName
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '');
            
            if (!readingsByWell[normalizedName]) {
                readingsByWell[normalizedName] = {
                    wellName: reading.wellName,
                    readings: []
                };
            }
            
            readingsByWell[normalizedName].readings.push({
                date: Timestamp.fromDate(new Date(reading.date)),
                strokeLength: reading.strokeLength,
                spm: reading.spm,
                runTime: reading.runTime,
                gasLiquidLevel: reading.gasLiquidLevel,
                gasFreeLevel: reading.gasFreeLevel,
                pumpIntakePressure: reading.pumpIntakePressure
            });
        }
        
        const wellNames = Object.keys(readingsByWell);
        const totalWells = wellNames.length;
        
        logProgress(`Saving fluid level data for ${totalWells} wells...`, 10);
        
        // Save each well's readings (merge with existing)
        for (let i = 0; i < totalWells; i++) {
            const normalizedName = wellNames[i];
            const wellData = readingsByWell[normalizedName];
            
            const percent = 10 + Math.floor((i / totalWells) * 80);
            logProgress(`Saving readings for ${wellData.wellName}...`, percent);
            
            const wellRef = doc(db, 'fluidLevels', normalizedName);
            
            // Fetch existing readings to merge
            const existingDoc = await getDoc(wellRef);
            let existingReadings = [];
            
            if (existingDoc.exists()) {
                existingReadings = existingDoc.data().readings || [];
            }
            
            // Merge readings by date (use Map to prevent duplicates)
            const readingsMap = new Map();
            
            // Add existing readings first
            for (const reading of existingReadings) {
                const dateKey = reading.date.toDate().toISOString().split('T')[0];
                readingsMap.set(dateKey, reading);
            }
            
            // Add/update with new readings
            for (const reading of wellData.readings) {
                const dateKey = reading.date.toDate().toISOString().split('T')[0];
                readingsMap.set(dateKey, reading);
            }
            
            // Convert back to array and sort by date (newest first)
            const mergedReadings = Array.from(readingsMap.values());
            mergedReadings.sort((a, b) => {
                const dateA = a.date.toDate();
                const dateB = b.date.toDate();
                return dateB - dateA;
            });
            
            // Save to Firestore
            await setDoc(wellRef, {
                wellName: wellData.wellName,
                normalizedName: normalizedName,
                readings: mergedReadings,
                lastUpdated: Timestamp.now()
            });
        }
        
        logProgress(`Saved fluid level data for ${totalWells} wells successfully`, 100);
        return true;
    } catch (error) {
        console.error('Error saving fluid level data:', error);
        return false;
    }
}

/**
 * Load all fluid level data from Firestore
 * @param {Function} progressCallback - Optional callback to report progress (message)
 * @returns {Promise<object>} Object containing fluid levels keyed by normalized well name
 */
export async function loadFluidLevelData(progressCallback = null) {
    try {
        const logProgress = (message) => {
            console.log(message);
            if (progressCallback) progressCallback(message);
        };
        
        logProgress('Loading fluid level data...');
        
        const fluidLevelsColl = collection(db, 'fluidLevels');
        const snapshot = await getDocs(fluidLevelsColl);
        
        const fluidLevels = {};
        
        snapshot.docs.forEach(doc => {
            const data = doc.data();
            fluidLevels[doc.id] = {
                wellName: data.wellName,
                normalizedName: data.normalizedName,
                readings: data.readings.map(r => ({
                    date: r.date.toDate(),
                    strokeLength: r.strokeLength,
                    spm: r.spm,
                    runTime: r.runTime,
                    gasLiquidLevel: r.gasLiquidLevel,
                    gasFreeLevel: r.gasFreeLevel,
                    pumpIntakePressure: r.pumpIntakePressure
                })),
                lastUpdated: data.lastUpdated?.toDate?.() || data.lastUpdated
            };
        });
        
        logProgress(`✓ Loaded fluid level data for ${Object.keys(fluidLevels).length} wells`);
        
        // Update appState
        appState.fluidLevels = fluidLevels;
        
        return fluidLevels;
    } catch (error) {
        console.error('Error loading fluid level data:', error);
        appState.fluidLevels = {};
        return {};
    }
}

// ============================================================================
// CHEMICAL PROGRAMS - SAVE/LOAD FUNCTIONS
// ============================================================================

/**
 * Save chemical program data from Master Chemical Sheet
 * @param {array} chemicalPrograms - Array of chemical program objects from parser
 * @param {Function} progressCallback - Optional callback to report progress (message, percent)
 * @returns {Promise<boolean>} Success status
 */
export async function saveChemicalProgramData(chemicalPrograms, progressCallback = null) {
    try {
        const logProgress = (message, percent) => {
            console.log(message);
            if (progressCallback) progressCallback(message, percent);
        };
        
        logProgress('Saving chemical program data...', 0);
        
        if (!chemicalPrograms || chemicalPrograms.length === 0) {
            logProgress('No chemical programs to save', 100);
            return true;
        }
        
        const batch = writeBatch(db);
        const total = chemicalPrograms.length;
        let processed = 0;
        
        for (const program of chemicalPrograms) {
            // Use normalized well name as document ID for easier lookups
            const normalizedName = program.wellName
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '');
            
            const programRef = doc(db, 'chemicalPrograms', normalizedName);
            
            batch.set(programRef, {
                wellName: program.wellName,
                batteryName: program.batteryName,
                testData: program.testData || {},
                truckTreating: program.truckTreating || {},
                continuous: program.continuous || {},
                lastUpdated: Timestamp.now()
            });
            
            processed++;
            const percent = Math.floor((processed / total) * 90);
            
            // Commit in batches of 500 (Firestore limit)
            if (processed % 500 === 0) {
                logProgress(`Saving chemical programs ${processed}/${total}...`, percent);
                await batch.commit();
            }
        }
        
        // Commit remaining
        if (processed % 500 !== 0) {
            await batch.commit();
        }
        
        logProgress(`Saved ${total} chemical programs successfully`, 100);
        return true;
    } catch (error) {
        console.error('Error saving chemical program data:', error);
        return false;
    }
}

/**
 * Load all chemical program data at startup
 * @param {Function} progressCallback - Optional callback to report progress (message)
 * @returns {Promise<object>} Object containing chemical programs keyed by normalized name
 */
export async function loadChemicalProgramData(progressCallback = null) {
    try {
        const logProgress = (message) => {
            console.log(message);
            if (progressCallback) progressCallback(message);
        };
        
        logProgress('Loading chemical program data...');
        
        const chemicalProgramsColl = collection(db, 'chemicalPrograms');
        const snapshot = await getDocs(chemicalProgramsColl);
        
        const programs = {};
        
        snapshot.docs.forEach(doc => {
            const data = doc.data();
            programs[doc.id] = {
                wellName: data.wellName,
                batteryName: data.batteryName,
                testData: data.testData || {},
                truckTreating: data.truckTreating || {},
                continuous: data.continuous || {},
                lastUpdated: data.lastUpdated?.toDate?.() || data.lastUpdated
            };
        });
        
        logProgress(`✓ Loaded ${Object.keys(programs).length} chemical programs`);
        
        // Update appState
        appState.chemicalPrograms = programs;
        
        return programs;
    } catch (error) {
        console.error('Error loading chemical program data:', error);
        appState.chemicalPrograms = {};
        return {};
    }
}

/**
 * Load Master Chemical Sheet data formatted for table display
 * @returns {Promise<void>} Loads data into appState.chemicalPrograms
 */
export async function loadMasterChemicalData() {
    try {
        // Always reload to get latest data
        await loadChemicalProgramData();
        console.log(`Loaded ${Object.keys(appState.chemicalPrograms).length} chemical programs`);
    } catch (error) {
        console.error('Error loading Master Chemical data:', error);
        throw error;
    }
}

/**
 * Get chemical program for a specific well (with fuzzy matching)
 * @param {string} wellName - The well name to search for
 * @returns {object|null} Chemical program data or null if not found
 */
export function getChemicalProgramForWell(wellName) {
    if (!wellName || !appState.chemicalPrograms) {
        return null;
    }
    
    // Import normalizeWellName from chemical-matcher
    // Try exact match first (normalized)
    const normalized = wellName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');
    
    if (appState.chemicalPrograms[normalized]) {
        return appState.chemicalPrograms[normalized];
    }
    
    // Try fuzzy matching if exact match fails
    // This will be handled by the chemical-matcher module in the calling code
    return null;
}

/**
 * Update chemical program values in Firestore (for inline editing)
 * @param {object} editedCells - Object with structure: { normalizedWellName: { chemicalName: { category: value } } }
 * @returns {Promise<boolean>} Success status
 */
export async function updateChemicalProgramValues(editedCells) {
    try {
        if (!editedCells || Object.keys(editedCells).length === 0) {
            console.log('No changes to save');
            return true;
        }
        
        const batch = writeBatch(db);
        let updateCount = 0;
        
        for (const [normalizedWellName, chemicalChanges] of Object.entries(editedCells)) {
            const docRef = doc(db, 'chemicalPrograms', normalizedWellName);
            const updates = {};
            
            // Build the update object with nested field paths
            for (const [chemicalName, categories] of Object.entries(chemicalChanges)) {
                for (const [category, value] of Object.entries(categories)) {
                    // Use dot notation for nested field updates
                    // If value is null, mark field for deletion
                    if (value === null) {
                        updates[`${category}.${chemicalName}`] = deleteField();
                    } else {
                        updates[`${category}.${chemicalName}`] = Number(value);
                    }
                    updateCount++;
                }
            }
            
            // Add lastUpdated timestamp
            updates.lastUpdated = Timestamp.now();
            
            // Add to batch
            batch.update(docRef, updates);
        }
        
        // Commit all updates
        await batch.commit();
        
        console.log(`Successfully updated ${updateCount} chemical values across ${Object.keys(editedCells).length} wells`);
        
        // Update appState with new values
        for (const [normalizedWellName, chemicalChanges] of Object.entries(editedCells)) {
            if (appState.chemicalPrograms[normalizedWellName]) {
                for (const [chemicalName, categories] of Object.entries(chemicalChanges)) {
                    for (const [category, value] of Object.entries(categories)) {
                        if (!appState.chemicalPrograms[normalizedWellName][category]) {
                            appState.chemicalPrograms[normalizedWellName][category] = {};
                        }
                        
                        // If value is null, delete the field from appState
                        if (value === null) {
                            delete appState.chemicalPrograms[normalizedWellName][category][chemicalName];
                        } else {
                            appState.chemicalPrograms[normalizedWellName][category][chemicalName] = Number(value);
                        }
                    }
                }
                appState.chemicalPrograms[normalizedWellName].lastUpdated = new Date();
            }
        }
        
        return true;
    } catch (error) {
        console.error('Error updating chemical program values:', error);
        console.error('Error details:', {
            code: error.code,
            message: error.message,
            name: error.name
        });
        
        // Re-throw the error so the UI can provide specific feedback
        throw error;
    }
}

/**
 * Match and update all existing wells with chemical program data
 * Uses fuzzy matching to find wells that correspond to chemical programs
 * @param {Function} progressCallback - Optional callback to report progress (message, percent)
 * @returns {Promise<object>} Object with match statistics
 */
export async function matchChemicalProgramsToExistingWells(progressCallback = null) {
    try {
        const logProgress = (message, percent) => {
            console.log(message);
            if (progressCallback) progressCallback(message, percent);
        };
        
        logProgress('Loading chemical programs...', 0);
        
        // Ensure chemical programs are loaded
        await loadChemicalProgramData();
        
        if (Object.keys(appState.chemicalPrograms).length === 0) {
            logProgress('No chemical programs to match', 100);
            return { matched: 0, total: 0, updated: 0 };
        }
        
        logProgress('Loading all gauge sheets...', 5);
        
        // Import the chemical matcher
        const { findChemicalProgramMatch } = await import('./chemical-matcher.js');
        
        // Get all gauge sheets
        const gaugeSheetsColl = collection(db, 'gaugeSheets');
        const sheetsSnapshot = await getDocs(gaugeSheetsColl);
        
        let totalWells = 0;
        let matchedWells = 0;
        let updatedWells = 0;
        
        const sheets = sheetsSnapshot.docs;
        const totalSheets = sheets.length;
        
        logProgress(`Found ${totalSheets} gauge sheets to process`, 10);
        
        for (let sheetIdx = 0; sheetIdx < totalSheets; sheetIdx++) {
            const sheetDoc = sheets[sheetIdx];
            const sheetId = sheetDoc.id;
            const sheetPercent = 10 + Math.floor((sheetIdx / totalSheets) * 80);
            
            logProgress(`Processing sheet ${sheetIdx + 1}/${totalSheets}: ${sheetId}`, sheetPercent);
            
            // Get all wells in this sheet
            const wellsColl = collection(db, 'gaugeSheets', sheetId, 'wells');
            const wellsSnapshot = await getDocs(wellsColl);
            
            const batch = writeBatch(db);
            let batchCount = 0;
            
            for (const wellDoc of wellsSnapshot.docs) {
                const wellData = wellDoc.data();
                totalWells++;
                
                // Try to find a matching chemical program
                const match = findChemicalProgramMatch(wellData.name, appState.chemicalPrograms);
                
                if (match) {
                    matchedWells++;
                    
                    // Check if the chemical program data has changed
                    const existingProgram = wellData.chemicalProgram || {};
                    const hasChanges = 
                        JSON.stringify(existingProgram.truckTreating) !== JSON.stringify(match.truckTreating) ||
                        JSON.stringify(existingProgram.continuous) !== JSON.stringify(match.continuous) ||
                        JSON.stringify(existingProgram.testData) !== JSON.stringify(match.testData);
                    
                    if (hasChanges) {
                        // Update the well with the matched chemical program
                        const wellRef = doc(db, 'gaugeSheets', sheetId, 'wells', wellDoc.id);
                        batch.update(wellRef, {
                            chemicalProgram: {
                                truckTreating: match.truckTreating || {},
                                continuous: match.continuous || {},
                                testData: match.testData || {},
                                matchedFrom: match.wellName,
                                lastUpdated: Timestamp.now()
                            }
                        });
                        
                        updatedWells++;
                        batchCount++;
                        
                        // Commit batch if we hit 500 operations (Firestore limit)
                        if (batchCount >= 500) {
                            await batch.commit();
                            batchCount = 0;
                        }
                    }
                }
            }
            
            // Commit remaining operations for this sheet
            if (batchCount > 0) {
                await batch.commit();
            }
        }
        
        logProgress(`Matching complete: ${matchedWells}/${totalWells} wells matched, ${updatedWells} updated`, 100);
        
        return {
            total: totalWells,
            matched: matchedWells,
            updated: updatedWells
        };
    } catch (error) {
        console.error('Error matching chemical programs to wells:', error);
        throw error;
    }
}
