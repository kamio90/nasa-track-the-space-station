export const utcFormat = (timestamp) => {
  return new Date(timestamp).toUTCString();
};
