import {Event} from './event.js';
let timeNow = Date.now();
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
let calendars = document.querySelector('#monthView');
const adds = document.querySelector('#add');
const info = document.querySelector('#info');
let events = [];
let daysInMonth = [];
const eventDate = document.querySelector('#eventDate');
let days = document.querySelector('.days');


console.log(d);
if (localStorage.getItem('events')) {
    events = JSON.parse(localStorage.getItem('events'));
}

adds.addEventListener('click', (e) => {
    info.classList.toggle('input');
})

const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(3,2021));

//print(events);
const eventText = document.querySelector('#eventText');
const button = document.querySelector('#submit');
button.addEventListener('click', (e) => {
    e.preventDefault();
    const text = new Event(eventText.value);

    events.push(text);
    print(events);
    document.forms[0].reset();
    localStorage.setItem('events', JSON.stringify(events));
});
let x = 1
const informationNow = `<div class='days'><p class='number'></p><p></p></div>`
function print(filteredList){
    console.log(informationNow);
    let currentDate = new Date(2021, 3, 1);
    let daysInMonth = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear())
    calendars.innerHTML = informationNow.repeat(daysInMonth)
    let n = document.querySelectorAll('.number');
    n.forEach(
        da => {
            da.innerHTML = x; 
            da.id = 'day-' + x
            x++;
        }
    )
    x = 1;
    days.innerHTML += filteredList.map(
        current => {
        
        }
    )
}

