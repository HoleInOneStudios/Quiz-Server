const root = document.getElementById("root");

const choices = [];

choices.push(document.getElementById("Choice_A"));
choices.push(document.getElementById("Choice_B"));
choices.push(document.getElementById("Choice_C"));
choices.push(document.getElementById("Choice_D"));

const Question = document.getElementById("Question");

const sheet_data = JSON.parse(document.getElementById("sheetData").innerText);
sheet_data.shift();

const hint_text = document.getElementById("Hint");

var currentQuestion = 0;

root.onload = loadQuestion();

function loadQuestion() {
    Question.innerText = sheet_data[currentQuestion]["Question"];

    choices[0].innerText = sheet_data[currentQuestion]["A"];
    choices[0].setAttribute("correct", sheet_data[currentQuestion]["Correct"] - 1 == 0);

    choices[1].innerText = sheet_data[currentQuestion]["B"];
    choices[1].setAttribute("correct", sheet_data[currentQuestion]["Correct"] - 1 == 1);

    choices[2].innerText = sheet_data[currentQuestion]["C"];
    choices[2].setAttribute("correct", sheet_data[currentQuestion]["Correct"] - 1 == 2);

    choices[3].innerText = sheet_data[currentQuestion]["D"];
    choices[3].setAttribute("correct", sheet_data[currentQuestion]["Correct"] - 1 == 3);

    hint_text.innerText = sheet_data[currentQuestion]["Hint"];

}

function nextQuestion() {
    if (currentQuestion >= sheet_data.length - 1) {
        return console.log(getResults());
    }
    else
    {
        currentQuestion++;
    }
    loadQuestion();
    updateQuestion();

}

function prevQuestion() {
    
    if (currentQuestion <= 0) {
        return console.log("First Question");
    }
    else
    {
        currentQuestion--;
    }
    loadQuestion();
    updateQuestion();

}

function submitAnswer(event) {
    console.log(event.target.getAttribute('correct'));
    
    if (event.target.getAttribute('correct') == "true" && !sheet_data[currentQuestion]["Answered"]) {
        sheet_data[currentQuestion]["Answered"] = true;
        sheet_data[currentQuestion]["Selection"] = event.target;
    }
    else if (!sheet_data[currentQuestion]["Answered"])
    {
        sheet_data[currentQuestion]["Answered"] = true;
        sheet_data[currentQuestion]["Selection"] = event.target;
    }

    updateQuestion();

    console.log(sheet_data);
}

function updateQuestion() {
    choices.forEach(choice => {
        choice.classList.remove("correct");
        choice.classList.remove("incorrect");
    });
    if (sheet_data[currentQuestion]["Answered"]) {
        if (sheet_data[currentQuestion]["Selection"].getAttribute("correct") == "true") {
            sheet_data[currentQuestion]["Selection"].classList.add("correct");
        }
        else {
            sheet_data[currentQuestion]["Selection"].classList.add("incorrect");
            //show correct answer
            choices.forEach(choice => {
                if (choice.getAttribute("correct") == "true") {
                    choice.classList.add("correct");
                }
            });
        }
    }
}

function getResults() {
    score = 0;
    sheet_data.forEach(question => {
        if (question["Answered"]) {
            if (question["Selection"].getAttribute("correct") == "true") {
                score++;
            }
        }
    });
    return `You got ${score} out of ${sheet_data.length} questions correct`;
}