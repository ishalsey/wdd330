import {makeRequest} from './authHelpers.js';
import Auth from './auth.js';
const myAuth = new Auth();

// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
//     });
    console.log('nothing');
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        myAuth.login(
            nothing
        )
        console.log('nothing1');
    })
    async function nothing() {
        console.log('nothing2');
        const data = await makeRequest('posts', 'GET', null, myAuth.token);
        const things = document.querySelector('#things');
        console.log(data);
        console.log('nothing3');
        var ul = document.getElementById('list');
    ul.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data[i].title));
      ul.appendChild(li);
    }
        
    }
    const nav = document.querySelector(".nav");
    const button = document.querySelector(".ham");
    button.addEventListener("click", (event) => {
        nav.classList.toggle("responsive");
    },false);