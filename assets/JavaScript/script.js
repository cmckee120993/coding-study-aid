// Start Button
var startBtn = document.querySelector (".button-one");
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
        alert("Times up!!!")
    }
}

// Question 1
var questionOne = firstQuestion();

function firstQuestion() {
    
    document.querySelector("question").innerHTML = `Commonly used data types DO NOT include:`;
    document.querySelector(".button-one").innerHTML = `Strings`;
    document.querySelector(".button-two").innerHTML = `Booleans`;
    document.querySelector(".button-three").innerHTML = `Alerts`;
    document.querySelector(".button-four").innerHTML = `Numbers`;
}

// Getting to the first question
function startQuiz() {
    countdown(); 
    firstQuestion();
}