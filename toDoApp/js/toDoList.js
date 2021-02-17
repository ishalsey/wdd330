import { ToDo } from './listClass.js';

let list = [];

if (localStorage.getItem('list')) {
    list = JSON.parse(localStorage.getItem('list'));
}

print(list);
const button = document.querySelector('#add')
button.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector('#input');
    const newItem = new ToDo(input.value)

    list.push(newItem);
    print(list);
    document.forms[0].reset();
    localStorage.setItem('list', JSON.stringify(list));
});

function print(filteredList) {
    const div = document.querySelector('#insert');
    div.innerHTML = filteredList.map(
        item =>
            `
        <div id="newText">
            <label ${item.Completed ? 'class="completed"' : ""}>
            <input type="checkbox" ${item.Completed ? 'checked' : ''} value="${item.Id}" class="box">${item.Input}</input>
            </label>
            <input type="button" id="${item.Id}" class="delete" value="X"></input>
        </div>
        `
    ).join('');


    const checkboxs = document.querySelectorAll('input[type="checkbox"]');
    checkboxs.forEach(
        checkbox => {
            checkbox.addEventListener('change', (event) => {
                const id = Number(event.target.value);
                console.log(id);
                const todo = list.find(todo => todo.Id === id);
                todo.Completed = !todo.Completed;
                localStorage.setItem('list', JSON.stringify(list));
                print(list);
            })
        }
    )

    const deleteButtons = document.querySelectorAll('input[type="button"]');
    deleteButtons.forEach(
        deleteButton => {
            deleteButton.addEventListener('click', (event) => {
                const id = Number(event.target.value);
                console.log(id);
                const pos = list.indexOf(todo => todo.Id === id);
                list.splice(pos, 1);
                localStorage.setItem('list', JSON.stringify(list));
                print(list);
            })
        }
    )
}

const check = document.querySelector('#checkmarked');
const uncheck = document.querySelector('#unchecked');
const all = document.querySelector('#all');

check.addEventListener('click', () => {
    print(list.filter(x => x.Completed));
    console.log('here');
})
uncheck.addEventListener('click', () => {
    print(list.filter(x => !x.Completed));
})
all.addEventListener('click', () => {
    print(list);
})