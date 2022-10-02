/**
 * It takes a timestamp and returns a UTC formatted date string
 * @param timestamp - The timestamp to be formatted.
 * @returns A string representing the date and time in UTC format.
 */
export const utcFormat = (timestamp) => {
  return new Date(timestamp).toUTCString();
};
