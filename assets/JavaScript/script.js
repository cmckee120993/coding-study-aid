// Start Button
var startBtn = document.querySelector (".start-button");
startBtn.addEventListener("click", startQuiz);

//Countdown Timer
var timer;
var count = 75;
document.querySelector("#counter").innerHTML = `Timer: ${count} seconds`;

function countdown () {
    if (count > 0) {
        document.querySelector("#counter").innerHTML = `Timer: ${count--} Seconds`;
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
        correct: "C"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript",
        choiceB: "Terminal/bash",
        choiceC: "For loops",
        choiceD: "Console.log",
        correct: "D"
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
        correct: "C"
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
//  function addInitials() {
    var input = document.createElement("input", "type", "text");
    input.setAttribute("id", "input");
    input.setAttribute("placeholder", "Type your initials!");
    input.setAttribute("size", "20");
    var submit = document.createElement("button", "id", "submit");
    submit.textContent = 'Submit!';
    var msg = document.createElement("div", "id", "msg");
    question.appendChild(input);
    question.appendChild(submit);
    question.appendChild(msg);

    
submit.addEventListener("click", function(event) {
            if (document.getElementById("input").value === "") {
                document.getElementById("msg").textContent = "Please type in your initials!"
            } else {
                var highScoreList = JSON.parse(localStorage.getItem("highScores"));
                if (highScoreList === null) {
                    var highScoreList = [];
                    var newScore = new Object();
                    newScore.initials = document.getElementById ('input').value;
                    newScore.score = score;
                    highScoreList.push(newScore);
                    var rankedScore = highScoreList.sort(({score: a}, {score: b}) => b - a);
                    localStorage.setItem("highScores", JSON.stringify(rankedScore));
                }
             else {
                var highScore = new Object();
                highScore.initials = document.getElementById('input').value;
                highScore.score = score;
                highScoreList.push(highScore);
                var rankedScore = highScoreList.sort(({score: a}, {score: b}) => b - a);
                    localStorage.setItem("highScores", JSON.stringify(rankedScore));
            };
        location.href = 'highscores.html'};
        });
    };
  
   
   

// Running the quiz
function takeQuiz() {
startBtn.remove();
renderQuestion();
};

// Getting to the quiz

function startQuiz() {
    // event.preventDefault();
    countdown(); 
    takeQuiz();
};


// Header element for Play Again Button and View High Scores
var headerEl = document.querySelector("header");
var viewScores = document.getElementById("view-scores");
viewScores.addEventListener('click', function(){
    location.href = "highscores.html";
});