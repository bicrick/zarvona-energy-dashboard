import { appState } from './config.js';
import { uploadFailureFile, validateFailureFile } from './firebase-storage-service.js';
import { addFailureHistoryEntry } from './firestore-storage.js';
import { loadWellDetails } from './firestore-storage.js';

// Generate a UUID for failure entries
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * Initialize failure history modal handlers
 */
export function initializeFailureModalHandlers() {
    console.log('Initializing failure modal handlers...');
    const btnAddFailure = document.getElementById('btnAddFailure');
    const failureModal = document.getElementById('failureModal');
    const btnCloseFailureModal = document.getElementById('btnCloseFailureModal');
    const btnCancelFailure = document.getElementById('btnCancelFailure');
    const failureForm = document.getElementById('failureForm');
    const fileInput = document.getElementById('failureFileInput');
    const fileDropZone = document.getElementById('fileDropZone');
    const fileInfo = document.getElementById('fileInfo');
    const btnSubmitFailure = document.getElementById('btnSubmitFailure');
    
    console.log('btnAddFailure:', btnAddFailure);
    console.log('failureModal:', failureModal);
    
    if (!btnAddFailure || !failureModal) {
        console.warn('Failure modal elements not found', { btnAddFailure, failureModal });
        return;
    }
    
    console.log('Failure modal handlers initialized successfully');
    
    // Open modal
    btnAddFailure.addEventListener('click', () => {
        openFailureModal();
    });
    
    // Close modal handlers
    if (btnCloseFailureModal) {
        btnCloseFailureModal.addEventListener('click', () => {
            closeFailureModal();
        });
    }
    
    if (btnCancelFailure) {
        btnCancelFailure.addEventListener('click', () => {
            closeFailureModal();
        });
    }
    
    // Close on background click
    failureModal.addEventListener('click', (e) => {
        if (e.target === failureModal) {
            closeFailureModal();
        }
    });
    
    // File input change
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            handleFileSelect(e.target.files[0]);
        });
    }
    
    // Drag and drop handlers
    if (fileDropZone) {
        fileDropZone.addEventListener('click', () => {
            fileInput.click();
        });
        
        fileDropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileDropZone.classList.add('drag-over');
        });
        
        fileDropZone.addEventListener('dragleave', () => {
            fileDropZone.classList.remove('drag-over');
        });
        
        fileDropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            fileDropZone.classList.remove('drag-over');
            
            if (e.dataTransfer.files.length > 0) {
                handleFileSelect(e.dataTransfer.files[0]);
            }
        });
    }
    
    // Form submission
    if (failureForm) {
        failureForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFailureSubmit();
        });
    }
}

/**
 * Open the failure modal
 */
