import { appState } from './config.js';
import { formatDate } from './utils.js';
import { getAggregateStats, getTopProducingWells, getRecentWellTests, getAllActionItems } from './data-aggregation.js';
import { showWellView } from './views.js';
import { clearFirestoreData, clearExtractedDataOnly } from './firestore-storage.js';
import { showOilChartView, showWaterChartView, showGasChartView } from './charts/aggregate.js';
import { setActiveNavItem } from './navigation.js';

const LOADING_PLACEHOLDER = '<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading...</span></div>';

let onCacheCleared = null;

export function setOnCacheCleared(handler) {
    onCacheCleared = handler;
}

export function renderDashboard() {
    renderDashboardStats();
    renderTopProducers();
    renderRecentTests();
    renderDashboardActionItems();
}

function renderDashboardStats() {
    const statDailyOil = document.getElementById('statDailyOil');
    const statDailyWater = document.getElementById('statDailyWater');
    const statDailyGas = document.getElementById('statDailyGas');
    
    // Show loading state if data is still loading
    if (appState.isLoading) {
        statDailyOil.innerHTML = '<span class="loading-text">...</span>';
        statDailyWater.innerHTML = '<span class="loading-text">...</span>';
        statDailyGas.innerHTML = '<span class="loading-text">...</span>';
        return;
    }
    
    const stats = getAggregateStats();

    statDailyOil.textContent = stats.totalOil.toLocaleString();
    statDailyWater.textContent = stats.totalWater.toLocaleString();
    statDailyGas.textContent = stats.totalGas.toLocaleString();
}

function renderTopProducers() {
    const tbody = document.getElementById('topProducersBody');
    
    // Show loading state if data is still loading
    if (appState.isLoading) {
        tbody.innerHTML = '<tr><td colspan="5" class="dashboard-loading">' + LOADING_PLACEHOLDER + '</td></tr>';
        return;
    }
    
    const topWells = getTopProducingWells(10);

    if (topWells.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="dashboard-empty">No production data available</td></tr>';
        return;
    }

    tbody.innerHTML = topWells.map((well, index) => `
        <tr data-well-id="${well.wellId}" data-sheet-id="${well.sheetId}">
            <td>${index + 1}</td>
            <td class="well-name-cell">${well.wellName}</td>
            <td class="battery-name-cell">${well.batteryName}</td>
            <td>${well.oil > 0 ? well.oil : '-'}</td>
            <td>${well.water > 0 ? well.water : '-'}</td>
        </tr>
    `).join('');

    tbody.querySelectorAll('tr[data-well-id]').forEach(row => {
        row.addEventListener('click', () => {
            const wellId = row.dataset.wellId;
            const sheetId = row.dataset.sheetId;
            showWellView(sheetId, wellId);
        });
    });
}

function renderRecentTests() {
    const tbody = document.getElementById('recentTestsBody');
    
    // Show loading state if data is still loading
    if (appState.isLoading) {
        tbody.innerHTML = '<tr><td colspan="6" class="dashboard-loading">' + LOADING_PLACEHOLDER + '</td></tr>';
        return;
    }
    
    const recentTests = getRecentWellTests(10);

    if (recentTests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="dashboard-empty">No test data available</td></tr>';
        return;
    }

    tbody.innerHTML = recentTests.map(test => `
        <tr data-well-id="${test.wellId}" data-sheet-id="${test.sheetId}">
            <td>${formatDate(test.date)}</td>
            <td class="well-name-cell">${test.wellName}</td>
            <td class="battery-name-cell">${test.batteryName}</td>
            <td>${test.oil !== null ? test.oil : '-'}</td>
            <td>${test.water !== null ? test.water : '-'}</td>
            <td>${test.gas !== null ? test.gas : '-'}</td>
        </tr>
    `).join('');

    tbody.querySelectorAll('tr[data-well-id]').forEach(row => {
        row.addEventListener('click', () => {
            const wellId = row.dataset.wellId;
            const sheetId = row.dataset.sheetId;
            showWellView(sheetId, wellId);
        });
    });
}

function renderDashboardActionItems() {
    const list = document.getElementById('dashboardActionList');
    
    // Show loading state if data is still loading
    if (appState.isLoading) {
        list.innerHTML = '<li class="dashboard-loading" style="border-left-color: #6b7280;">' + LOADING_PLACEHOLDER + '</li>';
        return;
    }
    
    const actionItems = getAllActionItems(15);

    if (actionItems.length === 0) {
        list.innerHTML = '<li class="dashboard-empty" style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';
        return;
    }

    list.innerHTML = actionItems.map(item => `
        <li data-well-id="${item.wellId}" data-sheet-id="${item.sheetId}">
            <div class="action-item-content">${item.content}</div>
            <div class="action-item-source">
                <span class="source-well">${item.wellName}</span> - ${item.batteryName}
            </div>
        </li>
    `).join('');

    list.querySelectorAll('li[data-well-id]').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const wellId = item.dataset.wellId;
            const sheetId = item.dataset.sheetId;
            showWellView(sheetId, wellId);
        });
    });
}

