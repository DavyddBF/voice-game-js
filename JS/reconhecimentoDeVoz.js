    // RECONHECIMENTO DE VOZ - CHAMADA DE FUNÇÕES E CONDIÇÕES

const elementoChute = document.getElementById('chute')

// Ativação do reconhecimento de voz
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

// adicionando o reconhecimento numa constante
const recognition = new SpeechRecognition();
// mudando o idioma para português e iniciando ela na web
recognition.lang = 'pt-br'
recognition.start()

// cria um evento que quando vir o resultado do que foi falado ele chama as funções de exibir itens na tela
recognition.addEventListener('result', onSpeak)

// função que chama outras funções que exibe coisas na tela
function onSpeak(evento) {
    // adiciona a variavel chute o que o usuario falou. Acessando o evento e pegando a fala no transcript
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute)
    exibeGameOver(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

// recebe como parametro o chute ou o que o usuario disse e modifica a div chute adicionando outros elementos ao HTML
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

// função que exibe o game over recebendo como parametro o que o usuario diz
function exibeGameOver(chute) {
    // condição. Verifica se o chute do usuário colocado em maiusculo com a função toUpperCase é igual a GAME OVER
    if(chute.toUpperCase() === 'GAME OVER') {
        // se for true ele executa e modifica o body adicionando novos elementos e falando qual o número secreto e com um botão de reiniciar a partida
        document.body.innerHTML = `
            <h2>GAME OVER</h2>
            <h3>Você perdeu!!</3>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `

        // mudança de cor de fundo do body
        document.body.style.backgroundColor = '#CF0A0A'
    }
}

// evento que quando o reconhecimento de voz terminar (end), ele ativa novamente dando um start()
recognition.addEventListener('end', () => recognition.start())