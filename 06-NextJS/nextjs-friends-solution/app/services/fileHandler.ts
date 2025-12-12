import { promises as fs } from 'fs';

/**
 * Load an array of objects from a JSON file.
 * @param filePath - The path to the JSON file.
 * @returns A promise that resolves to the array of objects.
 */
export async function loadArrayFromFile<T>(filePath: string): Promise<T[]> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data) as T[];
    } catch (error: any) {
        if (error.code === 'ENOENT') {
            // File does not exist, return an empty array
            return [];
        } else {
            throw error;
        }
    }
}

/**
 * Save an array of objects to a JSON file.
 * @param filePath - The path to the JSON file.
 * @param array - The array of objects to save.
 * @returns A promise that resolves when the operation is complete.
 */
export async function saveArrayToFile<T>(filePath: string, array: T[]): Promise<void> {
    try {
        const data = JSON.stringify(array, null, 2); // Pretty-print the JSON
        await fs.writeFile(filePath, data, 'utf-8');
    } catch (error) {
        throw error;
    }
}