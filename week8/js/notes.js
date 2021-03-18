const url = 'https://swapi.dev/api/people/'

fetch(url)
    .then(result => result.json())
    .then(jsonResult => {
        const list = jsonResult['results'];
        const div = document.querySelector('div');
            for (let i = 0; i < list.length; i++) {
    //         document.querySelector('#json'+i).textContent = list[i].name;
                div.innerHTML += 
                `<p id="">${list[i].name}</p>`;
    //     }
    }
});