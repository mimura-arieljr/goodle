import { loginView } from "./views/loginView.js";
import { settingsView } from "./views/settingsView.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.getElementById("login-page") as HTMLElement;
    const mainPage = document.getElementById("main-page") as HTMLElement;
    const settingsPage = document.getElementById("settings-page") as HTMLElement;
    const questionsPage = document.getElementById("questions-page") as HTMLElement;

    const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
    const settingsBtn = document.getElementById("settings-btn") as HTMLButtonElement;
    const quitBtn = document.getElementById("quit-btn") as HTMLButtonElement;
    const backBtn = document.getElementById("back-btn") as HTMLButtonElement;

    loginView(loginPage, mainPage);
    settingsView(settingsPage, mainPage);


    // Show question page
    startBtn.addEventListener("click", () => {
        mainPage.classList.add("hidden");
        questionsPage.classList.remove("hidden");
        displayQuestion(); // Function to dynamically load questions
    });

    // Handle quitting (e.g., reset app state or show an exit message)
    quitBtn.addEventListener("click", () => {
        // Handle quitting
        window.location.reload(); // Just as an example
    });

    // Function to display a question dynamically (for demo purposes)
    function displayQuestion() {
        const questionContainer = document.getElementById("question-container");
        if (questionContainer) {
            questionContainer.innerHTML = `
                <p>What is the capital of France?</p>
                <ul>
                    <li>A. Berlin</li>
                    <li>B. Madrid</li>
                    <li>C. Paris</li>
                    <li>D. Rome</li>
                </ul>
            `;
        }
    }
});