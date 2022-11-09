// Process the raw data from sheets to a quiz
const RAW_SHEET_DATA = JSON.parse($('#sheet-data').text());
const SHEET_DATA = [];

// Create questions in the quiz
for (var i = 0; i < RAW_SHEET_DATA.length; i++) {
    var q = {};
    // Set the question
    q.question = RAW_SHEET_DATA[i].Question;

    q.answers = [];
    // Set the answers
    for (var j = 0; j < 4; j++) {
        if (RAW_SHEET_DATA[i][(j + 1).toString()] != '') {
            q.answers.push(RAW_SHEET_DATA[i][(j + 1).toString()]);
        }
    }

    // Set the correct Answers
    q.correctAnswers = [];
    answerArray = RAW_SHEET_DATA[i]["Correct"].toString().split(', ');
    for (var j = 0; j < q.answers.length; j++) {
        q.correctAnswers.push(false);
        for (var k = 0; k < answerArray.length; k++) {
            if (j + 1 == answerArray[k]) {
                q.correctAnswers[j] = true;
            }
        }
    }

    // Set the hint
    q.hint = RAW_SHEET_DATA[i].Hint;

    // Set the image
    q.bgImage = RAW_SHEET_DATA[i].BackgroundImage;
    q.hImage = RAW_SHEET_DATA[i].HintImage;

    // push to the array
    SHEET_DATA.push(q);
}

// Get DOM elements
const START = $('quiz-start').get(0);

const MAIN = $('quiz-main').get(0);

const HINT_TOGGLE = $('quiz-hint-toggle').get(0);
const HINT_TEXT = $('quiz-hint-text').get(0);

const FINISH = $('quiz-finish').get(0);

const LOGO = $('quiz-logo').get(0);

// Set background images
START.style.backgroundImage = SHEET_DATA[0].bgImage ? `url('./img/${SHEET_DATA[0].bgImage}')` : `url('./public/images/backgrounds/placeholder.jpg')`;
MAIN.style.backgroundImage = SHEET_DATA[0].bgImage ? `url('./img/${SHEET_DATA[0].bgImage}')` : `url('./public/images/backgrounds/placeholder.jpg')`;
FINISH.style.backgroundImage = SHEET_DATA[0].bgImage ? `url('./img/${SHEET_DATA[0].bgImage}')` : `url('./public/images/backgrounds/placeholder.jpg')`;

// Set logo
LOGO.innerHTML = `<img src="./img/logo.png" alt="Logo">`;

// Set Hint Image
function setHintImage() {
    HINT_TOGGLE.innerHTML = SHEET_DATA[0].hImage ? `<img src="./img/${SHEET_DATA[0].hImage}" alt="Hint Image">` : `<img src="./public/images/hint_people/Hint-Person-Placeholder.jpg" alt="Hint Image">`;
}
setHintImage();

// States
const QUIZ_STATE = {
    START: 0,
    MAIN: 1,
    FINISH: 2
}

// Set the current state
let CURRENT_STATE = QUIZ_STATE.FINISH;
updateDOMState();

// update DOM based on state
function updateDOMState() {
    switch (CURRENT_STATE) {
        case QUIZ_STATE.START:
            START.style.display = 'flex';
            MAIN.style.display = 'none';
            FINISH.style.display = 'none';
            break;
        case QUIZ_STATE.MAIN:
            START.style.display = 'none';
            MAIN.style.display = 'flex';
            FINISH.style.display = 'none';
            break;
        case QUIZ_STATE.FINISH:
            START.style.display = 'none';
            MAIN.style.display = 'none';
            FINISH.style.display = 'flex';
            break;
    }
}

// Set state functions
function setStateStart() {
    CURRENT_STATE = QUIZ_STATE.START;
    resetSession();
    CURRENT_QUESTION = 0;
    updateDOMState();
}

function setStateMain() {
    CURRENT_STATE = QUIZ_STATE.MAIN;
    updateDOMState();
}

function setStateFinish() {
    CURRENT_STATE = QUIZ_STATE.FINISH;
    updateDOMState();
}

// Session
const SESSION = [];
for (var i = 0; i < SHEET_DATA.length; i++) {
    SESSION.push({
        selections: [],
        correct: false
    })
}

// Reset SESSION
function resetSession() {
    for (var i = 0; i < SESSION.length; i++) {
        SESSION[i].selections = [];
        SESSION[i].correct = false;
    }
}

// Set the current question
let CURRENT_QUESTION = 0;

// Next Question
function nextQuestion() {
    if (CURRENT_QUESTION < SHEET_DATA.length - 1) {
        CURRENT_QUESTION++;
    } else {
        setStateFinish();
    }
}