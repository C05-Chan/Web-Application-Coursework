let seconds = 0;
let timerInterval;

function startTimer() {
    if (!timerInterval){
    timerInterval = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000)};
}

function endTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function updateTimerDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    document.getElementById('timer').textContent = 
        `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
