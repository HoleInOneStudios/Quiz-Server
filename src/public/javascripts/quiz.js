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

const FINISH = $('quiz-finish').get(0);

const LOGO = $('quiz-logo').get(0);

// Set background images
START.style.backgroundImage = SHEET_DATA[0].bgImage ? `url('./img/${SHEET_DATA[0].bgImage}')` : `url('./public/images/backgrounds/placeholder.jpg')`;
MAIN.style.backgroundImage = SHEET_DATA[0].bgImage ? `url('./img/${SHEET_DATA[0].bgImage}')` : `url('./public/images/backgrounds/placeholder.jpg')`;
FINISH.style.backgroundImage = SHEET_DATA[0].bgImage ? `url('./img/${SHEET_DATA[0].bgImage}')` : `url('./public/images/backgrounds/placeholder.jpg')`;

// Set logo
LOGO.innerHTML = `<img src="./img/logo.png" alt="Logo">`;