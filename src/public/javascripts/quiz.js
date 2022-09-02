var SHEET_DATA = JSON.parse(document.getElementById('sheet-data').innerText);
var QUESTION_ELEMENT = document.getElementsByTagName('quiz-question-text')[0];
var ANSWER_ELEMENTS = [...document.getElementsByTagName('quiz-answer')];
var QUIZ_SCORE_ELEMENT = document.getElementsByTagName('quiz-score')[0];
var QUIZ_STATUS_ELEMENT = document.getElementsByTagName('quiz-status')[0];

var CURRENT_QUESTION = 0;
var TOTAL_QUESTIONS = SHEET_DATA.length;
var MAX_QUESTION_INDEX = TOTAL_QUESTIONS - 1;
var SCORE = 0;


function update() {
    QUIZ_SCORE_ELEMENT.innerText = `${parseInt(SCORE / TOTAL_QUESTIONS * 100)}%`;
    QUIZ_STATUS_ELEMENT.innerText = `${CURRENT_QUESTION + 1}/${TOTAL_QUESTIONS}`;
}