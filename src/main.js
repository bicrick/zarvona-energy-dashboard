import '../styles.css';
import { initializeTheme, initializeThemeToggle } from './theme.js';
import { loadDataFromStorage } from './storage.js';
import { initializeNavigation, initializeLogoHandler, initializeHamburgerToggle, refreshNavigation } from './navigation.js';
import { initializeUploadHandlers, initializeBulkUploadHandlers } from './upload.js';
import { initializeDashboardHandlers, setOnCacheCleared } from './dashboard.js';
import { updateWelcomeStats, showView, showWellView } from './views.js';
import { setOnEditSave } from './edit-modal.js';

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

setOnEditSave((sheetId, wellId) => {
    showWellView(sheetId, wellId);
});

setOnCacheCleared(() => {
    refreshNavigation();
    updateWelcomeStats();
});
