import { appState } from './config.js';
import { updateWellInFirestore, updateWellTests } from './firestore-storage.js';
import { formatDateForInput, escapeHtml } from './utils.js';
import { findChemicalProgramMatch } from './chemical-matcher.js';

let onEditSave = null;

export function setOnEditSave(handler) {
    onEditSave = handler;
}

export function initializeEditHandlers() {
    const editButtons = document.querySelectorAll('.btn-edit[data-edit]');
    editButtons.forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const section = newBtn.dataset.edit;
            openEditModal(section);
        });
    });

    const closeBtn = document.getElementById('btnCloseModal');
    const cancelBtn = document.getElementById('btnCancelEdit');
    const overlay = document.getElementById('editModalOverlay');
    const saveBtn = document.getElementById('btnSaveEdit');

    if (closeBtn) {
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        newCloseBtn.addEventListener('click', closeEditModal);
    }

    if (cancelBtn) {
        const newCancelBtn = cancelBtn.cloneNode(true);
        cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
        newCancelBtn.addEventListener('click', closeEditModal);
    }

    if (overlay) {
        const newOverlay = overlay.cloneNode(true);
        overlay.parentNode.replaceChild(newOverlay, overlay);
        newOverlay.addEventListener('click', closeEditModal);
    }

    if (saveBtn) {
        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        newSaveBtn.addEventListener('click', saveEditedData);
    }
}

function openEditModal(section) {
    if (!appState.currentSheet || !appState.currentWell) return;

    const sheetData = appState.appData[appState.currentSheet];
    if (!sheetData || !sheetData.wells) return;

    const well = sheetData.wells.find(w => w.id === appState.currentWell);
    if (!well) return;

    appState.currentEditSection = section;

    const modal = document.getElementById('editModal');
    const title = document.getElementById('editModalTitle');
    const body = document.getElementById('editModalBody');

    const titles = {
        chemicalProgram: 'Edit Chemical Program',
        failureHistory: 'Edit Failure History',
        actionItems: 'Edit Action Items',
        pressureReadings: 'Edit Pressure Readings',
        wellTests: 'Edit Well Tests',
        fluidLevels: 'Edit Fluid Levels'
    };
    title.textContent = titles[section] || 'Edit';

    switch (section) {
        case 'chemicalProgram':
            body.innerHTML = renderChemicalProgramForm(well.chemicalProgram || {});
            break;
        case 'failureHistory':
            body.innerHTML = renderFailureHistoryForm(well.failureHistory || []);
            initializeFailureHistoryHandlers();
            break;
        case 'actionItems':
            body.innerHTML = renderActionItemsForm(well.actionItems || []);
            initializeActionItemsHandlers();
            break;
        case 'pressureReadings':
            body.innerHTML = renderPressureReadingsForm(well.pressureReadings || []);
            initializePressureReadingsHandlers();
            break;
        case 'wellTests':
            body.innerHTML = renderWellTestForm(well.wellTests || []);
            initializeWellTestHandlers();
            break;
        case 'fluidLevels':
            body.innerHTML = renderFluidLevelsForm(well.name);
            initializeFluidLevelsHandlers();
            break;
    }

    modal.classList.add('visible');
}

function closeEditModal() {
    const modal = document.getElementById('editModal');
    modal.classList.remove('visible');
    appState.currentEditSection = null;
}

