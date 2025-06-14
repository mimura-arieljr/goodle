
export function saveToStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
}

export function removeFromStorage(key: string): void {
    sessionStorage.removeItem(key);
}

export const getFromStorage = (key: string): string | null =>
  sessionStorage.getItem(key);