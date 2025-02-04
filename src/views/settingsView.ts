import { logout } from "../utils/sessionManager.js";

export function settingsView(settingsPage: HTMLElement, mainPage: HTMLElement) {
    const settingsBtn = document.getElementById("settings-btn") as HTMLButtonElement;
    const quitBtn = document.getElementById("quit-btn") as HTMLButtonElement;
    const backBtn = document.getElementById("settings-back-btn") as HTMLButtonElement;
    const darkModeBtn = document.getElementById("dark-mode-btn") as HTMLButtonElement;
    const labelForDarkMode = document.querySelector("label[for='dark-mode-btn']");
    const menuButtons = document.querySelectorAll(".menu-btn") as NodeListOf<HTMLButtonElement>;
    const goodleText = document.getElementById("goodle-text");
    const backgroundWrap = document.querySelectorAll(".background-wrap") as NodeListOf<HTMLElement>;

    const LIGHT_MODE_BACKGROUND = 'custom-light-full'
    const DARK_MODE_BACKGROUND = 'custom-dark-full'
    const LIGHT_GRID_BACKGROUND = 'custom-light-grid-overlay'
    const DARK_GRID_BACKGROUND = 'custom-dark-grid-overlay'

    settingsBtn.addEventListener("click", () => {
        // Control pages UI
        settingsPage.classList.remove("translate-x-full");
        mainPage.classList.remove("hidden");
        mainPage.classList.add("transition-transform", "duration-300", "ease-in-out", "translate-x-[-10%]"); // Shift main-page buttons
        mainPage.classList.remove("xs:opacity-100");

        // Control buttons and text UI
        menuButtons.forEach((btn) => btn.disabled = true);
        settingsBtn.classList.add("hidden");
        goodleText?.classList.add("opacity-90");
    });

    backBtn.addEventListener("click", () => {
        settingsPage.classList.add("translate-x-full");
        mainPage.classList.remove("translate-x-[-10%]");
        mainPage.classList.add("xs:opacity-100");

        menuButtons.forEach((btn) => btn.disabled = false);
        settingsBtn.classList.remove("hidden");
        goodleText?.classList.remove("opacity-50");
    });

    darkModeBtn.addEventListener("click", (event) => {
        // Prevent default action, e.g., form submission
        event.preventDefault();

        // Toggle dark mode
        document.body.classList.toggle("dark");
        backgroundWrap.forEach((wrap) => {
            if (wrap.classList.contains(DARK_GRID_BACKGROUND)) {
                // If dark mode is present, remove it and add the other classes
                wrap.classList.remove(DARK_GRID_BACKGROUND);
                document.body.classList.remove("bg-custom-dark");
                wrap.classList.add(LIGHT_GRID_BACKGROUND);

                labelForDarkMode!.textContent = "Dark Mode";
            } else {
                // Otherwise, add dark mode and remove the other classes
                wrap.classList.remove(LIGHT_GRID_BACKGROUND);
                document.body.classList.add("bg-custom-dark");
                wrap.classList.add(DARK_GRID_BACKGROUND);

                labelForDarkMode!.textContent = "Light Mode";
            }
        });
    });

    quitBtn.addEventListener("click", () => {
        // TODO: Add diaglog box to verify logout
        logout();
    });
}
