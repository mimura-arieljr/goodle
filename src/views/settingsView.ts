export function settingsView(settingsPage: HTMLElement, mainPage: HTMLElement) {
    const settingsBtn = document.getElementById("settings-btn") as HTMLButtonElement;
    const quitBtn = document.getElementById("quit-btn") as HTMLButtonElement;
    const backBtn = document.getElementById("settings-back-btn") as HTMLButtonElement;
    const menuButtons = document.querySelectorAll(".menu-btn") as NodeListOf<HTMLButtonElement>;
    const goodleText = document.getElementById("goodle-text");

    settingsBtn.addEventListener("click", () => {
        // Control pages UI
        settingsPage.classList.remove("translate-x-full");
        mainPage.classList.remove("hidden");
        mainPage.classList.add("translate-x-[-40%]"); // Shift main-page buttons
        mainPage.classList.remove("xs:opacity-100");

        // Control buttons and text UI
        menuButtons.forEach((btn) => btn.disabled = true);
        quitBtn.classList.add("hidden");
        settingsBtn.classList.add("hidden");
        goodleText?.classList.add("opacity-50");
    });

    backBtn.addEventListener("click", () => {
        settingsPage.classList.add("translate-x-full");
        mainPage.classList.remove("translate-x-[-40%]"); 
        mainPage.classList.add("xs:opacity-100");

        menuButtons.forEach((btn) => btn.disabled = false);
        quitBtn.classList.remove("hidden");
        settingsBtn.classList.remove("hidden");
        goodleText?.classList.remove("opacity-50");
    });
}
