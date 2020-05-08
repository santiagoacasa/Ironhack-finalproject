const musica = {
    menu: {
        src: "sound/menu.ogg",
        loop: true,
        volume: 0.20,
        isPlaying: false,
    },
    pierdeVida: {
        src: "sound/pierdevida.ogg",
        loop: false,
        volume: 0.6,
    },
    juntaPuntos: {
        src: "sound/points.ogg",
        loop: false,
        volume: 0.15,
    },
    gameOver: {
        src: "sound/nelson.ogg",
        loop: false,
        volume: 0.2,
    },
    botonSalir: {
        src: "sound/salir.ogg",
        loop: false,
        volume: 0.06,
    },
    botonX:{
        src: "sound/apretarboton.ogg",
        loop: false,
        volume: 0.05,
    },
    stopAudio(audio){
        audio.pause();
        audio.currentTime = 0;
    }
}