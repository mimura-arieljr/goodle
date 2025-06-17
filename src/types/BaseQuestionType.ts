export interface BaseQuestionType {
    QuestionId: string,
    Subject: string,
    Difficulty: string,
    QuestionType: QuestionTypes,
    Question: string,
    Answer: string,
    Options?: Options
}

type Options = {
   [key:string]: string; 
}

export enum QuestionTypes {
    MULT_CHOICE = "Multiple Choice",
    MULT_ANSWER = "Multiple Answer",
    IDENTIFICATION = "Identification",
    TRUE_OR_FALSE = "True/False"
}