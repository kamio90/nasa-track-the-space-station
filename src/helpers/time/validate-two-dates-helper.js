/**
 * If the year, month, and day of the first date are not equal to the year, month, and day of the
 * second date, return false.
 * @param firstDate - The date of space object
 * @param secondDate - The date that the user has selected.
 * @returns A boolean value.
 */
export const ValidateTwoDates = (firstDate, secondDate) => {
  if (firstDate.year != secondDate.year) return false;
  if (firstDate.month != secondDate.month) return false;
  if (firstDate.day != secondDate.day) return false;
};
