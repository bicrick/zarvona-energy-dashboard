import XLSX from 'xlsx';
import { MasterChemicalParser } from './src/parsers/master-chemical.js';

// Load the workbook
const workbook = XLSX.readFile('sheets/Master Chemical Sheet.xlsx');

// Parse it
const result = MasterChemicalParser.parse(workbook);

console.log('Parser Results:');
console.log('==============');
console.log('ID:', result.id);
console.log('Name:', result.name);
console.log('Raw Row Count:', result.rawRowCount);
console.log('Chemical Programs Count:', result.chemicalPrograms.length);
console.log('');

// Show first 3 programs
console.log('First 3 programs:');
console.log('=================');
result.chemicalPrograms.slice(0, 3).forEach((program, idx) => {
    console.log(`\nProgram ${idx + 1}:`);
    console.log('  Well Name:', program.wellName);
    console.log('  Battery Name:', program.batteryName);
    console.log('  Truck Treating:', Object.keys(program.truckTreating).length, 'chemicals');
    Object.entries(program.truckTreating).forEach(([chem, val]) => {
        console.log(`    - ${chem}: ${val}`);
    });
    console.log('  Continuous:', Object.keys(program.continuous).length, 'chemicals');
    Object.entries(program.continuous).forEach(([chem, val]) => {
        console.log(`    - ${chem}: ${val}`);
    });
});

// Check for duplicate chemical names
console.log('\n\nChecking for duplicate handling:');
console.log('=================================');
const allChemicals = new Set();
result.chemicalPrograms.forEach(program => {
    [...Object.keys(program.truckTreating), ...Object.keys(program.continuous)].forEach(chem => {
        allChemicals.add(chem);
    });
});
console.log('Unique chemical names found:', Array.from(allChemicals).sort());
