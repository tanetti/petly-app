export const capitalizeValue = value => {
  if (typeof value !== 'string') return value;

  if (!value.length) return 'N/A';

  return value.charAt(0).toUpperCase() + value.slice(1);
};
