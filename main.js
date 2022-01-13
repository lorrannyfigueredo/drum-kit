'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const exibirSons = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

const addicionarEfeito = (letra) => document.getElementById(letra)
.classList.add('active');

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removerActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removerActive);
}

const ativarDiv = (evento) => {
   /*  let letra = ''; */

    let letra = evento.type === 'click' ? evento.target.id : evento.key.toUpperCase();

/*     if (evento.type === 'click') {
        letra = evento.target.id;
    } else {
        letra = evento.key.toUpperCase();
    } */

    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        addicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}

exibirSons(sons);

window.addEventListener('keydown', ativarDiv);

document.getElementById('container').addEventListener('click', ativarDiv);