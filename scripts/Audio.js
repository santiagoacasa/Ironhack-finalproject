const musica = {
    menu: {
        src: "sound/menu.ogg",
        loop: true,
        volume: 0.10,
        isPlaying: false,
    },
    pierdeVida: {
        src: "sound/pierdevida.ogg",
        loop: false,
        volume: 0.5,
    },
    juntaPuntos: {
        src: "sound/points.ogg",
        loop: false,
        volume: 0.3,
    },
    gameOver: {
        src: "sound/nelson.ogg",
        loop: false,
        volume: 0.2,
    },
    botonSalir: {
        src: "sound/salir.ogg",
        loop: false,
        volume: 0.04,
    },
    botonX:{
        src: "sound/apretarboton.ogg",
        loop: false,
        volume: 0.03,
    },
    stopAudio(audio){
        audio.pause();
        audio.currentTime = 0;
    }
}