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
        alert("Times up!!!")
    }
}


// Getting to the first question
function startQuiz() {
    countdown();
}