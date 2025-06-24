import { BaseQuestionType, QuestionTypes } from "../types/BaseQuestionType.js"

export function isAnswerValid(userAnswer: string, question: BaseQuestionType): boolean {
    const correctAnswer = question.Answer;

    if (Array.isArray(correctAnswer)) {
        const userAnswers = userAnswer
            .split(',')
            .map(a => a.trim().toLowerCase())
            .filter(Boolean)
            .sort();

        const correctAnswers = correctAnswer
            .map(a => a.trim().toLowerCase())
            .sort();

        // For MULT_ANSWER type, check if user's answers match ALL the correct answers
        if (question.QuestionType === QuestionTypes.MULT_ANSWER) {
            return arraysAreEqual(userAnswers, correctAnswers);
        }

        // For non-MULT_ANSWER types, allow if user's answer is within the correct answers
        return userAnswers.length === 1 && correctAnswers.includes(userAnswers[0]);
    }

    // For single answer questions, compare directly
    return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
}

function arraysAreEqual(arr1: string[], arr2: string[]): boolean {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, i) => val === arr2[i]);
}