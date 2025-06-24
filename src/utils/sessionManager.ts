import { removeFromStorage, saveToStorage, getFromStorage } from "./storageManager.js";

const SESSION_DURATION = 1000 * 60 * 30;

const encodeSession = (timestamp: number) => btoa(timestamp.toString()); // Base64 encode
const decodeSession = (encoded: string) => parseInt(atob(encoded));

export const login = () => {
    const now = Date.now();
    removeFromStorage("userIsIn");
    saveToStorage("userIsIn", encodeSession(now));
};

export const isSessionValid = () => {
    const encoded = getFromStorage("userIsIn");
    if (!encoded) return false;

    const now = Date.now();
    return now - decodeSession(encoded) < SESSION_DURATION;
};

export const validateSession = () => {
    if (!isSessionValid()) {
        logout();
    }
}

export const logout = () => {
    sessionStorage.clear();
    window.location.reload();
};