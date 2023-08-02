export function removeIndex(arr: any[], index: number) {
  return arr.filter((_, i) => i !== index);
}

export function removeValue(arr: any[], value: any) {
  return arr.filter((item) => item !== value);
}

export function popArray(arr: any[]) {
  return arr.slice(0, -1);
}

export function pushArray(arr: any[], value: any) {
  return [...arr, value];
}

export function shiftArray(arr: any[]) {
  return arr.slice(1);
}

export function unshiftArray(arr: any[], value: any) {
  return [value, ...arr];
}
