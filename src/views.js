import { appState, GAUGE_SHEETS } from './config.js';
import { formatDate, escapeHtml } from './utils.js';
import { renderProductionCharts } from './charts/production.js';
import { initializeEditHandlers } from './edit-modal.js';
import { renderDashboard } from './dashboard.js';
import { hasUploadedData, getBatteryStats } from './data-aggregation.js';
import { loadWellDetails, loadWellsList, loadDashboardData as refreshDashboardData, loadSheetAggregateData, loadMasterChemicalData, updateChemicalProgramValues } from './firestore-storage.js';
import { findChemicalProgramMatch } from './chemical-matcher.js';
import { setActiveNavItem } from './navigation.js';

// Master Chemical Sheet Edit Mode State
const chemicalEditState = {
    editMode: false,
    editedCells: {},  // { normalizedWellName: { chemicalName: { value, category } } }
    originalValues: {}  // Store original values for cancel/revert
};

// CSV Download utility functions
function downloadCSV(data, headers, filename) {
    if (!data || data.length === 0) {
        alert('No data available to download.');
        return;
    }

    const csvRows = [];
    csvRows.push(headers.join(','));

    data.forEach(row => {
        const values = headers.map(header => {
            const value = row[header.toLowerCase().replace(/[^a-z0-9]/g, '')] ?? row[header] ?? '';
            // Escape quotes and wrap in quotes if contains comma, quote, or newline
            const escaped = String(value).replace(/"/g, '""');
            return escaped.includes(',') || escaped.includes('"') || escaped.includes('\n') 
                ? `"${escaped}"` 
                : escaped;
        });
        csvRows.push(values.join(','));
    });

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function formatDateForCSV(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US');
}

export function showView(viewName) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));

    const viewMap = {
        welcome: 'welcomeView',
        gaugeSheet: 'gaugeSheetView',
        well: 'wellView',
        battery: 'batteryView',
        oilChart: 'oilChartView',
        waterChart: 'waterChartView',
        gasChart: 'gasChartView',
        masterChemical: 'masterChemicalView',
        fluidLevels: 'fluidLevelsView'
    };

    const viewId = viewMap[viewName];
    if (viewId) {
        document.getElementById(viewId).classList.add('active');
    }
}

export async function updateWelcomeStats() {
    const dashboard = document.getElementById('operationsDashboard');

    if (dashboard) {
        dashboard.style.display = 'block';
        
        // Refresh dashboard data from loaded wells (catches any manual edits)
        await refreshDashboardData();
        
        renderDashboard();
    }
}

export async function showGaugeSheetView(sheetId) {
    const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);
    if (!sheetConfig) return;

    appState.currentSheet = sheetId;
    showView('gaugeSheet');

    document.getElementById('sheetName').textContent = sheetConfig.name;
    document.getElementById('sheetBreadcrumb').textContent = `Gauge Sheet: ${sheetConfig.fileName}`;
    document.getElementById('expectedFileName').textContent = sheetConfig.fileName;

    const sheetData = appState.appData[sheetId];
    const uploadPrompt = document.getElementById('uploadPrompt');
    const uploadStatus = document.getElementById('uploadStatus');

    if (sheetData && sheetData._metadataLoaded) {
        uploadPrompt.style.display = 'none';
        uploadStatus.style.display = 'flex';
        document.getElementById('lastUploadDate').textContent = formatDate(sheetData.lastUpdated);
        document.getElementById('rowCount').textContent = sheetData.rawRowCount || '-';
        
        // Load wells list if not already loaded
        if (!sheetData._wellsLoaded) {
            // Show loading state
            const grid = document.getElementById('wellsGrid');
            grid.innerHTML = '<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading wells...</span></div>';
            
            await loadWellsList(sheetId);
        }
    } else {
        uploadPrompt.style.display = 'block';
        uploadStatus.style.display = 'none';
    }

    renderWellsGrid(sheetId);
}

export async function showBatteryView(sheetId) {
    const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);
    if (!sheetConfig) return;

    appState.currentSheet = sheetId;
    showView('battery');

    // Update header
    document.getElementById('batteryName').textContent = sheetConfig.name;
    document.getElementById('batteryBreadcrumb').textContent = `Battery: ${sheetConfig.name}`;

    const sheetData = appState.appData[sheetId];

    // Load wells list if not loaded
    if (!sheetData || !sheetData._wellsLoaded) {
        showBatteryLoadingState();
        
        if (sheetData && sheetData._metadataLoaded) {
            await loadWellsList(sheetId);
        }
    }
    
    // Load aggregate production data if not loaded (needed for battery stats)
    if (sheetData && sheetData._metadataLoaded && !sheetData._aggregateLoaded) {
        await loadSheetAggregateData(sheetId);
    }

    // Render battery stats
    renderBatteryStats(sheetId);

    // Render wells grid
    renderBatteryWellsGrid(sheetId);
}

export async function showMasterChemicalView() {
    showView('masterChemical');
    setActiveNavItem(document.getElementById('nav-master-chemical'));
    
    const emptyState = document.getElementById('masterChemicalEmpty');
    const contentState = document.getElementById('masterChemicalContent');
    const loadingState = document.getElementById('masterChemicalLoading');
    
    // Check if data is already loaded (chemicalPrograms is an object, not array)
    if (appState.chemicalPrograms && Object.keys(appState.chemicalPrograms).length > 0) {
        emptyState.style.display = 'none';
        contentState.style.display = 'block';
        renderMasterChemicalTable();
        return;
    }
    
    // Show loading state
    emptyState.style.display = 'none';
    contentState.style.display = 'block';
    loadingState.style.display = 'flex';
    
    // Load data - use loadChemicalProgramData which populates appState.chemicalPrograms
    try {
        await loadMasterChemicalData();
        
        // Hide loading state
        loadingState.style.display = 'none';
        
        // Check if we got data
        if (appState.chemicalPrograms && Object.keys(appState.chemicalPrograms).length > 0) {
            renderMasterChemicalTable();
        } else {
            // Show empty state
            emptyState.style.display = 'flex';
            contentState.style.display = 'none';
        }
    } catch (error) {
        console.error('Error loading Master Chemical data:', error);
        loadingState.style.display = 'none';
        emptyState.style.display = 'flex';
        contentState.style.display = 'none';
    }
}

function renderMasterChemicalTable() {
    const tableBody = document.getElementById('chemicalTableBody');
    const tableHeader = document.getElementById('chemicalTableHeader');
    const statsElement = document.getElementById('chemicalDataStats');
    const searchInput = document.getElementById('chemicalSearchInput');
    
    // chemicalPrograms is an object, not an array
    if (!appState.chemicalPrograms || Object.keys(appState.chemicalPrograms).length === 0) {
        return;
    }
    
    // Convert to array and sort by well name
    const programsArray = Object.values(appState.chemicalPrograms).sort((a, b) => {
        return (a.wellName || '').localeCompare(b.wellName || '');
    });
    
    // Update stats
    statsElement.innerHTML = `<span class="stat-badge">${programsArray.length} wells</span>`;
    
    // Collect all unique chemical names
    const allChemicals = new Set();
    programsArray.forEach(program => {
        Object.keys(program.truckTreating || {}).forEach(chem => allChemicals.add(chem));
        Object.keys(program.continuous || {}).forEach(chem => allChemicals.add(chem));
    });
    
    const chemicalsList = Array.from(allChemicals).sort();
    
    // Build table header - no test data columns in new format
    let headerHTML = '<th>Well Name</th><th>Battery</th>';
    chemicalsList.forEach(chem => {
        headerHTML += `<th>${chem}</th>`;
    });
    tableHeader.innerHTML = headerHTML;
    
    // Track currently filtered programs for CSV export
    let currentFilteredPrograms = programsArray;
    
    // Build table rows
    const renderRows = (programs) => {
        // Update the current filtered programs reference
        currentFilteredPrograms = programs;
        
        if (programs.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="100" style="text-align: center; color: #6b7280;">No matching wells</td></tr>';
            return;
        }
        
        tableBody.innerHTML = programs.map(program => {
            // Normalize well name for tracking edits
            const normalizedWellName = program.wellName.toLowerCase().replace(/[^a-z0-9]/g, '');
            
            // No test data columns in new format
            let rowHTML = `<td>${program.wellName || '-'}</td><td>${program.batteryName || '-'}</td>`;
            
            chemicalsList.forEach(chem => {
                const truckValue = program.truckTreating?.[chem];
                const contValue = program.continuous?.[chem];
                
                // Format values (use 0.00 for undefined/null values)
                const truckStr = truckValue !== undefined && truckValue !== null 
                    ? (typeof truckValue === 'number' ? truckValue.toFixed(2) : truckValue)
                    : '0.00';
                const contStr = contValue !== undefined && contValue !== null
                    ? (typeof contValue === 'number' ? contValue.toFixed(2) : contValue)
                    : '0.00';
                
                // Determine if we should show the cell content
                const hasAnyValue = (truckValue !== undefined && truckValue !== null) || 
                                   (contValue !== undefined && contValue !== null);
                
                let cellContent;
                if (chemicalEditState.editMode) {
                    // In edit mode, always show both truck treating and continuous as editable
                    cellContent = `<div style="font-size: 0.875rem;">
                        <span class="editable-cell-inline edit-mode-enabled ${truckValue ? '' : 'empty-value'}" 
                              contenteditable="true" 
                              data-well-name="${normalizedWellName}"
                              data-chemical="${chem}"
                              data-category="truckTreating"
                              data-original-value="${truckStr}"
                              style="color: #f97316;">T: ${truckStr}</span><br>
                        <span class="editable-cell-inline edit-mode-enabled ${contValue ? '' : 'empty-value'}" 
                              contenteditable="true" 
                              data-well-name="${normalizedWellName}"
                              data-chemical="${chem}"
                              data-category="continuous"
                              data-original-value="${contStr}"
                              style="color: #3b82f6;">C: ${contStr}</span>
                    </div>`;
                } else {
                    // In view mode, show values only if they exist, otherwise show "-"
                    if (!hasAnyValue) {
                        cellContent = '-';
                    } else if (truckValue !== undefined && truckValue !== null && 
                              contValue !== undefined && contValue !== null) {
                        cellContent = `<div style="font-size: 0.875rem;">
                            <span style="color: #f97316;">T: ${truckStr}</span><br>
                            <span style="color: #3b82f6;">C: ${contStr}</span>
                        </div>`;
                    } else if (truckValue !== undefined && truckValue !== null) {
                        cellContent = `<span style="color: #f97316;">T: ${truckStr}</span>`;
                    } else if (contValue !== undefined && contValue !== null) {
                        cellContent = `<span style="color: #3b82f6;">C: ${contStr}</span>`;
                    }
                }
                
                rowHTML += `<td>${cellContent}</td>`;
            });
            
            return `<tr>${rowHTML}</tr>`;
        }).join('');
        
        // Add edit handlers if in edit mode
        if (chemicalEditState.editMode) {
            attachChemicalEditHandlers();
        }
    };
    
    // Initial render
    renderRows(programsArray);
    
    // Add search functionality
    if (searchInput) {
        const newSearchInput = searchInput.cloneNode(true);
        searchInput.parentNode.replaceChild(newSearchInput, searchInput);
        
        newSearchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = programsArray.filter(program => {
                const wellName = (program.wellName || '').toLowerCase();
                const battery = (program.batteryName || '').toLowerCase();
                return wellName.includes(searchTerm) || battery.includes(searchTerm);
            });
            renderRows(filtered);
            statsElement.innerHTML = `<span class="stat-badge">${filtered.length} wells</span>`;
        });
    }
    
    // Add CSV export functionality
    const exportBtn = document.getElementById('btnExportChemicalCSV');
    if (exportBtn) {
        const newExportBtn = exportBtn.cloneNode(true);
        exportBtn.parentNode.replaceChild(newExportBtn, exportBtn);
        
        newExportBtn.addEventListener('click', () => {
            // Use currentFilteredPrograms instead of programsArray to respect active filters
            const csvData = currentFilteredPrograms.map(program => {
                // No test data columns in new format
                const row = {
                    'wellname': program.wellName || '',
                    'battery': program.batteryName || ''
                };
                
                chemicalsList.forEach(chem => {
                    const truckValue = program.truckTreating?.[chem];
                    const contValue = program.continuous?.[chem];
                    
                    if (truckValue !== undefined && contValue !== undefined) {
                        row[chem] = `T: ${truckValue}, C: ${contValue}`;
                    } else if (truckValue !== undefined) {
                        row[chem] = `T: ${truckValue}`;
                    } else if (contValue !== undefined) {
                        row[chem] = `C: ${contValue}`;
                    } else {
                        row[chem] = '';
                    }
                });
                
                return row;
            });
            
            const headers = ['Well Name', 'Battery', ...chemicalsList];
            downloadCSV(csvData, headers, 'Master_Chemical_Sheet.csv');
        });
    }
    
    // Initialize Edit/Save/Cancel button handlers
    initializeChemicalEditButtons();
}

