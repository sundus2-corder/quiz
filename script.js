
let questions = [
    {
        question: "1. What does DOM stand for?",
        A: "Document Object Model",
        B: "Data Object Model",
        C: "Digital Object Model",
        D: "Document Order Model",
        answer: "A"
    },

    {
        question: "2. Which method selects an element by ID?",
        A: "getElement()",
        B: "getElementById()",
        C: "queryId()",
        D: "selectId()",
        answer: "B"
    },

    {
        question: "3. Which property changes HTML content?",
        A: "innerHTML",
        B: "style",
        C: "value",
        D: "className",
        answer: "A"
    },

    {
        question: "4. Which method changes CSS using JavaScript?",
        A: "innerHTML",
        B: "document",
        C: "style",
        D: "console",
        answer: "C"
    }
];

let index = 0;
let marks = 0;
let answered = false;

function showQuestion() {

    answered = false;

    document.getElementById("question").innerHTML =
        questions[index].question;

    document.getElementById("optionA").innerHTML =
        questions[index].A;

    document.getElementById("optionB").innerHTML =
        questions[index].B;

    document.getElementById("optionC").innerHTML =
        questions[index].C;

    document.getElementById("optionD").innerHTML =
        questions[index].D;

    document.getElementById("result").innerHTML = "";

}

function checkAnswer(choice) {

    if (answered) {
        return;
    }

    answered = true;

    if (choice == questions[index].answer) {

        marks++;

        document.getElementById("result").innerHTML =
            "Correct Answer!";

    } else {

        document.getElementById("result").innerHTML =
            "Wrong Answer!";

    }

    document.getElementById("score").innerHTML =
        "Score: " + marks;

}

function nextQuestion() {

    if (!answered) {
        document.getElementById("result").innerHTML =
            "Please select an answer first!";
        return;
    }

    index++;

    if (index < questions.length) {

        showQuestion();

    } else {

        document.getElementById("question").innerHTML =
            "Quiz Completed!";

        document.getElementById("result").innerHTML =
            "Your Final Score: " + marks + " / " + questions.length;

        document.getElementById("optionA").style.display = "none";
        document.getElementById("optionB").style.display = "none";
        document.getElementById("optionC").style.display = "none";
        document.getElementById("optionD").style.display = "none";

        document.getElementById("nextBtn").style.display = "none";

    }

}

showQuestion();
