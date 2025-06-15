import { BaseQuestionType } from "../types/BaseQuestionType.js";
import { prepareQuestionSet } from "../utils/questionsManager.js";
import { isAnswerValid } from "../utils/answersManager.js";

const answerInput = document.getElementById("answer-input") as HTMLInputElement;
const correctAnswer = document.getElementById("correct-answer-text") as HTMLElement;

export async function questionsView(subjectsPage: HTMLElement, questionsPage: HTMLElement, subject: string) {
    const backBtn = document.getElementById("questions-back-btn") as HTMLButtonElement;
    const submitBtn = document.getElementById("answer-submit-btn") as HTMLButtonElement;
    let currentQuestionIndex = 0;

    backBtn.addEventListener("click", () => {
        subjectsPage.classList.remove("hidden");
        questionsPage.classList.add("hidden");
    });

    // Prepare and show the questions
    const questions = await prepareQuestionSet(subject);
    showQuestion(currentQuestionIndex, questions);

    // Handle answer submit
    submitBtn.addEventListener("click", () => {
        const userAnswer = answerInput.value;
        const isValid = isAnswerValid(userAnswer, questions[currentQuestionIndex]);

        showAnswerFeedback(isValid);

        if (!isValid) {
            correctAnswer.classList.remove("hidden");
            correctAnswer.innerText = questions[currentQuestionIndex].Answer;
        }

        submitBtn.disabled = true;

        setTimeout(() => {
            answerInput.classList.remove("border-red", "border-green");
            correctAnswer.classList.add("hidden");
            submitBtn.disabled = false;

            moveToNextQuestion();
        }, 2000);
    });

    function moveToNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex, questions);
        } else {
            console.log("All questions completed!");
            // e.g., show results or redirect
        }
    }
}

function showQuestion(index: number, questions: BaseQuestionType[]) {
    const questionTextEl = document.getElementById("question-text") as HTMLElement;
    const choicesContainer = document.getElementById("choices-container") as HTMLElement;

    const q = questions[index];
    questionTextEl.innerText = q.Question;
    answerInput.value = "";
    choicesContainer.innerHTML = "";

    // TODO: Handle multiple choice
}

function showAnswerFeedback(isCorrect: boolean) {
    if (isCorrect) {
        answerInput.classList.add("border-green");
    } else {
        answerInput.classList.add("border-red");
    }
}