function openFailureModal() {
    console.log('openFailureModal called');
    const failureModal = document.getElementById('failureModal');
    const failureForm = document.getElementById('failureForm');
    
    // Reset form
    if (failureForm) {
        failureForm.reset();
    }
    
    // Clear file selection
    clearFileSelection();
    
    // Set default date to today
    const dateInput = document.getElementById('failureDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }
    
    // Show modal
    failureModal.classList.add('visible');
    document.body.style.overflow = 'hidden';
    console.log('Modal should be visible now, modal classList:', failureModal.classList);
}

/**
 * Close the failure modal
 */
function closeFailureModal() {
    const failureModal = document.getElementById('failureModal');
    failureModal.classList.remove('visible');
    document.body.style.overflow = '';
    
    // Reset form state
    const failureForm = document.getElementById('failureForm');
    if (failureForm) {
        failureForm.reset();
    }
    clearFileSelection();
}

/**
 * Handle file selection
 */
function handleFileSelect(file) {
    if (!file) return;
    
    // Validate file
    const validation = validateFailureFile(file);
    
    if (!validation.valid) {
        alert(validation.error);
        return;
    }
    
    // Store file in a temporary location
    const fileInput = document.getElementById('failureFileInput');
    if (fileInput) {
        // File is already in the input element
        // Just update the UI to show file info
        updateFileInfo(file);
    }
}

/**
 * Update file info display
 */
function updateFileInfo(file) {
    const fileDropZone = document.getElementById('fileDropZone');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');
    
    if (fileDropZone) {
        fileDropZone.style.display = 'none';
    }
    
    if (fileInfo) {
        fileInfo.style.display = 'flex';
    }
    
    if (fileName) {
        fileName.textContent = file.name;
    }
    
    if (fileSize) {
        const sizeMB = (file.size / 1024 / 1024).toFixed(2);
        fileSize.textContent = `${sizeMB} MB`;
    }
}

/**
 * Clear file selection
 */
function clearFileSelection() {
    const fileInput = document.getElementById('failureFileInput');
    const fileDropZone = document.getElementById('fileDropZone');
    const fileInfo = document.getElementById('fileInfo');
    
    if (fileInput) {
        fileInput.value = '';
    }
    
    if (fileDropZone) {
        fileDropZone.style.display = 'flex';
    }
    
    if (fileInfo) {
        fileInfo.style.display = 'none';
    }
}

/**
 * Handle form submission
 */
async function handleFailureSubmit() {
    const dateInput = document.getElementById('failureDate');
    const notesInput = document.getElementById('failureNotes');
    const fileInput = document.getElementById('failureFileInput');
    const btnSubmitFailure = document.getElementById('btnSubmitFailure');
    const uploadProgress = document.getElementById('uploadProgress');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    // Validate inputs
    const failureDate = dateInput?.value;
    const notes = notesInput?.value || '';
    const file = fileInput?.files[0];
    
    if (!failureDate) {
        alert('Please select a failure date');
        return;
    }
    
    if (!file) {
        alert('Please select a file to upload');
        return;
    }
    
    // Validate file again
    const validation = validateFailureFile(file);
    if (!validation.valid) {
        alert(validation.error);
        return;
    }
    
    // Get current well and sheet
    const sheetId = appState.currentSheet;
    const wellId = appState.currentWell;
    
    if (!sheetId || !wellId) {
        alert('Cannot determine current well. Please try again.');
        return;
    }
    
    // Disable submit button
    if (btnSubmitFailure) {
        btnSubmitFailure.disabled = true;
        btnSubmitFailure.textContent = 'Uploading...';
    }
    
    // Show progress bar
    if (uploadProgress) {
        uploadProgress.style.display = 'block';
    }
    
    try {
        // Generate unique ID for this failure entry
        const failureId = generateUUID();
        
        // Upload file to Storage with progress callback
        const uploadResult = await uploadFailureFile(
            sheetId,
            wellId,
            failureId,
            file,
            (progress) => {
                if (progressBar) {
                    progressBar.style.width = `${progress}%`;
                }
                if (progressText) {
                    progressText.textContent = `${Math.round(progress)}%`;
                }
            }
        );
        
        // Prepare failure data
        const failureData = {
            id: failureId,
            failureDate: new Date(failureDate),
            notes: notes,
            fileName: uploadResult.fileName,
            fileUrl: uploadResult.fileUrl,
            filePath: uploadResult.filePath,
            fileSize: uploadResult.fileSize
        };
        
        // Save to Firestore
        const success = await addFailureHistoryEntry(sheetId, wellId, failureData);
        
        if (success) {
            // Reload well details
            await loadWellDetails(sheetId, wellId);
            
            // Re-render the failure history table
            const sheetData = appState.appData[sheetId];
            const well = sheetData?.wells.find(w => w.id === wellId);
            if (well) {
                // Import dynamically to avoid circular dependencies
                const { default: viewsModule } = await import('./views.js');
                // Call renderFailureHistory if it's exported
                // Since it's not exported, we'll trigger a full well view refresh
                const { showWellView } = await import('./views.js');
                await showWellView(sheetId, wellId);
            }
            
            // Close modal
            closeFailureModal();
            
            alert('Failure history entry added successfully!');
        } else {
            throw new Error('Failed to save failure history to database');
        }
    } catch (error) {
        console.error('Error submitting failure entry:', error);
        alert(`Failed to add failure history entry: ${error.message}`);
    } finally {
        // Re-enable submit button
        if (btnSubmitFailure) {
            btnSubmitFailure.disabled = false;
            btnSubmitFailure.textContent = 'Add Entry';
        }
        
        // Hide progress bar
        if (uploadProgress) {
            uploadProgress.style.display = 'none';
        }
        
        // Reset progress
        if (progressBar) {
            progressBar.style.width = '0%';
        }
        if (progressText) {
            progressText.textContent = '0%';
        }
    }
}
