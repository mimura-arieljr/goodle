import { logout, isSessionValid } from "../utils/sessionManager.js";

export function sessionView(loginPage: HTMLElement, mainPage: HTMLElement) {
    if (isSessionValid()) {
        handleActiveSession(loginPage, mainPage);
    }

    // Check session when user switches back to the tab
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible" && !isSessionValid()) {
            logout();
        }
    });

    // Check session when the tab gains focus
    window.addEventListener("focus", () => {
        if (!isSessionValid()) {
            logout();
        }
    });
}

function handleActiveSession(loginPage: HTMLElement, mainPage: HTMLElement): void {
    loginPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
}