function renderChemicalProgramForm(data) {
    // Check if Master Chemical Sheet data exists for this well
    const sheetData = appState.appData[appState.currentSheet];
    const well = sheetData?.wells.find(w => w.id === appState.currentWell);
    const matchedProgram = well ? findChemicalProgramMatch(well.name, appState.chemicalPrograms) : null;
    
    // Use matched program if available, otherwise use manual data
    let programData = null;
    let dataSource = 'none';
    
    if (matchedProgram) {
        dataSource = 'master';
        programData = matchedProgram;
    } else if (data && (data.continuous || data.truckTreat)) {
        dataSource = 'manual';
        programData = {
            continuous: data.continuous || {},
            truckTreating: data.truckTreat || {}
        };
    }
    
    // If we have Master Chemical Sheet data, render dynamic form
    if (dataSource === 'master') {
        // Collect all unique chemicals
        const allChemicals = new Set();
        Object.keys(programData.truckTreating || {}).forEach(chem => allChemicals.add(chem));
        Object.keys(programData.continuous || {}).forEach(chem => allChemicals.add(chem));
        const chemicalsList = Array.from(allChemicals).sort();
        
        const lastUpdated = programData.lastUpdated ? new Date(programData.lastUpdated).toLocaleDateString() : '';
        
        let chemicalsHTML = '';
        chemicalsList.forEach(chem => {
            const contValue = programData.continuous?.[chem] !== undefined && programData.continuous?.[chem] !== null 
                ? programData.continuous[chem] 
                : '';
            const truckValue = programData.truckTreating?.[chem] !== undefined && programData.truckTreating?.[chem] !== null
                ? programData.truckTreating[chem]
                : '';
            
            chemicalsHTML += `
                <div class="form-row-label">${chem}</div>
                <input type="number" step="0.01" class="edit-form-input" 
                       data-chemical="${chem}" 
                       data-category="continuous" 
                       value="${contValue}" 
                       placeholder="-">
                <input type="number" step="0.01" class="edit-form-input" 
                       data-chemical="${chem}" 
                       data-category="truckTreating" 
                       value="${truckValue}" 
                       placeholder="-">
            `;
        });
        
        return `
            <div class="edit-mode-info-banner">
                <div class="info-content">
                    <p>
                        <strong>Note:</strong> This well has chemical program data from the Master Chemical Sheet. Manual edits here will be stored separately and will override the Master Chemical Sheet data when displayed.
                    </p>
                </div>
            </div>
            <div class="chemical-form-grid">
                <div class="form-column-header"></div>
                <div class="form-column-header">CONTINUOUS</div>
                <div class="form-column-header">TRUCK TREAT</div>
                ${chemicalsHTML}
            </div>
            <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-secondary);">
                Leave fields blank to remove values. These values will be stored as manual overrides.
            </p>
        `;
    }
    
    // Otherwise, render the old manual format
    const cont = data?.continuous || {};
    const truck = data?.truckTreat || {};
    
    return `
        <div class="chemical-form-grid">
            <div class="form-column-header"></div>
            <div class="form-column-header">Continuous</div>
            <div class="form-column-header">Truck Treat</div>

            <div class="form-row-label">Rate (gal/month)</div>
            <input type="text" class="edit-form-input" id="editChemContRate" value="${cont.rate || ''}" placeholder="-">
            <input type="text" class="edit-form-input" id="editChemTruckRate" value="${truck.rate || ''}" placeholder="-">

            <div class="form-row-label">Chems Used</div>
            <input type="text" class="edit-form-input" id="editChemContChems" value="${cont.chems || ''}" placeholder="-">
            <input type="text" class="edit-form-input" id="editChemTruckChems" value="${truck.chems || ''}" placeholder="-">

            <div class="form-row-label">PPM</div>
            <input type="text" class="edit-form-input" id="editChemContPPM" value="${cont.ppm || ''}" placeholder="-">
            <input type="text" class="edit-form-input" id="editChemTruckPPM" value="${truck.ppm || ''}" placeholder="-">
        </div>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-secondary);">
            Leave fields blank to remove values. These values will be stored as manual overrides.
        </p>
    `;
}

function renderFailureHistoryForm(data) {
    let rowsHtml = '';

    if (data.length > 0) {
        rowsHtml = data.map((row, index) => `
            <tr data-row-index="${index}">
                <td><input type="date" class="edit-table-input" name="dateDown" value="${formatDateForInput(row.dateDown)}"></td>
                <td><input type="date" class="edit-table-input" name="dateUp" value="${formatDateForInput(row.dateUp)}"></td>
                <td><input type="number" class="edit-table-input" name="downtime" value="${row.downtime || ''}" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="oil" value="${row.oil || ''}" placeholder="-"></td>
                <td><input type="text" class="edit-table-input" name="reason" value="${row.reason || ''}" placeholder="-"></td>
                <td><input type="text" class="edit-table-input" name="comments" value="${row.comments || ''}" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    return `
        <div class="edit-table-container">
            <table class="edit-table" id="failureEditTable">
                <thead>
                    <tr>
                        <th>Date Down</th>
                        <th>Date Up</th>
                        <th>Downtime (days)</th>
                        <th>Oil Lost</th>
                        <th>Reason</th>
                        <th>Comments</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="failureEditBody">
                    ${rowsHtml}
                </tbody>
            </table>
        </div>
        <button type="button" class="btn-add-row" id="btnAddFailureRow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Entry
        </button>
    `;
}

function initializeFailureHistoryHandlers() {
    const addBtn = document.getElementById('btnAddFailureRow');
    const tbody = document.getElementById('failureEditBody');

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="date" class="edit-table-input" name="dateDown"></td>
                <td><input type="date" class="edit-table-input" name="dateUp"></td>
                <td><input type="number" class="edit-table-input" name="downtime" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="oil" placeholder="-"></td>
                <td><input type="text" class="edit-table-input" name="reason" placeholder="-"></td>
                <td><input type="text" class="edit-table-input" name="comments" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            `;
            tbody.appendChild(newRow);
            attachDeleteHandler(newRow.querySelector('.btn-delete-row'));
        });
    }

    tbody.querySelectorAll('.btn-delete-row').forEach(btn => {
        attachDeleteHandler(btn);
    });
}

