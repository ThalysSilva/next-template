export function getInputsByName(elementsName: string) {
  const elements = document.getElementsByName(elementsName);
  return Array.prototype.slice.call(elements) as HTMLInputElement[];
}
