import{Student} from './student.js';

const students = [];
/*
const student1 = new Student('Isaiah', 'Halsey', '1234534632');
const student2 = new Student('Sabrina', 'Halsey', '13456534632');

students.push(student1);
students.push(student2);

print();
*/
const tbody = document.querySelector('tbody');

tbody.innerHTML = students.map(
    student =>
    `<tr>
        <td>${student.FirstName}</td>
        <td>${student.LastName}</td>
        <td>${student.INumber}</td>
    </tr>`
).join('');
print();
document.querySelector('#submit')
.addEventListener('click', (event) => {
    event.preventDefault();
    const newStudent = new Student(
        document.querySelector('#firstName').value,
        document.querySelector('#lastName').value,
        document.querySelector('#iNumber').value
    );
    students.push(newStudent);
    print();
    document.forms[0].reset();
});

function print() {
    const tbody = document.querySelector('tbody');

tbody.innerHTML = students.map(
    student =>
    `<tr>
        <td>${student.FirstName}</td>
        <td>${student.LastName}</td>
        <td>${student.INumber}</td>
    </tr>`
).join('');
}

