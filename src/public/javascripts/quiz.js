var SHEET_DATA = JSON.parse($('#sheet-data').text()); // * Get the data from the sheet
var QUESTION_ELEMENT = $('quiz-question-text').get(0);
var ANSWER_ELEMENTS = [...$('quiz-answer')];
var QUIZ_SCORE_ELEMENT = $('quiz-score').get(0);
var QUIZ_STATUS_ELEMENT = $('quiz-status').get(0);
var QUIZ_HINT_TOGGLE = $('quiz-hint-toggle').get(0);
var QUIZ_HINT_TEXT = $('quiz-hint-text').get(0);
var MAIN = $('main').get(0);
var QUIZ_FINISH_TEXT = $('#quiz-finish').get(0);
var QUIZ_FINISH = $('quiz-finish').get(0);
var QUIZ_START = $('quiz-start').get(0);
var AUDIO_CORRECT = $('#correct_Audio').get(0);
var AUDIO_INCORRECT = $('#incorrect_Audio').get(0);
var AUDIO_TOGGLE = $('quiz-audio-toggle').get(0);

var CURRENT_QUESTION = 0;
var TOTAL_QUESTIONS = SHEET_DATA.length;
var MAX_QUESTION_INDEX = TOTAL_QUESTIONS - 1;
var SCORE = 0;
var HINT_SHOWING = false;
var AUDIO_ON = true;

updateImages();

function start() {
    QUIZ_START.classList = 'hidden';
    update();
}

function restart() {
    CURRENT_QUESTION = 0;
    SCORE = 0;
    SHEET_DATA = JSON.parse(document.getElementById('sheet-data').innerText);
    QUIZ_FINISH.classList = 'hidden';
    QUIZ_START.classList = '';

    updateImages();
}

function update() {
    updateInfo();
    updateHint();
    updateQuestion();
    updateImages();
}

// * Set the status and info text elements to the correct text
function updateInfo() {
    QUIZ_SCORE_ELEMENT.innerText = `${parseInt(SCORE / TOTAL_QUESTIONS * 100)}%`;
    QUIZ_STATUS_ELEMENT.innerText = `${CURRENT_QUESTION + 1}/${TOTAL_QUESTIONS}`;
}

// * Update hint text and set to hidden if hint not showing
function updateHint() {
    QUIZ_HINT_TEXT.innerText = SHEET_DATA[CURRENT_QUESTION].Hint;
    if (HINT_SHOWING) {
        QUIZ_HINT_TEXT.classList.remove('hidden');
    }
    else {
        QUIZ_HINT_TEXT.classList = 'hidden';
    }
}

function updateQuestion() {
    QUESTION_ELEMENT.innerText = SHEET_DATA[CURRENT_QUESTION].Question;
    HINT_SHOWING = false;

    updateImages();
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
    if (SHEET_DATA[CURRENT_QUESTION].answered != true) {
        SHEET_DATA[CURRENT_QUESTION].answered = true;
        SHEET_DATA[CURRENT_QUESTION].selected = parseInt(answer.getAttribute('answer'));


        if (SHEET_DATA[CURRENT_QUESTION].selected == SHEET_DATA[CURRENT_QUESTION].Correct) {
            if (AUDIO_ON) {
                AUDIO_CORRECT.currentTime = 0;
                AUDIO_CORRECT.play();
            }
            SCORE++;
        }
        else {
            if (AUDIO_ON) {
                AUDIO_INCORRECT.currentTime = 0;
                AUDIO_INCORRECT.play();
            }
        }
    }
    await updateAnswers();
    await updateInfo();
}

async function nextOrFinal() {
    if (CURRENT_QUESTION < MAX_QUESTION_INDEX) {
        CURRENT_QUESTION += 1;
    }
    else if (CURRENT_QUESTION == MAX_QUESTION_INDEX) {
        QUIZ_FINISH.classList = '';
        QUIZ_FINISH_TEXT.innerHTML = `<h2>${(parseInt(SCORE / TOTAL_QUESTIONS * 100) > 70) ? "Congratulations!" : "Better Luck Next Time!"}</h2><p>You have completed the quiz!</p><p>Your score is: ${parseInt(SCORE / TOTAL_QUESTIONS * 100)}% or ${SCORE}/${TOTAL_QUESTIONS}</p>`;
    }
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

// * Update background images of start, finish, and main screens
function updateImages() {
    MAIN.style.backgroundImage = SHEET_DATA[CURRENT_QUESTION].BackgroundImage != undefined ? `url(  ./img/${SHEET_DATA[CURRENT_QUESTION].BackgroundImage})` : 'url(./public/images/backgrounds/placeholder.jpg)';
    QUIZ_HINT_TOGGLE.style.backgroundImage = SHEET_DATA[CURRENT_QUESTION].HintImage != undefined ? `url(./img/${SHEET_DATA[CURRENT_QUESTION].HintImage})` : 'url(./public/images/hint_people/Hint-Person-Placeholder.png)';
    QUIZ_START.style.backgroundImage = SHEET_DATA[CURRENT_QUESTION].BackgroundImage != undefined ? `url(  ./img/${SHEET_DATA[CURRENT_QUESTION].BackgroundImage})` : 'url(./public/images/backgrounds/placeholder.jpg)';
    QUIZ_FINISH.style.backgroundImage = SHEET_DATA[CURRENT_QUESTION].BackgroundImage != undefined ? `url(  ./img/${SHEET_DATA[CURRENT_QUESTION].BackgroundImage})` : 'url(./public/images/backgrounds/placeholder.jpg)';
}

// * Toggle weather to play audio or not
function toggleAudio() {
    AUDIO_ON = !AUDIO_ON;

    if (AUDIO_ON) {
        AUDIO_TOGGLE.innerHTML = 'volume_up';
    }
    else if (!AUDIO_ON) {
        AUDIO_TOGGLE.innerHTML = 'volume_off';
    }
}

// * User timeout after 60 seconds of inactivity
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

// * User timeout after 60 seconds of inactivity
var userAction = debounce(function (e) {
    console.log("silence");
    restart();
}, 60 * 1000);

// * User timeout after 60 seconds of inactivity
document.body.onload = () => {
    document.addEventListener("mousemove", userAction, false);
    document.addEventListener("click", userAction, false);
    document.addEventListener("scroll", userAction, false);
    document.addEventListener("keypress", userAction, false);
}