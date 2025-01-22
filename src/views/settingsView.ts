export function settingsView(settingsPage: HTMLElement, mainPage: HTMLElement) {
    const settingsBtn = document.getElementById("settings-btn") as HTMLButtonElement;
    const backBtn = document.getElementById("back-btn") as HTMLButtonElement;
    const menuButtons = document.querySelectorAll(".menu-btn") as NodeListOf<HTMLButtonElement>;
    const goodleText = document.getElementById("goodle-text");

    // Open Settings
    settingsBtn.addEventListener("click", () => {
        settingsPage.classList.remove("translate-x-full");
        mainPage.classList.remove("hidden");
        mainPage.classList.add("translate-x-[-40%]"); // Shift main-page buttons
        mainPage.classList.remove("xs:opacity-100");
        menuButtons.forEach((btn) => btn.disabled = true);
        goodleText?.classList.add("opacity-50");
    });

    // Close Settings
    backBtn.addEventListener("click", () => {
        settingsPage.classList.add("translate-x-full");
        mainPage.classList.remove("translate-x-[-40%]"); 
        mainPage.classList.add("xs:opacity-100");
        menuButtons.forEach((btn) => btn.disabled = false);
        goodleText?.classList.remove("opacity-50");
    });
}
