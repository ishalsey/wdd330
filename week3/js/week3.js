
const students = [
    {
        firstName: 'Isaiah',
        lastName: 'Halsey',
        age: 25,
        hobbies: 'many much things'
    },
    {
        firstName: 'Sabrina',
        lastName: 'Halsey',
        age: 24,
        hobbies: 'Children'  
    }
];
console.log(students);

const section = document.querySelector('section');

const div1 = document.createElement('div');
div1.setAttribute('id', 'div1');
div1.textContent = students[0].firstName + ' ' + students[0].lastName;
section.appendChild(div1);

const div2 = document.createElement('div');
div2.textContent = students[0].hobbies;
section.appendChild(div2);

const ul = document.createElement('ul');

students[0].hobbies.forEach
    hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        ul.appendChild(li);
    };
div2.innerHTML += `<h3>Hobbies</h3>`;
div2.appendChild(ul);
section.appendChild(div2);



//Example from readings
const info = document.querySelector('#info');


const button = document.createElement('button');
button.textContent = 'Click Me!!'

info.appendChild(button);

button.addEventListener('click', () => alert('You Clicked!'));