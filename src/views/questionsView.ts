import { prepareQuestionSet } from "../utils/questionsManager.js";

export async function questionsView(subjectsPage: HTMLElement, questionsPage: HTMLElement, subject: string) {
    const backBtn = document.getElementById("questions-back-btn") as HTMLButtonElement;

    backBtn.addEventListener("click", () => {
        subjectsPage.classList.remove("hidden");
        questionsPage.classList.add("hidden");
    });

    const questions = await prepareQuestionSet(subject);
    
}

