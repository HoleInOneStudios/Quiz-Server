class Quiz {
    questions: Question[];
    currentQuestion: number = 0;
    totalQuestion: number = 0;
    score: number = 0;

    constructor(questions: Question[]) {
        this.questions = questions;

        this.totalQuestion = questions.length;
    }
}

class Question {
    text: string;
    answers: Answer[];
    maxTries: number;
    tries: number = 0;

    correct: boolean = false;
    maxTriesExceeded: boolean = false;

    constructor(text: string, answers: Answer[]) {
        this.text = text;
        this.answers = answers;

        if (this.answers.length > 2) {
            this.maxTries = 2;
        }
        else {
            this.maxTries = 1;
        }
    }
}

class Answer {
    text: string;
    correct: boolean;
    selected: boolean = false;
    constructor(text: string, correct: boolean) {
        this.text = text;
    }
}