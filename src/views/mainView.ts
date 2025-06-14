import { validateSession } from "../utils/sessionManager.js";

export function mainView(mainPage: HTMLElement, settingsPage: HTMLElement, subjectsPage: HTMLElement) {
    const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
    const settingsBtn = document.getElementById("settings-btn") as HTMLButtonElement;

    // Show question page
    startBtn.addEventListener("click", () => {
        validateSession();
        mainPage.classList.add("hidden");
        subjectsPage.classList.remove("hidden");
    });

    // Show settings page
    settingsBtn.addEventListener("click", () => {
        validateSession();
        mainPage.classList.add("hidden");
        settingsPage.classList.remove("hidden");
    });
}