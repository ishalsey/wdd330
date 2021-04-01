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
        calendars.innerHTML += `<div id='${i}' class='days'><p class='number'>${i}</p></div>`
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
const button = document.querySelector('#submit');
const eventText = document.querySelector('#eventText');
const eventDate = document.querySelector('#eventDate');
button.addEventListener('click', (e) => {
    e.preventDefault();
    const event = new Event(eventText.value, eventDate.value);
    events.push(event);
    document.forms[0].reset();
    localStorage.setItem('events', JSON.stringify(events));
    printEvents();
});

//print events
function printEvents() {
    const events = JSON.parse(localStorage.getItem('events')); 
    const days = document.querySelector('.days');
    events.map(
        event => {
            const eventDate = new Date(event.EventDate);
            const dayOfMonth = eventDate.getDate();
            let div = document.getElementById(`${dayOfMonth}`);
            div.innerHTML += 
                        `<p class='event'>${event.EventText}</p>`
        }
    )
};
printEvents();