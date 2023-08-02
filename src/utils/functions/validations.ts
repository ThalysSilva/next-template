export function calculateCheckDigit(digits: string, factor: number): number {
  const sum = digits
    .split('')
    .reduce((acc, digit, index) => acc + parseInt(digit) * (factor - index), 0);
  const remainder = (sum * 10) % 11;
  return remainder === 10 ? 0 : remainder;
}

export function validateCPF(cpf: string): boolean {
  const cpfNormalized = cpf.replace(/[^\d]+/g, '');
  if (cpfNormalized.length !== 11 || /^(.)\1+$/.test(cpfNormalized)) {
    return false;
  }
  const checkDigit1 = calculateCheckDigit(cpfNormalized.slice(0, 9), 10);
  if (checkDigit1 !== parseInt(cpfNormalized[9])) {
    return false;
  }
  const checkDigit2 = calculateCheckDigit(cpfNormalized.slice(0, 10), 11);
  if (checkDigit2 !== parseInt(cpfNormalized[10])) {
    return false;
  }
  return true;
}

export function validateBrazilianPhoneNumber(phoneNumber: string): boolean {
  const phoneRegex = /^([1-9][0-9])([1-9][0-9]{3,4})([0-9]{4})$/;
  const clearPhoneNumber = phoneNumber.replace(/[^\d]+/g, '');
  return phoneRegex.test(clearPhoneNumber);
}

export function validateCNPJ(value: string) {
  value = value.replace(/[^\w\s]/gi, '');

  const regexCNPJ = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/;

  if (!value) return false;

  const isString = typeof value === 'string';
  const validTypes = isString || Number.isInteger(value) || Array.isArray(value);

  if (!validTypes) return false;

  if (isString) {
    const digitsOnly = /^\d{14}$/.test(value);
    const validFormat = regexCNPJ.test(value);
    const isValid = digitsOnly || validFormat;
    if (!isValid) return false;
  }

  const numbers = matchNumbers(value);

  if (numbers.length !== 14) return false;

  const digits = numbers.slice(12);

  const digit0 = validCalc(12, numbers);
  if (digit0 !== digits[0]) return false;

  const digit1 = validCalc(13, numbers);
  return digit1 === digits[1];
}

function matchNumbers(value: string | number | number[] = '') {
  const match = value.toString().match(/\d/g);
  return Array.isArray(match) ? match.map(Number) : [];
}

function validCalc(x: number, numbers: number[]) {
  const slice = numbers.slice(0, x);
  let factor = x - 7;
  let sum = 0;

  for (let i = x; i >= 1; i--) {
    const n = slice[x - i];
    sum += n * factor--;
    if (factor < 2) factor = 9;
  }

  const result = 11 - (sum % 11);

  return result > 9 ? 0 : result;
}

export function validateDate(date: string) {
  // First check for the pattern
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) return false;

  // Parse the date parts to integers
  const parts = date.split('/');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/);
};
