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
        alert(`Times up!!! 
        Your score: ${score}
        Refresh the page to try again!`);
    }
}

// Correct or Incorrect Answer Colors
// var allBtns = document.querySelector("button");
var rightWrong = document.querySelector ("div");
function changeRed() {
rightWrong.style.backgroundColor = "red";
// allBtns.style.color = "white";
}

function changeGreen() {
rightWrong.style.backgroundColor = "green";
// allBtns.style.color = "white";
}

function takeQuiz() {

// Variables for Questions
    var questionEl = document.querySelector (".question");
    var btnOneEl = document.querySelector (".button-one");
    var btnTwoEl = document.querySelector (".button-two");
    var btnThreeEl = document.querySelector (".button-three");
    var btnFourEl = document.querySelector (".button-four");

// Question 1
    questionEl.textContent = "Commonly used data types DO NOT include:";
    btnOneEl.textContent = "Strings";
    btnTwoEl.textContent = "Booleans";
    btnThreeEl.textContent = "Alerts";
    btnFourEl.textContent = "Numbers";

    btnOneEl.addEventListener("click", changeRed);
    btnTwoEl.addEventListener("click", changeGreen);
    btnThreeEl.addEventListener("click", changeRed);
    btnFourEl.addEventListener("click", changeRed);

// if ()
}

// Getting to the quiz
function startQuiz() {
    countdown(); 
    takeQuiz();
}