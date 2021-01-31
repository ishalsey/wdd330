const board = document.querySelector('p');
let player1 = 'X';
let player2 = 'O';
let player = player1;
window.addEventListener('touchend', (ev) => {
    if(ev.target.dataset.board){
        if(ev.target.dataset.board){
            if(ev.target.innerText == ''){
                ev.target.innerText = player;
                if(player == player1){
                    player = player2;
                }
                else{
                    player = player1;
                }
            }
        }
    }
    if(ev.target.id == 'reset'){
        location.reload();
}
});