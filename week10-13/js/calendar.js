
let d = new Date();
const calendars = document.querySelector('#monthView');


const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(3,2021));

function print(){
    for(i = 1; i <= getDaysInMonth(3,2021); i++){
        calendars.innerHTML += `<div class='days'>${i}</div>`
    }
}
print();