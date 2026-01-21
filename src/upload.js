import { GAUGE_SHEETS, appState } from './config.js';
import { saveSheetToFirestore, fetchSheetFromFirestore, loadNavigationData, loadDashboardData, saveChemicalProgramData, loadChemicalProgramData, matchChemicalProgramsToExistingWells, saveFluidLevelData, loadFluidLevelData } from './firestore-storage.js';
import { refreshNavigation } from './navigation.js';
import { showGaugeSheetView, showWellView, showMasterChemicalView, showFluidLevelsView } from './views.js';
import { PARSERS } from './parsers/index.js';
import { mergeSheetData } from './data-merge.js';

export function initializeUploadHandlers() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const btnReupload = document.getElementById('btnReupload');

    uploadArea.addEventListener('click', (e) => {
        if (e.target.id !== 'btnReupload') {
            fileInput.click();
        }
    });

    btnReupload.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            processUploadedFile(file);
        }
        fileInput.value = '';
    });

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('drag-over');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file) {
            processUploadedFile(file);
        }
    });
}

async function processUploadedFile(file) {
    if (!appState.currentSheet) {
        alert('Please select a gauge sheet first');
        return;
    }

    const sheetConfig = GAUGE_SHEETS.find(s => s.id === appState.currentSheet);
    if (!sheetConfig) return;

    const parser = PARSERS[sheetConfig.parser];
    if (!parser) {
        alert(`Parser not yet implemented for ${sheetConfig.name}. Coming soon!`);
        return;
    }

    const progress = document.getElementById('uploadProgress');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    progress.style.display = 'block';
    progressFill.style.width = '10%';
    progressText.textContent = 'Reading file...';

    try {
        const arrayBuffer = await file.arrayBuffer();
        progressFill.style.width = '5%';
        progressText.textContent = 'Parsing Excel...';

        const workbook = XLSX.read(arrayBuffer, { type: 'array', cellDates: true });
        progressFill.style.width = '10%';
        progressText.textContent = 'Extracting data...';

        const data = parser.parse(workbook);
        
        // Check if this is a fluid level sheet
        if (sheetConfig.isFluidLevelSheet) {
            progressFill.style.width = '15%';
            progressText.textContent = 'Saving fluid level data...';
            
            // Count unique wells before saving
            const uniqueWells = new Set(data.readings.map(r => r.wellName.toLowerCase().replace(/[^a-z0-9]/g, '')));
            const wellCount = uniqueWells.size;
            
            await saveFluidLevelData(data.readings, (message, percent) => {
                const overallPercent = 15 + Math.floor((percent / 100) * 60);
                progressFill.style.width = `${overallPercent}%`;
                progressText.textContent = message;
            });
            
            progressFill.style.width = '75%';
            progressText.textContent = 'Reloading fluid level data...';
            await loadFluidLevelData();
            
            progressFill.style.width = '90%';
            progressText.textContent = 'Refreshing views...';
            
            // Refresh the Fluid Levels view
            showFluidLevelsView();
            
            progressFill.style.width = '100%';
            progressText.textContent = `Complete! ${data.readings.length} readings saved for ${wellCount} wells`;
            
            setTimeout(() => {
                progress.style.display = 'none';
                progressFill.style.width = '0%';
                refreshNavigation();
            }, 2000);
        } else if (sheetConfig.isChemicalSheet) {
            progressFill.style.width = '15%';
            progressText.textContent = 'Saving chemical programs...';
            
            await saveChemicalProgramData(data.chemicalPrograms, (message, percent) => {
                const overallPercent = 15 + Math.floor((percent / 100) * 40);
                progressFill.style.width = `${overallPercent}%`;
                progressText.textContent = message;
            });
            
            progressFill.style.width = '55%';
            progressText.textContent = 'Reloading chemical programs...';
            await loadChemicalProgramData();
            
            progressFill.style.width = '60%';
            progressText.textContent = 'Matching chemical programs to existing wells...';
            
            const matchResults = await matchChemicalProgramsToExistingWells((message, percent) => {
                const overallPercent = 60 + Math.floor((percent / 100) * 30);
                progressFill.style.width = `${overallPercent}%`;
                progressText.textContent = message;
            });
            
            progressFill.style.width = '90%';
            progressText.textContent = 'Refreshing views...';
            
            // Refresh the Master Chemical Sheet view
            showMasterChemicalView();
            
            progressFill.style.width = '100%';
            progressText.textContent = `Complete! ${matchResults.matched} wells matched, ${matchResults.updated} wells updated`;
            
            setTimeout(() => {
                progress.style.display = 'none';
                progressFill.style.width = '0%';
                refreshNavigation();
            }, 2000);
        } else {
            // Handle regular gauge sheet
            progressFill.style.width = '15%';
            progressText.textContent = 'Checking for manual edits...';

            // Fetch existing data from Firestore to preserve manual edits
            const existingData = await fetchSheetFromFirestore(appState.currentSheet);
            
            progressFill.style.width = '20%';
            progressText.textContent = 'Merging data...';
            
            // Merge new Excel data with existing Firestore data (preserves manual edits)
            const mergedData = mergeSheetData(existingData, data);
            appState.appData[appState.currentSheet] = mergedData;
            
            progressFill.style.width = '25%';
            progressText.textContent = 'Saving to cloud...';
            
            // Save to Firestore (full data) with progress callback
            await saveSheetToFirestore(appState.currentSheet, mergedData, true, (message, percent) => {
                // Map the save progress (0-90%) to our overall progress (25-90%)
                const overallPercent = 25 + Math.floor((percent / 90) * 65);
                progressFill.style.width = `${overallPercent}%`;
                progressText.textContent = message;
            });

            progressFill.style.width = '92%';
            progressText.textContent = 'Refreshing navigation data...';
            
            // Force a full data refresh from Firestore to ensure local state is up to date
            await loadNavigationData((message) => {
                progressText.textContent = message;
            });
            
            progressFill.style.width = '96%';
            progressText.textContent = 'Refreshing dashboard data...';
            
            await loadDashboardData((message) => {
                progressText.textContent = message;
            });

            progressFill.style.width = '100%';
            progressText.textContent = 'Complete!';

            setTimeout(() => {
                progress.style.display = 'none';
                progressFill.style.width = '0%';
                refreshNavigation();
                showGaugeSheetView(appState.currentSheet);
            }, 500);
        }
    } catch (error) {
        console.error('Error processing file:', error);
        alert('Error processing file: ' + error.message);
        progress.style.display = 'none';
    }
}

