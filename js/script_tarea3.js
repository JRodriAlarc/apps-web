document.getElementById('song-1').innerHTML = "Bye Bye";
document.getElementById('song-2').innerHTML = "MLQHD";
document.getElementById('song-3').innerHTML = "Raro";

const music = document.querySelector('#Cancion');
const image = document.querySelector('.imagen');

function datosCancion1(){
    music.src = "../music/ByeBye.mp3";
    image.style.backgroundImage = 'url(../img/song-1.webp)';
}

function datosCancion2(){
    music.src = "../music/MLQHD.mp3";
    image.style.backgroundImage = 'url(../img/song-2.jpg)';
}

function datosCancion3(){
    music.src = "../music/RARO.mp3";
    image.style.backgroundImage = 'url(../img/song-3.jfif)';
}