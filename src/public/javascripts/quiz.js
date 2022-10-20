var SHEET_DATA = JSON.parse(document.getElementById('sheet-data').innerText);
var QUESTION_ELEMENT = document.getElementsByTagName('quiz-question-text')[0];
var ANSWER_ELEMENTS = [...document.getElementsByTagName('quiz-answer')];
var QUIZ_SCORE_ELEMENT = document.getElementsByTagName('quiz-score')[0];
var QUIZ_STATUS_ELEMENT = document.getElementsByTagName('quiz-status')[0];
var QUIZ_HINT_TOGGLE = document.getElementsByTagName('quiz-hint-toggle')[0];
var QUIZ_HINT_TEXT = document.getElementsByTagName('quiz-hint-text')[0];
var MAIN = document.getElementsByTagName('main')[0];
var QUIZ_FINISH_TEXT = document.getElementById('quiz-finish');
var QUIZ_FINISH = document.getElementsByTagName('quiz-finish')[0];
var AUDIO_CORRECT = document.getElementById('correct_Audio');
var AUDIO_INCORRECT = document.getElementById('incorrect_Audio');
var AUDIO_TOGGLE = document.getElementsByTagName('quiz-audio-toggle')[0];

var CURRENT_QUESTION = 0;
var TOTAL_QUESTIONS = SHEET_DATA.length;
var MAX_QUESTION_INDEX = TOTAL_QUESTIONS - 1;
var SCORE = 0;
var HINT_SHOWING = false;
var AUDIO_ON = true;

function restart() {
    CURRENT_QUESTION = 0;
    SCORE = 0;
    SHEET_DATA = JSON.parse(document.getElementById('sheet-data').innerText);
    QUIZ_FINISH.classList = 'hidden';

    update();
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
    MAIN.style.backgroundImage = SHEET_DATA[CURRENT_QUESTION].BackgroundImage != undefined ? `url(  ./img/${SHEET_DATA[CURRENT_QUESTION].BackgroundImage})` : 'url(./public/images/backgrounds/placeholder.jpg)';
    //console.log(MAIN.style.backgroundImage);
    QUIZ_HINT_TOGGLE.style.backgroundImage = SHEET_DATA[CURRENT_QUESTION].HintImage != undefined ? `url(./img/${SHEET_DATA[CURRENT_QUESTION].HintImage})` : 'url(./public/images/hint_people/Hint-Person-Placeholder.png)';
    QUESTION_ELEMENT.innerText = SHEET_DATA[CURRENT_QUESTION].Question;
    HINT_SHOWING = false;

    updateHint();
    loadAnswers();
}

function loadAnswers() {
    ANSWER_ELEMENTS.forEach((answer, index) => {
        if (SHEET_DATA[CURRENT_QUESTION][(index + 1).toString()] == undefined) {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
            answer.innerText = SHEET_DATA[CURRENT_QUESTION][(index + 1)];

            answer.classList.remove('correct', 'incorrect');
            updateAnswers();
        }
    });
}

async function checkAnswers(answer) {
    //console.log(1)
    if (SHEET_DATA[CURRENT_QUESTION].answered != true) {
        SHEET_DATA[CURRENT_QUESTION].answered = true;
        SHEET_DATA[CURRENT_QUESTION].selected = parseInt(answer.getAttribute('answer'));

        if (AUDIO_ON) {
            if (SHEET_DATA[CURRENT_QUESTION].selected == SHEET_DATA[CURRENT_QUESTION].Correct) {
                AUDIO_CORRECT.currentTime = 0;
                AUDIO_CORRECT.play();
                SCORE++;
            }
            else {
                AUDIO_INCORRECT.currentTime = 0;
                AUDIO_INCORRECT.play();
            }
        }
        await updateAnswers();
    }
}

async function setupAnswerEvents(answer) {
    //console.log(1)
    if (SHEET_DATA[CURRENT_QUESTION].answered != true) {
        SHEET_DATA[CURRENT_QUESTION].answered = true;
        SHEET_DATA[CURRENT_QUESTION].selected = parseInt(answer.getAttribute('answer'));

        if (SHEET_DATA[CURRENT_QUESTION].selected == SHEET_DATA[CURRENT_QUESTION].Correct) {
            SCORE++;
        }
        await updateAnswers();


    }
}

async function showFinalScreen() {
    await setTimeout(async () => {
        if (CURRENT_QUESTION < MAX_QUESTION_INDEX) {
            CURRENT_QUESTION += 1;
        }
        else if (CURRENT_QUESTION == MAX_QUESTION_INDEX) {
            QUIZ_FINISH.classList = '';
            QUIZ_FINISH_TEXT.innerHTML = `<h2>${(parseInt(SCORE / TOTAL_QUESTIONS * 100) > 70) ? "Congratulations!" : "Better Luck Next Time!"}</h2><p>You have completed the quiz!</p><p>Your score is: ${parseInt(SCORE / TOTAL_QUESTIONS & 100)}% or ${SCORE}/${TOTAL_QUESTIONS}</p>`;
        }
        update();
    }, 500);
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

function toggleAudio() {
    AUDIO_ON = !AUDIO_ON;

    if (AUDIO_ON) {
        AUDIO_TOGGLE.innerHTML = 'volume_up';
    }
    else if (!AUDIO_ON) {
        AUDIO_TOGGLE.innerHTML = 'volume_off';
    }
}

function debounce(callback, timeout, _this) {
    var timer;
    return function (e) {
        var _that = this;
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(function () {
            callback.call(_this || _that, e);
        }, timeout);
    }
}

var userAction = debounce(function (e) {
    console.log("silence");
    restart();
}, 60 * 1000);

document.body.onload = () => {
    document.addEventListener("mousemove", userAction, false);
    document.addEventListener("click", userAction, false);
    document.addEventListener("scroll", userAction, false);
    document.addEventListener("keypress", userAction, false);
}