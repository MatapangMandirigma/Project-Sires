const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navShade = document.querySelector(".nav-shade");
const homeBtn = document.querySelector(".home");
const projectsBtn = document.querySelector(".projects");
const aboutBtn = document.querySelector(".about");
const bBtn = document.querySelector(".b");
const nBtn = document.querySelector(".n");
//const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", menu);
navShade.addEventListener("click", closeMenu);
homeBtn.addEventListener("click", function(){ btnLink('home') });
projectsBtn.addEventListener("click", function(){ btnLink('projects') });
aboutBtn.addEventListener("click", function(){ btnLink('about') });
bBtn.addEventListener("click", function(){ btnLink('b') });
nBtn.addEventListener("click", function(){ btnLink('n') });
//navBar.addEventListener("click", closeMenu);

function menu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navShade.classList.toggle("active");
}

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navShade.classList.remove("active");
}

function btnLink(btn) {
    var btnURL = '';
    switch(btn){
        case 'home':
            btnURL = '../homepage/homepage.html';
            break;
        case 'projects':
            btnURL = 'aboutpage.html#projects';
            break;
        case 'about':
            btnURL = 'aboutpage.html';
            break;
        case 'b':
            btnURL = 'aboutpage.html#b';
            break;
        case 'n':
            btnURL = 'aboutpage.html#n';
            break;
        default:
            btnURL = 'aboutpage.html#';
    }

    closeMenu();
    window.location.href = btnURL;
}