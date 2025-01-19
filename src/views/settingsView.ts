export function settingsView(settingsPage: HTMLElement, mainPage: HTMLElement) {
    const settingsBtn = document.getElementById("settings-btn") as HTMLButtonElement;
    const backBtn = document.getElementById("back-btn") as HTMLButtonElement;

    // Show settings page
    settingsBtn.addEventListener("click", () => {
        mainPage.classList.add("hidden");
        settingsPage.classList.remove("hidden");
    });

    // Show main page again
    backBtn.addEventListener("click", () => {
        settingsPage.classList.add("hidden");
        mainPage.classList.remove("hidden");
    });

}