// Attach edit handlers to all editable cells
function attachChemicalEditHandlers() {
    const editableCells = document.querySelectorAll('.editable-cell-inline');
    
    editableCells.forEach(cell => {
        // Focus event - store original value
        cell.addEventListener('focus', (e) => {
            const wellName = e.target.dataset.wellName;
            const chemical = e.target.dataset.chemical;
            const category = e.target.dataset.category;
            const originalValue = e.target.dataset.originalValue;
            
            // Store original value for cancel
            if (!chemicalEditState.originalValues[wellName]) {
                chemicalEditState.originalValues[wellName] = {};
            }
            if (!chemicalEditState.originalValues[wellName][chemical]) {
                chemicalEditState.originalValues[wellName][chemical] = {};
            }
            chemicalEditState.originalValues[wellName][chemical][category] = originalValue;
            
            // Select the numeric part of the text (after "T: " or "C: ")
            const text = e.target.textContent;
            const numericMatch = text.match(/[\d.]+/);
            if (numericMatch) {
                const range = document.createRange();
                const selection = window.getSelection();
                const textNode = e.target.firstChild;
                if (textNode) {
                    const startOffset = text.indexOf(numericMatch[0]);
                    const endOffset = startOffset + numericMatch[0].length;
                    range.setStart(textNode, startOffset);
                    range.setEnd(textNode, endOffset);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        });
        
        // Blur event - validate and track changes
        cell.addEventListener('blur', (e) => {
            validateAndTrackCellChange(e.target);
        });
        
        // Keydown event - handle Enter and Escape
        cell.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.target.blur();
                
                // Move to next editable cell
                const allCells = Array.from(document.querySelectorAll('.editable-cell-inline'));
                const currentIndex = allCells.indexOf(e.target);
                if (currentIndex < allCells.length - 1) {
                    allCells[currentIndex + 1].focus();
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                // Revert to original value
                const prefix = e.target.textContent.startsWith('T:') ? 'T: ' : 'C: ';
                e.target.textContent = prefix + e.target.dataset.originalValue;
                e.target.classList.remove('modified');
                e.target.blur();
            }
        });
        
        // Input event - validate numeric input
        cell.addEventListener('input', (e) => {
            const text = e.target.textContent;
            const prefix = text.startsWith('T:') ? 'T: ' : 'C: ';
            
            // Extract numeric part
            const numericPart = text.replace(/[TC]:\s*/, '').trim();
            
            // Allow only numbers and decimal point
            const cleanedValue = numericPart.replace(/[^0-9.]/g, '');
            
            // Ensure only one decimal point
            const parts = cleanedValue.split('.');
            const finalValue = parts[0] + (parts.length > 1 ? '.' + parts.slice(1).join('') : '');
            
            // Update content if it changed
            if (prefix + finalValue !== text) {
                const selection = window.getSelection();
                const range = selection.getRangeAt(0);
                const offset = range.startOffset;
                
                e.target.textContent = prefix + finalValue;
                
                // Restore cursor position
                const textNode = e.target.firstChild;
                if (textNode) {
                    const newRange = document.createRange();
                    const newOffset = Math.min(offset, textNode.length);
                    newRange.setStart(textNode, newOffset);
                    newRange.collapse(true);
                    selection.removeAllRanges();
                    selection.addRange(newRange);
                }
            }
        });
    });
}

// Validate and track cell changes
function validateAndTrackCellChange(cell) {
    const wellName = cell.dataset.wellName;
    const chemical = cell.dataset.chemical;
    const category = cell.dataset.category;
    const originalValue = cell.dataset.originalValue;
    
    // Extract the numeric value from "T: 12.34" or "C: 12.34"
    const text = cell.textContent;
    const numericMatch = text.match(/[\d.]+/);
    const newValue = numericMatch ? numericMatch[0] : '';
    
    // Validate numeric value
    const numValue = parseFloat(newValue);
    if (newValue !== '' && (isNaN(numValue) || numValue < 0)) {
        // Invalid value, revert to original
        const prefix = text.startsWith('T:') ? 'T: ' : 'C: ';
        cell.textContent = prefix + originalValue;
        cell.classList.remove('modified');
        return;
    }
    
    // Check if value changed
    const originalNum = parseFloat(originalValue);
    const hasChanged = Math.abs(numValue - originalNum) > 0.001; // Account for floating point precision
    
    if (hasChanged) {
        // Format to 2 decimal places
        const formattedValue = numValue.toFixed(2);
        const prefix = text.startsWith('T:') ? 'T: ' : 'C: ';
        cell.textContent = prefix + formattedValue;
        
        // Track the change
        if (!chemicalEditState.editedCells[wellName]) {
            chemicalEditState.editedCells[wellName] = {};
        }
        if (!chemicalEditState.editedCells[wellName][chemical]) {
            chemicalEditState.editedCells[wellName][chemical] = {};
        }
        
        // If value is 0 or very close to 0, mark it for deletion
        if (numValue < 0.001) {
            chemicalEditState.editedCells[wellName][chemical][category] = null; // null means delete
        } else {
            chemicalEditState.editedCells[wellName][chemical][category] = numValue;
        }
        
        // Add visual indicator and remove empty-value styling if present
        cell.classList.add('modified');
        cell.classList.remove('empty-value');
        
        // If value is now non-zero, remove empty styling
        if (numValue > 0.001) {
            cell.style.opacity = '';
            cell.style.fontStyle = '';
        }
    } else {
        // Value unchanged, remove from tracking
        if (chemicalEditState.editedCells[wellName]?.[chemical]?.[category] !== undefined) {
            delete chemicalEditState.editedCells[wellName][chemical][category];
            
            // Clean up empty objects
            if (Object.keys(chemicalEditState.editedCells[wellName][chemical]).length === 0) {
                delete chemicalEditState.editedCells[wellName][chemical];
            }
            if (Object.keys(chemicalEditState.editedCells[wellName]).length === 0) {
                delete chemicalEditState.editedCells[wellName];
            }
        }
        cell.classList.remove('modified');
    }
    
    // Update changes indicator
    updateChangesIndicator();
}

// Update the changes indicator badge
function updateChangesIndicator() {
    const indicator = document.getElementById('chemicalChangesIndicator');
    const changeCount = Object.values(chemicalEditState.editedCells).reduce((total, well) => {
        return total + Object.values(well).reduce((wellTotal, chem) => {
            return wellTotal + Object.keys(chem).length;
        }, 0);
    }, 0);
    
    if (changeCount > 0) {
        indicator.textContent = `${changeCount} change${changeCount > 1 ? 's' : ''}`;
        indicator.style.display = 'inline-block';
    } else {
        indicator.style.display = 'none';
    }
}

// Initialize Edit/Save/Cancel button handlers
function initializeChemicalEditButtons() {
    const editBtn = document.getElementById('btnEditChemical');
    const saveBtn = document.getElementById('btnSaveChemical');
    const cancelBtn = document.getElementById('btnCancelChemical');
    
    if (editBtn) {
        const newEditBtn = editBtn.cloneNode(true);
        editBtn.parentNode.replaceChild(newEditBtn, editBtn);
        
        newEditBtn.addEventListener('click', enterChemicalEditMode);
    }
    
    if (saveBtn) {
        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        
        newSaveBtn.addEventListener('click', saveChemicalChanges);
    }
    
    if (cancelBtn) {
        const newCancelBtn = cancelBtn.cloneNode(true);
        cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
        
        newCancelBtn.addEventListener('click', cancelChemicalEdits);
    }
}

// Enter edit mode
function enterChemicalEditMode() {
    chemicalEditState.editMode = true;
    chemicalEditState.editedCells = {};
    chemicalEditState.originalValues = {};
    
    // Toggle button visibility
    document.getElementById('btnEditChemical').style.display = 'none';
    document.getElementById('btnSaveChemical').style.display = 'inline-flex';
    document.getElementById('btnCancelChemical').style.display = 'inline-flex';
    
    // Show edit mode info banner
    const infoBanner = document.getElementById('chemicalEditInfoBanner');
    if (infoBanner) {
        infoBanner.style.display = 'flex';
        
        // Add close button handler
        const closeBtn = document.getElementById('btnCloseEditInfo');
        if (closeBtn) {
            closeBtn.onclick = () => {
                infoBanner.style.display = 'none';
            };
        }
    }
    
    // Re-render table with editable cells
    renderMasterChemicalTable();
}

