"use strict"

class Player {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.name = "";
        this.color = "";
        this.red = 'rgb(255,0,0)';
        this.green = 'rgb(0,255,0)';
        this.blue = 'rgb(0,0,255)';
        this.arrRGB = [];
        this.x = 0;
        this.y = 0;
        this.width = 20;
        this.height = 20;
        this.speedX = 12;
        this.speedY = 12;
        this.lives = 3;
        this.score = 0;
    }
    dibujar() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
    };
    iniciarlizar(){
        this.color = this.red;
        this.x = this.canvas / 2;
        this.y = this.canvas.height - this.height;
        this.arrRGB.push(this.red, this.green, this.blue);
        this.dibujar();
    };
    mover(event) {
        switch (event.code) {
            case "ArrowLeft":
                if (this.x >= 0) {
                    this.x -= this.speedX;
                }
                break;
            case "ArrowRight":
                if (this.x <= this.canvas.width) {
                    this.x += this.speedX;
                }
                break;
            case "ArrowUp":
                if (this.y >= 0) {
                    this.y -= this.speedY;
                }
                break;
            case "ArrowDown":
                if (this.y < this.canvas.height) {
                    this.y += this.speedY;
                }
                break;
            default:
                break;
        };
    };
    perderVida(){
        this.lives--;
    }

}

/*const player = {
    name: "",
    color: "",
    red: 'rgb(255,0,0)',
    green: 'rgb(0,255,0)',
    blue: 'rgb(0,0,255)',
    arrRGB: [],
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    speedX: 12,
    speedY: 12,
    lives: 3,
    score: 0,
    dibujar(canvas) {
        const context = canvas.getContext('2d');
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    },
    iniciarlizar(canvas) {
        this.color = this.red;
        this.x = 250;
        this.y = canvas.height - this.height;
        this.arrRGB.push(this.red, this.green, this.blue);
        this.dibujar();
    },
    mover(event) {
        switch (event.code) {
            case "ArrowLeft":
                if (this.x >= 0) {
                    this.x -= this.speedX;
                }
                break;
            case "ArrowRight":
                if (this.x <= canvas.width) {
                    this.x += this.speedX;
                }
                break;
            case "ArrowUp":
                if (this.y >= 0) {
                    this.y -= this.speedY;
                }
                break;
            case "ArrowDown":
                if (this.y < canvas.height) {
                    this.y += this.speedY;
                }
                break;
            default:
                break;
        };
    },

}*/