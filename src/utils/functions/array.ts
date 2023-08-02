export function createSequentialArray(totalElements: number, inicialValue = 0) {
  return Array.from({ length: totalElements }, (_, index) => index + inicialValue);
}
