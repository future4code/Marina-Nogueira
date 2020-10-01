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

// let nomeCompleto = prompt("Digite seu nome completo.")
// let tipoJogo = prompt("Que tipo de jogo você quer assistir? Escreva IN para internacional ou DO para doméstico.").toLowerCase()
// let etapaJogo = prompt("Qual jogo você quer assistir? Escreva SF para semifinal, DT para decisão de terceiro lugar ou FI para final.").toLowerCase()
// let categoria = Number(prompt("Qual categoria de ingresso você quer comprar? Escreva 1, 2, 3 ou 4."))
// let quantidade = Number(prompt("Quantos ingressos você quer comprar?"))
// let valorJogoSF1 = 1320 
// let valorTotalReais
// let valorTotalDolares

// if (etapaJogo === "sf") {
//     if (categoria === 1) {
//         valorTotalReais = quantidade * valorJogoSF1
//         if (tipoJogo === in) {
//             valorTotalDolares = valorTotalReais / 4.1
//             console.log("---Dados da compra---
//             Nome: " + nomeCompleto
//             "Tipo do jogo: " + tipoJogo
//             "Etapa do jogo: " + etapaJogo
//             "Categoria: " + categoria
//             "Quantidade de Ingressos: " + quantidade
//             "---Valores---"
//             "Valor do ingresso: R$ " + valorJogoSF1
//             "Valor total: R$ " + valorTotalDolares)
//         }
//     }
// }

// if (etapaJogo === sf) {
//     switch (categoria) {
//         case 1:
//             valorJogoSF1
//     }
// }






