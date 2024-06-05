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
}


function showThemes() {
    var mediaTab = document.getElementById("mediaTab");
    var mediaClass = mediaTab.getAttribute('class');
    if (mediaClass === 'visible') {
        mediaTab.setAttribute('class', 'hidden');
    }
    
    var themeTab = document.getElementById("themeTab");
    var currentClass = themeTab.getAttribute('class');
    themeTab.style.placeSelf = "center";
    themeTab.style.position = "fixed";
    themeTab.style.bottom = "10%";
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
    mediaTab.style.position = "fixed";
    mediaTab.style.bottom = "10%";
    if (currentClass === 'visible') {
        mediaTab.setAttribute('class', 'hidden');
    } else {
        mediaTab.setAttribute('class', 'visible');
    }
}