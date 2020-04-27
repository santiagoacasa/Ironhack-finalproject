window.onload = () => {
    player.iniciarlizar();
    document.onkeydown = () => {
        player.mover(event);
        requestAnimationFrame(player.dibujar);
    };
}
