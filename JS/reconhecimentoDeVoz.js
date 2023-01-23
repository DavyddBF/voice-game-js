const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute)
    exibeGameOver(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

function exibeGameOver(chute) {
    if(chute.toUpperCase() === 'GAME OVER') {
        document.body.innerHTML = `
            <h2>GAME OVER</h2>
            <h3>Você perdeu!!</3>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `

        document.body.style.backgroundColor = '#CF0A0A'
    }
}

recognition.addEventListener('end', () => recognition.start())