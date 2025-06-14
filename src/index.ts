import { sessionView } from "./views/sessionView.js";
import { loginView } from "./views/loginView.js";
import { mainView } from "./views/mainView.js";
import { settingsView } from "./views/settingsView.js";
import { subjectsView } from "./views/subjectsView.js";

document.addEventListener("DOMContentLoaded", () => {
    const mainPage = document.getElementById("main-page") as HTMLElement;
    const loginPage = document.getElementById("login-page") as HTMLElement;
    const settingsPage = document.getElementById("settings-page") as HTMLElement;
    const subjectsPage = document.getElementById("subjects-page") as HTMLElement;
    const questionsPage = document.getElementById("questions-page") as HTMLElement;
    const spinner = document.getElementById("spinner") as HTMLElement;

    sessionView(loginPage, mainPage);
    mainView(mainPage, settingsPage, subjectsPage);
    loginView(loginPage, mainPage, spinner);
    settingsView(settingsPage, mainPage);
    subjectsView(mainPage, subjectsPage, questionsPage, spinner);
});