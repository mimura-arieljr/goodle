const SESSION_DURATION = 1000 * 60 * 30;

const encodeSession = (timestamp: number) => btoa(timestamp.toString()); // Base64 encode
const decodeSession = (encoded: string) => parseInt(atob(encoded));

export const login = () => {
    const now = Date.now();
    sessionStorage.removeItem("userIsIn");
    sessionStorage.setItem("userIsIn", encodeSession(now));
};

export const isSessionValid = () => {
    const encoded = sessionStorage.getItem("userIsIn");
    if (!encoded) return false;

    const now = Date.now();
    console.log(decodeSession(encoded));
    return now - decodeSession(encoded) < SESSION_DURATION;
};

export const validateSession = () => {
    if (!isSessionValid()) {
        logout();
    }
}

export const logout = () => {
    sessionStorage.removeItem("userIsIn");
    window.location.reload();
};