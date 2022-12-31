const hamburger = document.querySelector(".hamburger");
const hamburger_icon = hamburger.querySelector("span");
const mobile_menu = document.querySelector(".mobile-menu");


hamburger.addEventListener("click",function(){
    hamburger_icon.innerText=hamburger_icon.innerText==="menu"?"close":"menu";
    mobile_menu.classList.toggle("is-open")
})
const copyright = document.querySelector(".footer");
const year = new Date();
const newYear = year.getFullYear();
copyright.innerHTML="Made with 💖 by Odunayo " + "&copy; "+newYear;
