import { encryptText } from "../utils/stringManager.js";
import { login } from "../utils/sessionManager.js";
import { secrets } from "../libs/secrets.js";

export function loginView(loginPage: HTMLElement, mainPage: HTMLElement, spinner: HTMLElement) {
    const loginForm = document.getElementById("login-form") as HTMLFormElement;
    const invalidPassword = document.getElementById("invalid-password") as HTMLElement;

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const passwordInput = (document.getElementById("password") as HTMLInputElement)?.value;
        const encryptedInput = await encryptText(passwordInput)

        if (!secrets.length || secrets[0] !== encryptedInput) {
            invalidPassword?.classList.remove("hidden");
            return;
        }

        handleLogin(loginPage, mainPage, spinner)
    });
}

function handleLogin(loginPage: HTMLElement, mainPage: HTMLElement, spinner: HTMLElement): void {
    login();
    loginPage.classList.add("hidden");
    spinner.classList.remove("hidden");
    setTimeout(() => {
        spinner.classList.add("hidden");
        mainPage.classList.remove("hidden");
    }, imitateLoadTime());
}

function imitateLoadTime(): number {
    return Math.floor(Math.random() * 2000) + 1000;
}