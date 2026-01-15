import { appState, GAUGE_SHEETS } from './config.js';
import { formatDate } from './utils.js';
import { renderProductionCharts } from './charts/production.js';
import { initializeEditHandlers } from './edit-modal.js';
import { renderDashboard } from './dashboard.js';
import { hasUploadedData } from './data-aggregation.js';
import { loadWellDetails, loadWellsList, loadDashboardData as refreshDashboardData } from './firestore-storage.js';

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
        gasChart: 'gasChartView'
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

    // Render all well data
    renderProductionCharts(well);
    renderWellTestTable(well.wellTests || []);
    renderChemicalProgram(well.chemicalProgram || {});
    renderFailureHistory(well.failureHistory || []);
    renderActionList('wellActionList', well.actionItems || []);
    renderPressureTable(well.pressureReadings || []);
    renderPressureCharts(well.pressureReadings || []);

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
