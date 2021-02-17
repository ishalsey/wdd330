const nav = document.querySelector(".nav");
const button = document.querySelector(".ham");
button.addEventListener("click", (event) => {
    nav.classList.toggle("responsive");
},false);
/*nav.addEventListener("mouseout", (event) => {
    nav.classList.toggle("responsive");
},false);*/