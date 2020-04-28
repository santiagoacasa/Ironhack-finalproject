const player = {
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
    dibujar() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    },
    iniciarlizar() {
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

}