function renderActionItemsForm(data) {
    let itemsHtml = '';

    if (data.length > 0) {
        itemsHtml = data.map((item, index) => {
            // Handle both old string format and new object format
            const isString = typeof item === 'string';
            const text = isString ? item : item.text;
            const completed = isString ? false : (item.completed || false);
            
            const completedBadge = completed ? '<span class="edit-completed-badge">Completed</span>' : '';
            
            return `
                <div class="action-item-row" data-item-index="${index}">
                    <input type="text" class="edit-form-input" name="actionItem" value="${escapeHtml(text)}">
                    ${completedBadge}
                    <button type="button" class="btn-delete-item" title="Delete item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            `;
        }).join('');
    } else {
        itemsHtml = '<div class="action-items-empty">No action items. Add one below.</div>';
    }

    return `
        <div class="action-items-editor" id="actionItemsEditor">
            ${itemsHtml}
        </div>
        <div class="action-items-add-row">
            <input type="text" class="edit-form-input" id="newActionItem" placeholder="Enter new action item...">
            <button type="button" class="btn-add-item" id="btnAddActionItem">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add
            </button>
        </div>
    `;
}

function initializeActionItemsHandlers() {
    const addBtn = document.getElementById('btnAddActionItem');
    const inputField = document.getElementById('newActionItem');
    const editor = document.getElementById('actionItemsEditor');

    const addNewItem = () => {
        const value = inputField.value.trim();
        if (!value) return;

        const emptyMsg = editor.querySelector('.action-items-empty');
        if (emptyMsg) emptyMsg.remove();

        const newRow = document.createElement('div');
        newRow.className = 'action-item-row';
        newRow.innerHTML = `
            <input type="text" class="edit-form-input" name="actionItem" value="${escapeHtml(value)}">
            <button type="button" class="btn-delete-item" title="Delete item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `;
        editor.appendChild(newRow);
        attachActionItemDeleteHandler(newRow.querySelector('.btn-delete-item'));
        inputField.value = '';
        inputField.focus();
    };

    if (addBtn) {
        addBtn.addEventListener('click', addNewItem);
    }

    if (inputField) {
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addNewItem();
            }
        });
    }

    editor.querySelectorAll('.btn-delete-item').forEach(btn => {
        attachActionItemDeleteHandler(btn);
    });
}

function attachActionItemDeleteHandler(btn) {
    btn.addEventListener('click', () => {
        const row = btn.closest('.action-item-row');
        row.remove();

        const editor = document.getElementById('actionItemsEditor');
        if (editor.querySelectorAll('.action-item-row').length === 0) {
            editor.innerHTML = '<div class="action-items-empty">No action items. Add one below.</div>';
        }
    });
}

