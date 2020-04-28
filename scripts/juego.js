"use strict"
window.onload = () => {
    document.querySelector("#setName").addEventListener('click', setPlayerName);
    const colorIntervalCallback = function(){
        randomColor(player);
    };
    
    
    

    //Desde aca iria en el boton "Jugar"

    iniciarCanvas();
    player.iniciarlizar();
    document.addEventListener('keydown', event => player.mover(event));
    const myInterval = setInterval(colorIntervalCallback, 1000); //Test para probar el cambio de color
    requestAnimationFrame(update);
}

function update(){
    iniciarCanvas();
    player.dibujar();
    requestAnimationFrame(update);
}