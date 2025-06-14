import { loadSubjects } from "../utils/subjectsManager.js";

export function subjectsView(mainPage: HTMLElement, subjectsPage: HTMLElement) {
    const backBtn = document.getElementById("subjects-back-btn") as HTMLButtonElement;

    backBtn.addEventListener("click", () => {
        mainPage.classList.remove("hidden");
        subjectsPage.classList.add("hidden");
    });

    // dynamically load subjects in the UI
    loadSubjects();
}