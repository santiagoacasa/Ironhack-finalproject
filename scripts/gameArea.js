
/* const iniciarCanvas = function (canvas) {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
};
*/



/* 
const obstaculos = {
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