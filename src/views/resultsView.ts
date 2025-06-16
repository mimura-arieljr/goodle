import { getNumberFromStorage } from "../utils/storageManager.js";
import { logout } from "../utils/sessionManager.js";

const DEFAULT_QUESTION_SIZE = 10;

export async function resultsView(subjectsPage:HTMLElement, questionsPage: HTMLElement, score: number) {
    const resultsPage = document.getElementById("results-page") as HTMLElement;
    const scoreDisplay = document.getElementById("score-display") as HTMLElement;
    const tryAgainBtn = document.getElementById("try-again-btn") as HTMLElement;
    const quitResultsBtn = document.getElementById("quit-results-btn") as HTMLElement;
    const numberOfQuestions = getNumberFromStorage('numberOfQuestions', DEFAULT_QUESTION_SIZE);

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
        scoreDisplay.innerText = `${score.toString()}/${numberOfQuestions}`;
    };
}