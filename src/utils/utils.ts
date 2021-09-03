export const capitalize = (input?: string) => {
  if (input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
  return null;
};
