export function getOffsetBodyHeight() {
  return document.body.offsetHeight;
}

export function getDistanceFromStart(element: HTMLElement): number {
  const rectTop = element.getBoundingClientRect().top;
  const { clientTop } = document.documentElement;
  const elementHeight = element.offsetHeight;
  const distanceY = rectTop + window.pageYOffset - clientTop + elementHeight;

  return distanceY;
}
