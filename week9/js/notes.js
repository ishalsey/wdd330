const squareElement = document.getElementById('box');
let angle = 0;
setInterval( () => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);

const square = document.getElementById('square');
let angles = 0;
function rotate() {
    angles = (angles + 2)%360;
    square.style.transform = `rotate(${angles}deg)`
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);