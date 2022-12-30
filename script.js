let button = document.getElementById('start');
let pomodoroTime = document.getElementById('pomodoro-time');
let time = 1500;
let timerId;
let seconds;

function makeTimer() {
    let minutes = Math.floor(time / 60);
    seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    };
    if (time <= 0) {
        clearInterval(timerId);
    };
    time--;
    pomodoroTime.textContent = `${minutes}:${seconds}`;
}

function changeTime() {
    if (button.textContent == "start") {
        button.textContent = "stop";
        timerId = setInterval(makeTimer, 1000)


    } else if (button.textContent == "stop") {
        button.textContent = "start";
        clearInterval(timerId);
    }
}

addEventListener('click', changeTime);