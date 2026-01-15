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
    limit,
    Timestamp
} from 'firebase/firestore';
import { db } from './firebase.js';
import { appState } from './config.js';

/**
 * Load all gauge sheets data from Firestore
 * @returns {Promise<boolean>} Success status
 */
export async function loadDataFromFirestore() {
    try {
        console.log('Loading data from Firestore...');
        
        // Get all gauge sheets
        const gaugeSheetsColl = collection(db, 'gaugeSheets');
        const gaugeSheetSnapshot = await getDocs(gaugeSheetsColl);
        
        const newAppData = {};
        
        // Load each gauge sheet and its nested data
        for (const sheetDoc of gaugeSheetSnapshot.docs) {
            const sheetData = sheetDoc.data();
            const sheetId = sheetDoc.id;
            
            // Initialize sheet structure
            newAppData[sheetId] = {
                id: sheetData.id,
                name: sheetData.name,
                lastUpdated: sheetData.lastUpdated?.toDate?.() || sheetData.lastUpdated,
                rawRowCount: sheetData.rawRowCount || 0,
                wells: [],
                batteryProduction: [],
                runTickets: []
            };
            
            // Load wells for this sheet
            const wellsColl = collection(db, `gaugeSheets/${sheetId}/wells`);
            const wellsSnapshot = await getDocs(wellsColl);
            
            for (const wellDoc of wellsSnapshot.docs) {
                const wellData = wellDoc.data();
                const wellId = wellDoc.id;
                
                // Load production data for this well
                const productionColl = collection(db, `gaugeSheets/${sheetId}/wells/${wellId}/production`);
                const productionSnapshot = await getDocs(productionColl);
                const production = productionSnapshot.docs.map(doc => ({
                    ...doc.data(),
                    date: doc.data().date?.toDate?.() || new Date(doc.data().date)
                }));
                
                // Load well tests for this well
                const wellTestsColl = collection(db, `gaugeSheets/${sheetId}/wells/${wellId}/wellTests`);
                const wellTestsSnapshot = await getDocs(wellTestsColl);
                const wellTests = wellTestsSnapshot.docs.map(doc => ({
                    ...doc.data(),
                    date: doc.data().date?.toDate?.() || new Date(doc.data().date)
                }));
                
                // Add well with all its data
                newAppData[sheetId].wells.push({
                    id: wellData.id,
                    name: wellData.name,
                    production: production,
                    wellTests: wellTests,
                    pressureReadings: wellData.pressureReadings || [],
                    chemicalProgram: wellData.chemicalProgram || {},
                    failureHistory: wellData.failureHistory || [],
                    actionItems: wellData.actionItems || []
                });
            }
            
            // Load battery production for this sheet
            const batteryProdColl = collection(db, `gaugeSheets/${sheetId}/batteryProduction`);
            const batteryProdSnapshot = await getDocs(batteryProdColl);
            newAppData[sheetId].batteryProduction = batteryProdSnapshot.docs.map(doc => ({
                ...doc.data(),
                date: doc.data().date?.toDate?.() || new Date(doc.data().date)
            }));
            
            // Load run tickets for this sheet
            const runTicketsColl = collection(db, `gaugeSheets/${sheetId}/runTickets`);
            const runTicketsSnapshot = await getDocs(runTicketsColl);
            newAppData[sheetId].runTickets = runTicketsSnapshot.docs.map(doc => doc.data());
        }
        
        // Update app state
        appState.appData = newAppData;
        console.log('Data loaded from Firestore successfully');
        return true;
    } catch (error) {
        console.error('Error loading data from Firestore:', error);
        appState.appData = {};
        return false;
    }
}

/**
 * Save a gauge sheet's data to Firestore (incremental update)
 * @param {string} sheetId - The gauge sheet ID
 * @param {object} sheetData - The sheet data to save
 * @param {boolean} fullReplace - If true, replace all data. If false, only update new/changed data
 * @returns {Promise<boolean>} Success status
 */
