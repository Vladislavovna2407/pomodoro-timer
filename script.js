/*let start = document.getElementById("start");
let pomodoroTime = document.getElementById('pomodoro-time')
let time = 120;
let timerId = (setInterval(() => {
    const minites = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    pomodoroTime.textContent = `${minites}:${seconds}`
    time--;
    if (seconds < 0) {
        clearInterval(timerId);
        start.textContent = "start";
        pomodoroTime.textContent = "25:00";
    }
}, 1000));*/



const start = document.getElementById('start');
const pomodoroTime = document.getElementById('pomodoro-time');
let time = 120;


function changeTime() {
    const minites = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    pomodoroTime.textContent = `${minites}:${seconds}`
    time--;

};

function makeTimer() {
    const timerId = setInterval(changeTime, 1000);
    start.textContent = "stop";
    if (seconds < 0) {
        clearInterval(timerId);
        start.textContent = "start";
        pomodoroTime.textContent = "25:00";
    }


};
start.addEventListener('click', makeTimer);

function stopTime() {

    clearInterval(timerId);
}
start.addEventListener('click', stopTime);