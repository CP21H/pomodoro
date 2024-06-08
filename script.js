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

function showMedia() {
    var themeTab = document.getElementById("themeTab");
    var themeClass = themeTab.getAttribute('class');
    if (themeClass === 'visible') {
        themeTab.setAttribute('class', 'hidden');
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