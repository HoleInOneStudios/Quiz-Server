/* Variables */

// DOM Elements
const ROOT = document.getElementById("ROOT");
const CHOICES = Array.from(document.getElementsByTagName("custom-ANSWER"));
const QUESTION = document.getElementById("QUESTION");
const HINT_TOGGLE = document.getElementById("HINT_TOGGLE");
const HINT_TEXT = document.getElementById("HINT_TEXT");
const NEXT_BUTTON = document.getElementById("NEXT");
const PREV_BUTTON = document.getElementById("PREV");

// data
SHEET_DATA = JSON.parse(document.getElementById("SHEET_DATA").innerText); SHEET_DATA.shift();
CURRENT_QUESTION = 0;

/* ================================================================ */

/* Functions */

function loadQuestionDOM() {
    QUESTION.innerText = SHEET_DATA[CURRENT_QUESTION]["Question"];
    for (let i = 0; i < CHOICES.length; i++) {
        CHOICES[i].innerText = SHEET_DATA[CURRENT_QUESTION][i + 1];
    }
    CHOICES[SHEET_DATA[CURRENT_QUESTION]["Correct"] - 1].setAttribute('correct', true);

    HINT_TEXT.innerText = SHEET_DATA[CURRENT_QUESTION]["Hint"];
}

function NEXT() {
    if (CURRENT_QUESTION < SHEET_DATA.length - 1) {
        CURRENT_QUESTION++;
        loadQuestionDOM();
        updateQuestion();
    }
    
}

function PREV() {
    if (CURRENT_QUESTION > 0) {
        CURRENT_QUESTION--;
        loadQuestionDOM();
        updateQuestion();
    }
}

function Answer(e) {
    if (!SHEET_DATA[CURRENT_QUESTION]["Answered"]) {
        SHEET_DATA[CURRENT_QUESTION]["Selected Answer"] = e.target.id;
        SHEET_DATA[CURRENT_QUESTION]["Answered"] = true;
        console.log(e.target.id);
        updateQuestion();
    }
}

function updateQuestion() {
    if (SHEET_DATA[CURRENT_QUESTION]["Answered"]) {
        if (SHEET_DATA[CURRENT_QUESTION]["Selected Answer"] === SHEET_DATA[CURRENT_QUESTION]["Correct"]) {
            CHOICES[SHEET_DATA[CURRENT_QUESTION]["Selected Answer"]].innerText = "Correct";
        } else {
            console.log(2)
        }
    }
}