function renderWellTestForm(data) {
    let rowsHtml = '';

    if (data.length > 0) {
        rowsHtml = data.map((row, index) => `
            <tr data-row-index="${index}">
                <td><input type="date" class="edit-table-input" name="date" value="${formatDateForInput(row.date)}"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="oil" value="${row.oil || ''}" placeholder="-"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="water" value="${row.water || ''}" placeholder="-"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="gas" value="${row.gas || ''}" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    return `
        <div class="edit-table-container">
            <table class="edit-table" id="wellTestEditTable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Oil (bbl)</th>
                        <th>Water (bbl)</th>
                        <th>Gas (mcf)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="wellTestEditBody">
                    ${rowsHtml}
                </tbody>
            </table>
        </div>
        <button type="button" class="btn-add-row" id="btnAddWellTestRow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Entry
        </button>
    `;
}

function renderPressureReadingsForm(data) {
    let rowsHtml = '';

    if (data.length > 0) {
        rowsHtml = data.map((row, index) => `
            <tr data-row-index="${index}">
                <td><input type="date" class="edit-table-input" name="date" value="${formatDateForInput(row.date)}"></td>
                <td><input type="number" class="edit-table-input" name="casingPsi" value="${row.casingPsi || ''}" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="tubingPsi" value="${row.tubingPsi || ''}" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="flowlinePsi" value="${row.flowlinePsi || ''}" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="injVol" value="${row.injVol || ''}" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    return `
        <div class="edit-table-container">
            <table class="edit-table" id="pressureEditTable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Casing PSI</th>
                        <th>Tubing PSI</th>
                        <th>Flowline PSI</th>
                        <th>Inj Vol</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="pressureEditBody">
                    ${rowsHtml}
                </tbody>
            </table>
        </div>
        <button type="button" class="btn-add-row" id="btnAddPressureRow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Entry
        </button>
    `;
}

function initializeWellTestHandlers() {
    const addBtn = document.getElementById('btnAddWellTestRow');
    const tbody = document.getElementById('wellTestEditBody');

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="date" class="edit-table-input" name="date"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="oil" placeholder="-"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="water" placeholder="-"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="gas" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            `;
            tbody.appendChild(newRow);
            attachDeleteHandler(newRow.querySelector('.btn-delete-row'));
        });
    }

    tbody.querySelectorAll('.btn-delete-row').forEach(btn => {
        attachDeleteHandler(btn);
    });
}

function initializePressureReadingsHandlers() {
    const addBtn = document.getElementById('btnAddPressureRow');
    const tbody = document.getElementById('pressureEditBody');

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><input type="date" class="edit-table-input" name="date"></td>
                <td><input type="number" class="edit-table-input" name="casingPsi" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="tubingPsi" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="flowlinePsi" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="injVol" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            `;
            tbody.appendChild(newRow);
            attachDeleteHandler(newRow.querySelector('.btn-delete-row'));
        });
    }

    tbody.querySelectorAll('.btn-delete-row').forEach(btn => {
        attachDeleteHandler(btn);
    });
}

function attachDeleteHandler(btn) {
    btn.addEventListener('click', () => {
        const row = btn.closest('tr');
        row.remove();
    });
}

async function saveEditedData() {
    if (!appState.currentSheet || !appState.currentWell || !appState.currentEditSection) return;

    const sheetData = appState.appData[appState.currentSheet];
    if (!sheetData || !sheetData.wells) return;

    const wellIndex = sheetData.wells.findIndex(w => w.id === appState.currentWell);
    if (wellIndex === -1) return;

    const well = sheetData.wells[wellIndex];
    const updates = {};

    switch (appState.currentEditSection) {
        case 'chemicalProgram':
            well.chemicalProgram = readChemicalProgramForm();
            updates.chemicalProgram = well.chemicalProgram;
            break;
        case 'failureHistory':
            well.failureHistory = readFailureHistoryForm();
            updates.failureHistory = well.failureHistory;
            break;
        case 'actionItems':
            well.actionItems = readActionItemsForm();
            updates.actionItems = well.actionItems;
            break;
        case 'pressureReadings':
            well.pressureReadings = readPressureReadingsForm();
            updates.pressureReadings = well.pressureReadings;
            break;
        case 'wellTests':
            // Well tests are handled differently - stored in subcollection
            const newWellTests = readWellTestForm();
            const originalWellTests = well.wellTests || [];
            await updateWellTests(appState.currentSheet, appState.currentWell, newWellTests, originalWellTests);
            closeEditModal();
            if (onEditSave) {
                onEditSave(appState.currentSheet, appState.currentWell);
            }
            return; // Early return - updateWellTests handles everything
        case 'fluidLevels':
            // Fluid levels are handled separately - stored in fluidLevels collection
            const editedFluidLevels = readFluidLevelsForm();
            const { updateFluidLevelReadings } = await import('./firestore-storage.js');
            await updateFluidLevelReadings(editedFluidLevels);
            closeEditModal();
            if (onEditSave) {
                onEditSave(appState.currentSheet, appState.currentWell);
            }
            return; // Early return - updateFluidLevelReadings handles everything
    }

    // Save to Firestore (for non-wellTests cases)
    await updateWellInFirestore(appState.currentSheet, appState.currentWell, updates);
    
    closeEditModal();

    if (onEditSave) {
        onEditSave(appState.currentSheet, appState.currentWell);
    }
}