// Exit edit mode (helper function)
function exitChemicalEditMode() {
    chemicalEditState.editMode = false;
    chemicalEditState.editedCells = {};
    chemicalEditState.originalValues = {};
    
    // Reset save button state
    const saveBtn = document.getElementById('btnSaveChemical');
    const cancelBtn = document.getElementById('btnCancelChemical');
    if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
        </svg> Save`;
    }
    if (cancelBtn) {
        cancelBtn.disabled = false;
    }
    
    // Toggle button visibility
    document.getElementById('btnEditChemical').style.display = 'inline-flex';
    document.getElementById('btnSaveChemical').style.display = 'none';
    document.getElementById('btnCancelChemical').style.display = 'none';
    document.getElementById('chemicalChangesIndicator').style.display = 'none';
    
    // Hide edit mode info banner
    const infoBanner = document.getElementById('chemicalEditInfoBanner');
    if (infoBanner) {
        infoBanner.style.display = 'none';
    }
    
    // Re-render table as read-only
    renderMasterChemicalTable();
}

// Save all chemical changes to Firestore
async function saveChemicalChanges() {
    if (Object.keys(chemicalEditState.editedCells).length === 0) {
        alert('No changes to save');
        return;
    }
    
    // Disable save button during save
    const saveBtn = document.getElementById('btnSaveChemical');
    const cancelBtn = document.getElementById('btnCancelChemical');
    const originalSaveText = saveBtn.innerHTML;
    
    saveBtn.disabled = true;
    cancelBtn.disabled = true;
    saveBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spinning">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
    </svg> Saving...`;
    
    try {
        // Save to Firestore (will throw error if it fails)
        await updateChemicalProgramValues(chemicalEditState.editedCells);
        
        // Exit edit mode and re-render
        exitChemicalEditMode();
        
        // Show success message
        const indicator = document.getElementById('chemicalChangesIndicator');
        indicator.textContent = 'Saved!';
        indicator.style.display = 'inline-block';
        indicator.style.backgroundColor = '#22c55e';
        
        setTimeout(() => {
            indicator.style.display = 'none';
            indicator.style.backgroundColor = '';
        }, 3000);
    } catch (error) {
        console.error('Error saving chemical changes:', error);
        
        // Provide more specific error message
        let errorMessage = 'Failed to save changes. ';
        if (error.message?.includes('ERR_BLOCKED_BY_CLIENT') || 
            error.code === 'resource-exhausted' ||
            navigator.onLine === false) {
            errorMessage += 'Network issue detected. Please check:\n\n' +
                          '1. Your internet connection\n' +
                          '2. Ad blockers or browser extensions may be blocking Firestore\n' +
                          '3. Try disabling extensions temporarily';
        } else if (error.code === 'permission-denied') {
            errorMessage += 'Permission denied. Please check your authentication.';
        } else {
            errorMessage += 'Please try again.\n\nError: ' + (error.message || 'Unknown error');
        }
        
        alert(errorMessage);
        
        // Re-enable buttons
        saveBtn.disabled = false;
        cancelBtn.disabled = false;
        saveBtn.innerHTML = originalSaveText;
    }
}

// Cancel editing and revert all changes
function cancelChemicalEdits() {
    if (Object.keys(chemicalEditState.editedCells).length > 0) {
        const confirmed = confirm('You have unsaved changes. Are you sure you want to cancel?');
        if (!confirmed) {
            return;
        }
    }
    
    // Exit edit mode (this clears all state and re-renders)
    exitChemicalEditMode();
}

function showBatteryLoadingState() {
    const loadingHTML = '<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading battery data...</span></div>';
    
    // Stats cards
    const statBatteryOil = document.getElementById('statBatteryOil');
    const statBatteryWater = document.getElementById('statBatteryWater');
    const statBatteryGas = document.getElementById('statBatteryGas');
    
    if (statBatteryOil) statBatteryOil.innerHTML = '<span class="loading-text">...</span>';
    if (statBatteryWater) statBatteryWater.innerHTML = '<span class="loading-text">...</span>';
    if (statBatteryGas) statBatteryGas.innerHTML = '<span class="loading-text">...</span>';
    
    // Wells grid
    const wellsGrid = document.getElementById('batteryWellsGrid');
    if (wellsGrid) {
        wellsGrid.innerHTML = loadingHTML;
    }
}

function renderBatteryStats(sheetId) {
    const statBatteryOil = document.getElementById('statBatteryOil');
    const statBatteryWater = document.getElementById('statBatteryWater');
    const statBatteryGas = document.getElementById('statBatteryGas');
    
    const sheetData = appState.appData[sheetId];
    
    if (!sheetData || !sheetData._metadataLoaded) {
        // No data uploaded yet
        if (statBatteryOil) statBatteryOil.textContent = '-';
        if (statBatteryWater) statBatteryWater.textContent = '-';
        if (statBatteryGas) statBatteryGas.textContent = '-';
        return;
    }
    
    const stats = getBatteryStats(sheetId);
    
    if (statBatteryOil) statBatteryOil.textContent = stats.totalOil.toLocaleString();
    if (statBatteryWater) statBatteryWater.textContent = stats.totalWater.toLocaleString();
    if (statBatteryGas) statBatteryGas.textContent = stats.totalGas.toLocaleString();
}

