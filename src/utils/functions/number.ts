export function truncateByDecimalPlace(value: number, numDecimalPlaces: number) {
  return Math.trunc(value * Math.pow(10, numDecimalPlaces)) / Math.pow(10, numDecimalPlaces);
}
