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
        scoreReveal();
    }
}

// Questions in one variable
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var question = document.querySelector(".question");
var title = document.getElementById("title");

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
        correct: "D"
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


// Check answers

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct === answer) {
        score = score + 10;
        console.log("Yay!");
    } else {
        count = count - 15;
        console.log("Non ):");
    }
    if(runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        renderQuestion();
    } else {
        clearInterval(timer);
        scoreReveal();
    }
}

// Score earned during the quiz
var score = 0;

// Reveal score at the end of the quiz

function scoreReveal() {
    // Show score
    title.textContent = "Finished!";
    question.textContent = `Your score is ${score}.`;
   
    // Remove choices from quiz
    choiceA.style.display = "none";
    choiceB.style.display = "none";
    choiceC.style.display = "none";
    choiceD.style.display = "none";

    // Creating input submission for initials
    var initials = document.createElement("input", "type", "text");
    initials.setAttribute("id", "initials");
    initials.setAttribute("placeholder", "Type your initials!");
    initials.setAttribute("size", "20");
    var submit = document.createElement ("button", "id", "submit");
    submit.innerHTML = "Submit!"
    question.appendChild(initials);
    question.appendChild(submit);

    // Adding click function to button
        submit.addEventListener("click", function() {
        localStorage.setItem('name', JSON.stringify(initials.value));
        localStorage.setItem('score', score);
        // var highScores = JSON.parse(localStorage.getItem("scores"))
        // if (highScores === null) {
        //     var highScoreList = [];
        //     var newScore = new 
        // }
    })
}


// Running the quiz
function takeQuiz() {
startBtn.remove();
renderQuestion();
}

// Getting to the quiz

function startQuiz() {
    event.preventDefault();
    countdown(); 
    takeQuiz();
}