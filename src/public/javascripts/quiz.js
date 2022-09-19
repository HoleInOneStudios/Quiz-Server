var SHEET_DATA = JSON.parse(document.getElementById('sheet-data').innerText);
var QUESTION_ELEMENT = document.getElementsByTagName('quiz-question-text')[0];
var ANSWER_ELEMENTS = [...document.getElementsByTagName('quiz-answer')];
var QUIZ_SCORE_ELEMENT = document.getElementsByTagName('quiz-score')[0];
var QUIZ_STATUS_ELEMENT = document.getElementsByTagName('quiz-status')[0];
var QUIZ_HINT_TOGGLE = document.getElementsByTagName('quiz-hint-toggle')[0];
var QUIZ_HINT_TEXT = document.getElementsByTagName('quiz-hint-text')[0];
var MAIN = document.getElementsByTagName('main')[0];

var CURRENT_QUESTION = 0;
var TOTAL_QUESTIONS = SHEET_DATA.length;
var MAX_QUESTION_INDEX = TOTAL_QUESTIONS - 1;
var SCORE = 0;
var HINT_SHOWING = false;

function restart() {
    CURRENT_QUESTION = 0;
    SCORE = 0;
    SHEET_DATA = JSON.parse(document.getElementById('sheet-data').innerText);
}

function update() {
    QUIZ_SCORE_ELEMENT.innerText = `${parseInt(SCORE / TOTAL_QUESTIONS * 100)}%`;
    QUIZ_STATUS_ELEMENT.innerText = `${CURRENT_QUESTION + 1}/${TOTAL_QUESTIONS}`;
    QUIZ_HINT_TEXT.innerText = SHEET_DATA[CURRENT_QUESTION].Hint;

    updateQuestion();
}

function updateHint() {
    if (HINT_SHOWING) {
        QUIZ_HINT_TEXT.classList.remove('hidden');
    }
    else {
        QUIZ_HINT_TEXT.classList = 'hidden';
    }
}

function updateQuestion() {
    MAIN.style.backgroundImage = SHEET_DATA[CURRENT_QUESTION].BackgroundImage != undefined ? `url(${SHEET_DATA[CURRENT_QUESTION].BackgroundImage})` : 'url(./images/backgrounds/space_bg.jpg)';
    console.log(MAIN.style.backgroundImage);
    QUIZ_HINT_TOGGLE.style.backgroundImage = SHEET_DATA[CURRENT_QUESTION].HintImage != undefined ? `url(${SHEET_DATA[CURRENT_QUESTION].HintImage})` : 'url(./images/backgrounds/hint.jpg)';
    QUESTION_ELEMENT.innerText = SHEET_DATA[CURRENT_QUESTION].Question;
    HINT_SHOWING = false;

    updateHint();
    loadAnswers();
}

function loadAnswers() {
    ANSWER_ELEMENTS.forEach((answer, index) => {
        answer.innerText = SHEET_DATA[CURRENT_QUESTION][(index + 1)];

        answer.classList.remove('correct', 'incorrect');
        updateAnswers();


        answer.addEventListener('click', async (event) => {
            setupAnswerEvents(answer);
        });
        answer.addEventListener('keydown', async (event) => {
            if (event.key == 'Enter') {
                setupAnswerEvents(answer);
            }
        });
        answer.addEventListener('keyup', async (event) => { });
    });
}

function setupAnswerEvents(answer) {
    if (SHEET_DATA[CURRENT_QUESTION].answered != true) {
        SHEET_DATA[CURRENT_QUESTION].answered = true;
        SHEET_DATA[CURRENT_QUESTION].selected = parseInt(answer.getAttribute('answer'));

        if (SHEET_DATA[CURRENT_QUESTION].selected == SHEET_DATA[CURRENT_QUESTION].Correct) {
            SCORE++;
        }

        console.log(SHEET_DATA[CURRENT_QUESTION]);
    }
    else {
        console.log('already answered: ' + SHEET_DATA[CURRENT_QUESTION].selected);
    }
    update();
}

function updateAnswers() {
    if (SHEET_DATA[CURRENT_QUESTION].answered) {
        ANSWER_ELEMENTS[SHEET_DATA[CURRENT_QUESTION].Correct - 1].classList.add('correct');
        if (SHEET_DATA[CURRENT_QUESTION].selected == SHEET_DATA[CURRENT_QUESTION].Correct) {

        }
        else {
            ANSWER_ELEMENTS[SHEET_DATA[CURRENT_QUESTION].selected - 1].classList.add('incorrect');
        }
    }
}