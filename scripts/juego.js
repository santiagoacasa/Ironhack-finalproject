window.onload = () => {
    iniciarCanvas();
    player.iniciarlizar();
    document.addEventListener('keydown', event => player.mover(event));
    requestAnimationFrame(update);
}

function update(){
    iniciarCanvas();
    player.dibujar();
    requestAnimationFrame(update);
}
