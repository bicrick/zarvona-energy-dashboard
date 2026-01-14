/**
 * Oil Well Dashboard - Main Application
 * Browser-based Excel upload and visualization
 */

// ============================================================================
// Configuration - All 9 Gauge Sheets
// ============================================================================

const GAUGE_SHEETS = [
    { id: 'cowden', name: 'Cowden', fileName: 'Cowden Gauge Sheet1.xlsx', parser: 'CowdenParser' },
    { id: 'bigmax', name: 'Big Max', fileName: 'Big Max Gauge Sheet.xlsx', parser: 'BigMaxParser' },
    { id: 'bigmax1h', name: 'Big Max 1H', fileName: 'Big Max 1H Gauge Sheet.xlsx', parser: 'BigMax1HParser' },
    { id: 'southandrews', name: 'South Andrews', fileName: 'South Andrews Gauge Sheet.xlsm', parser: 'SouthAndrewsParser' },
    { id: 'polaris', name: 'Polaris', fileName: 'Polaris Gauge Sheet.xlsx', parser: 'PolarisParser' },
    { id: 'shusa', name: 'Shusa', fileName: 'Shusa Gauge Sheet.xlsx', parser: 'ShusaParser' },
    { id: 'mwwemac', name: 'MW-Wemac-Sabrina-Berkley', fileName: 'Mw-Wemac-Sabrina-Berkley.xlsx', parser: 'MWWemacParser' },
    { id: 'unit130', name: '1-30 Unit 1H', fileName: '1-30 Unit 1H Gauge Sheet.xlsx', parser: 'Unit130Parser' },
    { id: 'uls35h', name: 'ULS 3-5H', fileName: 'ULS 3-5H Gauge Sheet.xlsx', parser: 'ULS35HParser' }
];

const STORAGE_KEY = 'oilWellData';
const THEME_STORAGE_KEY = 'oilWellTheme';

// ============================================================================
// State
// ============================================================================

let appData = {};  // Loaded from localStorage
let currentSheet = null;
let currentWell = null;
let wellProductionCharts = {};  // Object to hold oil, water, gas charts
let batteryProductionChart = null;
let currentWellData = null;  // Store current well for date filtering
let productionDateRange = { min: null, max: null };  // Store full date range

// ============================================================================
// Initialization
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    loadDataFromStorage();
    initializeNavigation();
    initializeUploadHandlers();
    initializeBulkUploadHandlers();
    initializeDashboardHandlers();
    initializeLogoHandler();
    initializeHamburgerToggle();
    initializeThemeToggle();
    updateWelcomeStats();
    showView('welcome');
});

function initializeLogoHandler() {
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Clear active state from nav items
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            // Reset current selection
            currentSheet = null;
            currentWell = null;
            // Show welcome/home view and refresh dashboard
            showView('welcome');
            updateWelcomeStats();
            // Set Operations Dashboard as active
            const dashboardNav = document.getElementById('nav-dashboard');
            if (dashboardNav) {
                setActiveNavItem(dashboardNav);
            }
        });
    }
}

/**
 * Initialize hamburger menu toggle for collapsing/expanding sidebar
 */
function initializeHamburgerToggle() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    
    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            
            // Store preference
            const isCollapsed = sidebar.classList.contains('collapsed');
            localStorage.setItem('sidebarCollapsed', isCollapsed ? 'true' : 'false');
        });
        
        // Restore collapsed state from localStorage
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState === 'true') {
            sidebar.classList.add('collapsed');
        }
    }
}

// ============================================================================
// Theme Toggle
// ============================================================================

/**
 * Initialize theme from localStorage or system preference
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    
    if (savedTheme) {
        // Use saved preference
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check system preference
        applySystemTheme();
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't set a manual preference
        if (!localStorage.getItem(THEME_STORAGE_KEY)) {
            applySystemTheme();
        }
    });
    
    updateThemeToggleLabel();
}

/**
 * Apply theme based on system preference
 */
function applySystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    updateThemeToggleLabel();
}

/**
 * Initialize theme toggle button
 */
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    
    updateThemeToggleLabel();
}

/**
 * Update the toggle button label based on current theme
 */
function updateThemeToggleLabel() {
    const label = document.querySelector('.theme-toggle-label');
    if (label) {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        label.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
}

function loadDataFromStorage() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            appData = JSON.parse(stored);
            // Convert date strings back to Date objects for production and wellTests data
            Object.values(appData).forEach(sheet => {
                if (sheet.wells) {
                    sheet.wells.forEach(well => {
                        if (well.production) {
                            well.production = well.production.map(p => ({
                                ...p,
                                date: new Date(p.date)
                            }));
                        }
                        if (well.wellTests) {
                            well.wellTests = well.wellTests.map(t => ({
                                ...t,
                                date: new Date(t.date)
                            }));
                        }
                    });
                }
            });
        }
    } catch (e) {
        console.error('Error loading from storage:', e);
        appData = {};
    }
}

function saveDataToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (e) {
        console.error('Error saving to storage:', e);
        alert('Error saving data. Storage may be full.');
    }
}

// ============================================================================
// Navigation
// ============================================================================

function initializeNavigation() {
    const navTree = document.getElementById('navTree');
    navTree.innerHTML = '';
    
    // Create Home section
    const homeSection = createNavSection('Home', 'home-section', [
        { id: 'nav-dashboard', label: 'Operations Dashboard', icon: 'dashboard', action: () => { showView('welcome'); updateWelcomeStats(); } },
        { id: 'nav-oil-chart', label: 'Oil Production', icon: 'oil', action: () => showOilChartView() },
        { id: 'nav-water-chart', label: 'Water Consumption', icon: 'water', action: () => showWaterChartView() },
        { id: 'nav-gas-chart', label: 'Gas Production', icon: 'gas', action: () => showGasChartView() }
    ]);
    navTree.appendChild(homeSection);
    
    // Create Wells section
    const wellsSection = createWellsSection();
    navTree.appendChild(wellsSection);
}

/**
 * Create a collapsible nav section with header and items
 */
function createNavSection(title, sectionId, items) {
    const section = document.createElement('div');
    section.className = 'nav-section';
    section.id = sectionId;
    
    // Section header
    const header = document.createElement('div');
    header.className = 'nav-section-header expanded';
    header.innerHTML = `
        <span class="nav-section-title">${title}</span>
        <span class="nav-section-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    `;
    
    // Section children container
    const children = document.createElement('div');
    children.className = 'nav-section-children visible';
    
    // Add items
    items.forEach(item => {
        const itemEl = createNavSectionItem(item);
        children.appendChild(itemEl);
    });
    
    // Toggle section on header click
    header.addEventListener('click', () => {
        header.classList.toggle('expanded');
        children.classList.toggle('visible');
    });
    
    section.appendChild(header);
    section.appendChild(children);
    
    return section;
}

/**
 * Create a single nav item within a section
 */
