const url = 'https://swapi.dev/api/people/'
let nextURl = '';
let prevURL = '';
console.log(prevURL);

function fetchData(pageCall) {
    fetch(pageCall)
    .then(result => result.json())
    .then(jsonResult => {
        console.log(jsonResult);
        const list = jsonResult['results'];
        const ol = document.querySelector('#json');
        ol.innerHTML = '';
        for(let i = 0; i < list.length; i++) {
            ol.innerHTML +=
            `
            <li><a id='pressed' href="#">${list[i].name}</a></li>
            <ul class = 'listing'>
                <li>Height: ${list[i].height}</li>
                <li>Mass: ${list[i].mass}</li>
                <li>Hair Color: ${list[i].hair_color}</li>
                <li>Skin Color: ${list[i].skin_color}</li>
                <li>Eye Color: ${list[i].eye_color}</li>
                <li>Birthdate: ${list[i].birth_year}</li>
                <li>Gender: ${list[i].gender}</li>
                <li>Homeworld: ${list[i].homeworld}</li>
            </ul>
            `
        }
        if(jsonResult.next != null){
            nextURL = jsonResult.next;
        }
        else{
            nextURl = null;
        }
        if(jsonResult.previous != null){
            prevURL = jsonResult.previous;
        }
        else{
            prevURL = null;
        }
    })
}
fetchData(url);

const listing = document.querySelector('.listing');

    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');

    next.addEventListener('click', () => {
        if(nextURl != null){
            fetchData(nextURL);
        }
    })
    prev.addEventListener('click', () => {
        if(prevURL != null){
            fetchData(prevURL);
        }
    })
    