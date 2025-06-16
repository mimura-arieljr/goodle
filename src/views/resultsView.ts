import { getFromStorage } from "../utils/storageManager.js";
import { logout } from "../utils/sessionManager.js";

export async function resultsView(subjectsPage:HTMLElement, questionsPage: HTMLElement, score: number) {
    const resultsPage = document.getElementById("results-page") as HTMLElement;
    const scoreDisplay = document.getElementById("score-display") as HTMLElement;
    const tryAgainBtn = document.getElementById("try-again-btn") as HTMLElement;
    const quitResultsBtn = document.getElementById("quit-results-btn") as HTMLElement;
    const numberOfItems = getFromStorage("numberOfQuestions");

    showResult();

    tryAgainBtn.addEventListener("click", () => {
        subjectsPage.classList.remove("hidden");
        resultsPage.classList.add("hidden");
    });

    quitResultsBtn.addEventListener("click", () => {
        logout();
    });


    function showResult() {
        questionsPage.classList.add("hidden");
        resultsPage?.classList.remove("hidden");
        scoreDisplay.innerText = `${score.toString()}/${numberOfItems}`;
    };
}