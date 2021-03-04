let audioElements = document.querySelectorAll('audio');

window.document.addEventListener('keydown', (event) => {
    let keyname = event.key.toUpperCase().charCodeAt();
    audioElements.forEach(audio =>{
        if(keyname == audio.dataset.key)
        audio.play();
    })
    console.dir(audioElements);
})