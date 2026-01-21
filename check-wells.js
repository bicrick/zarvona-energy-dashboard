import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, limit, query } from 'firebase/firestore';
import { readFileSync } from 'fs';

// Read firebase config from firebase.js
const firebaseConfigPath = './src/firebase.js';
const configContent = readFileSync(firebaseConfigPath, 'utf-8');

// Extract config
const configMatch = configContent.match(/export const firebaseConfig = ({[\s\S]*?});/);
if (!configMatch) {
  console.error('Could not find firebase config');
  process.exit(1);
}

const firebaseConfig = eval('(' + configMatch[1] + ')');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkWells() {
  console.log('\n=== Checking Well Names in Database ===\n');
  
  // Check different gauge sheet collections
  const gaugeSheets = ['bigmax', 'bigmax1h', 'cowden', 'mwwemac', 'polaris', 'shusa', 'southandrews', 'uls35h', 'unit130'];
  
  const allWells = new Set();
  
  for (const sheetId of gaugeSheets) {
    try {
      const wellsRef = collection(db, 'gaugeSheets', sheetId, 'wells');
      const snapshot = await getDocs(wellsRef);
      
      if (!snapshot.empty) {
        console.log(`\n${sheetId.toUpperCase()} (${snapshot.size} wells):`);
        snapshot.forEach(doc => {
          const wellData = doc.data();
          const wellName = wellData.name || doc.id;
          console.log(`  - ${wellName}`);
          allWells.add(wellName);
        });
      }
    } catch (error) {
      console.log(`  Error reading ${sheetId}:`, error.message);
    }
  }
  
  console.log(`\n\n=== TOTAL UNIQUE WELLS: ${allWells.size} ===`);
  console.log('\nAll unique well names:');
  const sortedWells = Array.from(allWells).sort();
  sortedWells.forEach(well => console.log(`  - ${well}`));
  
  process.exit(0);
}

checkWells().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
