/**
 * Create a new object with the given year, month, and day.
 * @param year - The year of the date.
 * @param month - The month of the year, from 1 to 12.
 * @param day - The day of the month.
 * @returns An object with the properties year, month, and day.
 */
export const CreateFullDateHelper = (year, month, day) => {
  return {
    year,
    month,
    day,
  };
};
