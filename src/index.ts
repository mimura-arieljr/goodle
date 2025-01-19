import { loginView } from "./views/loginView.js";
import { mainView } from "./views/mainView.js";
import { settingsView } from "./views/settingsView.js";

document.addEventListener("DOMContentLoaded", () => {
    const mainPage = document.getElementById("main-page") as HTMLElement;
    const loginPage = document.getElementById("login-page") as HTMLElement;
    const settingsPage = document.getElementById("settings-page") as HTMLElement;
    const questionsPage = document.getElementById("questions-page") as HTMLElement;

    mainView(mainPage, settingsPage, questionsPage);
    loginView(loginPage, mainPage);
    settingsView(settingsPage, mainPage);
});