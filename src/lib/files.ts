import { join } from "path";
import { readdir } from 'node:fs/promises';

/**
 * Recursively search for files in a folder.
 *
 * @param {string} path - The path to the folder where the search should start.
 * @returns {string[]} - An array containing the absolute file paths of the found files.
 */
export async function searchFilesRecursive(path: string): Promise<string[]> {
  const paths: string[] = [];
  for (const file of (await readdir(path, { withFileTypes: true }))) {
    const dir = join(path, file.name);
    paths.push(...(file.isDirectory() ? await searchFilesRecursive(dir) : [dir]));
  }
  return paths
}