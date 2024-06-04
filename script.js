function changeWallpaper(id) {
    if (id == "wall1") {
        document.body.style.backgroundImage = "url(images/wall1.jpg)";
    }
    if (id == "wall2") {
        document.body.style.backgroundImage = "url(images/wall2.jpg)";
    }
    if (id == "wall3") {
        document.body.style.backgroundImage = "url(images/wall3.jpg)";
    }
    if (id == "wall4") {
        document.body.style.backgroundImage = "url(images/wall4.jpg)";
    }
    if (id == "wall5") {
        document.body.style.backgroundImage = "url(images/wall5.jpg)";
    }
    if (id == "wall6") {
        document.body.style.backgroundImage = "url(images/wall6.jpg)";
    }
}


function showThemes() {
    var themeTab = document.getElementById("themeTab");
    var currentClass = themeTab.getAttribute('class');
    if (currentClass === 'visible') {
        themeTab.setAttribute('class', 'hidden');
    } else {
        themeTab.setAttribute('class', 'visible');
    }
}
