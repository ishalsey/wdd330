
let d = new Date();
const calendars = document.querySelector('#monthView');
const adds = document.querySelector('#add');
const info = document.querySelector('#info');

adds.addEventListener('click', (e) => {
    if(info.classList != 'input') {
        info.classList.add('input');
    }
    else {
        info.classList.remove('input')
    }
})

const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(3,2021));

function date(){
    for(i = 1; i <= getDaysInMonth(3,2021); i++){
        calendars.innerHTML += `<div class='days'><p>${i}</p></div>`
    }
}
date();