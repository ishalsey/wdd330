const url = 'https://swapi.dev/api/people/'
let nextURl = ''

function fetchData(pageCall) {
    fetch(pageCall)
    .then(result => result.json())
    .then(jsonResult => {
        console.log(jsonResult);
        const list = jsonResult['results'];
        const ol = document.querySelector('#json');
        for(let i = 0; i < list.length; i++) {
            ol.innerHTML +=
            `<li>${list[i].name}</li>`
        }
        nextURL = jsonResult.next;
        console.log(nextURL);
    })
}
fetchData(url);


    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');

    next.addEventListener('click', () => {
        fetchData(nextURL);
    })