const root = document.getElementById("root");

const choice_A = document.getElementById("Choice_A");
const choice_B = document.getElementById("Choice_B");
const choice_C = document.getElementById("Choice_C");
const choice_D = document.getElementById("Choice_D");

const Question = document.getElementById("Question");

const sheet_data = JSON.parse(document.getElementById("sheetData").innerText);
sheet_data.shift();

var currentQuestion = 0;

root.onload = loadQuestion();

function loadQuestion() {
    Question.innerText = sheet_data[currentQuestion]["Question"];

    choice_A.innerText = sheet_data[currentQuestion]["A"];
    choice_B.innerText = sheet_data[currentQuestion]["B"];
    choice_C.innerText = sheet_data[currentQuestion]["C"];
    choice_D.innerText = sheet_data[currentQuestion]["D"];
}