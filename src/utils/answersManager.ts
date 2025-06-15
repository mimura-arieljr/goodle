import { BaseQuestionType } from "../types/BaseQuestionType"

export function isAnswerValid(answerInput: string, question: BaseQuestionType): boolean {
  const correctAnswer = question.Answer.trim().toLowerCase();
  const userAnswer = answerInput.trim().toLowerCase();
  return userAnswer === correctAnswer;
}