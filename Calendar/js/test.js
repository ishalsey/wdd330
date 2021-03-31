import {Event} from './event.js';
//make calendar
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let calendars = document.querySelector('#monthView');
const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};
function date(){
    for(let i = 1; i <= getDaysInMonth(3,2021); i++){
        calendars.innerHTML += `<div class='days'><p class='number'>${i}</p></div>`
    }
};
date();

//add input box toggle
const adds = document.querySelector('#add');
const info = document.querySelector('#info');
adds.addEventListener('click', (e) => {
    info.classList.toggle('input');
});

//save to local storage
let events = [];
let event = []
const button = document.querySelector('#submit');
const eventText = document.querySelector('#eventText');
const eventDate = document.querySelector('#eventDate');
button.addEventListener('click', (e) => {
    e.preventDefault();
    const text = new Event(eventText.value);
    const ids = new Event(eventDate.value);
    event.push(ids);
    event.push(text);
    events.push(event);
    document.forms[0].reset();
    localStorage.setItem('events', JSON.stringify(events));
});
console.log(events);

//printing the information on the page

function print() {
    const days = document.querySelector('.days');
    days.innerHTML += calendars.map(
        information => {
            if(eventDate == number.value)
                `<p>${events}</p>`
        }
    )
}