function renderBatteryWellsGrid(sheetId) {
    const grid = document.getElementById('batteryWellsGrid');
    const sheetData = appState.appData[sheetId];

    if (!sheetData || !sheetData._metadataLoaded) {
        grid.innerHTML = '<p class="empty-message">No data uploaded for this battery</p>';
        return;
    }

    if (!sheetData.wells || sheetData.wells.length === 0) {
        grid.innerHTML = '<p class="empty-message">No wells found</p>';
        return;
    }

    const activeWells = sheetData.wells.filter(w => w.status !== 'inactive');

    if (activeWells.length === 0) {
        grid.innerHTML = '<p class="empty-message">No active wells</p>';
        return;
    }

    grid.innerHTML = activeWells.map(well => {
        const latestTest = well.latestTest || (well.wellTests && well.wellTests[0]);
        const latestOil = latestTest && latestTest.oil !== undefined ? Math.round(latestTest.oil * 100) / 100 : null;
        const latestGas = latestTest && latestTest.gas !== undefined && latestTest.gas !== null ? Math.round(Math.max(0, latestTest.gas) * 100) / 100 : null;
        const latestWater = latestTest && latestTest.water !== undefined ? Math.round(latestTest.water * 100) / 100 : null;

        // Show water instead of gas when gas is 0 or null
        const showWater = latestGas === null || latestGas === 0;
        const secondStatLabel = showWater ? 'Latest Water' : 'Latest Gas';
        const secondStatValue = showWater 
            ? (latestWater !== null ? latestWater + ' bbl' : '-')
            : (latestGas !== null ? latestGas + ' mcf' : '-');

        return `
            <div class="well-card" data-well-id="${well.id}" data-sheet-id="${sheetId}">
                <h4>${well.name}</h4>
                <div class="well-stats">
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Oil</span>
                        <span class="well-stat-value">${latestOil !== null ? latestOil + ' bbl' : '-'}</span>
                    </div>
                    <div class="well-stat">
                        <span class="well-stat-label">${secondStatLabel}</span>
                        <span class="well-stat-value">${secondStatValue}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('.well-card').forEach(card => {
        card.addEventListener('click', () => {
            const wellId = card.dataset.wellId;
            const sheet = card.dataset.sheetId;
            showWellView(sheet, wellId);
        });
    });
}

export async function showWellView(sheetId, wellId) {
    const sheetData = appState.appData[sheetId];
    if (!sheetData) return;

    // Ensure wells list is loaded
    if (!sheetData._wellsLoaded) {
        await loadWellsList(sheetId);
    }

    let well = sheetData.wells.find(w => w.id === wellId);
    if (!well) return;

    appState.currentSheet = sheetId;
    appState.currentWell = wellId;
    showView('well');

    const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);

    document.getElementById('wellName').textContent = well.name;
    document.getElementById('wellBreadcrumb').textContent = `${sheetConfig.name} > ${well.name}`;

    // Show loading state if well details aren't loaded yet
    if (!well._detailsLoaded || well._summaryOnly) {
        showWellLoadingState();
        
        // Load full well details
        await loadWellDetails(sheetId, wellId);
        
        // Get the updated well object
        well = sheetData.wells.find(w => w.id === wellId);
        if (!well) return;
    }

    // Try to match chemical program from Master Chemical Sheet
    const matchedChemicalProgram = findChemicalProgramMatch(well.name, appState.chemicalPrograms);
    
    // Render all well data
    renderProductionCharts(well);
    renderWellTestTable(well.wellTests || []);
    renderChemicalProgram(well.chemicalProgram || {}, matchedChemicalProgram, well.name);
    renderFailureHistory(well.failureHistory || []);
    renderActionList('wellActionList', well.actionItems || []);
    renderCompletedActions(well.completedActions || []);
    renderPressureTable(well.pressureReadings || []);
    renderPressureCharts(well.pressureReadings || []);
    renderFluidLevels(well.name);

    initializeEditHandlers();
    initializeCSVDownloadHandlers(well);
}

function showWellLoadingState() {
    // Show loading placeholders for well data sections
    const loadingHTML = '<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading well data...</span></div>';
    
    // Production chart
    const productionChartCard = document.querySelector('#productionChartCard .card-body');
    if (productionChartCard) {
        productionChartCard.innerHTML = loadingHTML;
    }
    
    // Well test table
    const wellTestBody = document.querySelector('#wellTestTable tbody');
    if (wellTestBody) {
        wellTestBody.innerHTML = '<tr><td colspan="4" class="dashboard-loading">' + loadingHTML + '</td></tr>';
    }
    
    // Pressure table
    const pressureBody = document.querySelector('#pressureTable tbody');
    if (pressureBody) {
        pressureBody.innerHTML = '<tr><td colspan="5" class="dashboard-loading">' + loadingHTML + '</td></tr>';
    }
    
    // Failure history
    const failureBody = document.querySelector('#failureTable tbody');
    if (failureBody) {
        failureBody.innerHTML = '<tr><td colspan="6" class="dashboard-loading">' + loadingHTML + '</td></tr>';
    }
}

function initializeCSVDownloadHandlers(well) {
    const wellName = well.name.replace(/[^a-zA-Z0-9]/g, '_');
    
    // Production Chart download
    const btnDownloadProduction = document.getElementById('btnDownloadProduction');
    if (btnDownloadProduction) {
        const newBtn = btnDownloadProduction.cloneNode(true);
        btnDownloadProduction.parentNode.replaceChild(newBtn, btnDownloadProduction);
        
        newBtn.addEventListener('click', () => {
            // Use well.production - the same data source as the charts
            const production = well.production || [];
            
            // Get the current date range from the date selectors
            const startDateInput = document.getElementById('productionStartDate');
            const endDateInput = document.getElementById('productionEndDate');
            
            let filteredData = production.filter(item => item.date);
            
            // Apply date range filter if set
            if (startDateInput && startDateInput.value) {
                const startDate = new Date(startDateInput.value);
                filteredData = filteredData.filter(item => new Date(item.date) >= startDate);
            }
            if (endDateInput && endDateInput.value) {
                const endDate = new Date(endDateInput.value);
                endDate.setHours(23, 59, 59, 999);
                filteredData = filteredData.filter(item => new Date(item.date) <= endDate);
            }
            
            // Sort by date ascending for the CSV
            filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
            
            const csvData = filteredData.map(item => ({
                'date': formatDateForCSV(item.date),
                'oilbbl': item.oil !== null && item.oil !== undefined ? Math.round(item.oil * 100) / 100 : '',
                'waterbbl': item.water !== null && item.water !== undefined ? Math.round(item.water * 100) / 100 : '',
                'gasmcf': item.gas !== null && item.gas !== undefined ? Math.round(Math.max(0, item.gas) * 100) / 100 : ''
            }));
            
            downloadCSV(csvData, ['Date', 'Oil (bbl)', 'Water (bbl)', 'Gas (mcf)'], `${wellName}_Production.csv`);
        });
    }
    
    // Well Test Table download
    const btnDownloadWellTests = document.getElementById('btnDownloadWellTests');
    if (btnDownloadWellTests) {
        // Remove existing listeners by cloning
        const newBtn = btnDownloadWellTests.cloneNode(true);
        btnDownloadWellTests.parentNode.replaceChild(newBtn, btnDownloadWellTests);
        
        newBtn.addEventListener('click', () => {
            const wellTests = well.wellTests || [];
            const today = new Date();
            today.setHours(23, 59, 59, 999);
            
            const validTests = wellTests.filter(test => {
                const testDate = new Date(test.date);
                return testDate <= today;
            });
            
            const csvData = validTests.map(test => ({
                'date': formatDateForCSV(test.date),
                'oilbbl': test.oil !== null ? Math.round(test.oil * 100) / 100 : '',
                'waterbbl': test.water !== null ? Math.round(test.water * 100) / 100 : '',
                'gasmcf': test.gas !== null ? Math.round(Math.max(0, test.gas) * 100) / 100 : ''
            }));
            
            downloadCSV(csvData, ['Date', 'Oil (bbl)', 'Water (bbl)', 'Gas (mcf)'], `${wellName}_Well_Tests.csv`);
        });
    }
    
    // Pressure Readings download
    const btnDownloadPressure = document.getElementById('btnDownloadPressure');
    if (btnDownloadPressure) {
        // Remove existing listeners by cloning
        const newBtn = btnDownloadPressure.cloneNode(true);
        btnDownloadPressure.parentNode.replaceChild(newBtn, btnDownloadPressure);
        
        newBtn.addEventListener('click', () => {
            const readings = well.pressureReadings || [];
            
            const csvData = readings.map(r => ({
                'date': formatDateForCSV(r.date),
                'casingpsi': r.casingPsi || '',
                'tubingpsi': r.tubingPsi || '',
                'flowlinepsi': r.flowlinePsi || '',
                'injvol': r.injVol || ''
            }));
            
            downloadCSV(csvData, ['Date', 'Casing PSI', 'Tubing PSI', 'Flowline PSI', 'Inj Vol'], `${wellName}_Pressure_Readings.csv`);
        });
    }
}

function renderWellsGrid(sheetId) {
    const grid = document.getElementById('wellsGrid');
    const sheetData = appState.appData[sheetId];

    if (!sheetData || !sheetData.wells || sheetData.wells.length === 0) {
        grid.innerHTML = '<p class="empty-message">Upload gauge sheet to see wells</p>';
        return;
    }

    const activeWells = sheetData.wells.filter(w => w.status !== 'inactive');

    if (activeWells.length === 0) {
        grid.innerHTML = '<p class="empty-message">No active wells</p>';
        return;
    }

    grid.innerHTML = activeWells.map(well => {
        const latestTest = well.latestTest || (well.wellTests && well.wellTests[0]);
        const latestOil = latestTest && latestTest.oil !== undefined ? Math.round(latestTest.oil * 100) / 100 : null;
        const latestGas = latestTest && latestTest.gas !== undefined && latestTest.gas !== null ? Math.round(Math.max(0, latestTest.gas) * 100) / 100 : null;
        const latestWater = latestTest && latestTest.water !== undefined ? Math.round(latestTest.water * 100) / 100 : null;

        // Show water instead of gas when gas is 0 or null
        const showWater = latestGas === null || latestGas === 0;
        const secondStatLabel = showWater ? 'Latest Water' : 'Latest Gas';
        const secondStatValue = showWater 
            ? (latestWater !== null ? latestWater + ' bbl' : '-')
            : (latestGas !== null ? latestGas + ' mcf' : '-');

        return `
            <div class="well-card" data-well-id="${well.id}" data-sheet-id="${sheetId}">
                <h4>${well.name}</h4>
                <div class="well-stats">
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Oil</span>
                        <span class="well-stat-value">${latestOil !== null ? latestOil + ' bbl' : '-'}</span>
                    </div>
                    <div class="well-stat">
                        <span class="well-stat-label">${secondStatLabel}</span>
                        <span class="well-stat-value">${secondStatValue}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('.well-card').forEach(card => {
        card.addEventListener('click', () => {
            const wellId = card.dataset.wellId;
            const sheet = card.dataset.sheetId;
            showWellView(sheet, wellId);
        });
    });
}

function renderWellTestTable(wellTests) {
    const tbody = document.querySelector('#wellTestTable tbody');
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    if (!wellTests || wellTests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';
        return;
    }

    const validTests = wellTests.filter(test => {
        const testDate = new Date(test.date);
        return testDate <= today;
    });

    if (validTests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';
        return;
    }

    // Sort by date descending (newest first)
    validTests.sort((a, b) => new Date(b.date) - new Date(a.date));

    tbody.innerHTML = validTests.map(test => {
        const gas = test.gas !== null ? Math.round(Math.max(0, test.gas) * 100) / 100 : null;
        return `
            <tr>
                <td>${formatDate(test.date)}</td>
                <td>${test.oil !== null ? Math.round(test.oil * 100) / 100 : '-'}</td>
                <td>${test.water !== null ? Math.round(test.water * 100) / 100 : '-'}</td>
                <td>${gas !== null ? gas : '-'}</td>
            </tr>
        `;
    }).join('');
}

function renderChemicalProgram(manualProgram, matchedProgram, wellName) {
    const tableContainer = document.querySelector('#chemicalTable').parentElement;
    
    // Determine which data source to use
    let dataSource = 'none';
    let programData = null;
    let lastUpdated = null;
    
    if (matchedProgram) {
        // Prefer Master Chemical Sheet data if available
        dataSource = 'master';
        programData = matchedProgram;
        lastUpdated = matchedProgram.lastUpdated;
    } else if (manualProgram && (manualProgram.continuous || manualProgram.truckTreat)) {
        // Fall back to manual data
        dataSource = 'manual';
        programData = {
            truckTreating: manualProgram.truckTreat || {},
            continuous: manualProgram.continuous || {}
        };
    }
    
    // If no data at all, show empty state
    if (dataSource === 'none') {
        tableContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <p>No chemical program data available</p>
                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Upload the Master Chemical Sheet or add data manually</p>
            </div>
        `;
        return;
    }
    
    // Build dynamic table based on available data
    let tableHTML = '<table id="chemicalTable">';
    
    // Handle Master Chemical Sheet data (dynamic chemicals)
    if (dataSource === 'master') {
        const truckChems = Object.entries(programData.truckTreating || {});
        const continuousChems = Object.entries(programData.continuous || {});
        
        // Show data source indicator
        const updateInfo = lastUpdated ? ` (Updated: ${formatDate(lastUpdated)})` : '';
        tableHTML += `
            <thead>
                <tr>
                    <th colspan="2" style="font-size: 0.875rem; color: var(--text-muted); font-weight: normal; text-align: center;">
                        From Master Chemical Sheet${updateInfo}
                    </th>
                </tr>
            </thead>
            <tbody>
        `;
        
        // Truck Treating section
        if (truckChems.length > 0) {
            tableHTML += `
                <tr>
                    <td colspan="2" style="font-weight: 600; background-color: var(--bg-tertiary); padding: 0.75rem;">
                        TRUCK TREATING (gal/month)
                    </td>
                </tr>
            `;
            
            truckChems.forEach(([chemName, value]) => {
                const formattedValue = typeof value === 'number' ? value.toFixed(2) : value;
                tableHTML += `
                    <tr>
                        <td style="padding-left: 1.5rem;">${chemName}</td>
                        <td style="text-align: right;">${formattedValue}</td>
                    </tr>
                `;
            });
        }
        
        // Continuous section
        if (continuousChems.length > 0) {
            tableHTML += `
                <tr>
                    <td colspan="2" style="font-weight: 600; background-color: var(--bg-tertiary); padding: 0.75rem; padding-top: ${truckChems.length > 0 ? '1rem' : '0.75rem'};">
                        CONTINUOUS (gal/month)
                    </td>
                </tr>
            `;
            
            continuousChems.forEach(([chemName, value]) => {
                const formattedValue = typeof value === 'number' ? value.toFixed(2) : value;
                tableHTML += `
                    <tr>
                        <td style="padding-left: 1.5rem;">${chemName}</td>
                        <td style="text-align: right;">${formattedValue}</td>
                    </tr>
                `;
            });
        }
        
        tableHTML += '</tbody>';
    } 
    // Handle manual data (old format)
    else if (dataSource === 'manual') {
        const cont = programData.continuous || {};
        const truck = programData.truckTreating || {};
        
        tableHTML += `
            <thead>
                <tr>
                    <th colspan="2" style="font-size: 0.875rem; color: var(--text-muted); font-weight: normal; text-align: center;">
                        Manually Entered
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>Continuous</th>
                    <th>Truck Treat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rate (gal/month)</td>
                    <td>${cont.rate || '-'}</td>
                    <td>${truck.rate || '-'}</td>
                </tr>
                <tr>
                    <td>Chems Used</td>
                    <td>${cont.chems || '-'}</td>
                    <td>${truck.chems || '-'}</td>
                </tr>
                <tr>
                    <td>PPM</td>
                    <td>${cont.ppm || '-'}</td>
                    <td>${truck.ppm || '-'}</td>
                </tr>
            </tbody>
        `;
    }
    
    tableHTML += '</table>';
    tableContainer.innerHTML = tableHTML;
}

function renderFailureHistory(failures) {
    const tbody = document.querySelector('#failureTable tbody');

    if (!failures || failures.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" style="text-align: center; color: #6b7280;">No failure history</td></tr>';
        return;
    }

    tbody.innerHTML = failures.map(f => {
        const failureDate = f.failureDate?.toDate?.() || new Date(f.failureDate);
        const fileUrl = f.fileUrl || '#';
        const fileName = f.fileName || 'Unknown File';
        const notes = f.notes || '-';
        
        return `
            <tr>
                <td>${formatDate(failureDate)}</td>
                <td>
                    <a href="${fileUrl}" 
                       target="_blank" 
                       download="${fileName}"
                       class="file-download-link"
                       title="Download ${fileName}">
                        ${fileName}
                    </a>
                </td>
                <td>${notes}</td>
                <td>
                    <button class="btn-icon btn-delete-failure" 
                            data-failure-id="${f.id}"
                            title="Delete entry">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334V4m2 0v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334Z" 
                                  stroke="currentColor" 
                                  stroke-width="1.5" 
                                  stroke-linecap="round" 
                                  stroke-linejoin="round"/>
                        </svg>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
    
    // Add event listeners for delete buttons
    tbody.querySelectorAll('.btn-delete-failure').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const failureId = btn.dataset.failureId;
            handleDeleteFailureEntry(failureId);
        });
    });
}