function createNavSectionItem(item) {
    const div = document.createElement('div');
    div.className = 'nav-section-item';
    
    // Different icons for each type
    const icons = {
        dashboard: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
           </svg>`,
        oil: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#78716c" stroke-width="2">
            <path d="M12 2C12 2 4 10 4 15a8 8 0 0 0 16 0c0-5-8-13-8-13z"></path>
           </svg>`,
        water: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
            <path d="M12 2C12 2 4 10 4 15a8 8 0 0 0 16 0c0-5-8-13-8-13z"></path>
           </svg>`,
        gas: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2c-1.5 4.5-6 7-6 11a6 6 0 1 0 12 0c0-4-4.5-6.5-6-11Z"></path>
            <path d="M12 13a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Z" fill="#ef4444"></path>
           </svg>`,
        chart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
           </svg>`
    };
    
    const iconSvg = icons[item.icon] || icons.chart;
    
    div.innerHTML = `
        <div class="nav-item" id="${item.id}" data-tooltip="${item.label}">
            <span class="nav-item-icon">${iconSvg}</span>
            <span class="nav-item-label">${item.label}</span>
        </div>
    `;
    
    const navItem = div.querySelector('.nav-item');
    navItem.addEventListener('click', (e) => {
        e.stopPropagation();
        setActiveNavItem(navItem);
        item.action();
    });
    
    return div;
}

/**
 * Create the Wells section with all gauge sheets and their wells
 */
function createWellsSection() {
    const section = document.createElement('div');
    section.className = 'nav-section';
    section.id = 'wells-section';
    
    // Section header
    const header = document.createElement('div');
    header.className = 'nav-section-header expanded';
    header.innerHTML = `
        <span class="nav-section-title">Wells</span>
        <span class="nav-section-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    `;
    
    // Section children container
    const children = document.createElement('div');
    children.className = 'nav-section-children visible';
    
    // Add gauge sheets
    GAUGE_SHEETS.forEach(sheet => {
        const sheetEl = createGaugeSheetNavItem(sheet);
        children.appendChild(sheetEl);
    });
    
    // Toggle section on header click
    header.addEventListener('click', () => {
        header.classList.toggle('expanded');
        children.classList.toggle('visible');
    });
    
    section.appendChild(header);
    section.appendChild(children);
    
    return section;
}

function createGaugeSheetNavItem(sheet) {
    const div = document.createElement('div');
    div.className = 'nav-gauge-sheet';
    
    const hasData = appData[sheet.id] && appData[sheet.id].wells;
    const wellCount = hasData ? appData[sheet.id].wells.length : 0;
    
    div.innerHTML = `
        <div class="nav-item" data-sheet-id="${sheet.id}">
            <span class="icon">&#9632;</span>
            <span class="nav-battery-name">${sheet.name}</span>
            <span class="upload-indicator ${hasData ? 'uploaded' : 'not-uploaded'}">
                ${hasData ? wellCount + ' wells' : 'No data'}
            </span>
        </div>
        <div class="nav-children" id="sheet-children-${sheet.id}"></div>
    `;
    
    const navItem = div.querySelector('.nav-item');
    const childrenContainer = div.querySelector('.nav-children');
    
    navItem.addEventListener('click', (e) => {
        e.stopPropagation();
        setActiveNavItem(navItem);
        showGaugeSheetView(sheet.id);
        
        // Toggle children if has data
        if (hasData) {
            navItem.classList.toggle('expanded');
            childrenContainer.classList.toggle('visible');
        }
    });
    
    // Add well children if data exists
    if (hasData) {
        appData[sheet.id].wells.forEach(well => {
            const wellEl = createWellNavItem(well, sheet);
            childrenContainer.appendChild(wellEl);
        });
    }
    
    return div;
}

function createWellNavItem(well, sheet) {
    const div = document.createElement('div');
    div.className = 'nav-well';
    div.innerHTML = `
        <div class="nav-item" data-well-id="${well.id}" data-sheet-id="${sheet.id}">
            <span class="status-dot active"></span>
            <span class="nav-well-name">${well.name}</span>
        </div>
    `;
    
    const navItem = div.querySelector('.nav-item');
    navItem.addEventListener('click', (e) => {
        e.stopPropagation();
        setActiveNavItem(navItem);
        showWellView(sheet.id, well.id);
    });
    
    return div;
}

function setActiveNavItem(item) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    item.classList.add('active');
}

function refreshNavigation() {
    initializeNavigation();
    updateWelcomeStats();
}

// ============================================================================
// Views
// ============================================================================

function showView(viewName) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    
    const viewMap = {
        'welcome': 'welcomeView',
        'gaugeSheet': 'gaugeSheetView',
        'well': 'wellView',
        'battery': 'batteryView',
        'oilChart': 'oilChartView',
        'waterChart': 'waterChartView',
        'gasChart': 'gasChartView'
    };
    
    const viewId = viewMap[viewName];
    if (viewId) {
        document.getElementById(viewId).classList.add('active');
    }
}

