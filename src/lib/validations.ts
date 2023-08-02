/**
 * Checks if a given text represents a valid hexadecimal color code.
 * @param colorCode - The color code to check.
 * @returns Returns true if the text is a valid hexadecimal color code, otherwise returns false.
 */
export function isHex(colorCode: string): boolean {
  return /^#?([a-f0-9]{6}|[a-f0-9]{3})$/.test(colorCode);
}

/**
 * Checks if a given text contains a Discord invite link.
 * @param text - The text to check.
 * @returns Returns true if the text contains a Discord invite link, otherwise returns false.
 */
export function isDiscordInviteLink(text: string): boolean {
  return /(https?:\/\/)?(www.)?(discord.(gg|io|me|li|link|plus|tk)|discorda?p?p?.com\/invite|invite.gg|dsc.gg|urlcord.cf)\/[^\s/]+?(?=\b)/.test(
    text
  );
}

/**
 * Checks if a given text represents a valid email address.
 * @param email - The email address to check.
 * @returns Returns true if the text is a valid email address, otherwise returns false.
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