export async function saveSheetToFirestore(sheetId, sheetData, fullReplace = false) {
    try {
        console.log(`Saving sheet ${sheetId} to Firestore...`);
        
        const batch = writeBatch(db);
        
        // Save gauge sheet document
        const sheetRef = doc(db, 'gaugeSheets', sheetId);
        batch.set(sheetRef, {
            id: sheetData.id,
            name: sheetData.name,
            lastUpdated: Timestamp.fromDate(new Date(sheetData.lastUpdated)),
            rawRowCount: sheetData.rawRowCount || 0
        }, { merge: true });
        
        // Commit the batch for the main sheet
        await batch.commit();
        
        // Save wells (with their nested collections)
        if (sheetData.wells && sheetData.wells.length > 0) {
            for (const well of sheetData.wells) {
                await saveWellToFirestore(sheetId, well, fullReplace);
            }
        }
        
        // Save battery production (incremental)
        if (sheetData.batteryProduction && sheetData.batteryProduction.length > 0) {
            await saveBatteryProductionToFirestore(sheetId, sheetData.batteryProduction, fullReplace);
        }
        
        // Save run tickets (incremental)
        if (sheetData.runTickets && sheetData.runTickets.length > 0) {
            await saveRunTicketsToFirestore(sheetId, sheetData.runTickets, fullReplace);
        }
        
        console.log(`Sheet ${sheetId} saved successfully`);
        return true;
    } catch (error) {
        console.error(`Error saving sheet ${sheetId}:`, error);
        return false;
    }
}

/**
 * Save a well's data to Firestore
 * @param {string} sheetId - The gauge sheet ID
 * @param {object} wellData - The well data to save
 * @param {boolean} fullReplace - If true, replace all data. If false, only update recent data
 * @returns {Promise<boolean>} Success status
 */
