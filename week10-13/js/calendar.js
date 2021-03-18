
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
const calendars = document.querySelector('#monthView');
const adds = document.querySelector('#add');
const info = document.querySelector('#info');
const events = [];

adds.addEventListener('click', (e) => {
    if(!info.classList.contains('input')) {
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

function print() {
    const input = document.querySelector('input');

input.innerHTML = events.map(
    event =>
    `<tr>
        <td>${event.date}</td>
    </tr>`
)}

