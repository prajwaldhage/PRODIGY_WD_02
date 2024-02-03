var interval;
var minutes = 0;
var seconds = 0;

function startTimer() {
    interval = setInterval(function() {
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }

        document.getElementById('stopwatch').textContent = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    document.getElementById('stopwatch').textContent = '00:00';
}