async function saveWellToFirestore(sheetId, wellData, fullReplace = false) {
    try {
        const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellData.id);
        
        // Save well document (without production and wellTests arrays)
        await setDoc(wellRef, {
            id: wellData.id,
            name: wellData.name,
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
 * @param {string} sheetId - The gauge sheet ID
 * @param {string} wellId - The well ID
 * @param {array} production - Production data array
 * @param {boolean} fullReplace - If true, save all data
 * @returns {Promise<boolean>} Success status
 */
async function saveProductionDataIncremental(sheetId, wellId, production, fullReplace) {
    try {
        // If full replace, save last 500 records
        if (fullReplace) {
            const batch = writeBatch(db);
            const productionToSave = production.slice(-500);
            
            productionToSave.forEach((prod, index) => {
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
 * @param {string} sheetId - The gauge sheet ID
 * @param {string} wellId - The well ID
 * @param {array} wellTests - Well tests array
 * @param {boolean} fullReplace - If true, save all data
 * @returns {Promise<boolean>} Success status
 */
async function saveWellTestsIncremental(sheetId, wellId, wellTests, fullReplace) {
    try {
        // Well tests are typically smaller, so we can be less aggressive
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
 * @param {string} sheetId - The gauge sheet ID
 * @param {array} batteryProduction - Array of battery production data
 * @param {boolean} fullReplace - If true, save all data
 * @returns {Promise<boolean>} Success status
 */
async function saveBatteryProductionToFirestore(sheetId, batteryProduction, fullReplace = false) {
    try {
        // Incremental: only save last 30 days
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
 * @param {string} sheetId - The gauge sheet ID
 * @param {array} runTickets - Array of run ticket data
 * @param {boolean} fullReplace - If true, save all data
 * @returns {Promise<boolean>} Success status
 */
async function saveRunTicketsToFirestore(sheetId, runTickets, fullReplace = false) {
    try {
        // Incremental: only save last 30 days
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
                // Use date + index as ID for uniqueness
                const dateKey = ticket.date ? new Date(ticket.date).toISOString().split('T')[0] : 'unknown';
                const ticketRef = doc(db, `gaugeSheets/${sheetId}/runTickets`, `${dateKey}_${index}`);
                
                // Handle date conversion safely
                let dateValue = null;
                if (ticket.date) {
                    const parsedDate = new Date(ticket.date);
                    // Check if date is valid
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

/**
 * Update well data in Firestore (for edits)
 * @param {string} sheetId - The gauge sheet ID
 * @param {string} wellId - The well ID
 * @param {object} updates - Object with fields to update
 * @returns {Promise<boolean>} Success status
 */
export async function updateWellInFirestore(sheetId, wellId, updates) {
    try {
        const wellRef = doc(db, `gaugeSheets/${sheetId}/wells`, wellId);
        await setDoc(wellRef, updates, { merge: true });
        
        // Update local state
        const well = appState.appData[sheetId]?.wells.find(w => w.id === wellId);
        if (well) {
            Object.assign(well, updates);
        }
        
        return true;
    } catch (error) {
        console.error('Error updating well:', error);
        return false;
    }
}

/**
 * Clear all data from Firestore (for cache clearing)
 * @returns {Promise<boolean>} Success status
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
        
        console.log('Firestore data cleared successfully');
        return true;
    } catch (error) {
        console.error('Error clearing Firestore data:', error);
        return false;
    }
}

/**
 * Delete a sheet and all its subcollections from Firestore
 * @param {string} sheetId - The gauge sheet ID to delete
 * @returns {Promise<boolean>} Success status
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

// ============================================================================
// PROGRESSIVE LOADING FUNCTIONS
// ============================================================================

/**
 * Load only gauge sheet metadata (no wells, no production data)
 * This is the minimal data needed to show the navigation
 * @returns {Promise<boolean>} Success status
 */
export async function loadGaugeSheetMetadata() {
    try {
        console.log('Loading gauge sheet metadata...');
        
        const gaugeSheetsColl = collection(db, 'gaugeSheets');
        const gaugeSheetSnapshot = await getDocs(gaugeSheetsColl);
        
        const newAppData = {};
        
        for (const sheetDoc of gaugeSheetSnapshot.docs) {
            const sheetData = sheetDoc.data();
            const sheetId = sheetDoc.id;
            
            // Initialize sheet structure with minimal data
            newAppData[sheetId] = {
                id: sheetData.id,
                name: sheetData.name,
                lastUpdated: sheetData.lastUpdated?.toDate?.() || sheetData.lastUpdated,
                rawRowCount: sheetData.rawRowCount || 0,
                wells: [],
                batteryProduction: [],
                runTickets: [],
                _metadataLoaded: true,
                _wellsLoaded: false
            };
        }
        
        // Update app state
        appState.appData = newAppData;
        appState.loadedSheets = Object.keys(newAppData);
        
        console.log(`Loaded metadata for ${Object.keys(newAppData).length} gauge sheets`);
        return true;
    } catch (error) {
        console.error('Error loading gauge sheet metadata:', error);
        appState.appData = {};
        return false;
    }
}

/**
 * Load recent summary data for the dashboard (last 30 days)
 * This includes recent production data and well tests for dashboard stats
 * @returns {Promise<boolean>} Success status
 */
export async function loadDashboardSummary() {
    try {
        console.log('Loading dashboard summary data...');
        
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const thirtyDaysAgoTimestamp = Timestamp.fromDate(thirtyDaysAgo);
        
        // Load recent data for each gauge sheet
        for (const sheetId in appState.appData) {
            const sheetData = appState.appData[sheetId];
            
            // Load well names only (for dashboard top producers)
            const wellsColl = collection(db, `gaugeSheets/${sheetId}/wells`);
            const wellsSnapshot = await getDocs(wellsColl);
            
            for (const wellDoc of wellsSnapshot.docs) {
                const wellData = wellDoc.data();
                const wellId = wellDoc.id;
                
                // Load only recent production data (last 30 days)
                const productionColl = collection(db, `gaugeSheets/${sheetId}/wells/${wellId}/production`);
                const recentProductionQuery = query(
                    productionColl,
                    where('date', '>=', thirtyDaysAgoTimestamp)
                );
                const productionSnapshot = await getDocs(recentProductionQuery);
                const production = productionSnapshot.docs.map(doc => ({
                    ...doc.data(),
                    date: doc.data().date?.toDate?.() || new Date(doc.data().date)
                }));
                
                // Load only recent well tests (last 30 days)
                const wellTestsColl = collection(db, `gaugeSheets/${sheetId}/wells/${wellId}/wellTests`);
                const recentTestsQuery = query(
                    wellTestsColl,
                    where('date', '>=', thirtyDaysAgoTimestamp)
                );
                const wellTestsSnapshot = await getDocs(recentTestsQuery);
                const wellTests = wellTestsSnapshot.docs.map(doc => ({
                    ...doc.data(),
                    date: doc.data().date?.toDate?.() || new Date(doc.data().date)
                }));
                
                // Add well with minimal data
                sheetData.wells.push({
                    id: wellData.id,
                    name: wellData.name,
                    production: production,
                    wellTests: wellTests,
                    pressureReadings: [],
                    chemicalProgram: {},
                    failureHistory: [],
                    actionItems: [],
                    _summaryOnly: true // Flag to indicate this is summary data only
                });
            }
            
            sheetData._wellsLoaded = true;
        }
        
        console.log('Dashboard summary data loaded');
        return true;
    } catch (error) {
        console.error('Error loading dashboard summary:', error);
        return false;
    }
}

/**
 * Load the full list of wells for a specific gauge sheet
 * This loads well names and IDs but not their full production history
 * @param {string} sheetId - The gauge sheet ID
 * @returns {Promise<boolean>} Success status
 */
export async function loadWellsList(sheetId) {
    try {
        console.log(`Loading wells list for ${sheetId}...`);
        
        const sheetData = appState.appData[sheetId];
        if (!sheetData) {
            console.error(`Sheet ${sheetId} not found in appData`);
            return false;
        }
        
        // If wells are already loaded, skip
        if (sheetData._wellsLoaded) {
            console.log(`Wells already loaded for ${sheetId}`);
            return true;
        }
        
        const wellsColl = collection(db, `gaugeSheets/${sheetId}/wells`);
        const wellsSnapshot = await getDocs(wellsColl);
        
        sheetData.wells = [];
        
        for (const wellDoc of wellsSnapshot.docs) {
            const wellData = wellDoc.data();
            
            // Add well with minimal data (no production history yet)
            sheetData.wells.push({
                id: wellData.id,
                name: wellData.name,
                production: [],
                wellTests: [],
                pressureReadings: wellData.pressureReadings || [],
                chemicalProgram: wellData.chemicalProgram || {},
                failureHistory: wellData.failureHistory || [],
                actionItems: wellData.actionItems || [],
                _detailsLoaded: false
            });
        }
        
        sheetData._wellsLoaded = true;
        console.log(`Loaded ${sheetData.wells.length} wells for ${sheetId}`);
        return true;
    } catch (error) {
        console.error(`Error loading wells list for ${sheetId}:`, error);
        return false;
    }
}

/**
 * Load full details for a specific well (all production data, tests, etc.)
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
        }
        
        well._detailsLoaded = true;
        well._summaryOnly = false;
        
        // Mark this well as loaded in state
        if (!appState.loadedWells) {
            appState.loadedWells = {};
        }
        if (!appState.loadedWells[sheetId]) {
            appState.loadedWells[sheetId] = [];
        }
        if (!appState.loadedWells[sheetId].includes(wellId)) {
            appState.loadedWells[sheetId].push(wellId);
        }
        
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
        
        console.log(`Loaded aggregate data for ${sheetId}`);
        return true;
    } catch (error) {
        console.error(`Error loading aggregate data for ${sheetId}:`, error);
        return false;
    }
}