// Handler for deleting failure entries
async function handleDeleteFailureEntry(failureId) {
    if (!confirm('Are you sure you want to delete this failure history entry? This will also delete the associated file.')) {
        return;
    }
    
    const { deleteFailureHistoryEntry } = await import('./firestore-storage.js');
    
    const sheetId = appState.currentSheet;
    const wellId = appState.currentWell;
    
    const success = await deleteFailureHistoryEntry(sheetId, wellId, failureId);
    
    if (success) {
        // Reload well details to refresh the display
        const { loadWellDetails } = await import('./firestore-storage.js');
        await loadWellDetails(sheetId, wellId);
        
        // Re-render the failure history table
        const sheetData = appState.appData[sheetId];
        const well = sheetData.wells.find(w => w.id === wellId);
        if (well) {
            renderFailureHistory(well.failureHistory || []);
        }
        
        alert('Failure history entry deleted successfully');
    } else {
        alert('Failed to delete failure history entry. Please try again.');
    }
}

function renderActionList(elementId, items) {
    const list = document.getElementById(elementId);
    if (!items || items.length === 0) {
        list.innerHTML = '<li style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';
        return;
    }
    
    list.innerHTML = items.map((item, index) => {
        // Handle both old string format and new object format
        const isString = typeof item === 'string';
        const text = isString ? item : item.text;
        const completed = isString ? false : (item.completed || false);
        const completedDate = !isString && item.completedDate ? (item.completedDate.toDate?.() || new Date(item.completedDate)) : null;
        const completedBy = !isString && item.completedBy ? item.completedBy : null;
        
        const completedClass = completed ? 'action-item-completed' : '';
        const completedBtnClass = completed ? 'action-complete-btn-checked' : '';
        const completedTitle = completed ? 'Mark as incomplete' : 'Mark as completed';
        
        let completionMeta = '';
        if (completed && completedDate) {
            const formattedDate = formatDate(completedDate);
            completionMeta = `
                <div class="action-completion-meta">
                    <span class="completion-date">${formattedDate}</span>
                    ${completedBy ? `<span class="completion-by">by ${completedBy}</span>` : ''}
                </div>
            `;
        }
        
        return `
            <li class="action-item-with-checkbox ${completedClass}">
                <button class="action-complete-btn ${completedBtnClass}" data-item-index="${index}" title="${completedTitle}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </button>
                <div class="action-item-content">
                    <span class="action-item-text">${escapeHtml(text)}</span>
                    ${completionMeta}
                </div>
            </li>
        `;
    }).join('');
    
    // Attach event listeners to completion buttons
    list.querySelectorAll('.action-complete-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const itemIndex = parseInt(btn.dataset.itemIndex);
            await handleToggleActionCompletion(itemIndex);
        });
    });
}

function renderCompletedActions(completedActions) {
    // This function is no longer needed as completed items are shown inline
    // Keeping it for backwards compatibility but making it a no-op
    const list = document.getElementById('completedActionList');
    if (!list) return;
    
    // Hide the completed actions section since we're showing them inline
    const completedSection = list.closest('.completed-actions-card');
    if (completedSection) {
        completedSection.style.display = 'none';
    }
}

async function handleToggleActionCompletion(itemIndex) {
    if (!appState.currentSheet || !appState.currentWell) {
        alert('Unable to toggle action item. Please try again.');
        return;
    }
    
    const { toggleActionItemCompletion } = await import('./firestore-storage.js');
    const { getCurrentUser } = await import('./auth.js');
    
    const currentUser = getCurrentUser();
    const completedBy = currentUser?.email || 'Unknown User';
    
    const success = await toggleActionItemCompletion(
        appState.currentSheet,
        appState.currentWell,
        itemIndex,
        completedBy
    );
    
    if (success) {
        const { loadWellDetails } = await import('./firestore-storage.js');
        await loadWellDetails(appState.currentSheet, appState.currentWell);
        
        const sheetData = appState.appData[appState.currentSheet];
        const well = sheetData.wells.find(w => w.id === appState.currentWell);
        if (well) {
            renderActionList('wellActionList', well.actionItems || []);
        }
    } else {
        alert('Failed to toggle action item. Please try again.');
    }
}

function renderPressureTable(readings) {
    const tbody = document.querySelector('#pressureTable tbody');

    if (!readings || readings.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #6b7280;">No pressure data</td></tr>';
        return;
    }

    // Sort by date descending (newest first)
    const sortedReadings = [...readings].sort((a, b) => new Date(b.date) - new Date(a.date));

    tbody.innerHTML = sortedReadings.map(r => `
        <tr>
            <td>${formatDate(r.date)}</td>
            <td>${r.casingPsi || '-'}</td>
            <td>${r.tubingPsi || '-'}</td>
            <td>${r.flowlinePsi || '-'}</td>
            <td>${r.injVol || '-'}</td>
        </tr>
    `).join('');
}