function updateWelcomeStats() {
    // Toggle between upload prompt and dashboard based on data
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

// ============================================================================
// Aggregate Chart Views
// ============================================================================

// Store chart instances for cleanup
let aggregateOilChart = null;
let aggregateWaterChart = null;
let aggregateGasChart = null;

// Store date ranges for each chart type
let oilChartDateRange = { min: null, max: null };
let waterChartDateRange = { min: null, max: null };
let gasChartDateRange = { min: null, max: null };

// Store selected wells for each chart type (null = all selected)
let chartExplorerState = {
    oil: null,
    water: null,
    gas: null
};

/**
 * Show the aggregate oil production chart view
 */
function showOilChartView(startDate = null, endDate = null) {
    showView('oilChart');
    renderChartExplorer('oil');
    renderAggregateChart('oil', startDate, endDate);
}

/**
 * Show the aggregate water consumption chart view
 */
function showWaterChartView(startDate = null, endDate = null) {
    showView('waterChart');
    renderChartExplorer('water');
    renderAggregateChart('water', startDate, endDate);
}

/**
 * Show the aggregate gas production chart view
 */
function showGasChartView(startDate = null, endDate = null) {
    showView('gasChart');
    renderChartExplorer('gas');
    renderAggregateChart('gas', startDate, endDate);
}

/**
 * Render the chart explorer panel with battery/well checkboxes
 * @param {string} chartType - 'oil', 'water', or 'gas'
 */
function renderChartExplorer(chartType) {
    const containerIds = {
        oil: 'oilChartBatteries',
        water: 'waterChartBatteries',
        gas: 'gasChartBatteries'
    };
    
    const toggleBtnIds = {
        oil: 'btnToggleAllOil',
        water: 'btnToggleAllWater',
        gas: 'btnToggleAllGas'
    };
    
    const container = document.getElementById(containerIds[chartType]);
    const toggleBtn = document.getElementById(toggleBtnIds[chartType]);
    
    if (!container) return;
    
    // Initialize state if null (all selected)
    if (chartExplorerState[chartType] === null) {
        chartExplorerState[chartType] = getAllWellIds();
    }
    
    const selectedWells = chartExplorerState[chartType];
    
    // Build explorer HTML
    let html = '';
    
    GAUGE_SHEETS.forEach(sheet => {
        const sheetData = appData[sheet.id];
        if (!sheetData || !sheetData.wells || sheetData.wells.length === 0) return;
        
        const wells = sheetData.wells;
        const wellsInBattery = wells.map(w => `${sheet.id}:${w.id}`);
        const selectedInBattery = wellsInBattery.filter(id => selectedWells.includes(id));
        const allSelected = selectedInBattery.length === wells.length;
        const someSelected = selectedInBattery.length > 0 && selectedInBattery.length < wells.length;
        
        html += `
            <div class="explorer-battery" data-battery-id="${sheet.id}">
                <div class="explorer-battery-header">
                    <label class="explorer-checkbox">
                        <input type="checkbox" 
                               class="battery-checkbox" 
                               data-battery-id="${sheet.id}"
                               data-chart-type="${chartType}"
                               ${allSelected ? 'checked' : ''} 
                               ${someSelected ? 'data-indeterminate="true"' : ''}>
                        <span class="checkmark"></span>
                    </label>
                    <span class="battery-name">${sheet.name}</span>
                    <span class="battery-count">${wells.length} wells</span>
                    <button class="btn-expand-battery" data-battery-id="${sheet.id}">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                </div>
                <div class="explorer-wells" id="wells-${chartType}-${sheet.id}">
                    ${wells.map(well => {
                        const wellId = `${sheet.id}:${well.id}`;
                        const isSelected = selectedWells.includes(wellId);
                        return `
                            <label class="explorer-well">
                                <input type="checkbox" 
                                       class="well-checkbox" 
                                       data-well-id="${wellId}"
                                       data-battery-id="${sheet.id}"
                                       data-chart-type="${chartType}"
                                       ${isSelected ? 'checked' : ''}>
                                <span class="checkmark"></span>
                                <span class="well-name">${well.name}</span>
                            </label>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html || '<p class="explorer-empty">No well data available</p>';
    
    // Set indeterminate state for checkboxes
    container.querySelectorAll('.battery-checkbox[data-indeterminate="true"]').forEach(cb => {
        cb.indeterminate = true;
    });
    
    // Add event listeners
    initializeChartExplorerEvents(chartType, container, toggleBtn);
}

/**
 * Get all well IDs across all batteries
 * @returns {Array} Array of well IDs in format "batteryId:wellId"
 */
function getAllWellIds() {
    const wellIds = [];
    
    GAUGE_SHEETS.forEach(sheet => {
        const sheetData = appData[sheet.id];
        if (sheetData && sheetData.wells) {
            sheetData.wells.forEach(well => {
                wellIds.push(`${sheet.id}:${well.id}`);
            });
        }
    });
    
    return wellIds;
}

/**
 * Initialize event listeners for chart explorer
 */
function initializeChartExplorerEvents(chartType, container, toggleBtn) {
    // Battery checkbox change
    container.querySelectorAll('.battery-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const batteryId = e.target.dataset.batteryId;
            const isChecked = e.target.checked;
            
            // Update all wells in this battery
            container.querySelectorAll(`.well-checkbox[data-battery-id="${batteryId}"]`).forEach(wellCb => {
                wellCb.checked = isChecked;
            });
            
            updateChartExplorerState(chartType, container);
        });
    });
    
    // Well checkbox change
    container.querySelectorAll('.well-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const batteryId = e.target.dataset.batteryId;
            
            // Update battery checkbox state
            updateBatteryCheckboxState(container, batteryId);
            updateChartExplorerState(chartType, container);
        });
    });
    
    // Expand/collapse battery wells
    container.querySelectorAll('.btn-expand-battery').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const batteryId = btn.dataset.batteryId;
            const wellsContainer = document.getElementById(`wells-${chartType}-${batteryId}`);
            const batteryDiv = btn.closest('.explorer-battery');
            
            if (wellsContainer) {
                wellsContainer.classList.toggle('expanded');
                batteryDiv.classList.toggle('expanded');
            }
        });
    });
    
    // Toggle all button
    if (toggleBtn) {
        // Remove old listener by cloning
        const newToggleBtn = toggleBtn.cloneNode(true);
        toggleBtn.parentNode.replaceChild(newToggleBtn, toggleBtn);
        
        newToggleBtn.addEventListener('click', () => {
            const allWellIds = getAllWellIds();
            const currentSelected = chartExplorerState[chartType] || [];
            const allSelected = currentSelected.length === allWellIds.length;
            
            if (allSelected) {
                // Deselect all
                chartExplorerState[chartType] = [];
                newToggleBtn.textContent = 'Select All';
            } else {
                // Select all
                chartExplorerState[chartType] = allWellIds;
                newToggleBtn.textContent = 'Deselect All';
            }
            
            // Re-render explorer and chart
            renderChartExplorer(chartType);
            updateAggregateChartFromExplorer(chartType);
        });
        
        // Update button text based on current state
        const allWellIds = getAllWellIds();
        const currentSelected = chartExplorerState[chartType] || [];
        newToggleBtn.textContent = currentSelected.length === allWellIds.length ? 'Deselect All' : 'Select All';
    }
}

/**
 * Update battery checkbox state based on well selections
 */
function updateBatteryCheckboxState(container, batteryId) {
    const batteryCheckbox = container.querySelector(`.battery-checkbox[data-battery-id="${batteryId}"]`);
    const wellCheckboxes = container.querySelectorAll(`.well-checkbox[data-battery-id="${batteryId}"]`);
    
    if (!batteryCheckbox || wellCheckboxes.length === 0) return;
    
    const checkedCount = Array.from(wellCheckboxes).filter(cb => cb.checked).length;
    
    if (checkedCount === 0) {
        batteryCheckbox.checked = false;
        batteryCheckbox.indeterminate = false;
    } else if (checkedCount === wellCheckboxes.length) {
        batteryCheckbox.checked = true;
        batteryCheckbox.indeterminate = false;
    } else {
        batteryCheckbox.checked = false;
        batteryCheckbox.indeterminate = true;
    }
}

/**
 * Update chart explorer state from checkbox selections
 */
function updateChartExplorerState(chartType, container) {
    const selectedWells = [];
    
    container.querySelectorAll('.well-checkbox:checked').forEach(cb => {
        selectedWells.push(cb.dataset.wellId);
    });
    
    chartExplorerState[chartType] = selectedWells;
    
    // Update the chart
    updateAggregateChartFromExplorer(chartType);
}

/**
 * Update aggregate chart based on current explorer state
 */
function updateAggregateChartFromExplorer(chartType) {
    // Get current date range values
    const dateInputIds = {
        oil: { start: 'oilChartStartDate', end: 'oilChartEndDate' },
        water: { start: 'waterChartStartDate', end: 'waterChartEndDate' },
        gas: { start: 'gasChartStartDate', end: 'gasChartEndDate' }
    };
    
    const startInput = document.getElementById(dateInputIds[chartType].start);
    const endInput = document.getElementById(dateInputIds[chartType].end);
    
    const startDate = startInput && startInput.value ? new Date(startInput.value) : null;
    const endDate = endInput && endInput.value ? new Date(endInput.value + 'T23:59:59') : null;
    
    renderAggregateChart(chartType, startDate, endDate);
}

/**
 * Render an aggregate production chart
 * @param {string} dataType - 'oil', 'water', or 'gas'
 * @param {Date} startDate - Optional start date filter
 * @param {Date} endDate - Optional end date filter
 */
