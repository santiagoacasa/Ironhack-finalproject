"use strict"

const iniciarCanvas = function(canvas){
    const context = canvas.getContext('2d');
    context.clearRect(0,0,canvas.width,canvas.height);
};

const randomColor = function(obj){
    obj.color = obj.arrRGB[Math.floor(Math.random() * obj.arrRGB.length)];
};

const setPlayerName = function(){
    let playerName = document.querySelector("#playerName");
    let newPlayer = document.querySelector("#nombreUsuario span"); 
    newPlayer.innerHTML = `Hola ${playerName.value}!`;
    buildReglasJuego();
}

const buildHtml = function(html){
    const juegoContainer = document.querySelector("#juegoContainer");
    juegoContainer.innerHTML = html;
}

const buildAskUserName = function(){
    buildHtml(`<div id="askName" class="areaJuego">
    <h2>¿Como te llamas?</h2>
    <div>
        <input type="text" id="playerName" name="playerName" placeholder="Nombre">
        <div><button id="setName">Aceptar</button></div>
    </div>
</div>`)
const setName = document.querySelector("#setName");
setName.addEventListener("click", setPlayerName);
}

const buildReglasJuego = function(){
    buildHtml(`<div id="reglas" class="areaJuego">
                    <h2>Reglas del juego</h2>
                    <p>ACA VAN LAS REGLAS DEL JUEGO</p>
                    <div><button id="botonJugar">JUGAR</button></div>
                </div>`);
    const botonJugar = document.querySelector("#botonJugar");
    botonJugar.addEventListener('click', buildCanvas);
}

const buildCanvas = function(){
    buildHtml(`<canvas id="canvas" width="500" height="400"></canvas>`);
    
}