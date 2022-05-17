var vid = document.getElementById("myPlayer");
vid.volume = .1;

// 1) adicionando a variavel do mp3
let musica = document.querySelector('audio');


// 2) click - adicionando um evento no botão play
const btnPlay = document.querySelector('.botao-play')
const btnPause = document.querySelector('.botao-pause')
btnPlay.addEventListener('click', tocarMusica);
btnPause.addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);


// 5) VERIFICAR SE A MUSICA ESTÁ TOCANDO


// 3) FUNÇÃO TOCAR MUSICA. Quando a música estiver tocando o botao pause aparecerá 
// e o botao play ficará oculto.
function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}


// 4) FUNÇÃO PAUSAR MUSICA
function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';

}

function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    // if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return minutes + ':' + seconds; // Return is HH : MM : SS
}


function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor(
        (musica.currentTime / musica.duration) * 100
    ) + '%';

    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = convertHMS(
        Math.floor(musica.currentTime)
    );
}