import '../styles.css';
import { initializeTheme, initializeThemeToggle } from './theme.js';
import { loadNavigationData, loadDashboardData, loadChemicalProgramData } from './firestore-storage.js';
import { initializeNavigation, initializeLogoHandler, initializeHamburgerToggle, refreshNavigation } from './navigation.js';
import { initializeUploadHandlers, initializeBulkUploadHandlers } from './upload.js';
import { initializeDashboardHandlers, setOnCacheCleared } from './dashboard.js';
import { updateWelcomeStats, showView, showWellView } from './views.js';
import { setOnEditSave } from './edit-modal.js';
import { initializeFailureModalHandlers } from './failure-modal.js';
import { initializeAuthObserver, showLoginView, showApp, initializeLoginHandlers, signOut } from './auth.js';
import { auth } from './firebase.js';
import { appState } from './config.js';

let appInitialized = false;

async function initializeApp() {
    if (appInitialized) return;
    
    initializeTheme();
    
    // Phase 1: Load minimal data (navigation data only)
    appState.isLoading = true;
    await loadNavigationData();
    
    // Initialize UI components
    initializeNavigation();
    initializeUploadHandlers();
    initializeBulkUploadHandlers();
    initializeDashboardHandlers();
    initializeFailureModalHandlers();
    initializeLogoHandler();
    initializeHamburgerToggle();
    initializeThemeToggle();
    initializeUserMenu();
    
    // Show the app immediately with loading states
    showView('welcome');
    showApp();
    
    appInitialized = true;
    
    // Phase 2: Load dashboard summary data in background
    loadDashboardSummaryInBackground();
}

async function loadDashboardSummaryInBackground() {
    try {
        // Load optimized dashboard data
        await loadDashboardData();
        
        // Load chemical program data
        await loadChemicalProgramData();
        
        // Mark loading as complete BEFORE rendering
        appState.isLoading = false;
        
        // Update dashboard with loaded data
        updateWelcomeStats();
        
        // Refresh navigation to show well counts
        refreshNavigation();
        
        console.log('Background loading complete');
    } catch (error) {
        console.error('Error loading dashboard summary:', error);
        appState.isLoading = false;
        // Still try to render whatever data we have
        updateWelcomeStats();
        refreshNavigation();
    }
}

function initializeUserMenu() {
    const userAvatarBtn = document.getElementById('userAvatarBtn');
    const userDropdown = document.getElementById('userDropdown');
    const userEmail = document.getElementById('userEmail');
    const userDisplayName = document.getElementById('userDisplayName');
    const userAvatarImg = document.getElementById('userAvatarImg');
    const avatarIconSvg = document.getElementById('avatarIconSvg');
    const userDropdownAvatar = document.getElementById('userDropdownAvatar');
    const btnSignOutDropdown = document.getElementById('btnSignOutDropdown');
    
    if (!userAvatarBtn || !userDropdown) return;
    
    // Get current user and display information
    const user = auth.currentUser;
    if (user) {
        // Display email
        if (userEmail) {
            userEmail.textContent = user.email || 'No email';
        }
        
        // Display name (if available from Microsoft/OAuth)
        if (user.displayName && userDisplayName) {
            userDisplayName.textContent = user.displayName;
            userDisplayName.style.display = 'block';
        }
        
        // Display profile picture (if available from Microsoft/OAuth)
        if (user.photoURL) {
            // Show profile picture in avatar button
            if (userAvatarImg && avatarIconSvg) {
                userAvatarImg.src = user.photoURL;
                userAvatarImg.style.display = 'block';
                avatarIconSvg.style.display = 'none';
            }
            
            // Show profile picture in dropdown
            if (userDropdownAvatar) {
                userDropdownAvatar.src = user.photoURL;
                userDropdownAvatar.style.display = 'block';
            }
        }
    }
    
    // Toggle dropdown on avatar click
    userAvatarBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userDropdown.contains(e.target) && e.target !== userAvatarBtn) {
            userDropdown.classList.remove('active');
        }
    });
    
    // Sign out handler
    if (btnSignOutDropdown) {
        btnSignOutDropdown.addEventListener('click', async () => {
            userDropdown.classList.remove('active');
            await signOut();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize login handlers
    initializeLoginHandlers();
    
    // Initialize auth observer
    initializeAuthObserver((user) => {
        if (user) {
            // User is signed in
            console.log('User signed in:', user.email);
            initializeApp();
        } else {
            // No user signed in
            console.log('User signed out');
            showLoginView();
            appInitialized = false;
        }
    });
});

setOnEditSave((sheetId, wellId) => {
    showWellView(sheetId, wellId);
});

setOnCacheCleared(() => {
    refreshNavigation();
    updateWelcomeStats();
});
