import { lstatSync, readdirSync } from "fs";
import { extname, join } from "path";

/**
 * Recursively search for files with specified extensions in a folder and its subfolders.
 *
 * @param {string} folderPath - The path to the folder where the search should start.
 * @param {string[]} [allowedExtensions=[".js"]] - An array of allowed file extensions to include in the search. Default: [".js"]
 * @returns {string[]} - An array containing the absolute file paths of the found files.
 */
export function searchFilesRecursive(folderPath: string, allowedExtensions: string[] = [".js"]): string[] {
  const filePaths: string[] = [];
  const readFilesRecursively = (directory: string) => {
    const files = readdirSync(join(process.cwd(), directory));
    files.forEach((file) => {
      const stat = lstatSync(join(process.cwd(), directory, file));
      if (stat.isDirectory()) {
        readFilesRecursively(join(directory, file));
      } else {
        const extension = extname(file);
        if (!allowedExtensions.includes(extension)) return;
        const filePath = join(process.cwd(), directory, file);
        filePaths.push(`${filePath}`);
      }
    });
  };
  readFilesRecursively(folderPath);
  return filePaths;
}
