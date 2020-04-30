"use strict"
window.onload = () => {
    jugar();
}

const jugar = () => {
   const randomColor = function (obj) {
       obj.color = obj.arrRGB[Math.floor(Math.random() * obj.arrRGB.length)];
   };

   const setPlayerName = function () {
       let playerName = document.querySelector("#playerName");
       let newPlayer = document.querySelector("#nombreUsuario");
       newPlayer.innerHTML = `Hola <span>${playerName.value}</span>!`;
       buildReglasJuego();
   }

   const buildHtml = function (html) {
       const juegoContainer = document.querySelector("#juegoContainer");
       juegoContainer.innerHTML = html;
   }

   const buildAskUserName = function () {
       resetAside();
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

   const buildReglasJuego = function () {
       buildHtml(`<div id="reglas" class="areaJuego">
                    <h2>Reglas del juego</h2>
                    <p>ACA VAN LAS REGLAS DEL JUEGO</p>
                    <div><button id="botonJugar">JUGAR</button></div>
                </div>`);
       const botonJugar = document.querySelector("#botonJugar");
       botonJugar.addEventListener('click', buildGameScreen);
   }

   const buildGameScreen = function () {
       buildHtml(`<canvas id="canvas"></canvas>`);
       const width = document.querySelector("#juegoContainer").offsetWidth
       const height = document.querySelector("#juegoContainer").offsetHeight;
       const canvas = document.querySelector("#canvas");
       canvas.setAttribute('width', width);
       canvas.setAttribute('height', height);
       restaurarVidas();
       const juego = new Juego(canvas);
       juego.callbackGameOver(buildGameOver);
       //ACA ARRANCA EL JUEGO.
       juego.comienzo();
       juego.player.iniciarlizar()
       const movePlayer = (event) => { 
           juego.player.mover(event)
       }
       document.addEventListener("keydown", movePlayer);   
   }

   const buildGameOver = () => {
       buildHtml(`<div>
                <img src="imgs/gameover.png">
                <div>
                <p id = "finalScore"></p>
                <button id="playAgain">Volver a jugar</button>
                <button id="exit">Salir</button>
                </div>
                 </div>`);
        const finalScore = document.getElementById("finalScore");
        const scoreDisplay = document.getElementById("score");
        const playAgain = document.getElementById("playAgain");
        const endGame = document.getElementById("exit")
        playAgain.onclick = () => {
            let scoreDisplay = document.getElementById("score");
            scoreDisplay.innerHTML = "0";
            restaurarVidas();
            buildGameScreen();
        }
        endGame.onclick = () => {
            buildAskUserName()
        }
        const playerScore = scoreDisplay.innerHTML;
        finalScore.innerHTML = `TU PUNTAJE ES DE: <span>${playerScore}</span>pts!`;
   }

   const restaurarVidas = () => {
       const displayVidas = document.getElementById("vidas")
       displayVidas.innerHTML = 'Vidas: <span>&#128154</span><span>&#128154</span><span>&#128154</span>' 
   }

   const resetAside = () => {
       let newPlayer = document.querySelector("#nombreUsuario");
       newPlayer.innerHTML = "";
       let scoreDisplay = document.getElementById("score");
       scoreDisplay.innerHTML = "0";
   }
   buildAskUserName();
}