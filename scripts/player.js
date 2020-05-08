"use strict"

class Player {
    constructor(canvas){
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.name = "";
        this.color = "";
        this.red = 'rgb(255,0,0)';
        this.x = 0;
        this.y = 0;
        this.size = 20
        this.speedX = 30;
        this.speedY = 30;
        this.lives = 3;
        this.score = 0;
        this.perderVidaSound = new Audio(musica.pierdeVida.src);
    }
    iniciarlizar(){
        this.color = this.red;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - this.size;
        this.name = document.querySelector("#nombreUsuario span").innerHTML;
        this.dibujar();
    };

    dibujar() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.size, this.size);
    };
    mover(event) {
        switch (event.code) {
            case "ArrowLeft":
                if (this.x - this.size / 2 > 0) {
                    this.x -= this.speedX;
                }
                break;
            case "ArrowRight":
                if (this.x + this.size < this.canvas.width) {
                    this.x += this.speedX;
                }
                break;
            case "ArrowUp":
                if (this.y - this.size > 0) {
                    this.y -= this.speedY;
                }
                break;
            case "ArrowDown":
                if (this.y + this.size < this.canvas.height) {
                    this.y += this.speedY;
                }
                break;
            default:
                break;
        };
    }

    checkColision(obstaculo){
        const colisionDerecha = this.x + this.size / 2 > obstaculo.x - (obstaculo.size - 2);
        const colisionIzquierda = this.x - this.size / 2 < obstaculo.x + (obstaculo.size - 2);
        const colisionArriba = this.y + this.size / 2 > obstaculo.y - (obstaculo.size - 2);
        const colisionAbajo = this.y - this.size / 2 < obstaculo.y + (obstaculo.size - 2);
        if (colisionArriba && colisionDerecha && colisionIzquierda && colisionAbajo){
            return true;
        } 
        return false;
    }

    randomPlayerColor(colorArr) {
        this.color = colorArr[Math.floor(Math.random() * colorArr.length)];

    }

    perderVida(){
        const displayVidas = document.getElementById("vidas")
        const vidas = document.querySelectorAll("#vidas span");
        if(vidas.length != 0){
            displayVidas.removeChild(vidas[0]);
        }
        this.perderVidaSound.play();
        this.lives--;
    }

}