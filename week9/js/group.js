function playSound(e){
    const audioElements = document.querySelectorAll('audio');
    const keyNow = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let keyname = e.keyCode;
    audioElements.forEach(audio =>{
        if(keyname != audio.dataset.key) 
            return;
        else
            audio.currentTime = 0;
            audio.play();
            keyNow.classList.add('playing');
            move();
    })
}
function remove(e){
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(
    key =>
        key.addEventListener('transitionend', remove)
)
window.addEventListener('keydown', playSound);


//Test Code

/* function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
};
function remove(e){
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', remove));
window.addEventListener('keydown', playSound); */


function move(){
    const key = document.querySelector('.key');
    for(let i = 0; i < 11; i++){
        
        key.style.top = '100px';
    }
}