import { BaseQuestionType, QuestionTypes } from "../types/BaseQuestionType.js";
import { prepareQuestionSet } from "../utils/questionsManager.js";
import { isAnswerValid } from "../utils/answersManager.js";
import { startCountdownTimer } from "../utils/timerManager.js";
import { resultsView } from "./resultsView.js";

const answerInput = document.getElementById("answer-input") as HTMLInputElement;
const correctAnswer = document.getElementById("correct-answer-text") as HTMLElement;
const questionTextEl = document.getElementById("question-text") as HTMLElement;
const choicesContainer = document.getElementById("choices-container") as HTMLElement;
const CORRECT_BORDER_COLOR = "border-green";
const INCORRECT_BORDER_COLOR = "border-red";

export async function questionsView(subjectsPage: HTMLElement, questionsPage: HTMLElement, subject: string) {
    const backBtn = document.getElementById("questions-back-btn") as HTMLButtonElement;
    const submitBtn = document.getElementById("answer-submit-btn") as HTMLButtonElement;
    let score = 0;
    let currentQuestionIndex = 0;

    // Event listeners
    backBtn.addEventListener("click", () => {
        subjectsPage.classList.remove("hidden");
        questionsPage.classList.add("hidden");
    });

    // Use onclick instead of eventListener
    // Avoid listener getting stacked multiple times on the same button. 
    // This causes handleAnswerSubmission() to be called more than once — even with outdated state. 
    submitBtn.onclick = handleAnswerSubmission;

    // Prepare and show the questions
    const questions = await prepareQuestionSet(subject);
    showQuestion(currentQuestionIndex, questions);

    // Handle answer submit
    function handleAnswerSubmission() {
        const userAnswer = answerInput.value;
        const isValid = isAnswerValid(userAnswer, questions[currentQuestionIndex]);

        handleAnswerFeedback(isValid);

        if (!isValid) {
            correctAnswer.classList.remove("invisible");
            correctAnswer.innerText = `Correct Answer: ${questions[currentQuestionIndex].Answer}`;
        }

        submitBtn.disabled = true;

        setTimeout(() => {
            answerInput.classList.remove(INCORRECT_BORDER_COLOR, CORRECT_BORDER_COLOR);
            correctAnswer.classList.add("invisible");
            submitBtn.disabled = false;

            moveToNextQuestion();
        }, 2000);
    }

    function moveToNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex, questions);
        } else {
            console.log("All questions completed!");
            resultsView(subjectsPage, questionsPage, score);
        }
    }

    function showQuestion(index: number, questions: BaseQuestionType[]) {
        const q = questions[index];
        questionTextEl.innerText = q.Question;
        answerInput.value = "";

        // Handle multiple choice questions
        const shouldUseChoices = q.QuestionType === QuestionTypes.MULT_CHOICE || q.QuestionType === QuestionTypes.MULT_ANSWER;
        answerInput.classList.toggle("hidden", shouldUseChoices);
        choicesContainer.innerHTML = "";

        if (shouldUseChoices && q.Options) {
            if (q.QuestionType === QuestionTypes.MULT_CHOICE) {
                handleMultipleChoiceQuestions(q);
            } else {
                handleMultipleAnswersQuestion(q);
            }
        }

        startCountdownTimer(handleAnswerSubmission);
    }

    function handleAnswerFeedback(isCorrect: boolean) {
        if (isCorrect) {
            answerInput.classList.add(CORRECT_BORDER_COLOR);
            score++;
        } else {
            answerInput.classList.add(INCORRECT_BORDER_COLOR);
        }
    }

    function handleMultipleAnswersQuestion(q: BaseQuestionType): void {
        Object.entries(q.Options!).forEach(([key, value]) => {
            const choiceEl = createChoiceButtonEl(key, value);
            choiceEl.addEventListener("click", () => {
                const wasSelected = choiceEl.classList.contains("bg-orange-300");
                choiceEl.classList.toggle("bg-orange-300", !wasSelected);
                choiceEl.classList.toggle("bg-white", wasSelected);

                const answers = answerInput.value.split(',').map(a => a.trim()).filter(Boolean);
                if (!wasSelected) {
                    if (!answers.includes(key)) answers.push(key);
                } else {
                    const idx = answers.indexOf(key);
                    if (idx > -1) answers.splice(idx, 1);
                }
                answerInput.value = answers.join(',');
            });

            choicesContainer.appendChild(choiceEl);
        });
    }

    function handleMultipleChoiceQuestions(q: BaseQuestionType): void {
        Object.entries(q.Options!).forEach(([key, value]) => {
            const choiceEl = createChoiceButtonEl(key, value);
            choiceEl.addEventListener("click", () => {
                Array.from(choicesContainer.children).forEach(btn => {
                    btn.classList.remove("bg-orange-300");
                    btn.classList.add("bg-white");
                });
                choiceEl.classList.add("bg-orange-300");
                choiceEl.classList.remove("bg-white");
                answerInput.value = key;
            });

            choicesContainer.appendChild(choiceEl);
        });
    }

    function createChoiceButtonEl(key: string, value: string): HTMLButtonElement {
        const choiceEl = document.createElement("button");
        choiceEl.className = "choice-btn py-2 px-4 mb-2 text-black bg-white rounded hover:bg-orange-200 transition font-anonymouspro w-full text-left";
        choiceEl.innerText = `${key.toUpperCase()}: ${value}`;
        return choiceEl;
    };

}