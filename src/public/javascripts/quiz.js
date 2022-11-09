// Process the raw data from sheets to a quiz
var RAW_SHEET_DATA = JSON.parse($('#sheet-data').text());
console.table(RAW_SHEET_DATA);
var SHEET_DATA = [];

// Create questions in the quiz
for (var i = 0; i < RAW_SHEET_DATA.length; i++) {
    var q = {};
    // Set the question
    q.question = RAW_SHEET_DATA[i].Question;

    q.answers = [];
    // Set the answers
    for (var j = 0; j < 4; j++) {
        if (RAW_SHEET_DATA[i]["1"]) {
            q.answers.push(RAW_SHEET_DATA[i]["1"]);
        }
    }

    // Set the correct Answers
    q.correctAnswers = [];
    answerArray = RAW_SHEET_DATA[i]["Correct"].toString().split(', ');
    console.log(answerArray);
    for (var j = 0; j < q.answers.length; j++) {

    }

    SHEET_DATA.push(q);
}

console.log(SHEET_DATA);