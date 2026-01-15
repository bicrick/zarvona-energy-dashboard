import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your Firebase project configuration
// Get this from Firebase Console > Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "AIzaSyDVTkhWjMht3WxUzkve7HzztbAEEderAhw",
  authDomain: "zarvona-energy-a85ce.firebaseapp.com",
  projectId: "zarvona-energy-a85ce",
  storageBucket: "zarvona-energy-a85ce.firebasestorage.app",
  messagingSenderId: "171021980471",
  appId: "1:171021980471:web:375df2a6e359b5e93500b2",
  measurementId: "G-HZXCF84BT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
