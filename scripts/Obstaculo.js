"use strict";
class Obstaculo {
    constructor(canvas, x,color,radius) {
        this.size = radius;
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.color = color;
        this.x = x;
        this.y = 0;
        this.speed = 4;
    }
    update() {
        this.y = this.y + this.speed;
    }

    updateSpeed(){
        ++this.speed;
    };

    draw() {
        this.context.fillStyle = this.color;
        this.context.save();
        this.context.beginPath();
        this.context.arc(this.x,this.y, this.size, 0, 2 * Math.PI);
        this.context.fill();
        this.context.restore();
    };
};
