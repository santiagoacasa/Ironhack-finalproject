"use strict"
window.onload = () => {
    localStorage.setItem("highscore", JSON.stringify([]));
    jugar();
}

const jugar = () => {
   const buildHtml = function (html) {
       const juegoContainer = document.querySelector("#juegoContainer");
       juegoContainer.innerHTML = html;
   }

   const setPlayerName = function () {
       let playerName = document.querySelector("#playerName");
       let newPlayer = document.querySelector("#nombreUsuario");
       if (playerName.value != "") {
           newPlayer.innerHTML = `Hola <span>${playerName.value}</span>!`;
           buildReglasJuego();
       } else {
           alert("Por favor ingresa un nombre 😄")
       }

   }

   const buildAskUserName = function () {
       resetAside();
       buildHighScore();
       buildHtml(`<div id="askName" class="areaJuego">
    <h2>¿Cómo te llamas?</h2>
        <div>
        <input type="text" id="playerName" name="playerName" placeholder="Nombre" required>
        </div>
        <div><a href="#" class="botones" id="setName">Aceptar</a></div>
</div>`)
       const setName = document.querySelector("#setName");
       setName.addEventListener("click", setPlayerName);
   }

   const buildReglasJuego = function () {
       buildHtml(`<div id="reglas" class="areaJuego">
                    <h2>Reglas del juego</h2>
                    <p>Esto es bastante sencillo \n
                       <ul>
                            <li>Te moves con las flechas del teclado</li>
                            <li>Sumas puntos recolectando los circulos de tu mismo color</li>
                            <li>Perdes una vida cuando chocas con cualquier otro</li>
                            <li>No pierdas</li>
                        </ul>
                     </p>
                    <div><a href="#" id="jugar" class="botones">JUGAR</a></div>
                </div>`);
       const botonesJugar = document.querySelector("#jugar");
       botonesJugar.addEventListener('click', buildGameScreen);
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
       juego.player.iniciarlizar();
       const movePlayer = (event) => { 
           juego.player.mover(event)
       }
       document.addEventListener("keydown", movePlayer);   
   }

   const buildGameOver = () => {
       buildHtml(`<div id="gameover" class="areaJuego">
                    <div>
                        <img src="imgs/gameover2.png">
                    </div>
                    <div id="gameOverMenu">
                        <p id="finalScore"></p>
                        <div><a href="#" class="botones" id="playAgain">Volver a jugar</a><a href="#" class="botones" id="exit"> Salir </a></div>
                    </div>
                 </div>`);
        const finalScoreMensaje = document.getElementById("finalScore");
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
        finalScoreMensaje.innerHTML = `TU PUNTAJE FUE DE: <span>${playerScore}</span>pts!`;
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

   const buildHighScore = () => {
       const highScoresOrdenados = [...JSON.parse(localStorage.highscore)].sort((a, b) => {
           return b.score - a.score
       });
       let tablaScoresBody = document.querySelector("#tablaScores tbody");
       if (highScoresOrdenados.length != 0) {
           if(highScoresOrdenados.length > 3){
               for (let idx = 0; idx < 3; idx++) {
                   let scoreElement = document.createElement("td");
                   let cellTextName = document.createTextNode(highScoresOrdenados[idx].playerName);
                   let cellTextScore = document.createTextNode(highScoresOrdenados[idx].score);
                   let separador = document.createTextNode("-");
                   scoreElement.appendChild(cellTextName);
                   scoreElement.appendChild(separador);
                   scoreElement.appendChild(cellTextScore);
                   let scoreRow = document.createElement("tr");
                   scoreRow.appendChild(scoreElement);
                   tablaScoresBody.appendChild(scoreRow);
               }
           } else {
               for (let idx = 0; idx < highScoresOrdenados.length; idx++) {
                   let scoreElement = document.createElement("td");
                   let cellTextName = document.createTextNode(highScoresOrdenados[idx].playerName);
                   let cellTextScore = document.createTextNode(highScoresOrdenados[idx].score);
                   let separador = document.createTextNode("-");
                   scoreElement.appendChild(cellTextName);
                   scoreElement.appendChild(separador);
                   scoreElement.appendChild(cellTextScore);
                   let scoreRow = document.createElement("tr");
                   scoreRow.appendChild(scoreElement);
                   tablaScoresBody.appendChild(scoreRow);
               }
           }
           
       }
   }

   buildAskUserName();
}

