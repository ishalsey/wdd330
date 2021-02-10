import{ToDo} from './listClass.js';

//Test
/* const todo = new ToDoList{'shovel the driveway'};
console.log(ToDoList); */

let list = [];

if(localStorage.getItem('list')){
    list = JSON.parse(localStorage.getItem('list'));
}

print();
const button = document.querySelector('#add')
button.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector('#input');
    const newItem = new ToDo(input.value)
    /* function setToDoList() {
        if (list.length > 1) {
            let toDoList = document.querySelector('ul');
            list.forEach(
                toDo => {
                    toDoList.innerHTML += `<li>${toDo.input}</li>`
                }
            )
        }
    } */
    
    list.push(newItem);
    print();
    document.forms[0].reset();
    localStorage.setItem('list', JSON.stringify(list));
});

function print() {
    const div = document.querySelector('#insert');
    div.innerHTML = list.map(
        item =>
        `
        <div id="newText">
            <input type="checkbox" value="${item.Id}" checked class="box" id="${item.Id}">${item.Input}</input>
            <input type="button" class="delete" value="X"></input>
        </div>
        `
    ).join('');
}
console.log(list);

let deleting = document.querySelector('.delete');

deleting.addEventListener('click', (event) => {
    localStorage.removeItem('${item.Id}');
})
//dom javascript parent delete