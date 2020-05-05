"use strict"
window.onload = () => {
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
            resetHighScoreTable();
            buildHighScore();
            buildGameScreen();
        }
        endGame.onclick = () => {
            resetHighScoreTable();
            buildAskUserName()
        }
        const playerScore = scoreDisplay.innerHTML;
        finalScoreMensaje.innerHTML = `TU PUNTAJE FUE DE: <span>${playerScore}</span>pts!`;
   }

   const restaurarVidas = () => {
       const displayVidas = document.getElementById("vidas")
       displayVidas.innerHTML = 'Vidas: <span><img src="imgs/greenHeart.svg" class="corazones"></span><span><img src="imgs/greenHeart.svg" class="corazones"></span><span><img src="imgs/greenHeart.svg" class="corazones"></span>'
   }

   const resetAside = () => {
       let newPlayer = document.querySelector("#nombreUsuario");
       newPlayer.innerHTML = "";
       let scoreDisplay = document.getElementById("score");
       scoreDisplay.innerHTML = "0";
   }

   const buildHighScore = () => {
       if (localStorage.getItem("highscore") != null){
           const highScoresOrdenados = [...JSON.parse(localStorage.highscore)].sort((a, b) => {
               return b.score - a.score
           });
           if (highScoresOrdenados.length != 0) {
               if (highScoresOrdenados.length > 3) {
                   buildTabla(3, highScoresOrdenados); //MOSTRAR SOLO LOS 3 MEJORES SCORES
               } else {
                   buildTabla(highScoresOrdenados.length, highScoresOrdenados);
               }
           }
        }
    }
    
    //FUNCION PARA CREAR LA TABLA DE HIGHSCORES CON LONGITUDES VARIABLES
    const buildTabla = (arrLength, highScoreArr) => {
        let tablaScoresBody = document.querySelector("#tablaScores tbody");
        let tablaScoresElem = document.querySelectorAll("#tablaScores tbody tr");
        if(tablaScoresElem.length === 0){
            for (let idx = 0; idx < arrLength; idx++) {
                appendHighScore(highScoreArr, tablaScoresBody, idx);
            }
        } else {
            appendHighScore(highScoreArr, tablaScoresBody, highScoreArr.length - 1);
        }
    }

   const appendHighScore = (highScoreArr, tableBody,idx) => {
       let scoreElement = document.createElement("td");
       let cellTextName = document.createTextNode(`${highScoreArr[idx].playerName}  -  ${highScoreArr[idx].score}`);
       scoreElement.appendChild(cellTextName);
       let scoreRow = document.createElement("tr");
       scoreRow.classList.add("scoreElem");
       scoreRow.appendChild(scoreElement);
       tableBody.appendChild(scoreRow);  
   }

   const resetHighScoreTable = () => {
       let tablaScoresBody = document.querySelector("#tablaScores tbody");
       let tablaScoresElem = tablaScoresBody.firstElementChild;
       while(tablaScoresElem){
           tablaScoresBody.removeChild(tablaScoresElem);
           tablaScoresElem = tablaScoresBody.firstElementChild;
       }
   }

   buildAskUserName();
}

