import { 
    signInWithEmailAndPassword, 
    signOut as firebaseSignOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from './firebase.js';

const ALLOWED_DOMAIN = '@zarvonaenergy.com';

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
 * Validate email domain
 * @param {string} email 
 * @returns {boolean}
 */
function isValidDomain(email) {
    return email.toLowerCase().endsWith(ALLOWED_DOMAIN.toLowerCase());
}

/**
 * Create a new user account
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<UserCredential>}
 */
export async function createAccount(email, password) {
    try {
        // Validate domain
        if (!isValidDomain(email)) {
            return { 
                success: false, 
                error: `Only ${ALLOWED_DOMAIN} email addresses are allowed.` 
            };
        }
        
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Create account error:', error);
        return { success: false, error: getErrorMessage(error) };
    }
}

/**
 * Send password reset email
 * @param {string} email 
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function resetPassword(email) {
    try {
        // Validate domain
        if (!isValidDomain(email)) {
            return { 
                success: false, 
                error: `Only ${ALLOWED_DOMAIN} email addresses are allowed.` 
            };
        }
        
        await sendPasswordResetEmail(auth, email);
        return { success: true };
    } catch (error) {
        console.error('Password reset error:', error);
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
 * Hide the auth splash screen
 */
export function hideAuthSplash() {
    const splash = document.getElementById('authSplash');
    if (splash) {
        splash.classList.add('fade-out');
        // Remove from DOM after animation completes
        setTimeout(() => {
            if (splash.parentNode) {
                splash.parentNode.removeChild(splash);
            }
        }, 300);
    }
}

/**
 * Show the login view and hide the app
 */
export function showLoginView() {
    const loginView = document.getElementById('loginView');
    const appContainer = document.querySelector('.app-container');
    
    // Hide splash first
    hideAuthSplash();
    
    // Wait for splash to fade out, then show login
    setTimeout(() => {
        if (loginView) {
            loginView.style.display = 'flex';
            // Trigger fade-in animation
            requestAnimationFrame(() => {
                loginView.classList.add('fade-in');
            });
        }
        if (appContainer) {
            appContainer.style.display = 'none';
            appContainer.classList.remove('fade-in');
        }
    }, 100);
}

/**
 * Hide the login view and show the app
 */
export function showApp() {
    const loginView = document.getElementById('loginView');
    const appContainer = document.querySelector('.app-container');
    
    // Hide splash first
    hideAuthSplash();
    
    // Wait for splash to fade out, then show app
    setTimeout(() => {
        if (loginView) {
            loginView.style.display = 'none';
            loginView.classList.remove('fade-in');
        }
        if (appContainer) {
            appContainer.style.display = 'flex';
            // Trigger fade-in animation
            requestAnimationFrame(() => {
                appContainer.classList.add('fade-in');
            });
        }
    }, 100);
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
        const handleLogin = async (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const errorDiv = document.getElementById('loginError');
            const successDiv = document.getElementById('loginSuccess');
            const submitBtn = loginForm.querySelector('button[type="submit"]');

            // Clear previous messages
            errorDiv.textContent = '';
            successDiv.textContent = '';
            submitBtn.disabled = true;
            submitBtn.textContent = 'Signing in...';

            const result = await signIn(email, password);
            
            if (!result.success) {
                errorDiv.textContent = result.error;
                submitBtn.disabled = false;
                submitBtn.textContent = 'Sign In';
            }
            // If successful, auth state observer will handle showing the app
        };
        
        loginForm.addEventListener('submit', handleLogin);
        
        // Add Enter key handler for password field
        const passwordInput = document.getElementById('loginPassword');
        if (passwordInput) {
            passwordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    loginForm.dispatchEvent(new Event('submit'));
                }
            });
        }
    }

    // Forgot password handler
    const forgotPasswordLink = document.getElementById('forgotPassword');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('loginEmail');
            const errorDiv = document.getElementById('loginError');
            const successDiv = document.getElementById('loginSuccess');
            
            // Clear previous messages
            errorDiv.textContent = '';
            successDiv.textContent = '';
            
            const email = emailInput.value.trim();
            
            if (!email) {
                errorDiv.textContent = 'Please enter your email address first.';
                emailInput.focus();
                return;
            }
            
            const result = await resetPassword(email);
            
            if (result.success) {
                successDiv.textContent = 'Password reset email sent! Check your inbox.';
                emailInput.value = '';
            } else {
                errorDiv.textContent = result.error;
            }
        });
    }

    // Signup form submission
    if (signupForm) {
        const handleSignup = async (e) => {
            e.preventDefault();
            const username = document.getElementById('signupUsername').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const errorDiv = document.getElementById('signupError');
            const submitBtn = signupForm.querySelector('button[type="submit"]');

            // Clear previous errors
            errorDiv.textContent = '';

            // Validate username (basic check)
            if (!username) {
                errorDiv.textContent = 'Please enter a username.';
                return;
            }

            // Construct full email
            const email = username + ALLOWED_DOMAIN;

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
        };
        
        signupForm.addEventListener('submit', handleSignup);
        
        // Add Enter key handler for confirm password field
        const confirmPasswordInput = document.getElementById('signupConfirmPassword');
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    signupForm.dispatchEvent(new Event('submit'));
                }
            });
        }
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
