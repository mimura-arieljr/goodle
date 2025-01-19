export function loginView(loginPage: HTMLElement, mainPage: HTMLElement) {
    const loginForm = document.getElementById("login-form") as HTMLFormElement;
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        loginPage.classList.add("hidden");
        mainPage.classList.remove("hidden");
    });
}