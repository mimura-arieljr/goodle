import { loadSubjects, bindSubjectCardEvents } from "../utils/subjectsManager.js";
import { imitateLoadTime } from "../utils/imitateLoadingTime.js";
import { questionsView } from "./questionsView.js";

export async function subjectsView(mainPage: HTMLElement, subjectsPage: HTMLElement, questionsPage: HTMLElement, spinner: HTMLElement) {
    const backBtn = document.getElementById("subjects-back-btn") as HTMLButtonElement;

    backBtn.addEventListener("click", () => {
        mainPage.classList.remove("hidden");
        subjectsPage.classList.add("hidden");
    });

    // dynamically load subjects in the UI
    await loadSubjects();

    // callback function to bind the card event listeners to the subject
    // and save the chosen subject to a session storage
    bindSubjectCardEvents(async (subjectName: string) => {
        subjectsPage.classList.add("hidden");
        await showSpinner(spinner, questionsPage);
        questionsView(subjectsPage, questionsPage, subjectName);
    });
}

function showSpinner(spinner: HTMLElement, questionsPage: HTMLElement): Promise<void> {
    return new Promise((resolve) => {
        spinner.classList.remove("hidden");
        setTimeout(() => {
            spinner.classList.add("hidden");
            questionsPage.classList.remove("hidden");
            resolve();
        }, imitateLoadTime());
    });
}


