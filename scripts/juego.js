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
        const updateJuego = () => {
            if (Math.random() > 0.90) {
                const x = Math.random() * this.canvas.width;
                this.obstaculos.push(new Obstaculo(this.canvas, x));
            }
            
        }
        this.player.iniciarlizar();
        this.player.dibujar();
    }
};