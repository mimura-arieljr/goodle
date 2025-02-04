import { validateSession } from "../utils/sessionManager.js";

export function mainView(mainPage: HTMLElement, settingsPage: HTMLElement, subjectsPage: HTMLElement) {
    const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
    const settingsBtn = document.getElementById("settings-btn") as HTMLButtonElement;

    // Show question page
    startBtn.addEventListener("click", () => {
        validateSession();
        mainPage.classList.add("hidden");
        subjectsPage.classList.remove("hidden");
    });

    // Show settings page
    settingsBtn.addEventListener("click", () => {
        validateSession();
        mainPage.classList.add("hidden");
        settingsPage.classList.remove("hidden");
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
}