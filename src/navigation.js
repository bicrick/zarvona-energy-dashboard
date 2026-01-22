import { GAUGE_SHEETS, appState } from './config.js';
import { showView, updateWelcomeStats, showGaugeSheetView, showWellView, showBatteryView, showMasterChemicalView, showFluidLevelsView } from './views.js';
import { showOilChartView, showWaterChartView, showGasChartView } from './charts/aggregate.js';
import { loadWellsList } from './firestore-storage.js';

export function initializeLogoHandler() {
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            appState.currentSheet = null;
            appState.currentWell = null;
            showView('welcome');
            updateWelcomeStats();
            const dashboardNav = document.getElementById('nav-dashboard');
            if (dashboardNav) {
                setActiveNavItem(dashboardNav);
            }
        });
    }
}

export function initializeHamburgerToggle() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            const isCollapsed = sidebar.classList.contains('collapsed');
            localStorage.setItem('sidebarCollapsed', isCollapsed ? 'true' : 'false');
        });

        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState === 'true') {
            sidebar.classList.add('collapsed');
        }
    }
}

export function initializeNavigation() {
    const navTree = document.getElementById('navTree');
    navTree.innerHTML = '';

    const homeSection = createNavSection('Home', 'home-section', [
        { id: 'nav-dashboard', label: 'Operations Dashboard', icon: 'dashboard', action: () => { showView('welcome'); updateWelcomeStats(); } },
        { id: 'nav-oil-chart', label: 'Oil Production', icon: 'oil', action: () => showOilChartView() },
        { id: 'nav-water-chart', label: 'Water Production', icon: 'water', action: () => showWaterChartView() },
        { id: 'nav-gas-chart', label: 'Gas Production', icon: 'gas', action: () => showGasChartView() }
    ]);
    navTree.appendChild(homeSection);

    const chemicalSection = createNavSection('Chemical Programs', 'chemical-section', [
        { id: 'nav-master-chemical', label: 'Master Chemical Sheet', icon: 'chemical', action: () => showMasterChemicalView() }
    ]);
    navTree.appendChild(chemicalSection);

    const fluidLevelsSection = createNavSection('Fluid Levels', 'fluid-levels-section', [
        { id: 'nav-fluid-levels', label: 'Fluid Levels', icon: 'fluidLevel', action: () => showFluidLevelsView() }
    ]);
    navTree.appendChild(fluidLevelsSection);

    const wellsSection = createWellsSection();
    navTree.appendChild(wellsSection);
}

function createNavSection(title, sectionId, items) {
    const section = document.createElement('div');
    section.className = 'nav-section';
    section.id = sectionId;

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

    const children = document.createElement('div');
    children.className = 'nav-section-children visible';

    items.forEach(item => {
        const itemEl = createNavSectionItem(item);
        children.appendChild(itemEl);
    });

    header.addEventListener('click', () => {
        header.classList.toggle('expanded');
        children.classList.toggle('visible');
    });

    section.appendChild(header);
    section.appendChild(children);

    return section;
}

