
export function saveToStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
}

export function removeFromStorage(key: string): void {
    sessionStorage.removeItem(key);
}

export const getFromStorage = (key: string): string | null =>
  sessionStorage.getItem(key);

export function getNumberFromStorage(key: string, fallback: number): number {
  const val = getFromStorage(key);
  const parsed = parseInt(val ?? '', 10);
  return isNaN(parsed) ? fallback : parsed;
}