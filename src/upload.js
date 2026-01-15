import { GAUGE_SHEETS, appState } from './config.js';
import { saveSheetToFirestore } from './firestore-storage.js';
import { refreshNavigation } from './navigation.js';
import { showGaugeSheetView } from './views.js';
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
        progressFill.style.width = '30%';
        progressText.textContent = 'Parsing Excel...';

        const workbook = XLSX.read(arrayBuffer, { type: 'array', cellDates: true });
        progressFill.style.width = '60%';
        progressText.textContent = 'Extracting data...';

        const data = parser.parse(workbook);
        progressFill.style.width = '90%';
        progressText.textContent = 'Saving...';

        const existingData = appState.appData[appState.currentSheet];
        appState.appData[appState.currentSheet] = mergeSheetData(existingData, data);
        
        // Save to Firestore (incremental - only last 30 days)
        await saveSheetToFirestore(appState.currentSheet, appState.appData[appState.currentSheet], false);

        progressFill.style.width = '100%';
        progressText.textContent = 'Complete!';

        setTimeout(() => {
            progress.style.display = 'none';
            progressFill.style.width = '0%';
            refreshNavigation();
            showGaugeSheetView(appState.currentSheet);
        }, 500);
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

            const existingData = appState.appData[sheetConfig.id];
            appState.appData[sheetConfig.id] = mergeSheetData(existingData, data);

            resultItems.push({
                name: sheetConfig.name,
                status: 'success',
                detail: `${data.wells.length} wells loaded`
            });
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

    // Save all sheets to Firestore (incremental update - only last 30 days)
    // This reduces Firestore writes and avoids quota issues
    for (const sheetId in appState.appData) {
        await saveSheetToFirestore(sheetId, appState.appData[sheetId], false);
    }

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
    }, 500);
}

export async function processBulkUploadFromDashboard(files) {
    const overlay = document.getElementById('dashboardLoadingOverlay');
    const loadingText = document.getElementById('dashboardLoadingText');
    const loadingSubtext = document.getElementById('dashboardLoadingSubtext');

    overlay.classList.add('visible');
    loadingText.textContent = 'Processing sheets...';
    loadingSubtext.textContent = `0 of ${files.length} files`;

    let processed = 0;
    let successCount = 0;

    await new Promise(resolve => setTimeout(resolve, 50));

    for (const file of files) {
        loadingSubtext.textContent = `${processed + 1} of ${files.length}: ${file.name}`;

        const sheetConfig = GAUGE_SHEETS.find(s =>
            file.name.toLowerCase().includes(s.fileName.toLowerCase().replace('.xlsx', '').replace('.xlsm', '')) ||
            s.fileName.toLowerCase() === file.name.toLowerCase()
        );

        if (!sheetConfig) {
            processed++;
            continue;
        }

        const parser = PARSERS[sheetConfig.parser];
        if (!parser) {
            processed++;
            continue;
        }

        try {
            const arrayBuffer = await file.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array', cellDates: true });
            const data = parser.parse(workbook);

            const existingData = appState.appData[sheetConfig.id];
            appState.appData[sheetConfig.id] = mergeSheetData(existingData, data);
            successCount++;
        } catch (error) {
            console.error(`Error processing ${file.name}:`, error);
        }

        processed++;
        await new Promise(resolve => setTimeout(resolve, 10));
    }

    // Save all updated sheets to Firestore
    if (successCount > 0) {
        loadingText.textContent = 'Saving to cloud...';
        for (const sheetId in appState.appData) {
            await saveSheetToFirestore(sheetId, appState.appData[sheetId]);
        }
        refreshNavigation();
    }
    
    loadingText.textContent = 'Complete!';
    loadingSubtext.textContent = `${successCount} of ${files.length} sheets updated`;

    setTimeout(() => {
        overlay.classList.remove('visible');
    }, 600);
}
