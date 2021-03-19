import {Event} from './event.js';
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
const calendars = document.querySelector('#monthView');
const adds = document.querySelector('#add');
const info = document.querySelector('#info');
const events = [];
const eventText = document.querySelector('#eventText');
const eventDate = document.querySelector('#eventDate');

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
    let currentDate = new Date(2021, 3, 1)
    for(let i = 1; i <= getDaysInMonth(3,2021); i++){
        calendars.innerHTML += 
        `<div class='days'>
            <p class='number'>${currentDate.getDate() + i}</p>
            <p></p>
        </div>`
    }
}
date();

const button = document.querySelector('#submit');
button.addEventListener('click', () => {
    let event = new Event(eventText.value, eventDate.value);
    events.push(event);
    print();
});