function renderAggregateChart(dataType, startDate = null, endDate = null) {
    const chartConfig = {
        oil: {
            canvasId: 'aggregateOilChart',
            label: 'Oil Production (BBL)',
            unit: 'BBL',
            color: '#78716c',
            chartVar: 'aggregateOilChart',
            dateRangeVar: 'oilChartDateRange',
            startDateId: 'oilChartStartDate',
            endDateId: 'oilChartEndDate',
            resetBtnId: 'btnResetOilDates',
            showFn: showOilChartView
        },
        water: {
            canvasId: 'aggregateWaterChart',
            label: 'Water Consumption (BBL)',
            unit: 'BBL',
            color: '#3b82f6',
            chartVar: 'aggregateWaterChart',
            dateRangeVar: 'waterChartDateRange',
            startDateId: 'waterChartStartDate',
            endDateId: 'waterChartEndDate',
            resetBtnId: 'btnResetWaterDates',
            showFn: showWaterChartView
        },
        gas: {
            canvasId: 'aggregateGasChart',
            label: 'Gas Production (MCF)',
            unit: 'MCF',
            color: '#22c55e',
            chartVar: 'aggregateGasChart',
            dateRangeVar: 'gasChartDateRange',
            startDateId: 'gasChartStartDate',
            endDateId: 'gasChartEndDate',
            resetBtnId: 'btnResetGasDates',
            showFn: showGasChartView
        }
    };
    
    const config = chartConfig[dataType];
    if (!config) return;
    
    // Destroy existing chart
    if (dataType === 'oil' && aggregateOilChart) {
        aggregateOilChart.destroy();
        aggregateOilChart = null;
    } else if (dataType === 'water' && aggregateWaterChart) {
        aggregateWaterChart.destroy();
        aggregateWaterChart = null;
    } else if (dataType === 'gas' && aggregateGasChart) {
        aggregateGasChart.destroy();
        aggregateGasChart = null;
    }
    
    // Get aggregate data (filtered by selected wells)
    const selectedWells = chartExplorerState[dataType];
    const { data, dateRange } = getAggregateProductionTimeSeries(dataType, startDate, endDate, selectedWells);
    
    // Store full date range for date picker bounds
    if (dataType === 'oil') {
        oilChartDateRange = dateRange;
    } else if (dataType === 'water') {
        waterChartDateRange = dateRange;
    } else if (dataType === 'gas') {
        gasChartDateRange = dateRange;
    }
    
    // Initialize date pickers
    initializeAggregateChartDatePickers(dataType, config, startDate, endDate, dateRange);
    
    const canvas = document.getElementById(config.canvasId);
    if (!canvas) return;
    
    // Check if we have data
    if (data.length === 0) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '14px Archivo, sans-serif';
        ctx.fillStyle = '#6b7280';
        ctx.textAlign = 'center';
        ctx.fillText('No production data available', canvas.width / 2, canvas.height / 2);
        return;
    }
    
    // Create chart
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: config.label,
                data: data,
                backgroundColor: config.color + '33',
                borderColor: config.color,
                borderWidth: 2,
                fill: true,
                tension: 0.1,
                pointRadius: 2,
                pointHoverRadius: 5
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
                        label: (context) => {
                            return `${config.label}: ${context.parsed.y.toLocaleString()}`;
                        }
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
                    ticks: {
                        color: '#9ea3ab',
                        maxTicksLimit: 12
                    }
                },
                y: {
                    beginAtZero: true,
                    title: { display: true, text: config.unit, color: '#9ea3ab' },
                    grid: { color: '#3a3f47' },
                    ticks: { color: '#9ea3ab' }
                }
            }
        }
    });
    
    // Store chart reference
    if (dataType === 'oil') {
        aggregateOilChart = chart;
    } else if (dataType === 'water') {
        aggregateWaterChart = chart;
    } else if (dataType === 'gas') {
        aggregateGasChart = chart;
    }
}

/**
 * Initialize date pickers for aggregate chart
 */
function initializeAggregateChartDatePickers(dataType, config, startDate, endDate, dateRange) {
    const startInput = document.getElementById(config.startDateId);
    const endInput = document.getElementById(config.endDateId);
    const resetBtn = document.getElementById(config.resetBtnId);
    
    if (!startInput || !endInput || !dateRange.min || !dateRange.max) return;
    
    // Format dates for input (YYYY-MM-DD)
    const formatForInput = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    };
    
    // Set min/max bounds
    const minStr = formatForInput(dateRange.min);
    const maxStr = formatForInput(dateRange.max);
    
    startInput.min = minStr;
    startInput.max = maxStr;
    endInput.min = minStr;
    endInput.max = maxStr;
    
    // Set values
    startInput.value = startDate ? formatForInput(startDate) : minStr;
    endInput.value = endDate ? formatForInput(endDate) : maxStr;
    
    // Remove old event listeners by cloning
    const newStartInput = startInput.cloneNode(true);
    const newEndInput = endInput.cloneNode(true);
    const newResetBtn = resetBtn.cloneNode(true);
    
    startInput.parentNode.replaceChild(newStartInput, startInput);
    endInput.parentNode.replaceChild(newEndInput, endInput);
    resetBtn.parentNode.replaceChild(newResetBtn, resetBtn);
    
    // Add event listeners
    const handleDateChange = () => {
        const start = newStartInput.value ? new Date(newStartInput.value) : null;
        const end = newEndInput.value ? new Date(newEndInput.value + 'T23:59:59') : null;
        config.showFn(start, end);
    };
    
    newStartInput.addEventListener('change', handleDateChange);
    newEndInput.addEventListener('change', handleDateChange);
    newResetBtn.addEventListener('click', () => config.showFn(null, null));
}

// ============================================================================
// Operations Dashboard Rendering
// ============================================================================

/**
 * Render the operations dashboard with all sections
 */
function renderDashboard() {
    renderDashboardStats();
    renderTopProducers();
    renderRecentTests();
    renderDashboardActionItems();
}

/**
 * Render aggregate stats in the dashboard
 */
function renderDashboardStats() {
    const stats = getAggregateStats();
    
    document.getElementById('statDailyOil').textContent = stats.totalOil.toLocaleString();
    document.getElementById('statDailyWater').textContent = stats.totalWater.toLocaleString();
    document.getElementById('statDailyGas').textContent = stats.totalGas.toLocaleString();
}

/**
 * Render top producing wells table
 */
function renderTopProducers() {
    const tbody = document.getElementById('topProducersBody');
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
    
    // Add click handlers for rows
    tbody.querySelectorAll('tr[data-well-id]').forEach(row => {
        row.addEventListener('click', () => {
            const wellId = row.dataset.wellId;
            const sheetId = row.dataset.sheetId;
            showWellView(sheetId, wellId);
        });
    });
}

/**
 * Render recent well tests table
 */
function renderRecentTests() {
    const tbody = document.getElementById('recentTestsBody');
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
    
    // Add click handlers for rows
    tbody.querySelectorAll('tr[data-well-id]').forEach(row => {
        row.addEventListener('click', () => {
            const wellId = row.dataset.wellId;
            const sheetId = row.dataset.sheetId;
            showWellView(sheetId, wellId);
        });
    });
}

/**
 * Render action items in the dashboard
 */
function renderDashboardActionItems() {
    const list = document.getElementById('dashboardActionList');
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
    
    // Add click handlers for action items
    list.querySelectorAll('li[data-well-id]').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const wellId = item.dataset.wellId;
            const sheetId = item.dataset.sheetId;
            showWellView(sheetId, wellId);
        });
    });
}

/**
 * Initialize dashboard-specific handlers (reupload button, clear cache)
 */
function initializeDashboardHandlers() {
    const btnReuploadAll = document.getElementById('btnReuploadAll');
    const bulkFileInputDashboard = document.getElementById('bulkFileInputDashboard');
    const btnClearCache = document.getElementById('btnClearCache');
    
    if (btnReuploadAll && bulkFileInputDashboard) {
        btnReuploadAll.addEventListener('click', () => {
            bulkFileInputDashboard.click();
        });
        
        bulkFileInputDashboard.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            if (files.length > 0) {
                processBulkUploadFromDashboard(files);
            }
            bulkFileInputDashboard.value = '';
        });
    }
    
    if (btnClearCache) {
        btnClearCache.addEventListener('click', () => {
            if (confirm('Clear all cached data? You will need to re-upload your gauge sheets.')) {
                clearCache();
            }
        });
    }
}

/**
 * Clear all cached data from localStorage
 */
function clearCache() {
    localStorage.removeItem(STORAGE_KEY);
    appData = {};
    refreshNavigation();
    updateWelcomeStats();
}

/**
 * Process bulk upload from dashboard (simplified version)
 */
