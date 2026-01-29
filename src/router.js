import { showView, showBatteryView, showWellView, showMasterChemicalView, showFluidLevelsView, showAriesView, updateWelcomeStats } from './views.js';
import { showOilChartView, showWaterChartView, showGasChartView } from './charts/aggregate.js';
import { GAUGE_SHEETS } from './config.js';

// Store the pending hash if user is not authenticated yet
let pendingHash = null;

/**
 * Initialize the router - set up hashchange listener and handle initial URL
 */
export function initRouter() {
    // Listen for hash changes (browser back/forward)
    window.addEventListener('hashchange', handleHashChange);
    
    // If there's a pending hash from before authentication, restore it
    if (pendingHash) {
        window.location.hash = pendingHash;
        pendingHash = null;
    }
    
    // Handle initial URL on page load
    handleHashChange();
}

/**
 * Store the current hash to navigate to after authentication
 */
export function setPendingRoute() {
    if (window.location.hash && window.location.hash !== '#/' && window.location.hash !== '#') {
        pendingHash = window.location.hash;
    }
}

/**
 * Check if there's a pending route
 */
export function hasPendingRoute() {
    return pendingHash !== null;
}

/**
 * Update the URL hash based on current view
 */
export function updateURL(viewName, params = {}) {
    let hash = '';
    
    switch (viewName) {
        case 'welcome':
        case 'dashboard':
            hash = '#/';
            break;
            
        case 'battery':
            if (params.sheetId) {
                hash = `#/battery/${params.sheetId}`;
            }
            break;
            
        case 'well':
            if (params.sheetId && params.wellId) {
                hash = `#/well/${params.sheetId}/${params.wellId}`;
            }
            break;
            
        case 'oil':
            hash = '#/oil';
            if (params.startDate || params.endDate) {
                const queryParams = new URLSearchParams();
                if (params.startDate) queryParams.set('start', params.startDate);
                if (params.endDate) queryParams.set('end', params.endDate);
                hash += '?' + queryParams.toString();
            }
            break;
            
        case 'water':
            hash = '#/water';
            if (params.startDate || params.endDate) {
                const queryParams = new URLSearchParams();
                if (params.startDate) queryParams.set('start', params.startDate);
                if (params.endDate) queryParams.set('end', params.endDate);
                hash += '?' + queryParams.toString();
            }
            break;
            
        case 'gas':
            hash = '#/gas';
            if (params.startDate || params.endDate) {
                const queryParams = new URLSearchParams();
                if (params.startDate) queryParams.set('start', params.startDate);
                if (params.endDate) queryParams.set('end', params.endDate);
                hash += '?' + queryParams.toString();
            }
            break;
            
        case 'chemical':
        case 'masterChemical':
            hash = '#/chemical';
            break;
            
        case 'fluidLevels':
            hash = '#/fluid-levels';
            break;
            
        case 'aries':
            hash = '#/aries';
            break;
            
        default:
            hash = '#/';
    }
    
    // Only update if hash actually changed to avoid triggering hashchange unnecessarily
    if (window.location.hash !== hash) {
        window.location.hash = hash;
    }
}

/**
 * Handle hash changes (initial load or browser back/forward)
 */
function handleHashChange() {
    const route = parseHash();
    navigateToRoute(route);
}

/**
 * Parse the current URL hash into route information
 */
function parseHash() {
    let hash = window.location.hash.slice(1); // Remove the '#'
    
    // If empty or just '/', it's the dashboard
    if (!hash || hash === '/') {
        return { view: 'dashboard' };
    }
    
    // Split hash and query string
    const [path, queryString] = hash.split('?');
    const params = new URLSearchParams(queryString || '');
    
    // Split path into segments
    const segments = path.split('/').filter(s => s);
    
    // Route based on first segment
    const view = segments[0];
    
    switch (view) {
        case 'battery':
            return {
                view: 'battery',
                sheetId: segments[1]
            };
            
        case 'well':
            return {
                view: 'well',
                sheetId: segments[1],
                wellId: segments[2]
            };
            
        case 'oil':
            return {
                view: 'oil',
                startDate: params.get('start'),
                endDate: params.get('end')
            };
            
        case 'water':
            return {
                view: 'water',
                startDate: params.get('start'),
                endDate: params.get('end')
            };
            
        case 'gas':
            return {
                view: 'gas',
                startDate: params.get('start'),
                endDate: params.get('end')
            };
            
        case 'chemical':
            return { view: 'chemical' };
            
        case 'fluid-levels':
            return { view: 'fluidLevels' };
            
        case 'aries':
            return { view: 'aries' };
            
        default:
            // Unknown route, fallback to dashboard
            return { view: 'dashboard' };
    }
}

/**
 * Navigate to a parsed route
 */
function navigateToRoute(route) {
    // Pass skipHistory: true to prevent infinite loop
    switch (route.view) {
        case 'dashboard':
            showView('welcome');
            updateWelcomeStats();
            break;
            
        case 'battery':
            if (route.sheetId && isValidSheetId(route.sheetId)) {
                showBatteryView(route.sheetId, { skipHistory: true });
            } else {
                // Invalid sheetId, fallback to dashboard
                window.location.hash = '#/';
            }
            break;
            
        case 'well':
            if (route.sheetId && route.wellId && isValidSheetId(route.sheetId)) {
                showWellView(route.sheetId, route.wellId, { skipHistory: true });
            } else {
                // Invalid parameters, fallback to dashboard
                window.location.hash = '#/';
            }
            break;
            
        case 'oil':
            showOilChartView(route.startDate, route.endDate, { skipHistory: true });
            break;
            
        case 'water':
            showWaterChartView(route.startDate, route.endDate, { skipHistory: true });
            break;
            
        case 'gas':
            showGasChartView(route.startDate, route.endDate, { skipHistory: true });
            break;
            
        case 'chemical':
            showMasterChemicalView({ skipHistory: true });
            break;
            
        case 'fluidLevels':
            showFluidLevelsView({ skipHistory: true });
            break;
            
        case 'aries':
            showAriesView({ skipHistory: true });
            break;
            
        default:
            showView('welcome');
            updateWelcomeStats();
    }
}

/**
 * Validate if a sheetId exists in configuration
 */
function isValidSheetId(sheetId) {
    return GAUGE_SHEETS.some(sheet => sheet.id === sheetId);
}
