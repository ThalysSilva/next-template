export function getOnlyNumbers(input: string): string {
  let numbersOnly = '';

  for (const char of input) {
    if (!isNaN(Number(char))) {
      numbersOnly += char;
    }
  }

  return numbersOnly;
}
