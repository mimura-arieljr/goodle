export function subjectsView(mainPage: HTMLElement, subjectsPage: HTMLElement) {
    const backBtn = document.getElementById("menu-back-btn") as HTMLButtonElement;

    backBtn.addEventListener("click", () => {
        mainPage.classList.remove("hidden");
        subjectsPage.classList.add("hidden");
    });
}