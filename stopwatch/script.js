let secondsElapsed = 0;
let minutesElapsed = 0;
let hoursElapsed = 0;

let totalSeconds = 0;
let totalMinutes = 0;
let totalHours = 0;

let roundTimes = document.getElementById('roundTimes');

let timer;

let paused = false;

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


const startButton = document.getElementById("startbutton");
const resetButton = document.getElementById("resetbutton");
const stopButton = document.getElementById("stopbutton");
const roundButton = document.getElementById("roundbutton");

function startTimer() {
        timer = setInterval(function(){
        startButton.style.display = 'none';
        resetButton.style.display = 'block';
        stopButton.style.display = 'block';
        
        if(paused == false) {
            stopButton.innerHTML = 'Stop'
            secondsElapsed += 1;
            totalSeconds += 1;

            if (totalSeconds < 10) {
                seconds.innerHTML = '0' + totalSeconds;
            }  
            else {
                seconds.innerHTML = totalSeconds;
            }  

            if (totalSeconds > 59) {
                totalSeconds = 0;
                totalMinutes += 1;

                minutes.innerHTML = totalMinutes;
            }

            if (secondsElapsed > 59 ) {
                minutesElapsed += 1;
                secondsElapsed = 0;
            }
            
            if (totalMinutes > 59) {
                totalMinutes = 0;
                totalHours += 1;

                hours.innerHTML =  totalHours;
            }

            if (minutesElapsed > 59) {
                hoursElapsed += 1;
                minutesElapsed = 0;
            }

            if (totalMinutes < 10) {
                minutes.innerHTML = '0' + totalMinutes;
            }

        } 
        else {
            if (totalSeconds < 10) {
                seconds.innerHTML = '0' + totalSeconds;
            }

            if (totalMinutes < 10) {
                minutes.innerHTML = '0' + totalMinutes;
            }

            stopButton.innerHTML = 'Resume';
            clearInterval(timer);
        }  

     }, 1000);
}


function resetTimer() {
    resetButton.style.display ='none';
    startButton.style.display = 'block';
    stopButton.style.display = 'none';

    secondsElapsed = 0;
    minutesElapsed = 0;
    hoursElapsed = 0;

    totalSeconds = 0;
    totalMinutes = 0;
    totalHours = 0;

    seconds.innerHTML = '00'
    minutes.innerHTML = '00';
    hours.innerHTML = '00';
    clearInterval(timer);
}

function pauseTimer() {
    if (paused == false) {
        paused = true;
        clearInterval(timer);
        startTimer();
    }
    else {
        paused = false;
        clearInterval(timer);
        startTimer();
    }
}

function saveRounds() {
    
    let newRound = document.createElement("li")
    roundTimes.appendChild(newRound);

    newRound.innerHTML = "hours: " + hoursElapsed + " minutes: " + minutesElapsed + " seconds: " + secondsElapsed; 

    console.log("hourselapsed: " + hoursElapsed + " minuteselapsed " + minutesElapsed + " secondselapsed " + secondsElapsed);
    console.log("total hours " + totalHours + " total minutes " + totalMinutes  + " total seconds " + totalSeconds);

    secondsElapsed = 0;
    minutesElapsed = 0;
    hoursElapsed = 0;
}



startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
stopButton.addEventListener('click', pauseTimer);
roundButton.addEventListener('click', saveRounds);
