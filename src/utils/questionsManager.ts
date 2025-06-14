import { BaseQuestionType } from "../types/BaseQuestionType.js";
import { getFromStorage } from "./storageManager.js";

export async function prepareQuestionSet(subjectName: string): Promise<BaseQuestionType[]> {
    try {
        // step 0: Get all questions of a given subject
        const allQuestions = await loadQuestionsBySubject(subjectName);

        // step 1: Check for desired number of questions
        const numberOfQuestions = parseInt(getFromStorage('numberOfQuestions') ?? '10', 5); // defaults to 10 if user did not set

        // step 2: Shuffle the questions
        const shuffledQuestions = shuffleQuestions(allQuestions);

        // step 3: Create the final question set
        const finalQuestionsSet = new Set<BaseQuestionType>();
        for (const question of shuffledQuestions) {
            if (finalQuestionsSet.size < numberOfQuestions) {
                finalQuestionsSet.add(question);
            } else {
                break;
            }
        }
        // Convert the Set back to an array
        const finalQuestionsArray = Array.from(finalQuestionsSet);
        console.table(finalQuestionsArray);
        return finalQuestionsArray;
    } catch(error) {
        console.error('Error preparing question set:', error);
        throw error;
    }
}

async function loadQuestionsBySubject(subjectName: string): Promise<BaseQuestionType[]> {
    console.log(`getting questions from ${subjectName}`);
    const res = await fetch(`/data/questions/${subjectName.toLowerCase()}.json`);
    const questions = await res.json();
    return questions;
}

function shuffleQuestions(questions: BaseQuestionType[]): BaseQuestionType[] {
    // Shuffle the filtered questions array using Fisher-Yates shuffle algorithm
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
}
