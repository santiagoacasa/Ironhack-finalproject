"use strict"
//
class Juego {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.player;
        this.obstaculos = [];
        this.obstSizeMax = 45;
        this.obstSizeMin = 20;
        this.gameOver = false;
        this.arrObsColor = ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(251,163,47)'];
        this.arrRGB = ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)'];
        this.obsColor = "";
        this.obstSpeed = 4;
        this.gameOverSound = new Audio(musica.gameOver.src);
        this.pointSound = new Audio(musica.juntaPuntos.src);
    }

    comienzo() {
        //LECTURA DEL LOCALSTORAGE Y SE ASIGNA AL ARRAY DE HIGHSCORE, SI LOCALSTORAGE ESTA VACIO SE INICIALIZA COMO UN ARRAY VACIO
        let highScoreArr = JSON.parse(localStorage.getItem('highscore')) || [];
        let highScore = {
            playerName: "",
            score: 0
        };
        this.gameOverSound.volume = 0.5;
        //CREACION DEL PLAYER
        this.player = new Player(this.canvas);
        this.player.iniciarlizar();
        //EVENT LISTENER PARA MOVER AL JUGADOR
        const movePlayer = (event) => {
            this.player.mover(event)
        }
        document.addEventListener("keydown", movePlayer);
        //UN TIMEOUT PARA LUEGO EJECUTAR EL INTERVALO DE CAMBIO RANDOM DE COLOR
        const cambioColorTimeOut = this.timeOutStartRandomColor();
        const updateObsSpeed = this.speedInterval(); 
        const updateJuego = () => {
            this.obsColor = this.arrObsColor[Math.floor(Math.random() * this.arrObsColor.length)];
            if (Math.random() > 0.90) {
                const x = Math.random() * this.canvas.width;
                this.obstaculos.push(new Obstaculo(this.canvas, x, this.obsColor, Math.random() * (this.obstSizeMax - this.obstSizeMin) + this.obstSizeMin, this.obstSpeed));
            }
            this.checkColisiones();
            this.update();
            this.clearCanvas();
            this.drawCanvas();
            if(!this.gameOver){
                window.requestAnimationFrame(updateJuego);
            } else {
                highScore.playerName = this.player.name;
                highScore.score = this.player.score;
                highScoreArr.push(highScore);
                this.guardarHighScore(highScoreArr);
                clearInterval(cambioColorTimeOut);
                clearInterval(updateObsSpeed);
            }
        };
            window.requestAnimationFrame(updateJuego);

    }

    
    timeOutStartRandomColor() {
        return setTimeout(() => {
            const colorInterval = setInterval(() => { this.player.randomPlayerColor(this.arrRGB); }, 5130);
            return colorInterval;
        }, 5000);
    }

    speedInterval() {
        return setInterval(() => { this.updateObsSpeed(); }, 5000);
    }

    guardarHighScore(highScoreArr) {
        localStorage.setItem("highscore", JSON.stringify(highScoreArr));
    }

    updateObsSpeed(){
        this.obstSpeed += 0.50;
    }

    update() {
        this.obstaculos.forEach((obst) => {
            obst.update();
        });
    }

    drawCanvas(){
        this.player.dibujar();
        this.obstaculos.forEach((obst) => {
            obst.draw();
        });
    }

    clearCanvas(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    };

    checkColisiones(){
        const scoreDisplay = document.getElementById("score");
        const colorPlayer = this.player.color;
        this.obstaculos.forEach((obst,index) => {
            const colorObst = obst.color;
            if(this.player.checkColision(obst)){
                if(colorObst == colorPlayer){
                    this.pointSound.play();
                    this.player.score += 5;
                    scoreDisplay.innerHTML = this.player.score;
                } else {
                    this.player.perderVida();
                }
                this.obstaculos.splice(index,1);
                if (this.player.lives === 0){
                    this.gameOver = true;
                    this.onGameOver();
                    this.gameOverSound.play();
                }
            }
        });
    }

    callbackGameOver(callback){
        this.onGameOver = callback;
    }

};
