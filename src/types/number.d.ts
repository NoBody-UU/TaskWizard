/**
 * Options for calculating the percentage completion bar.
 */
export interface CalculatePercentageBarOptions {
  /**
   * The current value.
   */
  currentValue: number;

  /**
   * The total value.
   */
  totalValue: number;

  /**
   * (Optional) Custom emoji to represent filled bars. Default is '▰'.
   */
  fillEmoji?: string;

  /**
   * (Optional) Custom emoji to represent empty bars. Default is '▱'.
   */
  emptyEmoji?: string;

  /**
   * (Optional) The total number of bars to represent the completion. Default is 10.
   */
  numBars?: number;
}