export function subscribe(event: any, callback: () => void) {
  document.addEventListener(event, callback);
}

export function unsubscribe(event: any, callback: () => void) {
  document.removeEventListener(event, callback);
}
