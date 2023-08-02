export function isOverflowing(element: HTMLElement, dimension: 'height' | 'width' = 'height') {
  if (dimension === 'height') {
    return element.scrollHeight > element.offsetHeight;
  } else {
    return element.scrollWidth > element.offsetWidth;
  }
}
