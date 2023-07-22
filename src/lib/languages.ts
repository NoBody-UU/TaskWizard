import data from "./data/flags-data.json"


/**
 * Retrieves information related to a specific country.
 * @param  flag - The flag used to search for information. It can be the flag emoji, lowercase country name, or country code.
 * @returns - An object containing the information related to the country.
 */
export function getInfoFlag(flag: string) {
    const lowerCaseFlag = flag.toLowerCase();
  
    return data.find(
      (c) =>
        c.flag_emoji === flag ||
        c.country_name.toLowerCase() === lowerCaseFlag ||
        c.country_code === flag
    );
}

/**
 * Check if provided code is a valid country code
 * @param code
 */
export function isValidCode(code: string): boolean {
    return data.find((country) => country.country_code === code.toLowerCase()) ? true : false;
}

/**
 * Check if provided emoji is a valid country emoji
 * @param emoji
 */
export function isValidEmoji(emoji: string): boolean {
    return data.find((country) => country.flag_emoji === emoji) ? true : false;
}

export function isValidFlagName(name: string): boolean {
    return data.find((country) => country.country_name.toLocaleLowerCase() === name.toLocaleLowerCase() ) ? true : false;
}

export function isValidFlag(flag: string): boolean{
    return isValidCode(flag) && isValidEmoji(flag) && isValidFlagName(flag)
}

/**
 * Get languages from country code
 * @param code
 */
export function getLanguagesFromCode(code: string) {
    if (!code) throw new Error("Country Code is required");
    const value = data.find((country) => country.country_code === code.toLowerCase());
    return value ? value.languages : [];
}

/**
 * Get languages from country emoji
 * @param emoji Flag Emoji
 */
export function getLanguagesFromEmoji(emoji: string) {
    if (!emoji) throw new Error("Emoji is required");
    const value = data.find((country) => country.flag_emoji === emoji);
    return value ? value.languages : [];
}
