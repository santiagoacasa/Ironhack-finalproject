const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

const player = {
    name: "",
    color: "",
    arrRGB: [255,0,0],
    x: 0,
    y:0,
    width: 20,
    height: 20,
    speedX: 6,
    speedY: 6,
    lives: 3,
    score: 0,
    dibujar(){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width,this.height);
    },
    iniciarlizar(){
       this.color = `rgb(${this.arrRGB[0]},${player.arrRGB[1]},${player.arrRGB[2]})`;
       this.x = 250;
       this.y = canvas.height - this.height;
       this.dibujar();
    },
    mover(event){
        switch (event.key) {
            case "ArrowLeft":
                if(this.x > 0){
                    this.x -= this.speedX;
                }
                break;
            case "ArrowRight":
                if(this.x < canvas.width){
                    this.x += this.speedX;
                }
                break;
            case "ArrowUp":
                if(this.y > 0){
                    this.y -= this.speedY;
                }
                break;
            case "ArrowDown":
                if(this.y < canvas.height){
                    this.y += this.speedY;
                }
                break;
            default:
                break;
        };
    }
}

const iniciarCanvas = function(){
    context.clearRect(0,0,canvas.width,canvas.height);
};