function renderPressureCharts(readings) {
    const card = document.getElementById('pressureChartsCard');
    const wrapper = document.getElementById('pressureChartsWrapper');

    // Destroy existing charts
    if (appState.pressureCharts.psi) {
        appState.pressureCharts.psi.destroy();
        appState.pressureCharts.psi = null;
    }
    if (appState.pressureCharts.injVol) {
        appState.pressureCharts.injVol.destroy();
        appState.pressureCharts.injVol = null;
    }

    // Check if we have sufficient data (>20 entries)
    if (!readings || readings.length <= 20) {
        card.style.display = 'none';
        return;
    }

    // Determine which data types are available
    const hasCasingPsi = readings.some(r => r.casingPsi !== null && r.casingPsi !== undefined && !isNaN(r.casingPsi));
    const hasTubingPsi = readings.some(r => r.tubingPsi !== null && r.tubingPsi !== undefined && !isNaN(r.tubingPsi));
    const hasFlowlinePsi = readings.some(r => r.flowlinePsi !== null && r.flowlinePsi !== undefined && !isNaN(r.flowlinePsi));
    const hasInjVol = readings.some(r => r.injVol !== null && r.injVol !== undefined && !isNaN(r.injVol));

    const hasPsiData = hasCasingPsi || hasTubingPsi || hasFlowlinePsi;

    // If no data available, hide the card
    if (!hasPsiData && !hasInjVol) {
        card.style.display = 'none';
        return;
    }

    // Show the card
    card.style.display = 'block';
    wrapper.innerHTML = '';

    // Create PSI chart if we have PSI data
    if (hasPsiData) {
        const psiSection = document.createElement('div');
        psiSection.className = 'chart-section';
        
        let filterHtml = '';
        const availableFilters = [];
        if (hasCasingPsi) availableFilters.push({ id: 'casing', label: 'Casing PSI', color: '#f97316' });
        if (hasTubingPsi) availableFilters.push({ id: 'tubing', label: 'Tubing PSI', color: '#3b82f6' });
        if (hasFlowlinePsi) availableFilters.push({ id: 'flowline', label: 'Flowline PSI', color: '#8b5cf6' });
        
        if (availableFilters.length > 1) {
            filterHtml = `
                <div class="pressure-chart-filters">
                    ${availableFilters.map(filter => `
                        <label class="pressure-filter-option">
                            <input type="checkbox" class="pressure-filter-checkbox" data-psi-type="${filter.id}" checked>
                            <span class="filter-color-indicator" style="background-color: ${filter.color};"></span>
                            <span>${filter.label}</span>
                        </label>
                    `).join('')}
                </div>
            `;
        }
        
        psiSection.innerHTML = `
            <div class="chart-header-with-filters">
                <div class="chart-label">Pressure Readings (PSI)</div>
                ${filterHtml}
            </div>
            <div class="canvas-wrapper">
                <canvas id="chart-pressure-psi"></canvas>
            </div>
        `;
        wrapper.appendChild(psiSection);

        const datasets = [];

        if (hasCasingPsi) {
            const casingData = readings
                .filter(r => r.date && r.casingPsi !== null && r.casingPsi !== undefined)
                .map(r => ({
                    x: new Date(r.date),
                    y: Number(r.casingPsi)
                }))
                .filter(p => !isNaN(p.y))
                .sort((a, b) => a.x - b.x);

            datasets.push({
                label: 'Casing PSI',
                data: casingData,
                borderColor: '#f97316',
                backgroundColor: '#f97316',
                pointRadius: 2,
                pointHoverRadius: 5,
                borderWidth: 2
            });
        }

        if (hasTubingPsi) {
            const tubingData = readings
                .filter(r => r.date && r.tubingPsi !== null && r.tubingPsi !== undefined)
                .map(r => ({
                    x: new Date(r.date),
                    y: Number(r.tubingPsi)
                }))
                .filter(p => !isNaN(p.y))
                .sort((a, b) => a.x - b.x);

            datasets.push({
                label: 'Tubing PSI',
                data: tubingData,
                borderColor: '#3b82f6',
                backgroundColor: '#3b82f6',
                pointRadius: 2,
                pointHoverRadius: 5,
                borderWidth: 2
            });
        }

        if (hasFlowlinePsi) {
            const flowlineData = readings
                .filter(r => r.date && r.flowlinePsi !== null && r.flowlinePsi !== undefined)
                .map(r => ({
                    x: new Date(r.date),
                    y: Number(r.flowlinePsi)
                }))
                .filter(p => !isNaN(p.y))
                .sort((a, b) => a.x - b.x);

            datasets.push({
                label: 'Flowline PSI',
                data: flowlineData,
                borderColor: '#8b5cf6',
                backgroundColor: '#8b5cf6',
                pointRadius: 2,
                pointHoverRadius: 5,
                borderWidth: 2
            });
        }

        const psiCtx = document.getElementById('chart-pressure-psi').getContext('2d');
        appState.pressureCharts.psi = new Chart(psiCtx, {
            type: 'line',
            data: { datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#282c33',
                        titleColor: '#e8e9eb',
                        bodyColor: '#e8e9eb',
                        callbacks: {
                            title: (context) => {
                                const date = new Date(context[0].parsed.x);
                                return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                            },
                            label: (context) => `${context.dataset.label}: ${context.parsed.y} PSI`
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            displayFormats: {
                                day: 'MMM-yy',
                                week: 'MMM-yy',
                                month: 'MMM-yy',
                                quarter: 'MMM-yy',
                                year: 'yyyy'
                            }
                        },
                        grid: { color: '#3a3f47' },
                        ticks: { color: '#9ea3ab', maxTicksLimit: 8 }
                    },
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'PSI', color: '#9ea3ab' },
                        grid: { color: '#3a3f47' },
                        ticks: { color: '#9ea3ab' }
                    }
                }
            }
        });

        // Add event listeners for filter checkboxes
        const filterCheckboxes = psiSection.querySelectorAll('.pressure-filter-checkbox');
        filterCheckboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('change', (e) => {
                const datasetIndex = datasets.findIndex(ds => {
                    const psiType = e.target.dataset.psiType;
                    if (psiType === 'casing') return ds.label === 'Casing PSI';
                    if (psiType === 'tubing') return ds.label === 'Tubing PSI';
                    if (psiType === 'flowline') return ds.label === 'Flowline PSI';
                    return false;
                });
                
                if (datasetIndex !== -1) {
                    const meta = appState.pressureCharts.psi.getDatasetMeta(datasetIndex);
                    meta.hidden = !e.target.checked;
                    appState.pressureCharts.psi.update();
                }
            });
        });
    }

    // Create Injection Volume chart if we have that data
    if (hasInjVol) {
        const injVolSection = document.createElement('div');
        injVolSection.className = 'chart-section';
        injVolSection.innerHTML = `
            <div class="chart-label">Injection Volume</div>
            <div class="canvas-wrapper">
                <canvas id="chart-pressure-injvol"></canvas>
            </div>
        `;
        wrapper.appendChild(injVolSection);

        const injVolData = readings
            .filter(r => r.date && r.injVol !== null && r.injVol !== undefined)
            .map(r => ({
                x: new Date(r.date),
                y: Number(r.injVol)
            }))
            .filter(p => !isNaN(p.y))
            .sort((a, b) => a.x - b.x);

        const injVolCtx = document.getElementById('chart-pressure-injvol').getContext('2d');
        appState.pressureCharts.injVol = new Chart(injVolCtx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Injection Volume',
                    data: injVolData,
                    borderColor: '#22c55e',
                    backgroundColor: '#22c55e',
                    pointRadius: 2,
                    pointHoverRadius: 5,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#282c33',
                        titleColor: '#e8e9eb',
                        bodyColor: '#e8e9eb',
                        callbacks: {
                            title: (context) => {
                                const date = new Date(context[0].parsed.x);
                                return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                            },
                            label: (context) => `Injection Volume: ${context.parsed.y}`
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            displayFormats: {
                                day: 'MMM-yy',
                                week: 'MMM-yy',
                                month: 'MMM-yy',
                                quarter: 'MMM-yy',
                                year: 'yyyy'
                            }
                        },
                        grid: { color: '#3a3f47' },
                        ticks: { color: '#9ea3ab', maxTicksLimit: 8 }
                    },
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Volume', color: '#9ea3ab' },
                        grid: { color: '#3a3f47' },
                        ticks: { color: '#9ea3ab' }
                    }
                }
            }
        });
    }
}

function renderFluidLevels(wellName) {
    const card = document.getElementById('fluidLevelsWellCard');
    const tbody = document.querySelector('#fluidLevelsWellTable tbody');
    
    // Normalize well name to match fluid level data
    const normalized = wellName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const fluidData = appState.fluidLevels[normalized];
    
    // Hide card if no data available
    if (!fluidData || !fluidData.readings || fluidData.readings.length === 0) {
        card.style.display = 'none';
        return;
    }
    
    // Show card and populate table
    card.style.display = 'block';
    
    // Sort readings by date descending (newest first)
    const sortedReadings = [...fluidData.readings].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    // Calculate delta (change from previous reading)
    tbody.innerHTML = sortedReadings.map((reading, index) => {
        const nextReading = sortedReadings[index + 1];
        let delta = null;
        
        if (nextReading && reading.gasFreeLevel !== null && nextReading.gasFreeLevel !== null) {
            delta = reading.gasFreeLevel - nextReading.gasFreeLevel;
        }
        
        const deltaText = delta !== null 
            ? `${delta > 0 ? '+' : ''}${delta.toFixed(0)}`
            : '-';
        
        const deltaClass = delta !== null && delta > 0 ? 'change-rising' 
                          : delta !== null && delta < 0 ? 'change-falling' 
                          : '';
        
        const runTimePercent = reading.runTime !== null 
            ? (reading.runTime * 100).toFixed(0) + '%'
            : '-';
        
        return `
            <tr>
                <td>${formatDate(reading.date)}</td>
                <td class="numeric-cell">${reading.gasFreeLevel !== null ? reading.gasFreeLevel.toFixed(0) : '-'}</td>
                <td class="change-cell ${deltaClass}">${deltaText}</td>
                <td>${reading.strokeLength || '-'}</td>
                <td class="numeric-cell">${reading.spm !== null ? reading.spm.toFixed(1) : '-'}</td>
                <td>${runTimePercent}</td>
                <td class="numeric-cell">${reading.pumpIntakePressure !== null ? reading.pumpIntakePressure.toFixed(0) : '-'}</td>
            </tr>
        `;
    }).join('');
}

// ============================================================================
// FLUID LEVELS VIEW
// ============================================================================

/**
 * Show the Fluid Levels view
 */
export async function showFluidLevelsView() {
    showView('fluidLevels');
    setActiveNavItem(document.getElementById('nav-fluid-levels'));
    
    const emptyState = document.getElementById('fluidLevelsEmpty');
    const content = document.getElementById('fluidLevelsContent');
    const loading = document.getElementById('fluidLevelsLoading');
    
    // Check if we have fluid level data
    if (!appState.fluidLevels || Object.keys(appState.fluidLevels).length === 0) {
        // Try to load from Firestore
        loading.style.display = 'flex';
        emptyState.style.display = 'none';
        content.style.display = 'none';
        
        const { loadFluidLevelData } = await import('./firestore-storage.js');
        await loadFluidLevelData();
        
        loading.style.display = 'none';
    }
    
    // Check again after loading
    if (!appState.fluidLevels || Object.keys(appState.fluidLevels).length === 0) {
        emptyState.style.display = 'flex';
        content.style.display = 'none';
        return;
    }
    
    // Show content and render table
    emptyState.style.display = 'none';
    content.style.display = 'block';
    
    renderFluidLevelsTable();
    initializeFluidLevelsHandlers();
}

// Track current sort state for fluid levels table
let fluidLevelsCurrentSort = 'wellName-asc';

/**
 * Render the fluid levels table
 */
