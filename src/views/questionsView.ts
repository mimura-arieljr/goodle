import { BaseQuestionType, QuestionTypes } from "../types/BaseQuestionType.js";
import { prepareQuestionSet } from "../utils/questionsManager.js";
import { isAnswerValid } from "../utils/answersManager.js";
import { startCountdownTimer } from "../utils/timerManager.js";
import { resultsView } from "./resultsView.js";
import { Configuration } from "../common/config.js";

const { ApplicationConfig, BackgroundColors, BorderColors } = Configuration;
const { MULTIPLE_CHOICE_BG_COLOR, MULTIPLE_CHOICE_SELECTED_BG_COLOR, MULTIPLE_CHOICE_CORRECT_BG_COLOR } = BackgroundColors;
const { CORRECT_BORDER_COLOR, INCORRECT_BORDER_COLOR } = BorderColors;

const answerInput = document.getElementById("answer-input") as HTMLInputElement;
const correctAnswerText = document.getElementById("correct-answer-text") as HTMLElement;
const questionTextEl = document.getElementById("question-text") as HTMLElement;
const choicesContainer = document.getElementById("choices-container") as HTMLElement;

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
    // To avoid listener getting stacked multiple times on the same button. 
    // This causes handleAnswerSubmission() to be called more than once — even with outdated state. 
    submitBtn.onclick = handleAnswerSubmission;

    // Prepare and show the questions
    const questions = await prepareQuestionSet(subject);
    showQuestion(currentQuestionIndex, questions);

    // Handle answer submit
    function handleAnswerSubmission() {
        const question = questions[currentQuestionIndex];
        const { Answer: correctAnswer, QuestionType: questionType } = question;
        const userAnswer = answerInput.value;
        const isValid = isAnswerValid(userAnswer, question);
        const isMultipleChoice = questionType === QuestionTypes.MULT_CHOICE || questionType === QuestionTypes.MULT_ANSWER;

        if (isMultipleChoice) {
            handleMultChoiceAnswerFeedback(isValid, correctAnswer);
        } else {
            handleAnswerFeedback(isValid);
        }

        if (!isValid) {
            correctAnswerText.classList.remove("invisible");
            correctAnswerText.innerText = `Correct Answer: ${correctAnswer}`;
        }

        submitBtn.disabled = true;

        setTimeout(() => {
            answerInput.classList.remove(INCORRECT_BORDER_COLOR, CORRECT_BORDER_COLOR);
            correctAnswerText.classList.add("invisible");
            submitBtn.disabled = false;

            moveToNextQuestion();
        }, ApplicationConfig.DELAY_BEFORE_NEXT_QUESTION);
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

    function handleMultChoiceAnswerFeedback(isCorrect: boolean, correctAnswers: string[] | string): void {
        if (!isCorrect) return
        if (Array.isArray(correctAnswers)) {
            const correctAnswer = correctAnswers.map(a => a.trim().toUpperCase()).sort();
            correctAnswer.forEach(a => {
                const choiceEl = document.getElementById(`choice-${a}`);
                if (choiceEl) {
                    choiceEl.classList.remove(MULTIPLE_CHOICE_SELECTED_BG_COLOR);
                    choiceEl.classList.add(MULTIPLE_CHOICE_CORRECT_BG_COLOR);
                }
            });
        } else {
            const uppercaseAnswer = correctAnswers.trim().toUpperCase();
            const choiceEl = document.getElementById(`choice-${uppercaseAnswer}`);
            choiceEl!.classList.remove(MULTIPLE_CHOICE_SELECTED_BG_COLOR);
            choiceEl!.classList.add(MULTIPLE_CHOICE_CORRECT_BG_COLOR);
        }
        score++;
    }

    function handleMultipleAnswersQuestion(q: BaseQuestionType): void {
        Object.entries(q.Options!).forEach(([key, value]) => {
            const choiceEl = createChoiceButtonEl(key, value);
            choiceEl.addEventListener("click", () => {
                const wasSelected = choiceEl.classList.contains(MULTIPLE_CHOICE_SELECTED_BG_COLOR);
                choiceEl.classList.toggle(MULTIPLE_CHOICE_SELECTED_BG_COLOR, !wasSelected);
                choiceEl.classList.toggle(MULTIPLE_CHOICE_BG_COLOR, wasSelected);

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
                    btn.classList.remove(MULTIPLE_CHOICE_SELECTED_BG_COLOR);
                    btn.classList.add(MULTIPLE_CHOICE_BG_COLOR);
                });
                choiceEl.classList.add(MULTIPLE_CHOICE_SELECTED_BG_COLOR);
                choiceEl.classList.remove(MULTIPLE_CHOICE_BG_COLOR);
                answerInput.value = key;
            });
            choicesContainer.appendChild(choiceEl);
        });
    }

    function createChoiceButtonEl(key: string, value: string): HTMLButtonElement {
        const choiceEl = document.createElement("button");
        const uppercaseKey = key.toUpperCase();
        choiceEl.className = "choice-btn py-2 px-4 mb-2 text-black bg-white rounded border hover:bg-orange-200 transition font-anonymouspro w-full text-left";
        choiceEl.id = `choice-${uppercaseKey}`;
        choiceEl.innerText = `${uppercaseKey}: ${value}`;
        return choiceEl;
    };

}