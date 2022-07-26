// Start Button
var startBtn = document.querySelector (".start-button");
startBtn.addEventListener("click", startQuiz);

//Countdown Timer
var timer;
var count = 75;
document.querySelector("#counter").innerHTML = `Timer: ${count} seconds`;

function countdown () {
    if (count > 0) {
        document.querySelector("#counter").innerHTML = `Timer: ${count--} seconds`;
        timer = setTimeout (countdown, 1000);
    }
    else {
        alert(`Times up!!! 
        Your score: ${score}
        Refresh the page to try again!`);
    }
}

// // // Correct or Incorrect Answer Colors
// // var allBtns = document.querySelector("button");
// var rightWrong = document.querySelector ("div");

// function changeRed() {
// rightWrong.style.backgroundColor = "red";
// // allBtns.style.color = "white";
// }

// function changeGreen() {
// rightWrong.style.backgroundColor = "green";
// // allBtns.style.color = "white";
// }

// Questions in one variable
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var question = document.querySelector (".question");

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "Strings",
        choiceB: "Booleans",
        choiceC: "Alerts",
        choiceD: "Numbers",
        correct: "B"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript",
        choiceB: "Terminal/bash",
        choiceC: "For loops",
        choiceD: "Console.log",
        correct: "A"
    },

    {
        question: "Arrays in Javascript can be used to store __________.",
        choiceA: "Numbers and strings",
        choiceB: "Other arrays",
        choiceC: "Booleans",
        choiceD: "All of the above",
        correct: "A"
    },

    {
        question: "The condition in an if/else statement is enclosed with _________.",
        choiceA: "Quotes",
        choiceB: "Curly brackets",
        choiceC: "Parenthesis",
        choiceD: "Square brackets",
        correct: "B"
    },
    
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        choiceA: "Commas",
        choiceB: "Curly brackets",
        choiceC: "Parenthesis",
        choiceD: "Quotes",
        correct: "D"
    }
]

var lastQuestionIndex = questions.length-1;
var runningQuestionIndex = 0;

// Function to render the question on the screen
function renderQuestion(){
    var q = questions[runningQuestionIndex];
    question.textContent = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD; 
}

// Right or Wrong Answers

// function rightAnswer() {
//     document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
// }

// function wrongAnswer() {
//     document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
// }

// Check answers

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct === answer) {
        score++;
        console.log("Yay!");
        // rightAnswer();
    } else {
        // wrongAnswer();
        console.log("Non ):");
    }
    if(runningQuestionIndex < lastQuestionIndex) {
        count = 0;
        runningQuestionIndex++;
        renderQuestion();
    } else {
        clearInterval(timer);
        scoreReveal();
    }
}

// Score earned during the quiz
var score = 0;

// Running the quiz
function takeQuiz() {
startBtn.remove();
renderQuestion();

// This may be needed to have questions continue to the next one
// runningQuestionIndex++;
// renderQuestion();
// runningQuestionIndex++;
// renderQuestion();
// runningQuestionIndex++;
// renderQuestion();

// // Variables for Questions attempt 1
//     var questionEl = document.querySelector (".question");
//     var btnOneEl = document.querySelector ("#A");
//     var btnTwoEl = document.querySelector ("#B");
//     var btnThreeEl = document.querySelector ("#C");
//     var btnFourEl = document.querySelector ("#D");

// // Question 1
//     questionEl.textContent = "Commonly used data types DO NOT include:";
//     btnOneEl.textContent = "Strings";
//     btnTwoEl.textContent = "Booleans";
//     btnThreeEl.textContent = "Alerts";
//     btnFourEl.textContent = "Numbers";

//     btnOneEl.addEventListener("click", changeRed);
//     btnTwoEl.addEventListener("click", changeGreen);
//     btnThreeEl.addEventListener("click", changeRed);
//     btnFourEl.addEventListener("click", changeRed);

// if (btnTwoEl.click === true) {
//     console.log("yay");
//     // addPoints();
// }
}

// Getting to the quiz

function startQuiz() {
    countdown(); 
    takeQuiz();
}