'use client';

export function useLocalStorage() {
  function getLocalStorage(key: string) {
    const data = window.localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data);
  }

  function setLocalStorage(key: string, value: any) {
    const data = JSON.stringify(value);

    return window.localStorage.setItem(key, data);
  }

  function removeLocalStorage(key: string) {
    return window.localStorage.removeItem(key);
  }

  return { getLocalStorage, setLocalStorage, removeLocalStorage };
}
