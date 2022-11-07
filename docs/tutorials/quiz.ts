class Quiz {
    questions: Question[];
    currentQuestion: number = 0;
    totalQuestion: number = 0;
    score: number = 0;


    constructor(questions: Question[]) {
        this.questions = questions;

        this.totalQuestion = questions.length;
    }

    nextQuestion() {
        if (this.isFinished()) {
            return;
        } else {
            this.currentQuestion++;
        }
    }

    previousQuestion() {
        if (this.isFirstQuestion()) {
            return;
        } else {
            this.currentQuestion--;
        }
    }

    isFinished() {
        return this.currentQuestion >= this.totalQuestion;
    }

    isFirstQuestion() {
        return this.currentQuestion <= 0;
    }

    reset() {
        this.currentQuestion = 0;
        this.score = 0;

        this.questions.forEach(question => {
            question.reset();
        });
    }
}

class Question {
    text: string;
    answers: Answer[];
    maxTries: number;
    tries: number = 0;

    hint: string;
    hintImage: string;
    backgroundImage: string;


    correct: boolean = false;
    maxTriesExceeded: boolean = false;

    constructor(text: string, answers: Answer[], hint: string, HintImage: string, BackgroundImage: string) {
        this.text = text;
        this.answers = answers;

        this.hint = hint;
        this.hintImage = HintImage;
        this.backgroundImage = BackgroundImage;

        if (this.answers.length > 2) {
            this.maxTries = 2;
        }
        else {
            this.maxTries = 1;
        }
    }

    reset() {
        this.tries = 0;
        this.correct = false;
        this.maxTriesExceeded = false;

        this.answers.forEach(answer => {
            answer.reset();
        });
    }
}

class Answer {
    text: string;
    correct: boolean;
    selected: boolean = false;
    constructor(text: string, correct: boolean) {
        this.text = text;
    }

    reset() {
        this.selected = false;
    }
}