function readChemicalProgramForm() {
    // Check if we're using the new dynamic format (Master Chemical Sheet)
    const dynamicInputs = document.querySelectorAll('.edit-form-input[data-chemical]');
    
    if (dynamicInputs.length > 0) {
        // New format: dynamic chemicals
        const continuous = {};
        const truckTreating = {};
        
        dynamicInputs.forEach(input => {
            const chemical = input.dataset.chemical;
            const category = input.dataset.category;
            const value = input.value.trim();
            
            if (value !== '') {
                const numValue = parseFloat(value);
                if (!isNaN(numValue)) {
                    if (category === 'continuous') {
                        continuous[chemical] = numValue;
                    } else if (category === 'truckTreating') {
                        truckTreating[chemical] = numValue;
                    }
                }
            }
        });
        
        return {
            continuous,
            truckTreat: truckTreating
        };
    }
    
    // Old format: rate/chems/ppm
    return {
        continuous: {
            rate: document.getElementById('editChemContRate')?.value || '',
            chems: document.getElementById('editChemContChems')?.value || '',
            ppm: document.getElementById('editChemContPPM')?.value || ''
        },
        truckTreat: {
            rate: document.getElementById('editChemTruckRate')?.value || '',
            chems: document.getElementById('editChemTruckChems')?.value || '',
            ppm: document.getElementById('editChemTruckPPM')?.value || ''
        }
    };
}

function readFailureHistoryForm() {
    const tbody = document.getElementById('failureEditBody');
    const rows = tbody.querySelectorAll('tr');
    const data = [];

    rows.forEach(row => {
        const dateDown = row.querySelector('input[name="dateDown"]')?.value;
        const dateUp = row.querySelector('input[name="dateUp"]')?.value;
        const downtime = row.querySelector('input[name="downtime"]')?.value;
        const oil = row.querySelector('input[name="oil"]')?.value;
        const reason = row.querySelector('input[name="reason"]')?.value;
        const comments = row.querySelector('input[name="comments"]')?.value;

        if (dateDown || dateUp || downtime || oil || reason || comments) {
            data.push({
                dateDown: dateDown || null,
                dateUp: dateUp || null,
                downtime: downtime ? Number(downtime) : null,
                oil: oil ? Number(oil) : null,
                reason: reason || '',
                comments: comments || ''
            });
        }
    });

    return data;
}

function readActionItemsForm() {
    const editor = document.getElementById('actionItemsEditor');
    const rows = editor.querySelectorAll('.action-item-row');
    const data = [];
    
    // Get original action items to preserve completion status
    const sheetData = appState.appData[appState.currentSheet];
    const well = sheetData?.wells.find(w => w.id === appState.currentWell);
    const originalItems = well?.actionItems || [];

    rows.forEach((row, index) => {
        const input = row.querySelector('input[name="actionItem"]');
        const value = input?.value.trim();
        if (value) {
            // Check if this is an existing item with completion status
            const originalItem = originalItems[index];
            if (originalItem && typeof originalItem === 'object') {
                // Preserve the completion status and metadata
                data.push({
                    text: value,
                    completed: originalItem.completed || false,
                    completedDate: originalItem.completedDate || null,
                    completedBy: originalItem.completedBy || null
                });
            } else {
                // New item or old string format - just store as string
                data.push(value);
            }
        }
    });

    return data;
}

function readWellTestForm() {
    const tbody = document.getElementById('wellTestEditBody');
    const rows = tbody.querySelectorAll('tr');
    const data = [];

    rows.forEach(row => {
        const date = row.querySelector('input[name="date"]')?.value;
        const oil = row.querySelector('input[name="oil"]')?.value;
        const water = row.querySelector('input[name="water"]')?.value;
        const gas = row.querySelector('input[name="gas"]')?.value;

        if (date || oil || water || gas) {
            data.push({
                date: date || null,
                oil: oil ? Number(oil) : null,
                water: water ? Number(water) : null,
                gas: gas ? Number(gas) : null
            });
        }
    });

    return data;
}

