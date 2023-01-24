    // VALIÇÃO DE FALA - VALIDA SE O QUE O USUÁRIO DISSE ESTÁ CORRETO OU ERRADO

// função principal de verificação do que o usuário diz
function verificaSeOChutePossuiUmValorValido() {
    // adiciona o chute a uma variavel numero
    const numero = +chute

    // chama a função chuteForValido recebendo como parametro o chute do usuario
    if(chuteForInvalido(numero)) {
        // se der um NaN, ele modifica o HTML e adiciona a div(id="chute") uma nova div dizendo valor invalido
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        // retorna o resultado da função caso não ocorra nada
        return
    }

    // chama a função que recebe como parametro o chute do usuario
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        // aqui avisa o usuario entre quais valores está o numero secreto
        // modifica a div(id="chute") adicionando uma nova div falando que o valor está entre o menor e o maior valor
        elementoChute.innerHTML += `
        <div>Valor invalido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        // retorna o resultado da função caso não ocorra nada
        return
    }

    // verica se o chute do usuario é igual ao numero secreto salvo numa variavel que está no arquivo sortearNumero.js
    if (numero === numeroSecreto) {
        // caso true, ele modifica o body adicionando informações como que o usuario acertou o numero secreto
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        // caso não seja igual ele verifica se o numero secreto esta maior ou menor. Verificando se o chute é maior que o numero secreto
        // caso seja ele modifica a div(id="chute") e fiz se o valor é menor
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        // caso o chute seja menor que o numero secreto ele executará essa condição
        // se o chute for menor que o numero secreto ele da a dica que é um numero maior
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

// função que retorna a condição para um if
function chuteForInvalido(numero) {
    // verifica se o chute é um numero
    return Number.isNaN(numero)
}

// função que retorna a condição para um if
function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    // verifica se o chute é maior que o numero maximo ou se o chute é menor que o numero minimo
    return numero > maiorValor || numero < menorValor
}

// cria um evento que quando clicar aciona uma função
document.body.addEventListener('click', evento => {
    // se o evento tiver um id igual a 'jogar-novamente' ele recarrega a pagina
    if(evento.target.id === 'jogar-novamente') {
        window.location.reload()
    }
})