function renderFluidLevelsTable(searchTerm = '', sortBy = null) {
    // Use provided sort or current sort state
    const activeSort = sortBy || fluidLevelsCurrentSort;
    fluidLevelsCurrentSort = activeSort;
    const tableHeader = document.getElementById('fluidLevelsTableHeader');
    const tableBody = document.getElementById('fluidLevelsTableBody');
    const statsEl = document.getElementById('fluidLevelsDataStats');
    
    // Get all dashboard wells (from appState.appData)
    const dashboardWells = [];
    Object.keys(appState.appData).forEach(sheetId => {
        const sheet = appState.appData[sheetId];
        if (sheet && sheet.wells) {
            sheet.wells.forEach(well => {
                if (well.status !== 'inactive') {
                    dashboardWells.push({
                        name: well.name,
                        id: well.id,
                        sheetId: sheetId
                    });
                }
            });
        }
    });
    
    // Match fluid level data to dashboard wells
    const matchedData = [];
    
    for (const well of dashboardWells) {
        const normalized = well.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const fluidData = appState.fluidLevels[normalized];
        
        if (fluidData && fluidData.readings && fluidData.readings.length > 0) {
            // Sort readings by date (newest first)
            const sortedReadings = [...fluidData.readings].sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            );
            
            const latest = sortedReadings[0];
            const prior = sortedReadings[1] || null;
            
            // Calculate change in Gas Free Level if we have both readings
            let change = null;
            let changeDirection = null;
            if (prior && latest.gasFreeLevel !== null && prior.gasFreeLevel !== null) {
                change = latest.gasFreeLevel - prior.gasFreeLevel;
                changeDirection = change > 0 ? 'rising' : change < 0 ? 'falling' : 'stable';
            }
            
            matchedData.push({
                wellName: well.name,
                wellId: well.id,
                sheetId: well.sheetId,
                latestDate: latest.date,
                latestGasFreeLevel: latest.gasFreeLevel,
                priorGasFreeLevel: prior ? prior.gasFreeLevel : null,
                change: change,
                changeDirection: changeDirection,
                strokeLength: latest.strokeLength,
                spm: latest.spm,
                runTime: latest.runTime,
                pumpIntakePressure: latest.pumpIntakePressure,
                manuallyEdited: latest.manuallyEdited || false
            });
        }
    }
    
    // Apply search filter
    let filteredData = matchedData;
    if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        filteredData = matchedData.filter(row => 
            row.wellName.toLowerCase().includes(searchLower)
        );
    }
    
    // Apply sorting
    filteredData = applyFluidLevelsSort(filteredData, activeSort);
    
    // Update stats
    statsEl.innerHTML = `<span class="stat-badge">${filteredData.length} wells</span>`;
    
    // Parse sortBy to determine which column is active
    const [sortColumn, sortDirection] = activeSort.split('-');
    
    // Render table header with sort indicators
    const getSortClass = (column) => {
        if (column !== sortColumn) return 'sortable';
        return `sortable sort-${sortDirection}`;
    };
    
    tableHeader.innerHTML = `
        <th class="${getSortClass('wellName')}" data-sort="wellName-asc">Well Name</th>
        <th class="${getSortClass('latestDate')}" data-sort="latestDate-desc">Last Reading</th>
        <th class="${getSortClass('latestGasFreeLevel')}" data-sort="latestGasFreeLevel-desc">Gas Free Level (ft)</th>
        <th class="${getSortClass('priorGasFreeLevel')}" data-sort="priorGasFreeLevel-desc">Prior Level (ft)</th>
        <th class="${getSortClass('change')}" data-sort="change-desc">Change</th>
        <th>Stroke</th>
        <th class="${getSortClass('spm')}" data-sort="spm-desc">SPM</th>
        <th class="${getSortClass('runTime')}" data-sort="runTime-desc">Run Time</th>
        <th class="${getSortClass('pumpIntakePressure')}" data-sort="pumpIntakePressure-desc">Pump Intake (psi)</th>
    `;
    
    // Add click handlers to sortable headers
    const sortableHeaders = tableHeader.querySelectorAll('.sortable');
    sortableHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentSort = header.getAttribute('data-sort');
            const [col, dir] = currentSort.split('-');
            // Toggle direction if clicking the same column, otherwise use the default direction from data-sort
            let newDirection = dir;
            if (col === sortColumn) {
                newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
            }
            fluidLevelsCurrentSort = `${col}-${newDirection}`;
            renderFluidLevelsTable(searchTerm, fluidLevelsCurrentSort);
        });
    });
    
    // Render table body
    if (filteredData.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    ${searchTerm ? 'No wells found matching your search' : 'No fluid level data available for dashboard wells'}
                </td>
            </tr>
        `;
        return;
    }
    
    tableBody.innerHTML = filteredData.map(row => {
        const normalizedWellName = row.wellName.toLowerCase().replace(/[^a-z0-9]/g, '');
        const dateKey = row.latestDate.toISOString().split('T')[0];
        
        const changeText = row.change !== null 
            ? `${row.change > 0 ? '+' : ''}${row.change.toFixed(0)} ft`
            : '-';
        
        const changeClass = row.changeDirection === 'rising' ? 'change-rising' 
                          : row.changeDirection === 'falling' ? 'change-falling' 
                          : '';
        
        const changeIndicator = row.changeDirection === 'rising' ? ' ↑' 
                              : row.changeDirection === 'falling' ? ' ↓' 
                              : '';
        
        // Manual edit indicator
        const manualEditBadge = row.manuallyEdited ? 
            '<span class="manual-edit-badge" title="Manually edited">✎</span>' : '';
        
        const runTimePercent = row.runTime !== null 
            ? (row.runTime * 100).toFixed(0) + '%'
            : '-';
        
        return `
            <tr class="clickable-row" data-well-id="${row.wellId}" data-sheet-id="${row.sheetId}">
                <td class="well-name-cell">${row.wellName}${manualEditBadge ? ' ' + manualEditBadge : ''}</td>
                <td>${formatDate(row.latestDate)}</td>
                <td class="numeric-cell">${row.latestGasFreeLevel !== null ? row.latestGasFreeLevel.toFixed(0) : '-'}</td>
                <td class="numeric-cell">${row.priorGasFreeLevel !== null ? row.priorGasFreeLevel.toFixed(0) : '-'}</td>
                <td class="change-cell ${changeClass}">${changeText}${changeIndicator}</td>
                <td>${row.strokeLength || '-'}</td>
                <td class="numeric-cell">${row.spm !== null ? row.spm.toFixed(1) : '-'}</td>
                <td class="numeric-cell">${runTimePercent}</td>
                <td class="numeric-cell">${row.pumpIntakePressure !== null ? row.pumpIntakePressure.toFixed(0) : '-'}</td>
            </tr>
        `;
    }).join('');
    
    // Add click handlers for navigation
    attachFluidLevelsRowClickHandlers();
}

/**
 * Apply sorting to fluid levels data
 */
function applyFluidLevelsSort(data, sortBy) {
    const [column, direction] = sortBy.split('-');
    const isAsc = direction === 'asc';
    
    const sorted = [...data].sort((a, b) => {
        let aVal, bVal;
        
        switch (column) {
            case 'wellName':
                aVal = a.wellName;
                bVal = b.wellName;
                return isAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
            
            case 'change':
                // Handle null values - put them at the end
                if (a.change === null && b.change === null) return 0;
                if (a.change === null) return 1;
                if (b.change === null) return -1;
                aVal = a.change;
                bVal = b.change;
                return isAsc ? aVal - bVal : bVal - aVal;
            
            case 'latestGasFreeLevel':
                // Handle null values - put them at the end
                if (a.latestGasFreeLevel === null && b.latestGasFreeLevel === null) return 0;
                if (a.latestGasFreeLevel === null) return 1;
                if (b.latestGasFreeLevel === null) return -1;
                aVal = a.latestGasFreeLevel;
                bVal = b.latestGasFreeLevel;
                return isAsc ? aVal - bVal : bVal - aVal;
            
            case 'priorGasFreeLevel':
                // Handle null values - put them at the end
                if (a.priorGasFreeLevel === null && b.priorGasFreeLevel === null) return 0;
                if (a.priorGasFreeLevel === null) return 1;
                if (b.priorGasFreeLevel === null) return -1;
                aVal = a.priorGasFreeLevel;
                bVal = b.priorGasFreeLevel;
                return isAsc ? aVal - bVal : bVal - aVal;
            
            case 'latestDate':
                aVal = new Date(a.latestDate);
                bVal = new Date(b.latestDate);
                return isAsc ? aVal - bVal : bVal - aVal;
            
            case 'spm':
                // Handle null values - put them at the end
                if (a.spm === null && b.spm === null) return 0;
                if (a.spm === null) return 1;
                if (b.spm === null) return -1;
                aVal = a.spm;
                bVal = b.spm;
                return isAsc ? aVal - bVal : bVal - aVal;
            
            case 'runTime':
                // Handle null values - put them at the end
                if (a.runTime === null && b.runTime === null) return 0;
                if (a.runTime === null) return 1;
                if (b.runTime === null) return -1;
                aVal = a.runTime;
                bVal = b.runTime;
                return isAsc ? aVal - bVal : bVal - aVal;
            
            case 'pumpIntakePressure':
                // Handle null values - put them at the end
                if (a.pumpIntakePressure === null && b.pumpIntakePressure === null) return 0;
                if (a.pumpIntakePressure === null) return 1;
                if (b.pumpIntakePressure === null) return -1;
                aVal = a.pumpIntakePressure;
                bVal = b.pumpIntakePressure;
                return isAsc ? aVal - bVal : bVal - aVal;
            
            default:
                return 0;
        }
    });
    
    return sorted;
}

/**
 * Initialize event handlers for the Fluid Levels view
 */
function initializeFluidLevelsHandlers() {
    // Search input
    const searchInput = document.getElementById('fluidLevelsSearchInput');
    if (searchInput) {
        // Remove existing listener by cloning
        const newSearch = searchInput.cloneNode(true);
        searchInput.parentNode.replaceChild(newSearch, searchInput);
        
        newSearch.addEventListener('input', (e) => {
            renderFluidLevelsTable(e.target.value);
        });
    }
    
    // Export CSV button
    const exportBtn = document.getElementById('btnExportFluidLevelsCSV');
    if (exportBtn) {
        // Remove existing listener by cloning
        const newBtn = exportBtn.cloneNode(true);
        exportBtn.parentNode.replaceChild(newBtn, exportBtn);
        
        newBtn.addEventListener('click', () => {
            exportFluidLevelsCSV();
        });
    }
    
    // Edit/Save/Cancel button handlers
    initializeFluidLevelsEditButtons();
}

/**
 * Initialize Edit/Save/Cancel button handlers for Fluid Levels
 */
function initializeFluidLevelsEditButtons() {
    const editBtn = document.getElementById('btnEditFluidLevels');
    const saveBtn = document.getElementById('btnSaveFluidLevels');
    const cancelBtn = document.getElementById('btnCancelFluidLevels');
    
    if (editBtn) {
        const newEditBtn = editBtn.cloneNode(true);
        editBtn.parentNode.replaceChild(newEditBtn, editBtn);
        newEditBtn.addEventListener('click', enterFluidLevelsEditMode);
    }
    
    if (saveBtn) {
        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        newSaveBtn.addEventListener('click', saveFluidLevelsChanges);
    }
    
    if (cancelBtn) {
        const newCancelBtn = cancelBtn.cloneNode(true);
        cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
        newCancelBtn.addEventListener('click', exitFluidLevelsEditMode);
    }
}

/**
 * Enter edit mode for Fluid Levels
 */
function enterFluidLevelsEditMode() {
    fluidLevelsEditState.editMode = true;
    fluidLevelsEditState.editedCells = {};
    fluidLevelsEditState.originalValues = {};
    
    // Toggle button visibility
    document.getElementById('btnEditFluidLevels').style.display = 'none';
    document.getElementById('btnSaveFluidLevels').style.display = 'inline-flex';
    document.getElementById('btnCancelFluidLevels').style.display = 'inline-flex';
    
    // Show edit mode info banner
    const infoBanner = document.getElementById('fluidLevelsEditInfoBanner');
    if (infoBanner) {
        infoBanner.style.display = 'flex';
        
        // Add close button handler
        const closeBtn = document.getElementById('btnCloseFluidLevelsEditInfo');
        if (closeBtn) {
            closeBtn.onclick = () => {
                infoBanner.style.display = 'none';
            };
        }
    }
    
    // Re-render table with editable cells
    renderFluidLevelsTable();
}

/**
 * Exit edit mode for Fluid Levels
 */
function exitFluidLevelsEditMode() {
    fluidLevelsEditState.editMode = false;
    fluidLevelsEditState.editedCells = {};
    fluidLevelsEditState.originalValues = {};
    
    // Reset save button state
    const saveBtn = document.getElementById('btnSaveFluidLevels');
    if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
        </svg>
        Save All Changes`;
    }
    
    // Toggle button visibility
    document.getElementById('btnEditFluidLevels').style.display = 'inline-flex';
    document.getElementById('btnSaveFluidLevels').style.display = 'none';
    document.getElementById('btnCancelFluidLevels').style.display = 'none';
    document.getElementById('fluidLevelsChangesIndicator').style.display = 'none';
    
    // Hide edit mode info banner
    const infoBanner = document.getElementById('fluidLevelsEditInfoBanner');
    if (infoBanner) {
        infoBanner.style.display = 'none';
    }
    
    // Re-render table as read-only
    renderFluidLevelsTable();
}