function readPressureReadingsForm() {
    const tbody = document.getElementById('pressureEditBody');
    const rows = tbody.querySelectorAll('tr');
    const data = [];

    rows.forEach(row => {
        const date = row.querySelector('input[name="date"]')?.value;
        const casingPsi = row.querySelector('input[name="casingPsi"]')?.value;
        const tubingPsi = row.querySelector('input[name="tubingPsi"]')?.value;
        const flowlinePsi = row.querySelector('input[name="flowlinePsi"]')?.value;
        const injVol = row.querySelector('input[name="injVol"]')?.value;

        if (date || casingPsi || tubingPsi || flowlinePsi || injVol) {
            data.push({
                date: date || null,
                casingPsi: casingPsi ? Number(casingPsi) : null,
                tubingPsi: tubingPsi ? Number(tubingPsi) : null,
                flowlinePsi: flowlinePsi ? Number(flowlinePsi) : null,
                injVol: injVol ? Number(injVol) : null
            });
        }
    });

    return data;
}

function renderFluidLevelsForm(wellName) {
    // Normalize well name to match fluid level data
    const normalized = wellName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const fluidData = appState.fluidLevels?.[normalized];
    
    if (!fluidData || !fluidData.readings || fluidData.readings.length === 0) {
        return `<p style="text-align: center; padding: 2rem; color: var(--text-secondary);">No fluid level data available for this well</p>`;
    }
    
    // Sort readings by date descending (newest first)
    const sortedReadings = [...fluidData.readings].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    let rowsHtml = '';
    
    if (sortedReadings.length > 0) {
        rowsHtml = sortedReadings.map((reading, index) => {
            const runTimePercent = reading.runTime !== null 
                ? (reading.runTime * 100).toFixed(0)
                : '';
            
            return `
                <tr data-row-index="${index}" data-well-name="${normalized}">
                    <td><input type="date" class="edit-table-input" name="date" value="${formatDateForInput(reading.date)}" readonly></td>
                    <td><input type="number" class="edit-table-input" name="gasFreeLevel" value="${reading.gasFreeLevel || ''}" placeholder="-"></td>
                    <td><input type="number" step="0.1" class="edit-table-input" name="spm" value="${reading.spm || ''}" placeholder="-"></td>
                    <td><input type="number" class="edit-table-input" name="runTime" value="${runTimePercent}" placeholder="-"></td>
                    <td><input type="number" class="edit-table-input" name="pumpIntakePressure" value="${reading.pumpIntakePressure || ''}" placeholder="-"></td>
                </tr>
            `;
        }).join('');
    }

    return `
        <div class="edit-table-container">
            <table class="edit-table" id="fluidLevelsEditTable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Gas Free Level (ft)</th>
                        <th>SPM</th>
                        <th>Run Time (%)</th>
                        <th>Pump Intake (psi)</th>
                    </tr>
                </thead>
                <tbody id="fluidLevelsEditBody">
                    ${rowsHtml}
                </tbody>
            </table>
        </div>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-secondary);">
            Note: Manual edits will be preserved on re-upload of the Fluid Level Sheet.
        </p>
    `;
}

function initializeFluidLevelsHandlers() {
    // No add/delete buttons needed - just edit existing readings
    // All inputs are already present in the form
}

function readFluidLevelsForm() {
    const tbody = document.getElementById('fluidLevelsEditBody');
    const rows = tbody.querySelectorAll('tr');
    const editedCells = {};

    rows.forEach(row => {
        const wellName = row.dataset.wellName;
        const date = row.querySelector('input[name="date"]')?.value;
        const gasFreeLevel = row.querySelector('input[name="gasFreeLevel"]')?.value;
        const spm = row.querySelector('input[name="spm"]')?.value;
        const runTime = row.querySelector('input[name="runTime"]')?.value;
        const pumpIntakePressure = row.querySelector('input[name="pumpIntakePressure"]')?.value;

        if (date) {
            if (!editedCells[wellName]) {
                editedCells[wellName] = {};
            }
            
            editedCells[wellName][date] = {};
            
            // Only include fields that have values
            if (gasFreeLevel !== '') {
                editedCells[wellName][date].gasFreeLevel = Number(gasFreeLevel);
            }
            if (spm !== '') {
                editedCells[wellName][date].spm = Number(spm);
            }
            if (runTime !== '') {
                // Convert percentage back to decimal
                editedCells[wellName][date].runTime = Number(runTime) / 100;
            }
            if (pumpIntakePressure !== '') {
                editedCells[wellName][date].pumpIntakePressure = Number(pumpIntakePressure);
            }
        }
    });

    return editedCells;
}
