export const ValidateTwoDates = (firstDate, secondDate) => {
  if (firstDate.year != secondDate.year) return false;
  if (firstDate.month != secondDate.month) return false;
  if (firstDate.day != secondDate.day) return false;
};
