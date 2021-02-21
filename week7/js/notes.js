let Isaiah = {name: 'Isaiah'}
let Sabrina = {
    person: 'Sabrina',
    age: 24
};

function People(greeting = 'Good morning'){
    return `${greeting} my name is ${this.name}`
};
function second(hello = 'Hello'){
    return `${hello} I am ${this.person}, and I am ${this.age} years old.`
};

alert(People.call(Isaiah) + '. ' + second.call(Sabrina))