/**
 * Save all fluid level changes to Firestore
 */
async function saveFluidLevelsChanges() {
    if (Object.keys(fluidLevelsEditState.editedCells).length === 0) {
        alert('No changes to save');
        return;
    }
    
    // Disable save button during save
    const saveBtn = document.getElementById('btnSaveFluidLevels');
    const cancelBtn = document.getElementById('btnCancelFluidLevels');
    const originalSaveText = saveBtn.innerHTML;
    
    saveBtn.disabled = true;
    cancelBtn.disabled = true;
    saveBtn.innerHTML = `<div class="spinner-mini"></div> Saving...`;
    
    try {
        // Import the update function
        const { updateFluidLevelReadings } = await import('./firestore-storage.js');
        
        // Save changes to Firestore
        await updateFluidLevelReadings(fluidLevelsEditState.editedCells);
        
        // Exit edit mode
        exitFluidLevelsEditMode();
        
        // Show success message
        alert('Changes saved successfully!');
    } catch (error) {
        console.error('Error saving fluid level changes:', error);
        alert('Error saving changes: ' + error.message);
        
        // Re-enable buttons
        saveBtn.disabled = false;
        cancelBtn.disabled = false;
        saveBtn.innerHTML = originalSaveText;
    }
}

/**
 * Attach click handlers to rows for navigation
 */
function attachFluidLevelsRowClickHandlers() {
    const rows = document.querySelectorAll('#fluidLevelsTable tbody tr.clickable-row');
    
    rows.forEach(row => {
        row.addEventListener('click', () => {
            const wellId = row.dataset.wellId;
            const sheetId = row.dataset.sheetId;
            showWellView(sheetId, wellId).then(() => {
                // Scroll to fluid levels section after view loads
                setTimeout(() => {
                    const fluidLevelsCard = document.getElementById('fluidLevelsWellCard');
                    if (fluidLevelsCard && fluidLevelsCard.style.display !== 'none') {
                        fluidLevelsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            });
        });
    });
}

/**
 * Attach edit handlers to all editable cells in Fluid Levels table
 */
function attachFluidLevelsEditHandlers() {
    const editableCells = document.querySelectorAll('.editable-cell-inline.fluid-level-editable');
    
    editableCells.forEach(cell => {
        // Focus event - store original value
        cell.addEventListener('focus', (e) => {
            const wellName = e.target.dataset.wellName;
            const date = e.target.dataset.date;
            const field = e.target.dataset.field;
            const originalValue = e.target.dataset.originalValue;
            
            // Store original value for cancel
            if (!fluidLevelsEditState.originalValues[wellName]) {
                fluidLevelsEditState.originalValues[wellName] = {};
            }
            if (!fluidLevelsEditState.originalValues[wellName][date]) {
                fluidLevelsEditState.originalValues[wellName][date] = {};
            }
            fluidLevelsEditState.originalValues[wellName][date][field] = originalValue;
            
            // Select all text
            e.target.select();
        });
        
        // Blur event - validate and track changes
        cell.addEventListener('blur', (e) => {
            validateAndTrackFluidLevelChange(e.target);
        });
        
        // Keydown event - handle Enter and Escape
        cell.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.target.blur();
                
                // Move to next editable cell
                const allCells = Array.from(document.querySelectorAll('.editable-cell-inline.fluid-level-editable'));
                const currentIndex = allCells.indexOf(e.target);
                if (currentIndex < allCells.length - 1) {
                    allCells[currentIndex + 1].focus();
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                // Revert to original value
                e.target.textContent = e.target.dataset.originalValue;
                e.target.classList.remove('modified');
                e.target.blur();
            }
        });
        
        // Input event - validate numeric input
        cell.addEventListener('input', (e) => {
            let text = e.target.textContent;
            
            // Allow only numbers, decimal point, and negative sign
            text = text.replace(/[^0-9.-]/g, '');
            
            // Prevent multiple decimal points
            const parts = text.split('.');
            if (parts.length > 2) {
                text = parts[0] + '.' + parts.slice(1).join('');
            }
            
            // Update if changed
            if (text !== e.target.textContent) {
                e.target.textContent = text;
                
                // Restore cursor position at end
                const range = document.createRange();
                const selection = window.getSelection();
                if (e.target.firstChild) {
                    range.setStart(e.target.firstChild, text.length);
                    range.collapse(true);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        });
    });
}

/**
 * Validate and track a fluid level cell change
 */
function validateAndTrackFluidLevelChange(cell) {
    const wellName = cell.dataset.wellName;
    const date = cell.dataset.date;
    const field = cell.dataset.field;
    const originalValue = cell.dataset.originalValue;
    let newValue = cell.textContent.trim();
    
    // Remove % suffix if present (for runTime field)
    if (newValue.endsWith('%')) {
        newValue = newValue.slice(0, -1).trim();
    }
    
    // Validate numeric input
    if (newValue !== '' && isNaN(parseFloat(newValue))) {
        // Invalid - revert to original
        cell.textContent = originalValue + (field === 'runTime' ? '%' : '');
        cell.classList.remove('modified');
        return;
    }
    
    // Check if changed from original
    if (newValue !== originalValue) {
        // Track the change
        if (!fluidLevelsEditState.editedCells[wellName]) {
            fluidLevelsEditState.editedCells[wellName] = {};
        }
        if (!fluidLevelsEditState.editedCells[wellName][date]) {
            fluidLevelsEditState.editedCells[wellName][date] = {};
        }
        
        let valueToStore = newValue === '' ? null : parseFloat(newValue);
        
        // Convert runTime back to decimal (from percentage)
        if (field === 'runTime' && valueToStore !== null) {
            valueToStore = valueToStore / 100;
        }
        
        fluidLevelsEditState.editedCells[wellName][date][field] = valueToStore;
        
        cell.classList.add('modified');
    } else {
        // Value reverted to original - remove from tracking
        if (fluidLevelsEditState.editedCells[wellName]?.[date]) {
            delete fluidLevelsEditState.editedCells[wellName][date][field];
            
            // Clean up empty objects
            if (Object.keys(fluidLevelsEditState.editedCells[wellName][date]).length === 0) {
                delete fluidLevelsEditState.editedCells[wellName][date];
            }
            if (Object.keys(fluidLevelsEditState.editedCells[wellName]).length === 0) {
                delete fluidLevelsEditState.editedCells[wellName];
            }
        }
        
        cell.classList.remove('modified');
    }
    
    // Update changes indicator
    const changeCount = Object.keys(fluidLevelsEditState.editedCells).reduce((sum, wellName) => {
        return sum + Object.keys(fluidLevelsEditState.editedCells[wellName]).length;
    }, 0);
    
    const indicator = document.getElementById('fluidLevelsChangesIndicator');
    if (changeCount > 0) {
        indicator.textContent = `${changeCount} reading${changeCount > 1 ? 's' : ''} modified`;
        indicator.style.display = 'inline-block';
    } else {
        indicator.style.display = 'none';
    }
}

/**
 * Export fluid levels data to CSV
 */
function exportFluidLevelsCSV() {
    // Get all dashboard wells
    const dashboardWells = [];
    Object.keys(appState.appData).forEach(sheetId => {
        const sheet = appState.appData[sheetId];
        if (sheet && sheet.wells) {
            sheet.wells.forEach(well => {
                if (well.status !== 'inactive') {
                    dashboardWells.push({
                        name: well.name,
                        id: well.id,
                        sheetId: sheetId
                    });
                }
            });
        }
    });
    
    // Match fluid level data to dashboard wells
    const csvData = [];
    
    for (const well of dashboardWells) {
        const normalized = well.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const fluidData = appState.fluidLevels[normalized];
        
        if (fluidData && fluidData.readings && fluidData.readings.length > 0) {
            const sortedReadings = [...fluidData.readings].sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            );
            
            const latest = sortedReadings[0];
            const prior = sortedReadings[1] || null;
            
            let change = null;
            if (prior && latest.gasFreeLevel !== null && prior.gasFreeLevel !== null) {
                change = latest.gasFreeLevel - prior.gasFreeLevel;
            }
            
            csvData.push({
                'wellname': well.name,
                'lastreading': formatDateForCSV(latest.date),
                'gasfreelevel': latest.gasFreeLevel !== null ? latest.gasFreeLevel.toFixed(0) : '',
                'priorlevel': prior && prior.gasFreeLevel !== null ? prior.gasFreeLevel.toFixed(0) : '',
                'change': change !== null ? change.toFixed(0) : '',
                'strokelength': latest.strokeLength || '',
                'spm': latest.spm !== null ? latest.spm.toFixed(1) : '',
                'runtime': latest.runTime !== null ? (latest.runTime * 100).toFixed(0) + '%' : '',
                'pumpintakepressure': latest.pumpIntakePressure !== null ? latest.pumpIntakePressure.toFixed(0) : ''
            });
        }
    }
    
    const headers = [
        'Well Name',
        'Last Reading',
        'Gas Free Level (ft)',
        'Prior Level (ft)',
        'Change (ft)',
        'Stroke Length',
        'SPM',
        'Run Time',
        'Pump Intake Pressure (psi)'
    ];
    
    const filename = `Fluid_Levels_${new Date().toISOString().split('T')[0]}.csv`;
    downloadCSV(csvData, headers, filename);
}
