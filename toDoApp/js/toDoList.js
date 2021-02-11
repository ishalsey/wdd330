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
    print();
    document.forms[0].reset();
    localStorage.setItem('list', JSON.stringify(list));
});

function print(toDos) {
    const div = document.querySelector('#insert');
    div.innerHTML = toDos.map(
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

}

 let deleting = document.querySelector('.delete');
 const deletedIndex = list.IndexOf(x => x.Id == deletedIndex);
 deleting.addEventListener('click', (event) => {
     list.splice(deletedIndex, 1)
})