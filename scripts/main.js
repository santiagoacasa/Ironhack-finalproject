"use strict"
window.onload = () => {
    /*const colorIntervalCallback = function(){
        randomColor(player);
    };*/
    
    //Desde aca iria en el boton "Jugar"
    jugar();
}

/*function update(){
    const canvas = document.getElementById("canvas");
    iniciarCanvas(canvas);
    player.dibujar(canvas);
    requestAnimationFrame(update);
}*/

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
       const juego = new Juego(canvas);
       
       //ACA ARRANCA EL JUEGO.
       juego.comienzo();
       juego.player.iniciarlizar()
       const movePlayer = (event) => { 
           juego.player.mover(event)
       }
       document.addEventListener("keydown", movePlayer);
       const cantidadVidas = document.querySelectorAll("#vidas span")
       //requestAnimationFrame(juego.player.dibujar);
       
   }
   buildAskUserName();
}

    /* iniciarCanvas();
    player.iniciarlizar();
    document.addEventListener('keydown', event => player.mover(event));
    const myInterval = setInterval(colorIntervalCallback, 1000); //Test para probar el cambio de color
    requestAnimationFrame(update); */