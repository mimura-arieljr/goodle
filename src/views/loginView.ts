import { encryptText } from "../utils/stringManager.js";
import { secrets } from "../libs/secrets.js";

export function loginView(loginPage: HTMLElement, mainPage: HTMLElement, spinner: HTMLElement) {
    const loginForm = document.getElementById("login-form") as HTMLFormElement;
    const invalidPassword = document.getElementById("invalid-password") as HTMLElement;

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const passwordInput = (document.getElementById("password") as HTMLInputElement)?.value;
        const encryptedInput = await encryptText(passwordInput)
        console.log(encryptedInput)
        
        if (secrets[0] !== encryptedInput) {
            invalidPassword.classList.remove("hidden");
            return
        }

        loginPage.classList.add("hidden");
        spinner.classList.remove("hidden");
        setTimeout(() => {
            spinner.classList.add("hidden");
            mainPage.classList.remove("hidden");
            console.log(imitateLoadTime())
        }, imitateLoadTime());
       
    });
}

function imitateLoadTime() : number {
    return Math.floor(Math.random() * 2000) + 1000;
}