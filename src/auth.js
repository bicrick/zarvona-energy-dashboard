import { 
    signInWithEmailAndPassword, 
    signOut as firebaseSignOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from './firebase.js';

let authStateCallback = null;

/**
 * Initialize auth state observer
 * @param {Function} callback - Called with user object when auth state changes
 */
export function initializeAuthObserver(callback) {
    authStateCallback = callback;
    onAuthStateChanged(auth, (user) => {
        if (authStateCallback) {
            authStateCallback(user);
        }
    });
}

/**
 * Sign in with email and password
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<UserCredential>}
 */
export async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Sign in error:', error);
        return { success: false, error: getErrorMessage(error) };
    }
}

/**
 * Sign out the current user
 * @returns {Promise<void>}
 */
export async function signOut() {
    try {
        await firebaseSignOut(auth);
        return { success: true };
    } catch (error) {
        console.error('Sign out error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Create a new user account
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<UserCredential>}
 */
export async function createAccount(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Create account error:', error);
        return { success: false, error: getErrorMessage(error) };
    }
}

/**
 * Get the current authenticated user
 * @returns {User|null}
 */
export function getCurrentUser() {
    return auth.currentUser;
}

/**
 * Convert Firebase auth error codes to user-friendly messages
 * @param {Error} error 
 * @returns {string}
 */
function getErrorMessage(error) {
    switch (error.code) {
        case 'auth/invalid-email':
            return 'Invalid email address.';
        case 'auth/user-disabled':
            return 'This account has been disabled.';
        case 'auth/user-not-found':
            return 'No account found with this email.';
        case 'auth/wrong-password':
            return 'Incorrect password.';
        case 'auth/email-already-in-use':
            return 'An account with this email already exists.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters.';
        case 'auth/network-request-failed':
            return 'Network error. Please check your connection.';
        case 'auth/too-many-requests':
            return 'Too many failed attempts. Please try again later.';
        default:
            return error.message || 'An error occurred. Please try again.';
    }
}

/**
 * Show the login view and hide the app
 */
export function showLoginView() {
    const loginView = document.getElementById('loginView');
    const appContainer = document.querySelector('.app-container');
    
    if (loginView) {
        loginView.style.display = 'flex';
    }
    if (appContainer) {
        appContainer.style.display = 'none';
    }
}

/**
 * Hide the login view and show the app
 */
export function showApp() {
    const loginView = document.getElementById('loginView');
    const appContainer = document.querySelector('.app-container');
    
    if (loginView) {
        loginView.style.display = 'none';
    }
    if (appContainer) {
        appContainer.style.display = 'flex';
    }
}

/**
 * Initialize login form handlers
 */
export function initializeLoginHandlers() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignupBtn = document.getElementById('showSignup');
    const showLoginBtn = document.getElementById('showLogin');
    const loginContainer = document.getElementById('loginContainer');
    const signupContainer = document.getElementById('signupContainer');

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const errorDiv = document.getElementById('loginError');
            const submitBtn = loginForm.querySelector('button[type="submit"]');

            // Clear previous errors
            errorDiv.textContent = '';
            submitBtn.disabled = true;
            submitBtn.textContent = 'Signing in...';

            const result = await signIn(email, password);
            
            if (!result.success) {
                errorDiv.textContent = result.error;
                submitBtn.disabled = false;
                submitBtn.textContent = 'Sign In';
            }
            // If successful, auth state observer will handle showing the app
        });
    }

    // Signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const errorDiv = document.getElementById('signupError');
            const submitBtn = signupForm.querySelector('button[type="submit"]');

            // Clear previous errors
            errorDiv.textContent = '';

            // Validate passwords match
            if (password !== confirmPassword) {
                errorDiv.textContent = 'Passwords do not match.';
                return;
            }

            submitBtn.disabled = true;
            submitBtn.textContent = 'Creating account...';

            const result = await createAccount(email, password);
            
            if (!result.success) {
                errorDiv.textContent = result.error;
                submitBtn.disabled = false;
                submitBtn.textContent = 'Create Account';
            }
            // If successful, auth state observer will handle showing the app
        });
    }

    // Toggle between login and signup
    if (showSignupBtn) {
        showSignupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginContainer.style.display = 'none';
            signupContainer.style.display = 'block';
        });
    }

    if (showLoginBtn) {
        showLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            signupContainer.style.display = 'none';
            loginContainer.style.display = 'block';
        });
    }
}
