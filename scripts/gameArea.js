"use strict"

const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');


const iniciarCanvas = function(){
    context.clearRect(0,0,canvas.width,canvas.height);
};

const randomColor = function(obj){
    obj.color = obj.arrRGB[Math.floor(Math.random() * obj.arrRGB.length)];
};

const setPlayerName = function(){
    let playerName = document.querySelector("#playerName");
    let newPlayer = document.querySelector("#nombreUsuario span"); 
    newPlayer.innerHTML = `Hola ${playerName.value}!`;
}
