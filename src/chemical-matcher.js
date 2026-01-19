/**
 * Chemical Matcher
 * Handles fuzzy matching of well names to chemical program data
 */

/**
 * Normalize a well name for matching
 * Removes spaces, hyphens, special characters, converts to lowercase
 * @param {string} wellName - The well name to normalize
 * @returns {string} Normalized well name
 */
export function normalizeWellName(wellName) {
    if (!wellName) return '';
    
    return wellName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')  // Remove all non-alphanumeric
        .trim();
}

/**
 * Extract battery name and numbers from a well name
 * @param {string} wellName - The well name
 * @returns {object} Object with battery and numbers
 */
function extractWellComponents(wellName) {
    if (!wellName) return { battery: '', numbers: '' };
    
    const normalized = wellName.toLowerCase().trim();
    const parts = normalized.split(/[\s\-_]+/);
    
    const batteryParts = [];
    const numberParts = [];
    
    for (const part of parts) {
        if (/\d/.test(part)) {
            numberParts.push(part.replace(/[^0-9]/g, ''));
        } else {
            batteryParts.push(part);
        }
    }
    
    return {
        battery: batteryParts.join(''),
        numbers: numberParts.join('')
    };
}

/**
 * Calculate similarity score between two well names (0-1)
 * @param {string} name1 - First well name
 * @param {string} name2 - Second well name
 * @returns {number} Similarity score (0-1)
 */
function calculateSimilarity(name1, name2) {
    const norm1 = normalizeWellName(name1);
    const norm2 = normalizeWellName(name2);
    
    // Exact match
    if (norm1 === norm2) {
        return 1.0;
    }
    
    // Extract components
    const comp1 = extractWellComponents(name1);
    const comp2 = extractWellComponents(name2);
    
    // Battery must match
    if (comp1.battery !== comp2.battery) {
        return 0.0;
    }
    
    // Check if numbers match
    if (comp1.numbers === comp2.numbers) {
        return 0.95;
    }
    
    // Partial number match
    if (comp1.numbers && comp2.numbers) {
        const len1 = comp1.numbers.length;
        const len2 = comp2.numbers.length;
        const minLen = Math.min(len1, len2);
        
        let matches = 0;
        for (let i = 0; i < minLen; i++) {
            if (comp1.numbers[i] === comp2.numbers[i]) {
                matches++;
            }
        }
        
        const score = matches / Math.max(len1, len2);
        return score * 0.8; // Partial match gets lower score
    }
    
    return 0.0;
}

/**
 * Find the best matching chemical program for a well
 * @param {string} wellName - The well name to find a match for
 * @param {object} chemicalPrograms - Object containing chemical programs keyed by normalized name
 * @param {number} minScore - Minimum similarity score (default 0.8)
 * @returns {object|null} Matched chemical program or null
 */
export function findChemicalProgramMatch(wellName, chemicalPrograms, minScore = 0.8) {
    if (!wellName || !chemicalPrograms) {
        return null;
    }
    
    let bestMatch = null;
    let bestScore = 0;
    
    // Try exact match first (normalized)
    const normalized = normalizeWellName(wellName);
    if (chemicalPrograms[normalized]) {
        return chemicalPrograms[normalized];
    }
    
    // Try fuzzy matching
    for (const [key, program] of Object.entries(chemicalPrograms)) {
        const score = calculateSimilarity(wellName, program.wellName);
        
        if (score > bestScore && score >= minScore) {
            bestScore = score;
            bestMatch = program;
        }
    }
    
    return bestMatch;
}

/**
 * Get all chemical program matches for wells in a sheet
 * @param {array} wells - Array of well objects with name property
 * @param {object} chemicalPrograms - Object containing chemical programs
 * @returns {object} Object mapping well IDs to matched chemical programs
 */
export function matchChemicalProgramsToWells(wells, chemicalPrograms) {
    const matches = {};
    
    if (!wells || !chemicalPrograms) {
        return matches;
    }
    
    for (const well of wells) {
        if (!well.name) continue;
        
        const match = findChemicalProgramMatch(well.name, chemicalPrograms);
        if (match) {
            matches[well.id] = match;
        }
    }
    
    return matches;
}

/**
 * Test matching with debug information
 * @param {string} wellName - Well name to test
 * @param {object} chemicalPrograms - Chemical programs object
 */
export function debugMatch(wellName, chemicalPrograms) {
    console.log(`\n=== Debugging match for: ${wellName} ===`);
    console.log(`Normalized: ${normalizeWellName(wellName)}`);
    
    const components = extractWellComponents(wellName);
    console.log(`Components:`, components);
    
    console.log(`\nTrying matches:`);
    for (const [key, program] of Object.entries(chemicalPrograms)) {
        const score = calculateSimilarity(wellName, program.wellName);
        console.log(`  ${program.wellName} -> Score: ${score.toFixed(2)}`);
    }
    
    const match = findChemicalProgramMatch(wellName, chemicalPrograms);
    console.log(`\nBest match:`, match ? match.wellName : 'None');
    
    return match;
}
