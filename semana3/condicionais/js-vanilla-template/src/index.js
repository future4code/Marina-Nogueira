// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// Exercício 1

// O código mostrado no exercício serve para testar se o número inserido pelo usuário é par ou ímpar.
// Se o resto da divisão por 2 for 0, o número é par (mensagem Passou no teste.)
// Se o resto da divisão por 2 for 1, o número é ímpar (mensagem Não passou no teste.)

// Exercício 2

// a) O código do exercício 2 serve para mostrar o preço de determinadas frutas.
// b) A mensagem impressa será "O preço da fruta maçã é RS2.25."
// c) A mensagem seria de erro.

// Exercício 3

// a) A primeira linha está declarando a variável numero e mandando uma mensagem para usuários, pedindo que a pessoa digite o primeiro número.
// b) Se a pessoa digitar o número 10, a mensagem será "Esse número passou no teste". Se o número digitado fosse -10, não haveria nenhuma mensagem no terminal.
// c) Sim, pois não há uma condição declarada para valores menores ou iguais a 0.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// Exercício 4

// const idade = Number(prompt("Qual sua idade?"))

// if (idade >= 18) {
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")
// }


// Exercício 5

// const turno = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.").toLowerCase()

// if (turno === "m") {
//     console.log("Bom dia!")
// } else if (turno === "v") {
//     console.log("Boa tarde!")
// } else if (turno === "n") {
//     console.log("Boa noite!")
// } else {
//     console.log("Oier! (:")
// }


// Exercício 6

// const turno = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.").toLowerCase()

// switch (turno) {
//     case "m":
//         console.log("Bom dia!")
//         break
//     case "v":
//         console.log("Boa tarde!")
//         break
//     case "n":
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("Oier! (:")            
// }


// Exercício 7

// let genero = prompt("Qual o gênero do filme?").toLowerCase()
// let preco = Number(prompt("Qual o preço do ingresso?"))

// if (genero === "fantasia" && preco <= 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }


// DESAFIOS
// Desafio 1

// let genero = prompt("Qual o gênero do filme?").toLowerCase()
// let preco = Number(prompt("Qual o preço do ingresso?"))

// if (genero === "fantasia" && preco <= 15) {
//     let snack = prompt("Qual snack você quer comprar?").toLowerCase()
//     console.log("Bom filme!")
//     console.log("... com " + snack)
// } else {
//     console.log("Escolha outro filme :(")
// }


// Desafio 2

let nomeCliente = prompt("Digite seu nome completo:")
let tipoJogo = prompt("Escolha um tipo de jogo. Digite DO para jogo doméstico e IN para jogo internacional.").toLowerCase()
let etapaJogo = prompt("Escolha a etapa do jogo. Digite SF para semifinal, DT para decisão de terceiro lugar e FI para final.").toLowerCase()
let categoria = Number(prompt("Escolha uma categoria de 1 a 4"))
let quantidade = Number(prompt("Digite a quantidade de ingressos a ser adquirida."))
let valorIngresso
let valorTotal

if (etapaJogo === "sf") {
    switch (categoria) {
        case 1:
            valorIngresso = 1320
            valorTotal = valorIngresso * quantidade
            break;
        case 2:
            valorIngresso = 880
            valorTotal = valorIngresso * quantidade
            break;
        case 3:
            valorIngresso = 550
            valorTotal = valorIngresso * quantidade
            break;
        case 4:
            valorIngresso = 220
            valorTotal = valorIngresso * quantidade
            break;

        default:
            console.log("Categoria não encontrada. Tente novamente.")
            break;
    }
}

if (etapaJogo === "dt") {
    switch (categoria) {
        case 1:
            valorIngresso = 660
            valorTotal = valorIngresso * quantidade
            break;
        case 2:
            valorIngresso = 440
            valorTotal = valorIngresso * quantidade
            break;
        case 3:
            valorIngresso = 330
            valorTotal = valorIngresso * quantidade
            break;
        case 4:
            valorIngresso = 170
            valorTotal = valorIngresso * quantidade
            break;

        default:
            console.log("Categoria não encontrada. Tente novamente.")
            break;
    }
}

if (etapaJogo === "fi") {
    switch (categoria) {
        case 1:
            valorIngresso = 1980
            valorTotal = valorIngresso * quantidade
            break;
        case 2:
            valorIngresso = 1320
            valorTotal = valorIngresso * quantidade
            break;
        case 3:
            valorIngresso = 880
            valorTotal = valorIngresso * quantidade
            break;
        case 4:
            valorIngresso = 330
            valorTotal = valorIngresso * quantidade
            break;

        default:
            console.log("Categoria não encontrada. Tente novamente.")
            break;
    }
}

switch (tipoJogo) {
    case "do":
        tipoJogo = "Nacional"
        valorIngresso = "R$ " + valorIngresso
        valorTotal = "R$ " + valorTotal
        break;
    case "in":
        tipoJogo = "Internacional"
        valorIngresso = valorIngresso / 4.1
        valorTotal = valorTotal / 4.1
        valorIngresso = "U$ " + valorIngresso
        valorTotal = "U$ " + valorTotal
        break;

    default:
        console.log("Tipo de jogo não encontrado. Tente novamente.")
        break;
}

switch (etapaJogo) {
    case "sf":
        etapaJogo = "SemiFinal"
        break;
    case "dt":
        etapaJogo = "Decisão do 3º lugar"
        break;
    case "fi":
        etapaJogo = "Final"
        break;
    default:
        console.log("Etapa de jogo não encontrada. Tente novamente.")
        break;
}

console.log(`---Dados da compra---
Tipo do jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidade}
---Valores---
Valor do ingresso: ${valorIngresso}
Valor Total: ${valorTotal}`)