export function initializeBulkUploadHandlers() {
    const bulkUploadArea = document.getElementById('bulkUploadArea');
    const bulkFileInput = document.getElementById('bulkFileInput');

    if (!bulkUploadArea || !bulkFileInput) return;

    bulkUploadArea.addEventListener('click', () => {
        bulkFileInput.click();
    });

    bulkFileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            processBulkUpload(files);
        }
        bulkFileInput.value = '';
    });

    bulkUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        bulkUploadArea.classList.add('drag-over');
    });

    bulkUploadArea.addEventListener('dragleave', () => {
        bulkUploadArea.classList.remove('drag-over');
    });

    bulkUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        bulkUploadArea.classList.remove('drag-over');
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            processBulkUpload(files);
        }
    });
}

async function processBulkUpload(files) {
    const progress = document.getElementById('bulkUploadProgress');
    const progressFill = document.getElementById('bulkProgressFill');
    const progressText = document.getElementById('bulkProgressText');
    const results = document.getElementById('bulkUploadResults');

    progress.style.display = 'block';
    results.style.display = 'none';
    results.innerHTML = '';

    const resultItems = [];
    let processed = 0;

    for (const file of files) {
        progressFill.style.width = `${(processed / files.length) * 100}%`;
        progressText.textContent = `Processing ${file.name}...`;

        const sheetConfig = GAUGE_SHEETS.find(s =>
            file.name.toLowerCase().includes(s.fileName.toLowerCase().replace('.xlsx', '').replace('.xlsm', '')) ||
            s.fileName.toLowerCase() === file.name.toLowerCase()
        );

        if (!sheetConfig) {
            resultItems.push({
                name: file.name,
                status: 'skipped',
                detail: 'Unknown file'
            });
            processed++;
            continue;
        }

        const parser = PARSERS[sheetConfig.parser];
        if (!parser) {
            resultItems.push({
                name: file.name,
                status: 'skipped',
                detail: 'No parser available'
            });
            processed++;
            continue;
        }

            try {
            const arrayBuffer = await file.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array', cellDates: true });
            const data = parser.parse(workbook);

            // Check if this is a fluid level sheet
            if (sheetConfig.isFluidLevelSheet) {
                // Count unique wells before saving
                const uniqueWells = new Set(data.readings.map(r => r.wellName.toLowerCase().replace(/[^a-z0-9]/g, '')));
                const wellCount = uniqueWells.size;
                
                await saveFluidLevelData(data.readings, (message, percent) => {
                    progressText.textContent = message;
                });
                
                // Reload fluid level data into appState
                await loadFluidLevelData();
                
                resultItems.push({
                    name: sheetConfig.name,
                    status: 'success',
                    detail: `${data.readings.length} readings saved for ${wellCount} wells`
                });
            } else if (sheetConfig.isChemicalSheet) {
                // Handle chemical sheet
                await saveChemicalProgramData(data.chemicalPrograms, (message, percent) => {
                    progressText.textContent = message;
                });
                
                // Reload chemical programs into appState
                await loadChemicalProgramData();
                
                // Match and update all existing wells with the new chemical data
                progressText.textContent = 'Matching chemical programs to existing wells...';
                const matchResults = await matchChemicalProgramsToExistingWells((message, percent) => {
                    progressText.textContent = message;
                });
                
                resultItems.push({
                    name: sheetConfig.name,
                    status: 'success',
                    detail: `${data.chemicalPrograms.length} chemical programs saved, ${matchResults.matched} wells matched, ${matchResults.updated} wells updated`
                });
            } else {
                // Handle regular gauge sheet
                // Fetch existing data from Firestore to preserve manual edits
                const existingData = await fetchSheetFromFirestore(sheetConfig.id);
                const mergedData = mergeSheetData(existingData, data);
                appState.appData[sheetConfig.id] = mergedData;

                resultItems.push({
                    name: sheetConfig.name,
                    status: 'success',
                    detail: `${data.wells.length} wells loaded`
                });
            }
        } catch (error) {
            console.error(`Error processing ${file.name}:`, error);
            resultItems.push({
                name: file.name,
                status: 'error',
                detail: error.message
            });
        }

        processed++;
    }

    // Save all gauge sheets to Firestore (full data) - chemical sheets already saved
    const sheetsToSave = Object.keys(appState.appData);
    const totalSheets = sheetsToSave.length;
    
    if (totalSheets > 0) {
        for (let i = 0; i < totalSheets; i++) {
            const sheetId = sheetsToSave[i];
            const sheetPercent = Math.floor((i / totalSheets) * 100);
            
            await saveSheetToFirestore(sheetId, appState.appData[sheetId], true, (message, percent) => {
                // Map the save progress for each sheet
                const basePercent = Math.floor((i / totalSheets) * 85);
                const sheetProgress = Math.floor((percent / 90) * (85 / totalSheets));
                progressFill.style.width = `${basePercent + sheetProgress}%`;
                progressText.textContent = `[Sheet ${i + 1}/${totalSheets}] ${message}`;
            });
        }
    }

    progressFill.style.width = '90%';
    progressText.textContent = 'Refreshing navigation data...';
    
    // Force a full data refresh from Firestore to ensure local state is up to date
    await loadNavigationData((message) => {
        progressText.textContent = message;
    });
    
    progressFill.style.width = '95%';
    progressText.textContent = 'Refreshing dashboard data...';
    
    await loadDashboardData((message) => {
        progressText.textContent = message;
    });

    progressFill.style.width = '100%';
    progressText.textContent = 'Complete!';

    setTimeout(() => {
        progress.style.display = 'none';
        results.style.display = 'block';

        results.innerHTML = resultItems.map(item => `
            <div class="bulk-result-item ${item.status}">
                <span class="result-icon">${item.status === 'success' ? 'OK' : item.status === 'error' ? 'X' : '?'}</span>
                <span class="result-name">${item.name}</span>
                <span class="result-detail">${item.detail}</span>
            </div>
        `).join('');

        refreshNavigation();
        
        // If chemical data was uploaded, refresh relevant views
        const chemicalSheetUploaded = resultItems.some(item => 
            item.name.includes('Chemical') && item.status === 'success'
        );
        
        if (chemicalSheetUploaded) {
            // Refresh the Master Chemical Sheet view if it's currently active
            const masterChemicalView = document.getElementById('masterChemicalView');
            if (masterChemicalView && masterChemicalView.classList.contains('active')) {
                showMasterChemicalView();
            }
            
            // Also refresh the current well view if viewing a well
            if (appState.currentSheet && appState.currentWell) {
                showWellView(appState.currentSheet, appState.currentWell);
            }
        }
        
        // If fluid level data was uploaded, refresh Fluid Levels view
        const fluidLevelSheetUploaded = resultItems.some(item => 
            item.name.includes('Fluid') && item.status === 'success'
        );
        
        if (fluidLevelSheetUploaded) {
            // Refresh the Fluid Levels view if it's currently active
            const fluidLevelsView = document.getElementById('fluidLevelsView');
            if (fluidLevelsView && fluidLevelsView.classList.contains('active')) {
                showFluidLevelsView();
            }
        }
    }, 500);
}
