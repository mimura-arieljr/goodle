export function settingsView(settingsPage: HTMLElement, mainPage: HTMLElement) {
    const settingsBtn = document.getElementById("settings-btn") as HTMLButtonElement;
    const quitBtn = document.getElementById("quit-btn") as HTMLButtonElement;
    const backBtn = document.getElementById("settings-back-btn") as HTMLButtonElement;
    const darkModeBtn = document.getElementById("dark-mode-btn") as HTMLButtonElement;
    const labelForDarkMode = document.querySelector("label[for='dark-mode-btn']");
    const menuButtons = document.querySelectorAll(".menu-btn") as NodeListOf<HTMLButtonElement>;
    const goodleText = document.getElementById("goodle-text");
    const backgroundWrap = document.querySelectorAll(".background-wrap") as NodeListOf<HTMLElement>;

    const LIGHT_MODE_BACKGROUND = 

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
            if (wrap.classList.contains("custom-dark-full")) {
                // If "custom-dark-full" is present, remove it and add the other classes
                wrap.classList.remove("custom-dark-full");
                wrap.classList.add("custom-light-full");

                labelForDarkMode!.textContent = "Enable Dark Mode";
            } else {
                // Otherwise, add "custom-dark-full" and remove the other classes
                wrap.classList.remove("custom-light-full");
                wrap.classList.add("custom-dark-full");

                labelForDarkMode!.textContent = "Disable Dark Mode";
            }
        });
    });

    quitBtn.addEventListener("click", () => {
        window.location.reload(); // TODO: Add implementation to quit the app, remove session
    });
}
