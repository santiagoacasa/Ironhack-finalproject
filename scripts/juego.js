"use strict"
window.onload = () => {
    const colorIntervalCallback = function(){
        randomColor(player);
    };
    
    //Desde aca iria en el boton "Jugar"
    jugar();
}

function update(){
    const canvas = document.getElementById("canvas");
    iniciarCanvas(canvas);
    player.dibujar(canvas);
    requestAnimationFrame(update);
}

function jugar(){
    buildAskUserName();
    const canvas = document.getElementById("canvas");
    //const context = canvas.getContext('2d');
    iniciarCanvas(canvas);
    player.dibujar(canvas);
    requestAnimationFrame(update);
}

    /*iniciarCanvas();
    player.iniciarlizar();
    document.addEventListener('keydown', event => player.mover(event));
    const myInterval = setInterval(colorIntervalCallback, 1000); //Test para probar el cambio de color
    requestAnimationFrame(update);*/