"use strict"

class Juego {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.player;
        this.obstaculos = [];
        this.gameOver = false;
    }
    comienzo() {
        this.player = new Player(this.canvas);

        this.player.iniciarlizar();
        
        const updateJuego = () => {
            if (Math.random() > 0.90) {
                const x = Math.random() * this.canvas.width;
                this.obstaculos.push(new Obstaculo(this.canvas, x));
            }
            this.update();
            this.clearCanvas();
            this.drawCanvas();
            window.requestAnimationFrame(updateJuego);
        }; 

        window.requestAnimationFrame(updateJuego);
    }
    update() {
        this.obstaculos.forEach((obst) => {
            obst.update();
        });
        //falta update de obstaculos aca.
    }

    drawCanvas(){
        this.player.dibujar();
        this.obstaculos.forEach((obst) => {
            obst.draw();
        });
        //falta dibujar obstaculos aca.
    }
    clearCanvas(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    };

    checkColisiones(){
        this.obstaculos.forEach((obst,index) => {
            if(this.player.checkColision(obst)){
                this.player.perderVida();
                this.obstaculos.splice(index,1);
                if (this.player.lives === 0){
                    this.gameOver = true;
                }
            }
        })
    }

    callbackGameOver(callback){
        this.onGameOver = callback;
    }

};