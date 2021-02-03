import{ToDo} from './listClass.js';

//Test
/* const todo = new ToDoList{'shovel the driveway'};
console.log(ToDoList); */

const list = [];
print();
const button = document.querySelector('#add')
button.addEventListener('click', (event) => {
    event.preventDefault();
    const newItem = new ToDo(
        document.querySelector('#input').value
    );
    list.push(newItem);
    print();
    document.forms[0].reset();
});

function print() {
    const div = document.querySelector('#insert');
    div.innerHTML = list.map(
        item =>
        `
        <input type="checkbox" id="${item.Id}">${item.Input}</input><br>
        <p>Finish By:<input type="date" id="newDate"></p>
        `
    ).join('<br>');
}
