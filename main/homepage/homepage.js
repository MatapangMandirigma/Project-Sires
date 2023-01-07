const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navShade = document.querySelector(".nav-shade");
//const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", menu);
navShade.addEventListener("click", closeMenu);
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


