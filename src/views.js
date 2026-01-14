import { appState, GAUGE_SHEETS } from './config.js';
import { formatDate } from './utils.js';
import { renderProductionCharts } from './charts/production.js';
import { initializeEditHandlers } from './edit-modal.js';
import { renderDashboard } from './dashboard.js';
import { hasUploadedData } from './data-aggregation.js';

export function showView(viewName) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));

    const viewMap = {
        welcome: 'welcomeView',
        gaugeSheet: 'gaugeSheetView',
        well: 'wellView',
        battery: 'batteryView',
        oilChart: 'oilChartView',
        waterChart: 'waterChartView',
        gasChart: 'gasChartView'
    };

    const viewId = viewMap[viewName];
    if (viewId) {
        document.getElementById(viewId).classList.add('active');
    }
}

export function updateWelcomeStats() {
    const uploadPrompt = document.getElementById('welcomeUploadPrompt');
    const dashboard = document.getElementById('operationsDashboard');

    if (hasUploadedData()) {
        uploadPrompt.style.display = 'none';
        dashboard.style.display = 'block';
        renderDashboard();
    } else {
        uploadPrompt.style.display = 'block';
        dashboard.style.display = 'none';
    }
}

export function showGaugeSheetView(sheetId) {
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

    if (sheetData && sheetData.wells) {
        uploadPrompt.style.display = 'none';
        uploadStatus.style.display = 'flex';
        document.getElementById('lastUploadDate').textContent = formatDate(sheetData.lastUpdated);
        document.getElementById('rowCount').textContent = sheetData.rawRowCount || '-';
    } else {
        uploadPrompt.style.display = 'block';
        uploadStatus.style.display = 'none';
    }

    renderWellsGrid(sheetId);
}

export function showWellView(sheetId, wellId) {
    const sheetData = appState.appData[sheetId];
    if (!sheetData || !sheetData.wells) return;

    const well = sheetData.wells.find(w => w.id === wellId);
    if (!well) return;

    appState.currentSheet = sheetId;
    appState.currentWell = wellId;
    showView('well');

    const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);

    document.getElementById('wellName').textContent = well.name;
    document.getElementById('wellBreadcrumb').textContent = `${sheetConfig.name} > ${well.name}`;

    renderProductionCharts(well);
    renderWellTestTable(well.wellTests || []);
    renderChemicalProgram(well.chemicalProgram || {});
    renderFailureHistory(well.failureHistory || []);
    renderActionList('wellActionList', well.actionItems || []);
    renderPressureTable(well.pressureReadings || []);

    initializeEditHandlers();
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
        const latestTest = well.wellTests && well.wellTests[0];
        const latestOil = latestTest ? Math.round(latestTest.oil * 100) / 100 : null;
        const latestGas = latestTest && latestTest.gas !== null ? Math.round(Math.max(0, latestTest.gas) * 100) / 100 : null;

        return `
            <div class="well-card" data-well-id="${well.id}" data-sheet-id="${sheetId}">
                <h4>${well.name}</h4>
                <div class="well-stats">
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Oil</span>
                        <span class="well-stat-value">${latestOil !== null ? latestOil + ' bbl' : '-'}</span>
                    </div>
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Gas</span>
                        <span class="well-stat-value">${latestGas !== null ? latestGas + ' mcf' : '-'}</span>
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

function renderChemicalProgram(program) {
    const cont = program.continuous || {};
    const truck = program.truckTreat || {};

    document.getElementById('chemContRate').textContent = cont.rate || '-';
    document.getElementById('chemContChems').textContent = cont.chems || '-';
    document.getElementById('chemContPPM').textContent = cont.ppm || '-';
    document.getElementById('chemTruckRate').textContent = truck.rate || '-';
    document.getElementById('chemTruckChems').textContent = truck.chems || '-';
    document.getElementById('chemTruckPPM').textContent = truck.ppm || '-';
}

function renderFailureHistory(failures) {
    const tbody = document.querySelector('#failureTable tbody');

    if (!failures || failures.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #6b7280;">No failure history</td></tr>';
        return;
    }

    tbody.innerHTML = failures.map(f => `
        <tr>
            <td>${formatDate(f.dateDown)}</td>
            <td>${formatDate(f.dateUp)}</td>
            <td>${f.downtime || '-'}</td>
            <td>${f.oil || '-'}</td>
            <td>${f.reason || '-'}</td>
            <td>${f.comments || '-'}</td>
        </tr>
    `).join('');
}

function renderActionList(elementId, items) {
    const list = document.getElementById(elementId);
    if (!items || items.length === 0) {
        list.innerHTML = '<li style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';
        return;
    }
    list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

function renderPressureTable(readings) {
    const tbody = document.querySelector('#pressureTable tbody');

    if (!readings || readings.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #6b7280;">No pressure data</td></tr>';
        return;
    }

    tbody.innerHTML = readings.map(r => `
        <tr>
            <td>${formatDate(r.date)}</td>
            <td>${r.casingPsi || '-'}</td>
            <td>${r.tubingPsi || '-'}</td>
            <td>${r.flowlinePsi || '-'}</td>
            <td>${r.injVol || '-'}</td>
        </tr>
    `).join('');
}
