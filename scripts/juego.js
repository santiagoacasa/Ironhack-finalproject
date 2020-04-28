window.onload = () => {
    document.querySelector("#setName").addEventListener('click', setPlayerName);
    const intervalCallback = function(){
        randomColor(player);
    };
    //Desde aca iria en el boton "Jugar"
    iniciarCanvas();
    player.iniciarlizar();
    document.addEventListener('keydown', event => player.mover(event));
    const myInterval = setInterval(intervalCallback, 1000);
    requestAnimationFrame(update);
}

function update(){
    iniciarCanvas();
    player.dibujar();
    requestAnimationFrame(update);
}