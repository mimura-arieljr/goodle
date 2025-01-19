import { encryptText } from "../utils/stringManager.js";
import { secrets } from "../libs/secrets.js";

export function loginView(loginPage: HTMLElement, mainPage: HTMLElement) {
    const loginForm = document.getElementById("login-form") as HTMLFormElement;
    const passwordInput = (document.getElementById("password") as HTMLInputElement)?.value;
    const invalidPassword = document.getElementById("invalid-password") as HTMLElement;

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const encryptedInput = await encryptText(passwordInput)
        
        if (secrets[0] !== encryptedInput) {
            invalidPassword.classList.remove("hidden");
            return
        }

        loginPage.classList.add("hidden");
        mainPage.classList.remove("hidden");
    });
}