async function processBulkUploadFromDashboard(files) {
    const overlay = document.getElementById('dashboardLoadingOverlay');
    const loadingText = document.getElementById('dashboardLoadingText');
    const loadingSubtext = document.getElementById('dashboardLoadingSubtext');
    
    // Show loading overlay
    overlay.classList.add('visible');
    loadingText.textContent = 'Processing sheets...';
    loadingSubtext.textContent = `0 of ${files.length} files`;
    
    let processed = 0;
    let successCount = 0;
    
    // Small delay to ensure overlay renders before heavy processing
    await new Promise(resolve => setTimeout(resolve, 50));
    
    for (const file of files) {
        // Update progress text
        loadingSubtext.textContent = `${processed + 1} of ${files.length}: ${file.name}`;
        
        const sheetConfig = GAUGE_SHEETS.find(s => 
            file.name.toLowerCase().includes(s.fileName.toLowerCase().replace('.xlsx', '').replace('.xlsm', '')) ||
            s.fileName.toLowerCase() === file.name.toLowerCase()
        );
        
        if (!sheetConfig) {
            processed++;
            continue;
        }
        
        const parser = window[sheetConfig.parser];
        if (!parser) {
            processed++;
            continue;
        }
        
        try {
            const arrayBuffer = await file.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array', cellDates: true });
            const data = parser.parse(workbook);
            
            appData[sheetConfig.id] = data;
            successCount++;
        } catch (error) {
            console.error(`Error processing ${file.name}:`, error);
        }
        
        processed++;
        
        // Allow UI to update between files
        await new Promise(resolve => setTimeout(resolve, 10));
    }
    
    // Show completion status briefly
    loadingText.textContent = 'Complete!';
    loadingSubtext.textContent = `${successCount} of ${files.length} sheets updated`;
    
    if (successCount > 0) {
        saveDataToStorage();
        refreshNavigation();
    }
    
    // Hide overlay after brief delay
    setTimeout(() => {
        overlay.classList.remove('visible');
    }, 600);
}

// ============================================================================
// Gauge Sheet View
// ============================================================================

function showGaugeSheetView(sheetId) {
    const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);
    if (!sheetConfig) return;
    
    currentSheet = sheetId;
    showView('gaugeSheet');
    
    document.getElementById('sheetName').textContent = sheetConfig.name;
    document.getElementById('sheetBreadcrumb').textContent = `Gauge Sheet: ${sheetConfig.fileName}`;
    document.getElementById('expectedFileName').textContent = sheetConfig.fileName;
    
    // Update upload status
    const sheetData = appData[sheetId];
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
    
    // Render wells grid
    renderWellsGrid(sheetId);
}

