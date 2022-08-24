/* Variables */

// DOM Elements
const ROOT = document.getElementById("ROOT");
const CHOICES = Array.from(document.getElementsByTagName("custom-ANSWER"));
const QUESTION = document.getElementById("QUESTION");
const HINT_TOGGLE = document.getElementById("HINT_TOGGLE");
const HINT_TEXT = document.getElementById("HINT_TEXT");
const NEXT_BUTTON = document.getElementById("NEXT");
const PREV_BUTTON = document.getElementById("PREV");
const SCORE_TEXT = document.getElementById('SCORE_TEXT');

// data
var SHEET_DATA = JSON.parse(document.getElementById("SHEET_DATA").innerText); SHEET_DATA.shift();
var CURRENT_QUESTION = 0;

/* ================================================================ */

/* Functions */

function loadQuestionDOM() {
    if (!HINT_TEXT.classList.contains('hidden')) {
        toggleHint();
    }

    updateScore();
    
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

function toggleHint() {
    HINT_TEXT.classList.toggle('hidden');
}

function Answer(e) {
    if (!SHEET_DATA[CURRENT_QUESTION]["Answered"]) {
        SHEET_DATA[CURRENT_QUESTION]["Selected Answer"] = e.target.id;
        SHEET_DATA[CURRENT_QUESTION]["Answered"] = true;
        updateQuestion();
    }
}

function updateQuestion() {
    CHOICES.forEach(choice => {
        choice.classList.remove('correct');
        choice.classList.remove('incorrect');
    });

    if (SHEET_DATA[CURRENT_QUESTION]["Answered"]) {
        if (parseInt(SHEET_DATA[CURRENT_QUESTION]["Selected Answer"]) === SHEET_DATA[CURRENT_QUESTION]["Correct"]) {
            //CHOICES[SHEET_DATA[CURRENT_QUESTION]["Selected Answer"] - 1].innerText = "Correct";

            CHOICES[SHEET_DATA[CURRENT_QUESTION]["Selected Answer"] - 1].classList.add('correct');
        } else {
            //CHOICES[SHEET_DATA[CURRENT_QUESTION]["Selected Answer"] - 1].innerText = "Incorrect";
            //CHOICES[SHEET_DATA[CURRENT_QUESTION]["Correct"] - 1].innerText = "Correct";

            CHOICES[SHEET_DATA[CURRENT_QUESTION]["Selected Answer"] - 1].classList.add('incorrect');
            CHOICES[SHEET_DATA[CURRENT_QUESTION]["Correct"] - 1].classList.add('correct');
        }
    }

    updateScore();
}

function updateScore() {
    SCORE_TEXT.innerText = `Score: ${getScore()}/${SHEET_DATA.length} \n ${parseInt(getScore() / SHEET_DATA.length * 100)}%`;
}

function getScore() {
    let score = 0;
    for (let i = 0; i < SHEET_DATA.length; i++) {
        if (SHEET_DATA[i]["Answered"]) {
            if (parseInt(SHEET_DATA[i]["Selected Answer"]) === SHEET_DATA[i]["Correct"]) {
                score++;
            }
        }
    }
    return score;
}

function reset() {
    SHEET_DATA = JSON.parse(document.getElementById("SHEET_DATA").innerText); SHEET_DATA.shift();
    CURRENT_QUESTION = 0;
    loadQuestionDOM();
    updateQuestion();
}