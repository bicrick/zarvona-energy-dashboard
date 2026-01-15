import { appState } from './config.js';
import { formatDate } from './utils.js';
import { getAggregateStats, getTopProducingWells, getRecentWellTests, getAllActionItems } from './data-aggregation.js';
import { showWellView } from './views.js';
import { clearFirestoreData } from './firestore-storage.js';

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
    const btnReuploadAll = document.getElementById('btnReuploadAll');
    const btnClearCache = document.getElementById('btnClearCache');
    
    // Getting Started Modal elements
    const reuploadModal = document.getElementById('reuploadModal');
    const btnCloseReuploadModal = document.getElementById('btnCloseReuploadModal');
    const reuploadModalOverlay = document.getElementById('reuploadModalOverlay');

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

    if (btnClearCache) {
        btnClearCache.addEventListener('click', async () => {
            if (confirm('Clear all data from the cloud? You will need to re-upload your gauge sheets.')) {
                await clearCache();
            }
        });
    }
}

async function clearCache() {
    // Clear data from Firestore
    await clearFirestoreData();
    
    if (onCacheCleared) {
        onCacheCleared();
    }
}
