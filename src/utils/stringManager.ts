import { SECRET_KEY } from "../libs/secrets.js";

// Generate a key from the password
const getKey = async () => {
    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(SECRET_KEY), // Raw key material
        { name: "PBKDF2" }, // Use PBKDF2 to generate a derived key
        false, 
        ["deriveKey"]
    );

    // Derive a key with PBKDF2 (you can use SHA-256 here, which gives a 256-bit key)
    const derivedKey = await crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: new TextEncoder().encode("some-salt"), // You should use a unique salt for each user
            iterations: 100000, // Increase iterations for better security
            hash: "SHA-256",
        },
        keyMaterial, // The key material (password) you start with
        { name: "AES-GCM", length: 256 }, // AES-GCM with a 256-bit key
        false,
        ["encrypt", "decrypt"]
    );

    return derivedKey;
};

// Encrypt text
export const encryptText = async (plainText: string): Promise<string> => {
    const key = await getKey();
    const iv = new Uint8Array(12).fill(0); // A fixed IV (12 bytes of 0s)
    const encodedText = new TextEncoder().encode(plainText); // Convert text to byte array
    const encryptedText = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        encodedText
    );

    // Return a base64-encoded string
    return btoa(String.fromCharCode(...iv) + String.fromCharCode(...new Uint8Array(encryptedText)));
};