function renderWellsGrid(sheetId) {
    const grid = document.getElementById('wellsGrid');
    const sheetData = appData[sheetId];
    
    if (!sheetData || !sheetData.wells || sheetData.wells.length === 0) {
        grid.innerHTML = '<p class="empty-message">Upload gauge sheet to see wells</p>';
        return;
    }
    
    grid.innerHTML = sheetData.wells.map(well => {
        const latestTest = well.wellTests && well.wellTests[0];
        const latestOil = latestTest ? latestTest.oil : null;
        const testCount = well.wellTests ? well.wellTests.length : 0;
        
        return `
            <div class="well-card" data-well-id="${well.id}" data-sheet-id="${sheetId}">
                <h4>${well.name}</h4>
                <div class="well-stats">
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Oil</span>
                        <span class="well-stat-value">${latestOil !== null ? latestOil + ' bbl' : '-'}</span>
                    </div>
                    <div class="well-stat">
                        <span class="well-stat-label">Tests</span>
                        <span class="well-stat-value">${testCount}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    grid.querySelectorAll('.well-card').forEach(card => {
        card.addEventListener('click', () => {
            const wellId = card.dataset.wellId;
            const sheetId = card.dataset.sheetId;
            showWellView(sheetId, wellId);
        });
    });
}

// ============================================================================
// Well View
// ============================================================================

function showWellView(sheetId, wellId) {
    const sheetData = appData[sheetId];
    if (!sheetData || !sheetData.wells) return;
    
    const well = sheetData.wells.find(w => w.id === wellId);
    if (!well) return;
    
    currentSheet = sheetId;
    currentWell = wellId;
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
    
    // Initialize edit button handlers
    initializeEditHandlers();
}

// ============================================================================
// File Upload Handling
// ============================================================================

function initializeUploadHandlers() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const btnReupload = document.getElementById('btnReupload');
    
    // Click to upload
    uploadArea.addEventListener('click', (e) => {
        if (e.target.id !== 'btnReupload') {
            fileInput.click();
        }
    });
    
    btnReupload.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
    });
    
    // File selected
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            processUploadedFile(file);
        }
        fileInput.value = ''; // Reset for re-upload
    });
    
    // Drag and drop
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
    if (!currentSheet) {
        alert('Please select a gauge sheet first');
        return;
    }
    
    const sheetConfig = GAUGE_SHEETS.find(s => s.id === currentSheet);
    if (!sheetConfig) return;
    
    // Get the parser
    const parser = window[sheetConfig.parser];
    if (!parser) {
        alert(`Parser not yet implemented for ${sheetConfig.name}. Coming soon!`);
        return;
    }
    
    // Show progress
    const progress = document.getElementById('uploadProgress');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    progress.style.display = 'block';
    progressFill.style.width = '10%';
    progressText.textContent = 'Reading file...';
    
    try {
        // Read file
        const arrayBuffer = await file.arrayBuffer();
        progressFill.style.width = '30%';
        progressText.textContent = 'Parsing Excel...';
        
        // Parse with SheetJS
        const workbook = XLSX.read(arrayBuffer, { type: 'array', cellDates: true });
        progressFill.style.width = '60%';
        progressText.textContent = 'Extracting data...';
        
        // Use parser to extract data
        const data = parser.parse(workbook);
        progressFill.style.width = '90%';
        progressText.textContent = 'Saving...';
        
        // Save to app data and localStorage
        appData[currentSheet] = data;
        saveDataToStorage();
        
        progressFill.style.width = '100%';
        progressText.textContent = 'Complete!';
        
        // Refresh UI
        setTimeout(() => {
            progress.style.display = 'none';
            progressFill.style.width = '0%';
            refreshNavigation();
            showGaugeSheetView(currentSheet);
        }, 500);
        
    } catch (error) {
        console.error('Error processing file:', error);
        alert('Error processing file: ' + error.message);
        progress.style.display = 'none';
    }
}

// ============================================================================
// Bulk Upload Handling
// ============================================================================

function initializeBulkUploadHandlers() {
    const bulkUploadArea = document.getElementById('bulkUploadArea');
    const bulkFileInput = document.getElementById('bulkFileInput');
    
    if (!bulkUploadArea || !bulkFileInput) return;
    
    // Click to upload
    bulkUploadArea.addEventListener('click', () => {
        bulkFileInput.click();
    });
    
    // Files selected
    bulkFileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            processBulkUpload(files);
        }
        bulkFileInput.value = '';
    });
    
    // Drag and drop
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
        
        // Find matching gauge sheet config
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
        
        const parser = window[sheetConfig.parser];
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
            
            appData[sheetConfig.id] = data;
            
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
    
    // Save all data
    saveDataToStorage();
    
    progressFill.style.width = '100%';
    progressText.textContent = 'Complete!';
    
    // Show results
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
        
        // Refresh navigation and stats
        refreshNavigation();
    }, 500);
}

// ============================================================================
// Rendering Functions
// ============================================================================

function renderProductionCharts(well, startDate = null, endDate = null) {
    const wrapper = document.getElementById('productionChartsWrapper');
    
    // Store current well for date filtering
    currentWellData = well;
    
    // Destroy existing charts
    Object.values(wellProductionCharts).forEach(chart => {
        if (chart) chart.destroy();
    });
    wellProductionCharts = {};
    
    // Clear wrapper
    wrapper.innerHTML = '';
    
    // Get data from both sources
    // - production array has historical oil data (daily/periodic readings)
    // - wellTests has oil, water, gas from well tests
    const production = well.production || [];
    const wellTests = well.wellTests || [];
    
    // Calculate full date range from all data (for date picker bounds)
    const allDates = production
        .filter(item => item.date)
        .map(item => new Date(item.date))
        .filter(d => !isNaN(d.getTime()));
    
    if (allDates.length > 0) {
        productionDateRange.min = new Date(Math.min(...allDates));
        productionDateRange.max = new Date(Math.max(...allDates));
        
        // Initialize date pickers
        initializeDatePickers(startDate, endDate);
    }
    
    // Chart configurations - all use production array (has full history)
    const chartConfigs = [
        {
            key: 'oil',
            label: 'Oil (BBL)',
            unit: 'BBL',
            color: '#78716c',
            dataKey: 'oil',
            source: 'production'
        },
        {
            key: 'water',
            label: 'Water (BBL)',
            unit: 'BBL',
            color: '#3b82f6',
            dataKey: 'water',
            source: 'production'
        },
        {
            key: 'gas',
            label: 'Gas (MCF)',
            unit: 'MCF',
            color: '#22c55e',
            dataKey: 'gas',
            source: 'production'
        }
    ];
    
    // Check which data types have values
    const availableCharts = chartConfigs.filter(config => {
        const dataSource = config.source === 'production' ? production : wellTests;
        const hasData = dataSource.some(item => 
            item[config.dataKey] !== null && 
            item[config.dataKey] !== undefined && 
            !isNaN(item[config.dataKey])
        );
        return hasData;
    });
    
    // If no data at all, show placeholder
    if (availableCharts.length === 0) {
        wrapper.innerHTML = '<div class="chart-placeholder">No production data available</div>';
        return;
    }
    
    // Create chart sections for each available data type
    availableCharts.forEach(config => {
        const section = document.createElement('div');
        section.className = 'chart-section';
        section.innerHTML = `
            <div class="chart-label">${config.label}</div>
            <div class="canvas-wrapper">
                <canvas id="chart-${config.key}"></canvas>
            </div>
        `;
        wrapper.appendChild(section);
        
        // Get appropriate data source
        const dataSource = config.source === 'production' ? production : wellTests;
        
        // Prepare data with optional date filtering
        let chartData = dataSource
            .filter(item => item.date && item[config.dataKey] !== null && item[config.dataKey] !== undefined)
            .map(item => ({
                x: new Date(item.date),
                y: Number(item[config.dataKey])
            }))
            .filter(p => !isNaN(p.y))
            .sort((a, b) => a.x - b.x);
        
        // Apply date filter if specified
        if (startDate || endDate) {
            chartData = chartData.filter(point => {
                const pointDate = point.x.getTime();
                if (startDate && pointDate < startDate.getTime()) return false;
                if (endDate && pointDate > endDate.getTime()) return false;
                return true;
            });
        }
        
        // Create chart
        const ctx = document.getElementById(`chart-${config.key}`).getContext('2d');
        wellProductionCharts[config.key] = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: config.label,
                    data: chartData,
                    backgroundColor: config.color,
                    borderColor: config.color,
                    pointRadius: 3,
                    pointHoverRadius: 5
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
                            label: (context) => {
                                return `${config.label}: ${context.parsed.y}`;
                            }
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
                        ticks: { 
                            color: '#9ea3ab',
                            maxTicksLimit: 8
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: config.unit, color: '#9ea3ab' },
                        grid: { color: '#3a3f47' },
                        ticks: { color: '#9ea3ab' }
                    }
                }
            }
        });
    });
}

/**
 * Initialize date picker inputs with data range bounds
 */
function initializeDatePickers(startDate = null, endDate = null) {
    const startInput = document.getElementById('productionStartDate');
    const endInput = document.getElementById('productionEndDate');
    const resetBtn = document.getElementById('btnResetDates');
    
    if (!startInput || !endInput || !productionDateRange.min || !productionDateRange.max) return;
    
    // Format dates for input (YYYY-MM-DD)
    const formatForInput = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    };
    
    // Set min/max bounds
    const minStr = formatForInput(productionDateRange.min);
    const maxStr = formatForInput(productionDateRange.max);
    
    startInput.min = minStr;
    startInput.max = maxStr;
    endInput.min = minStr;
    endInput.max = maxStr;
    
    // Set values (either passed values or full range)
    startInput.value = startDate ? formatForInput(startDate) : minStr;
    endInput.value = endDate ? formatForInput(endDate) : maxStr;
    
    // Remove old event listeners by cloning
    const newStartInput = startInput.cloneNode(true);
    const newEndInput = endInput.cloneNode(true);
    const newResetBtn = resetBtn.cloneNode(true);
    
    startInput.parentNode.replaceChild(newStartInput, startInput);
    endInput.parentNode.replaceChild(newEndInput, endInput);
    resetBtn.parentNode.replaceChild(newResetBtn, resetBtn);
    
    // Add event listeners
    newStartInput.addEventListener('change', handleDateRangeChange);
    newEndInput.addEventListener('change', handleDateRangeChange);
    newResetBtn.addEventListener('click', handleDateRangeReset);
}

/**
 * Handle date range change - re-render charts with filtered data
 */
function handleDateRangeChange() {
    if (!currentWellData) return;
    
    const startInput = document.getElementById('productionStartDate');
    const endInput = document.getElementById('productionEndDate');
    
    const startDate = startInput.value ? new Date(startInput.value) : null;
    const endDate = endInput.value ? new Date(endInput.value + 'T23:59:59') : null;
    
    // Re-render charts with date filter
    renderProductionCharts(currentWellData, startDate, endDate);
}

/**
 * Reset date range to full dataset
 */
function handleDateRangeReset() {
    if (!currentWellData) return;
    
    // Re-render with no filter (full range)
    renderProductionCharts(currentWellData, null, null);
}

function renderWellTestTable(wellTests) {
    const tbody = document.querySelector('#wellTestTable tbody');
    
    if (!wellTests || wellTests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';
        return;
    }
    
    tbody.innerHTML = wellTests.map(test => `
        <tr>
            <td>${formatDate(test.date)}</td>
            <td>${test.oil !== null ? test.oil : '-'}</td>
            <td>${test.water !== null ? test.water : '-'}</td>
            <td>${test.gas !== null ? test.gas : '-'}</td>
        </tr>
    `).join('');
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
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #6b7280;">No pressure data</td></tr>';
        return;
    }
    
    tbody.innerHTML = readings.map(r => `
        <tr>
            <td>${formatDate(r.date)}</td>
            <td>${r.casingPsi || '-'}</td>
            <td>${r.tubingPsi || '-'}</td>
            <td>${r.flowlinePsi || '-'}</td>
        </tr>
    `).join('');
}

// ============================================================================
// Utility Functions
// ============================================================================

function formatDate(dateStr) {
    if (!dateStr) return '-';
    try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString('en-US', { 
            month: '2-digit', 
            day: '2-digit', 
            year: '2-digit' 
        });
    } catch {
        return dateStr;
    }
}

// ============================================================================
// Dashboard Data Aggregation Functions
// ============================================================================

/**
 * Get aggregate statistics across all wells
 * Returns total daily oil, water, gas
 */
function getAggregateStats() {
    let totalOil = 0;
    let totalWater = 0;
    let totalGas = 0;
    
    Object.keys(appData).forEach(sheetId => {
        const sheet = appData[sheetId];
        if (sheet && sheet.wells && sheet.wells.length > 0) {
            sheet.wells.forEach(well => {
                // Get latest well test for production numbers
                if (well.wellTests && well.wellTests.length > 0) {
                    const latestTest = well.wellTests[0];
                    if (latestTest.oil !== null && !isNaN(latestTest.oil)) {
                        totalOil += Number(latestTest.oil);
                    }
                    if (latestTest.water !== null && !isNaN(latestTest.water)) {
                        totalWater += Number(latestTest.water);
                    }
                    if (latestTest.gas !== null && !isNaN(latestTest.gas)) {
                        totalGas += Number(latestTest.gas);
                    }
                }
            });
        }
    });
    
    return {
        totalOil: Math.round(totalOil),
        totalWater: Math.round(totalWater),
        totalGas: Math.round(totalGas)
    };
}

/**
 * Get aggregate production time series data across all wells
 * Aggregates oil, water, and gas by date
 * @param {string} dataType - 'oil', 'water', or 'gas'
 * @param {Date} startDate - Optional start date filter
 * @param {Date} endDate - Optional end date filter
 * @returns {Object} { data: Array of {x: Date, y: Number}, dateRange: {min, max} }
 */
function getAggregateProductionTimeSeries(dataType = 'oil', startDate = null, endDate = null, selectedWells = null) {
    // Map to aggregate values by date string (YYYY-MM-DD)
    const dateMap = new Map();
    let minDate = null;
    let maxDate = null;
    
    Object.keys(appData).forEach(sheetId => {
        const sheet = appData[sheetId];
        if (sheet && sheet.wells && sheet.wells.length > 0) {
            sheet.wells.forEach(well => {
                // Check if this well is in the selected wells filter
                const wellId = `${sheetId}:${well.id}`;
                if (selectedWells && !selectedWells.includes(wellId)) {
                    return; // Skip this well
                }
                
                // Use production array for time series data
                const production = well.production || [];
                
                production.forEach(item => {
                    if (!item.date) return;
                    
                    const date = new Date(item.date);
                    if (isNaN(date.getTime())) return;
                    
                    const value = item[dataType];
                    if (value === null || value === undefined || isNaN(value)) return;
                    
                    // Track date range
                    if (!minDate || date < minDate) minDate = date;
                    if (!maxDate || date > maxDate) maxDate = date;
                    
                    // Aggregate by date
                    const dateKey = date.toISOString().split('T')[0];
                    const currentVal = dateMap.get(dateKey) || 0;
                    dateMap.set(dateKey, currentVal + Number(value));
                });
            });
        }
    });
    
    // Convert to array and apply date filters
    let data = Array.from(dateMap.entries())
        .map(([dateStr, value]) => ({
            x: new Date(dateStr),
            y: value
        }))
        .sort((a, b) => a.x - b.x);
    
    // Apply date filters
    if (startDate || endDate) {
        data = data.filter(point => {
            const pointTime = point.x.getTime();
            if (startDate && pointTime < startDate.getTime()) return false;
            if (endDate && pointTime > endDate.getTime()) return false;
            return true;
        });
    }
    
    return {
        data,
        dateRange: { min: minDate, max: maxDate }
    };
}

/**
 * Get top producing wells sorted by latest oil production
 * @param {number} limit - Number of wells to return (default 10)
 * @returns {Array} Array of well objects with battery info
 */
function getTopProducingWells(limit = 10) {
    const allWells = [];
    
    Object.keys(appData).forEach(sheetId => {
        const sheet = appData[sheetId];
        const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);
        
        if (sheet && sheet.wells && sheetConfig) {
            sheet.wells.forEach(well => {
                let latestOil = null;
                let latestWater = null;
                
                if (well.wellTests && well.wellTests.length > 0) {
                    const latestTest = well.wellTests[0];
                    latestOil = latestTest.oil;
                    latestWater = latestTest.water;
                }
                
                allWells.push({
                    wellId: well.id,
                    wellName: well.name,
                    sheetId: sheetId,
                    batteryName: sheetConfig.name,
                    oil: latestOil !== null ? Number(latestOil) : 0,
                    water: latestWater !== null ? Number(latestWater) : 0
                });
            });
        }
    });
    
    // Sort by oil production descending
    allWells.sort((a, b) => b.oil - a.oil);
    
    return allWells.slice(0, limit);
}

/**
 * Get most recent well tests across all batteries
 * @param {number} limit - Number of tests to return (default 10)
 * @returns {Array} Array of test objects with well and battery info
 */
function getRecentWellTests(limit = 10) {
    const allTests = [];
    
    Object.keys(appData).forEach(sheetId => {
        const sheet = appData[sheetId];
        const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);
        
        if (sheet && sheet.wells && sheetConfig) {
            sheet.wells.forEach(well => {
                if (well.wellTests && well.wellTests.length > 0) {
                    well.wellTests.forEach(test => {
                        if (test.date) {
                            allTests.push({
                                date: new Date(test.date),
                                wellId: well.id,
                                wellName: well.name,
                                sheetId: sheetId,
                                batteryName: sheetConfig.name,
                                oil: test.oil,
                                water: test.water,
                                gas: test.gas
                            });
                        }
                    });
                }
            });
        }
    });
    
    // Sort by date descending (most recent first)
    allTests.sort((a, b) => b.date - a.date);
    
    return allTests.slice(0, limit);
}

/**
 * Get all action items from all wells
 * @param {number} limit - Maximum number of items to return (default 15)
 * @returns {Array} Array of action item objects with source info
 */
function getAllActionItems(limit = 15) {
    const allItems = [];
    
    Object.keys(appData).forEach(sheetId => {
        const sheet = appData[sheetId];
        const sheetConfig = GAUGE_SHEETS.find(s => s.id === sheetId);
        
        if (sheet && sheet.wells && sheetConfig) {
            sheet.wells.forEach(well => {
                if (well.actionItems && well.actionItems.length > 0) {
                    well.actionItems.forEach(item => {
                        if (item && item.trim()) {
                            allItems.push({
                                content: item,
                                wellId: well.id,
                                wellName: well.name,
                                sheetId: sheetId,
                                batteryName: sheetConfig.name
                            });
                        }
                    });
                }
            });
        }
    });
    
    return allItems.slice(0, limit);
}

/**
 * Check if any data has been uploaded
 * @returns {boolean}
 */
function hasUploadedData() {
    return Object.keys(appData).some(k => appData[k] && appData[k].wells && appData[k].wells.length > 0);
}

// ============================================================================
// Edit Modal Functions
// ============================================================================

let currentEditSection = null;

/**
 * Initialize edit button handlers for the well view
 */
function initializeEditHandlers() {
    const editButtons = document.querySelectorAll('.btn-edit[data-edit]');
    editButtons.forEach(btn => {
        // Remove any existing listeners by cloning
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const section = newBtn.dataset.edit;
            openEditModal(section);
        });
    });
    
    // Modal close handlers
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

/**
 * Open edit modal for a specific section
 * @param {string} section - chemicalProgram, failureHistory, actionItems, or pressureReadings
 */
function openEditModal(section) {
    if (!currentSheet || !currentWell) return;
    
    const sheetData = appData[currentSheet];
    if (!sheetData || !sheetData.wells) return;
    
    const well = sheetData.wells.find(w => w.id === currentWell);
    if (!well) return;
    
    currentEditSection = section;
    
    const modal = document.getElementById('editModal');
    const title = document.getElementById('editModalTitle');
    const body = document.getElementById('editModalBody');
    
    // Set title based on section
    const titles = {
        chemicalProgram: 'Edit Chemical Program',
        failureHistory: 'Edit Failure History',
        actionItems: 'Edit Action Items',
        pressureReadings: 'Edit Pressure Readings'
    };
    title.textContent = titles[section] || 'Edit';
    
    // Render form based on section
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
    }
    
    modal.classList.add('visible');
}

/**
 * Close the edit modal
 */
function closeEditModal() {
    const modal = document.getElementById('editModal');
    modal.classList.remove('visible');
    currentEditSection = null;
}

// ============================================================================
// Form Renderers
// ============================================================================

/**
 * Render chemical program edit form
 */
function renderChemicalProgramForm(data) {
    const cont = data.continuous || {};
    const truck = data.truckTreat || {};
    
    return `
        <div class="chemical-form-grid">
            <div class="form-column-header"></div>
            <div class="form-column-header">Continuous</div>
            <div class="form-column-header">Truck Treat</div>
            
            <div class="form-row-label">Rate (gal/month)</div>
            <input type="text" class="edit-form-input" id="chemContRate" value="${cont.rate || ''}" placeholder="-">
            <input type="text" class="edit-form-input" id="chemTruckRate" value="${truck.rate || ''}" placeholder="-">
            
            <div class="form-row-label">Chems Used</div>
            <input type="text" class="edit-form-input" id="chemContChems" value="${cont.chems || ''}" placeholder="-">
            <input type="text" class="edit-form-input" id="chemTruckChems" value="${truck.chems || ''}" placeholder="-">
            
            <div class="form-row-label">PPM</div>
            <input type="text" class="edit-form-input" id="chemContPPM" value="${cont.ppm || ''}" placeholder="-">
            <input type="text" class="edit-form-input" id="chemTruckPPM" value="${truck.ppm || ''}" placeholder="-">
        </div>
    `;
}

/**
 * Render failure history edit form
 */
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

/**
 * Initialize handlers for failure history form
 */
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
    
    // Attach delete handlers to existing rows
    tbody.querySelectorAll('.btn-delete-row').forEach(btn => {
        attachDeleteHandler(btn);
    });
}

/**
 * Render action items edit form
 */
function renderActionItemsForm(data) {
    let itemsHtml = '';
    
    if (data.length > 0) {
        itemsHtml = data.map((item, index) => `
            <div class="action-item-row" data-item-index="${index}">
                <input type="text" class="edit-form-input" name="actionItem" value="${escapeHtml(item)}">
                <button type="button" class="btn-delete-item" title="Delete item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `).join('');
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

/**
 * Initialize handlers for action items form
 */
function initializeActionItemsHandlers() {
    const addBtn = document.getElementById('btnAddActionItem');
    const inputField = document.getElementById('newActionItem');
    const editor = document.getElementById('actionItemsEditor');
    
    const addNewItem = () => {
        const value = inputField.value.trim();
        if (!value) return;
        
        // Remove empty message if present
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
    
    // Attach delete handlers to existing items
    editor.querySelectorAll('.btn-delete-item').forEach(btn => {
        attachActionItemDeleteHandler(btn);
    });
}

/**
 * Attach delete handler for action item
 */
function attachActionItemDeleteHandler(btn) {
    btn.addEventListener('click', () => {
        const row = btn.closest('.action-item-row');
        row.remove();
        
        // Show empty message if no items left
        const editor = document.getElementById('actionItemsEditor');
        if (editor.querySelectorAll('.action-item-row').length === 0) {
            editor.innerHTML = '<div class="action-items-empty">No action items. Add one below.</div>';
        }
    });
}

/**
 * Render pressure readings edit form
 */
function renderPressureReadingsForm(data) {
    let rowsHtml = '';
    
    if (data.length > 0) {
        rowsHtml = data.map((row, index) => `
            <tr data-row-index="${index}">
                <td><input type="date" class="edit-table-input" name="date" value="${formatDateForInput(row.date)}"></td>
                <td><input type="number" class="edit-table-input" name="casingPsi" value="${row.casingPsi || ''}" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="tubingPsi" value="${row.tubingPsi || ''}" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="flowlinePsi" value="${row.flowlinePsi || ''}" placeholder="-"></td>
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

/**
 * Initialize handlers for pressure readings form
 */
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
    
    // Attach delete handlers to existing rows
    tbody.querySelectorAll('.btn-delete-row').forEach(btn => {
        attachDeleteHandler(btn);
    });
}

/**
 * Attach delete handler for table row
 */
function attachDeleteHandler(btn) {
    btn.addEventListener('click', () => {
        const row = btn.closest('tr');
        row.remove();
    });
}

// ============================================================================
// Save Functions
// ============================================================================

/**
 * Save edited data back to the well and localStorage
 */
function saveEditedData() {
    if (!currentSheet || !currentWell || !currentEditSection) return;
    
    const sheetData = appData[currentSheet];
    if (!sheetData || !sheetData.wells) return;
    
    const wellIndex = sheetData.wells.findIndex(w => w.id === currentWell);
    if (wellIndex === -1) return;
    
    const well = sheetData.wells[wellIndex];
    
    switch (currentEditSection) {
        case 'chemicalProgram':
            well.chemicalProgram = readChemicalProgramForm();
            break;
        case 'failureHistory':
            well.failureHistory = readFailureHistoryForm();
            break;
        case 'actionItems':
            well.actionItems = readActionItemsForm();
            break;
        case 'pressureReadings':
            well.pressureReadings = readPressureReadingsForm();
            break;
    }
    
    // Save to localStorage
    saveDataToStorage();
    
    // Close modal
    closeEditModal();
    
    // Re-render the well view to show updated data
    showWellView(currentSheet, currentWell);
}

/**
 * Read chemical program form values
 */
function readChemicalProgramForm() {
    return {
        continuous: {
            rate: document.getElementById('chemContRate')?.value || '',
            chems: document.getElementById('chemContChems')?.value || '',
            ppm: document.getElementById('chemContPPM')?.value || ''
        },
        truckTreat: {
            rate: document.getElementById('chemTruckRate')?.value || '',
            chems: document.getElementById('chemTruckChems')?.value || '',
            ppm: document.getElementById('chemTruckPPM')?.value || ''
        }
    };
}

/**
 * Read failure history form values
 */
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
        
        // Only add if at least one field has data
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

/**
 * Read action items form values
 */
function readActionItemsForm() {
    const editor = document.getElementById('actionItemsEditor');
    const inputs = editor.querySelectorAll('input[name="actionItem"]');
    const data = [];
    
    inputs.forEach(input => {
        const value = input.value.trim();
        if (value) {
            data.push(value);
        }
    });
    
    return data;
}

/**
 * Read pressure readings form values
 */
function readPressureReadingsForm() {
    const tbody = document.getElementById('pressureEditBody');
    const rows = tbody.querySelectorAll('tr');
    const data = [];
    
    rows.forEach(row => {
        const date = row.querySelector('input[name="date"]')?.value;
        const casingPsi = row.querySelector('input[name="casingPsi"]')?.value;
        const tubingPsi = row.querySelector('input[name="tubingPsi"]')?.value;
        const flowlinePsi = row.querySelector('input[name="flowlinePsi"]')?.value;
        
        // Only add if at least one field has data
        if (date || casingPsi || tubingPsi || flowlinePsi) {
            data.push({
                date: date || null,
                casingPsi: casingPsi ? Number(casingPsi) : null,
                tubingPsi: tubingPsi ? Number(tubingPsi) : null,
                flowlinePsi: flowlinePsi ? Number(flowlinePsi) : null
            });
        }
    });
    
    return data;
}

// ============================================================================
// Utility Functions for Edit Forms
// ============================================================================

/**
 * Format date for input[type="date"] value (YYYY-MM-DD)
 */
function formatDateForInput(dateStr) {
    if (!dateStr) return '';
    try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return '';
        return date.toISOString().split('T')[0];
    } catch {
        return '';
    }
}

/**
 * Escape HTML special characters
 */
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