function createNavSectionItem(item) {
    const div = document.createElement('div');
    div.className = 'nav-section-item';

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
        gas: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2">
            <path d="M12 2v6m0 4v10M5 12h14M8 6h8M6 18h12"></path>
           </svg>`,
        chemical: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95137 3C7.53466 3 7.00572 4.75542 8 5.57453V10.1716C8 10.4368 7.89464 10.6911 7.70711 10.8787L2.87868 15.7071C2.31607 16.2697 2 17.0328 2 17.8284V18C2 19.6569 3.34315 21 5 21H19C20.6569 21 22 19.6569 22 18V17.8284C22 17.0328 21.6839 16.2697 21.1213 15.7071L16.2929 10.8787C16.1054 10.6911 16 10.4368 16 10.1716V5.57453C16.9943 4.75542 16.4653 3 15.0486 3H8.95137ZM16.5858 14H7.41421L9.12132 12.2929C9.68393 11.7303 10 10.9672 10 10.1716V5.2847C10 5.18797 9.99045 5.0927 9.97203 5H14.028C14.0096 5.0927 14 5.18797 14 5.2847V10.1716C14 10.9672 14.3161 11.7303 14.8787 12.2929L16.5858 14Z" fill="currentColor"/>
           </svg>`,
        fluidLevel: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            <line x1="12" y1="16" x2="12" y2="12"></line>
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

function createWellsSection() {
    const section = document.createElement('div');
    section.className = 'nav-section';
    section.id = 'wells-section';

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

    const children = document.createElement('div');
    children.className = 'nav-section-children visible';

    // Filter out special sheets (chemical, fluid level) - they have their own section
    GAUGE_SHEETS
        .filter(sheet => !sheet.isChemicalSheet && !sheet.isFluidLevelSheet)
        .forEach(sheet => {
            const sheetEl = createGaugeSheetNavItem(sheet);
            children.appendChild(sheetEl);
        });

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

    const sheetData = appState.appData[sheet.id];
    const hasMetadata = sheetData && sheetData._metadataLoaded;
    const wellsLoaded = sheetData && sheetData._wellsLoaded;
    const activeWells = wellsLoaded ? sheetData.wells.filter(w => w.status !== 'inactive') : [];
    
    // Hardcoded well counts as requested
    const HARDCODED_COUNTS = {
        'cowden': 3,
        'bigmax': 11,
        'bigmax1h': 1,
        'southandrews': 21,
        'polaris': 2,
        'shusa': 40,
        'mwwemac': 8,
        'unit130': 1,
        'uls35h': 4
    };

    // Use cached well count if available, otherwise calculate from loaded wells
    const cachedCount = appState.metadataCache.wellCounts[sheet.id];
    let wellCount = cachedCount !== undefined ? cachedCount : activeWells.length;
    
    // Fallback to hardcoded count if available and no real count yet
    if (wellCount === 0 && !wellsLoaded && HARDCODED_COUNTS[sheet.id] !== undefined) {
        wellCount = HARDCODED_COUNTS[sheet.id];
    }

    // Determine status text
    let statusText = 'No data';
    let statusClass = 'not-uploaded';
    
    if (hasMetadata) {
        // If we have a hardcoded count, use it instead of loading state
        if (HARDCODED_COUNTS[sheet.id] !== undefined) {
            statusText = HARDCODED_COUNTS[sheet.id] + ' wells';
            statusClass = 'uploaded';
        } else if (cachedCount !== undefined || wellsLoaded) {
            statusText = wellCount + ' wells';
            statusClass = 'uploaded';
        } else {
            statusText = 'Loading...';
            statusClass = 'uploaded';
        }
    }

    div.innerHTML = `
        <div class="nav-item" data-sheet-id="${sheet.id}">
            <span class="icon">&#9632;</span>
            <span class="nav-battery-name">${sheet.name}</span>
            <span class="upload-indicator ${statusClass}">
                ${statusText}
            </span>
        </div>
        <div class="nav-children" id="sheet-children-${sheet.id}"></div>
    `;

    const navItem = div.querySelector('.nav-item');
    const childrenContainer = div.querySelector('.nav-children');

    navItem.addEventListener('click', async (e) => {
        e.stopPropagation();
        setActiveNavItem(navItem);
        showBatteryView(sheet.id);

        // Load wells on-demand when expanding
        if (hasMetadata && !wellsLoaded) {
            const indicator = navItem.querySelector('.upload-indicator');
            // Only show loading if we don't have a hardcoded count
            if (HARDCODED_COUNTS[sheet.id] === undefined) {
                indicator.textContent = 'Loading...';
            }
            
            await loadWellsList(sheet.id);
            
            // Update the navigation after loading
            const updatedSheetData = appState.appData[sheet.id];
            const updatedActiveWells = updatedSheetData.wells.filter(w => w.status !== 'inactive');
            indicator.textContent = updatedActiveWells.length + ' wells';
            
            // Populate wells in navigation
            childrenContainer.innerHTML = '';
            updatedActiveWells.forEach(well => {
                const wellEl = createWellNavItem(well, sheet);
                childrenContainer.appendChild(wellEl);
            });
        }

        if (wellsLoaded && activeWells.length > 0) {
            navItem.classList.toggle('expanded');
            childrenContainer.classList.toggle('visible');
        }
    });

    // If wells are already loaded, populate them
    if (wellsLoaded && activeWells.length > 0) {
        activeWells.forEach(well => {
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

export function setActiveNavItem(item) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    item.classList.add('active');
}

export function refreshNavigation() {
    initializeNavigation();
    updateWelcomeStats();
}
