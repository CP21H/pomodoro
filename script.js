function changeWallpaper(id) {
    // AVATAR
    if (id == "wall1") {
        document.body.style.backgroundImage = "url(images/avatar/wall1.jpg)";
    }
    if (id == "wall2") {
        document.body.style.backgroundImage = "url(images/avatar/wall2.jpg)";
    }
    if (id == "wall3") {
        document.body.style.backgroundImage = "url(images/avatar/wall3.jpg)";
    }
    if (id == "wall4") {
        document.body.style.backgroundImage = "url(images/avatar/wall4.jpg)";
    }
    if (id == "wall5") {
        document.body.style.backgroundImage = "url(images/avatar/wall5.jpg)";
    }
    if (id == "wall6") {
        document.body.style.backgroundImage = "url(images/avatar/wall6.jpg)";
    }
    
    // DINOSAUR KING
    if (id == "wall7") {
        document.body.style.backgroundImage = "url(images/dinoking/wall7.jpg)";
    }
    if (id == "wall8") {
        document.body.style.backgroundImage = "url(images/dinoking/wall8.jpg)";
    }
    if (id == "wall9") {
        document.body.style.backgroundImage = "url(images/dinoking/wall9.jpg)";
    }
    if (id == "wall10") {
        document.body.style.backgroundImage = "url(images/dinoking/wall10.jpg)";
    }
    if (id == "wall11") {
        document.body.style.backgroundImage = "url(images/dinoking/wall11.jpg)";
    }

    // HOGWARTS
    if (id == "wall12") {
        document.body.style.backgroundImage = "url(images/hogwarts/wall12.jpg)";
    }
    if (id == "wall13") {
        document.body.style.backgroundImage = "url(images/hogwarts/wall13.png)";
    }
    if (id == "wall14") {
        document.body.style.backgroundImage = "url(images/hogwarts/wall14.jpg)";
    }
    if (id == "wall15") {
        document.body.style.backgroundImage = "url(images/hogwarts/wall15.png)";
    }
    if (id == "wall16") {
        document.body.style.backgroundImage = "url(images/hogwarts/wall16.jpg)";
    }
}


function showThemes() {
    var mediaTab = document.getElementById("mediaTab");
    var mediaClass = mediaTab.getAttribute('class');
    if (mediaClass === 'visible') {
        mediaTab.setAttribute('class', 'hidden');
    }
    var pomoTab = document.getElementById("pomoTab");
    var pomoClass = pomoTab.getAttribute('class');
    if (pomoClass === 'visible') {
        pomoTab.setAttribute('class', 'hidden');
    }
    
    var themeTab = document.getElementById("themeTab");
    var currentClass = themeTab.getAttribute('class');
    
    // STYLING
    themeTab.style.placeSelf = "center";
    themeTab.style.backgroundColor = "#1d1d1db4";
    themeTab.style.borderRadius = "10px";
    themeTab.style.width = "500px";
    themeTab.style.height = "300px";
    themeTab.style.borderStyle = "solid";
    themeTab.style.borderColor = "white";
    
    if (currentClass === 'visible') {
        themeTab.setAttribute('class', 'hidden');
    } else {
        themeTab.setAttribute('class', 'visible');
    }
}

function showPomo() {
    var mediaTab = document.getElementById("mediaTab");
    var mediaClass = mediaTab.getAttribute('class');
    if (mediaClass === 'visible') {
        mediaTab.setAttribute('class', 'hidden');
    }
    var themeTab = document.getElementById("themeTab");
    var themeClass = themeTab.getAttribute('class');
    if (themeClass === 'visible') {
        themeTab.setAttribute('class', 'hidden');
    }

    var pomoTab = document.getElementById("pomoTab");
    var currentClass = pomoTab.getAttribute('class');

    // STYLING
    pomoTab.style.placeSelf = "center";
    pomoTab.style.backgroundColor = "#1d1d1db4";
    pomoTab.style.borderRadius = "10px";
    pomoTab.style.width = "350px";
    pomoTab.style.height = "400px";
    pomoTab.style.borderStyle = "solid";
    pomoTab.style.borderColor = "white";
    pomoTab.style.fontFamily = "Ubuntu Sans Mono";

    if (currentClass === 'visible') {
        pomoTab.setAttribute('class', 'hidden');
    } else {
        pomoTab.setAttribute('class', 'visible');
    }
}

function showMedia() {
    var themeTab = document.getElementById("themeTab");
    var themeClass = themeTab.getAttribute('class');
    if (themeClass === 'visible') {
        themeTab.setAttribute('class', 'hidden');
    }
    var pomoTab = document.getElementById("pomoTab");
    var pomoClass = pomoTab.getAttribute('class');
    if (pomoClass === 'visible') {
        pomoTab.setAttribute('class', 'hidden');
    }

    var mediaTab = document.getElementById("mediaTab");
    var currentClass = mediaTab.getAttribute('class');
    mediaTab.style.placeSelf = "center";
    if (currentClass === 'visible') {
        mediaTab.setAttribute('class', 'hidden');
    } else {
        mediaTab.setAttribute('class', 'visible');
    }
}

// displayTime() referenced off SheCodes.com
function displayTime() {
    var currDate = new Date();
    var hours = currDate.getHours();
    var minutes = currDate.getMinutes();
    var seconds = currDate.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = timeString;

    var dayString = currDate.toDateString();
    document.getElementById("day").innerHTML = dayString;
}
setInterval(displayTime, 1000);




/* 
*
*   // POMODORO TIMER
*   -- REFERENCED FROM CODEWITHSAHAND
*/

const startBTN = document.getElementById("start");
const stopBTN = document.getElementById("stop");
const resetBTN = document.getElementById("reset");
const timerELEM = document.getElementById("timer");
const focusBTN = document.getElementById("focus");
const breakBTN = document.getElementById("break");
const longBreakBTN = document.getElementById("longbreak");

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerELEM.innerHTML = formattedTime;
}

function startTimer() {
    // we call a function (1st parameter), ever thousandth millisecond (every second)
    interval = setInterval(()=> {
        timeLeft--;
        updateTimer();
        if (timeLeft == 0) {
            clearInterval(interval);
            document.getElementById('notif').play();
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

function setFocus() {
    timeLeft = 1500;
    updateTimer();
}

function setBreak() {
    timeLeft = 300;
    updateTimer();
}

function setLongBreak() {
    timeLeft = 900;
    updateTimer();
}

startBTN.addEventListener("click", startTimer)
stopBTN.addEventListener("click", stopTimer)
resetBTN.addEventListener("click", resetTimer)
focusBTN.addEventListener("click", setFocus)
breakBTN.addEventListener("click", setBreak)
longBreakBTN.addEventListener("click", setLongBreak)