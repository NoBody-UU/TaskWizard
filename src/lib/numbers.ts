import { CalculatePercentageBarOptions } from "../types/number";
import validNumber from "./utils/valid_number";

/**
 * Converts seconds to a formatted string representing the time duration.
 * 
 * @param {number} sec - The number of seconds.
 * @returns {string} The formatted string representing the time duration.
 */
export function formatTimeFromSeconds(sec: number): string {
  validNumber(sec)
  const timeArray = [];
  const units = [
    { label: 'day(s)', duration: 86400 },
    { label: 'hour(s)', duration: 3600 },
    { label: 'minute(s)', duration: 60 },
    { label: 'second(s)', duration: 1 }
  ];
  
  for (const unit of units) {
    const value = Math.floor(sec / unit.duration);
    if (value > 0) {
      timeArray.push(`${value} ${unit.label}`);
      sec %= unit.duration;
    }
  }
  return timeArray.join(' ');
}


/**
 * Formats a number to a compact representation with appropriate unit suffix.
 * 
 * @param {number} number - The number to be formatted.
 * @returns {string} The compact representation of the number with unit suffix.
 * @throws {TypeError} If the input is not a valid number.
 */
export function compactNumber(number: number): string {
  validNumber(number)

  const units = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  const unitIndex = Math.floor(Math.log10(Math.abs(number)) / 3);

  return (unitIndex === 0 ? number : (number / (1000 ** unitIndex))).toLocaleString('en-US', {
    maximumFractionDigits: 2,
  }) + units[unitIndex];
}

/**
 * Calculates the completion percentage and represents it visually using bars.
 * @param options - The options for calculating the percentage completion bar.
 * @returns The visual representation of the completion percentage with custom emojis.
 */
export function calculatePercentageBar(options: CalculatePercentageBarOptions): string {
  const numBars = options.numBars ?? 10;
  const completed = (options.currentValue / options.totalValue) * numBars;
  const remaining = numBars - completed;
  const fillEmoji = options.fillEmoji ?? '▰';
  const emptyEmoji = options.emptyEmoji ?? '▱';
  const completedBar = fillEmoji.repeat(Math.floor(completed));
  const remainingBar = emptyEmoji.repeat(remaining);
  const completionPercentage = Math.round((completed / numBars) * 100);
  return `${completedBar}${remainingBar} ${completionPercentage}%`;
}

/**
 * Calculates the difference in hours between two dates.
 * @param dt2 - The later date.
 * @param dt1 - The earlier date.
 * @returns The difference in hours between the two dates.
 */
export function diffHours(dt2: Date, dt1: Date): number {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(Math.round(diff));
}
