import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './firebase.js';

/**
 * Upload a failure history file to Firebase Storage
 * @param {string} sheetId - The gauge sheet ID
 * @param {string} wellId - The well ID
 * @param {string} failureId - The failure entry ID (UUID)
 * @param {File} file - The file to upload
 * @param {Function} progressCallback - Optional callback for upload progress (percent)
 * @returns {Promise<{fileUrl: string, filePath: string, fileName: string, fileSize: number}>}
 */
export async function uploadFailureFile(sheetId, wellId, failureId, file, progressCallback = null) {
    try {
        // Get file extension
        const fileExtension = file.name.split('.').pop();
        
        // Create storage path
        const filePath = `failures/${sheetId}/${wellId}/${failureId}.${fileExtension}`;
        const storageRef = ref(storage, filePath);
        
        // Create upload task
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        // Return promise that resolves with file metadata
        return new Promise((resolve, reject) => {
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Calculate progress percentage
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (progressCallback) {
                        progressCallback(progress);
                    }
                    console.log(`Upload is ${progress.toFixed(0)}% done`);
                },
                (error) => {
                    // Handle upload errors
                    console.error('Upload error:', error);
                    reject(error);
                },
                async () => {
                    // Upload completed successfully, get download URL
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        
                        resolve({
                            fileUrl: downloadURL,
                            filePath: filePath,
                            fileName: file.name,
                            fileSize: file.size
                        });
                    } catch (error) {
                        console.error('Error getting download URL:', error);
                        reject(error);
                    }
                }
            );
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
}

/**
 * Delete a failure history file from Firebase Storage
 * @param {string} filePath - The storage path of the file to delete
 * @returns {Promise<boolean>} Success status
 */
export async function deleteFailureFile(filePath) {
    try {
        if (!filePath) {
            console.warn('No file path provided for deletion');
            return false;
        }
        
        const fileRef = ref(storage, filePath);
        await deleteObject(fileRef);
        
        console.log(`Successfully deleted file: ${filePath}`);
        return true;
    } catch (error) {
        // If file doesn't exist, consider it a success
        if (error.code === 'storage/object-not-found') {
            console.warn('File not found, already deleted:', filePath);
            return true;
        }
        
        console.error('Error deleting file:', error);
        throw error;
    }
}

/**
 * Get download URL for an existing failure history file
 * @param {string} filePath - The storage path of the file
 * @returns {Promise<string>} Download URL
 */
export async function getFailureFileUrl(filePath) {
    try {
        if (!filePath) {
            throw new Error('No file path provided');
        }
        
        const fileRef = ref(storage, filePath);
        const downloadURL = await getDownloadURL(fileRef);
        
        return downloadURL;
    } catch (error) {
        console.error('Error getting file URL:', error);
        throw error;
    }
}

/**
 * Validate file for failure history upload
 * @param {File} file - The file to validate
 * @returns {{valid: boolean, error: string|null}}
 */
export function validateFailureFile(file) {
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    const ALLOWED_EXTENSIONS = ['.xlsx', '.xls'];
    const ALLOWED_MIME_TYPES = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
        'application/octet-stream'
    ];
    
    // Check if file exists
    if (!file) {
        return { valid: false, error: 'No file selected' };
    }
    
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
        return { valid: false, error: `File size exceeds 10MB limit (${(file.size / 1024 / 1024).toFixed(2)}MB)` };
    }
    
    // Check file extension
    const fileName = file.name.toLowerCase();
    const hasValidExtension = ALLOWED_EXTENSIONS.some(ext => fileName.endsWith(ext));
    
    if (!hasValidExtension) {
        return { valid: false, error: 'Only Excel files (.xlsx, .xls) are allowed' };
    }
    
    // Check MIME type (if available)
    if (file.type && !ALLOWED_MIME_TYPES.includes(file.type)) {
        console.warn(`Unexpected MIME type: ${file.type}, but extension is valid`);
    }
    
    return { valid: true, error: null };
}