export function initializeDashboardHandlers() {
    console.log('initializeDashboardHandlers called');
    const btnReuploadAll = document.getElementById('btnReuploadAll');
    const btnClearCache = document.getElementById('btnClearCache');
    
    // Getting Started Modal elements
    const reuploadModal = document.getElementById('reuploadModal');
    const btnCloseReuploadModal = document.getElementById('btnCloseReuploadModal');
    const reuploadModalOverlay = document.getElementById('reuploadModalOverlay');
    
    // Clear Database Modal elements
    const clearDatabaseModal = document.getElementById('clearDatabaseModal');
    const btnCloseClearDatabaseModal = document.getElementById('btnCloseClearDatabaseModal');
    const clearDatabaseModalOverlay = document.getElementById('clearDatabaseModalOverlay');
    const btnClearAllData = document.getElementById('btnClearAllData');
    const btnClearExtractedOnly = document.getElementById('btnClearExtractedOnly');

    if (btnReuploadAll) {
        btnReuploadAll.addEventListener('click', () => {
            if (reuploadModal) {
                reuploadModal.classList.add('visible');
            }
        });
    }

    if (btnCloseReuploadModal) {
        btnCloseReuploadModal.addEventListener('click', () => {
            if (reuploadModal) {
                reuploadModal.classList.remove('visible');
            }
        });
    }

    if (reuploadModalOverlay) {
        reuploadModalOverlay.addEventListener('click', () => {
            if (reuploadModal) {
                reuploadModal.classList.remove('visible');
            }
        });
    }

    // Clear Database button - show modal
    if (btnClearCache) {
        btnClearCache.addEventListener('click', () => {
            if (clearDatabaseModal) {
                clearDatabaseModal.classList.add('visible');
            }
        });
    }
    
    // Clear Database Modal - Close handlers
    if (btnCloseClearDatabaseModal) {
        btnCloseClearDatabaseModal.addEventListener('click', () => {
            if (clearDatabaseModal) {
                clearDatabaseModal.classList.remove('visible');
            }
        });
    }
    
    if (clearDatabaseModalOverlay) {
        clearDatabaseModalOverlay.addEventListener('click', () => {
            if (clearDatabaseModal) {
                clearDatabaseModal.classList.remove('visible');
            }
        });
    }
    
    // Clear All Data option
    if (btnClearAllData) {
        btnClearAllData.addEventListener('click', async () => {
            if (confirm('Are you sure you want to clear ALL data? This will delete everything including your manual edits. You will need to re-upload all gauge sheets.')) {
                showClearProgress('Clearing All Data');
                await clearAllData();
            }
        });
    }
    
    // Clear Extracted Data Only option
    if (btnClearExtractedOnly) {
        btnClearExtractedOnly.addEventListener('click', async () => {
            if (confirm('Are you sure you want to clear extracted data? This will delete production data from uploaded sheets but keep your manual edits (action items, chemical programs, etc.). You will need to re-upload gauge sheets.')) {
                showClearProgress('Clearing Extracted Data');
                await clearExtractedData();
            }
        });
    }
    
    // Stat card click handlers - navigate to respective explorers
    const statCardOil = document.getElementById('statCardOil');
    const statCardWater = document.getElementById('statCardWater');
    const statCardGas = document.getElementById('statCardGas');
    
    console.log('Initializing stat card handlers:', { statCardOil, statCardWater, statCardGas });
    
    if (statCardOil) {
        statCardOil.addEventListener('click', () => {
            console.log('Oil card clicked');
            showOilChartView();
            const navOilChart = document.getElementById('nav-oil-chart');
            if (navOilChart) {
                setActiveNavItem(navOilChart);
            }
        });
    }
    
    if (statCardWater) {
        statCardWater.addEventListener('click', () => {
            console.log('Water card clicked');
            showWaterChartView();
            const navWaterChart = document.getElementById('nav-water-chart');
            if (navWaterChart) {
                setActiveNavItem(navWaterChart);
            }
        });
    }
    
    if (statCardGas) {
        statCardGas.addEventListener('click', () => {
            console.log('Gas card clicked');
            showGasChartView();
            const navGasChart = document.getElementById('nav-gas-chart');
            if (navGasChart) {
                setActiveNavItem(navGasChart);
            }
        });
    }
}

function showClearProgress(title) {
    const optionsView = document.getElementById('clearOptionsView');
    const progressView = document.getElementById('clearProgressView');
    const progressTitle = document.getElementById('clearProgressTitle');
    const progressSteps = document.getElementById('clearProgressSteps');
    
    if (optionsView) optionsView.style.display = 'none';
    if (progressView) progressView.style.display = 'block';
    if (progressTitle) progressTitle.textContent = title;
    if (progressSteps) progressSteps.innerHTML = '';
}

function updateClearProgress(message) {
    const progressMessage = document.getElementById('clearProgressMessage');
    const progressSteps = document.getElementById('clearProgressSteps');
    
    if (progressMessage) {
        progressMessage.textContent = message;
    }
    
    if (progressSteps) {
        const step = document.createElement('div');
        step.className = 'progress-step';
        step.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${message}</span>
        `;
        progressSteps.appendChild(step);
        
        // Auto-scroll to bottom
        progressSteps.scrollTop = progressSteps.scrollHeight;
    }
}

async function clearAllData() {
    // Clear ALL data from Firestore with progress updates
    await clearFirestoreData(updateClearProgress);
    
    if (onCacheCleared) {
        onCacheCleared();
    }
}

async function clearExtractedData() {
    // Clear only extracted data from Firestore (preserve manual edits) with progress updates
    await clearExtractedDataOnly(updateClearProgress);
    
    if (onCacheCleared) {
        onCacheCleared();
    }
}
