"use strict";
class Obstaculo {
    constructor(canvas, x,color) {
        this.size = 20;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.red = 'rgb(255,0,0)';
        this.green = 'rgb(0,255,0)';
        this.blue = 'rgb(0,0,255)';
        this.arrRGB = ['rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)'];
        this.color = color;
        this.x = x;
        this.y = 0;
        this.speed = 5;
    }
    update() {
        this.y = this.y + this.speed;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y - this.size / 2, this.size, this.size);
    };
};
