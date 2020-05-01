"use strict"

class Juego {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.player;
        this.obstaculos = [];
        this.obstSizeMax = 40;
        this.obstSizeMin = 10;
        this.gameOver = false;
        this.arrRGB = ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(251,163,47)'];
        this.obsColor = "";
    }
    comienzo() {
        this.player = new Player(this.canvas);
        this.player.iniciarlizar();
        const intervalColor = setInterval(this.player.cambioRandomDeColor(this.arrRGB[Math.floor(Math.random() * this.arrRGB.length)]), 500);
        const updateJuego = () => {
            this.obsColor = this.arrRGB[Math.floor(Math.random() * this.arrRGB.length)];
            if (Math.random() > 0.85) {
                const x = Math.random() * this.canvas.width;
                this.obstaculos.push(new Obstaculo(this.canvas, x, this.obsColor, Math.random() * (this.obstSizeMax - this.obstSizeMin) + this.obstSizeMin));
            }
            this.checkColisiones(intervalColor);
            this.update();
            this.clearCanvas();
            this.drawCanvas();
            if(!this.gameOver){
                window.requestAnimationFrame(updateJuego);
            }
        }; 

        window.requestAnimationFrame(updateJuego);
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

    checkColisiones(intervalColor){
        const scoreDisplay = document.getElementById("score");
        const colorPlayer = this.player.color;
        this.obstaculos.forEach((obst,index) => {
            const colorObst = obst.color;
            if(this.player.checkColision(obst)){
                if(colorObst == colorPlayer){
                    this.player.score += 5;
                    scoreDisplay.innerHTML = this.player.score;
                } else {
                    this.player.perderVida();
                }
                this.obstaculos.splice(index,1);
                if (this.player.lives === 0){
                    this.gameOver = true;
                    this.onGameOver();
                    clearInterval(intervalColor);
                }
            }
        });
    }


    callbackGameOver(callback){
        this.onGameOver = callback;
    }



    playAgainCall(){
        this.player.lives = 3;
    }

};
