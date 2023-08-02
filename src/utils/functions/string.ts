export function addLeadingZeros(value: string | number, targetLength: number) {
  const str = String(value);
  return str.padStart(targetLength, '0');
}

export function maskEmail(email: string) {
  const charAt = email.indexOf('@');

  const firstPart = email.slice(0, 3);
  const lastPart = email.slice(charAt);

  return `${firstPart}***${lastPart}`;
}

export function getCapitalizedString(str?: string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const formatterFirstName = (value: string) => {
  const newFirstName = value.split(' ')[0];

  return getCapitalizedString(newFirstName);
};
