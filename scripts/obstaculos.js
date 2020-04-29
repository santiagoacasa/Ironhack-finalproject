"use strict"
class Obstaculo {
    constructor(canvas, x){
        this.size = 20;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.red = 'rgb(255,0,0)';
        this.green = 'rgb(0,255,0)';
        this.blue = 'rgb(0,0,255)';
        this.arrRGB = [];
        this.x = x;
        this.y = 0;
        this.speed = 5;
        this.direction = -1;
    }​
    update() {
        this.x = this.x + this.direction * this.speed;
    }​
    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y - this.size / 2, this.size, this.size);
    }​
    setDirection(direction) {
        this.direction = direction;
    }
};

/* const obstaculos = {
    arrRGB: ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)'],
    crear() {
        let obst = {
            x: 0,
            y: 20, //Valor de prueba
            width: 20,
            height: 20,
            speedX: 12,
            speedY: 12,
            color: "",
        }
        obst.x = (Math.random() * canvas.width);
        obst.color = this.arrRGB[Math.floor(Math.random() * this.arrRGB.length)];
        this.obstaculos.push(obst);
    },
    dibujar() { //Van a ser circulos, haciendo rectangulos para probar
        this.obstaculos.forEach(elem => {
            context.fillStyle = elem.color;
            context.fillRect(Math.random() * canvas.width, elem.y, elem.width, elem.height);
        });
    },
    updatePosicion() {
        this.obstaculos.forEach(elem => {
            elem.y += 5;
        })
    }

}
*/