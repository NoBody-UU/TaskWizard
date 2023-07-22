import Colors from "./data/colors.json";

/**
 * Gets the colors of Discord.
 * @returns An array of Discord colors.
 */
export function discordColors(): string[] {
  return Colors.discord_colors;
}


/**
 * Checks if a text string represents a valid Discord emoji.
 * @param emoji - The text string representing the emoji.
 * @returns Returns `true` if the emoji is valid, otherwise returns `false`.
 */
export function isDiscordEmoji(emoji: string): boolean {
  const regex = /(<a?)?:\w+:(\d{18}>)?/g;
  return regex.test(emoji);
}