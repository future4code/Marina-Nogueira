// // EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// // Exercício 1

// a. false
// b. false
// c. true
// d. boolean


// // Exercício 2

// a. undefined
// b. null
// c. 11
// d. 3
// e. array = [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f. 9


// // EXERCÍCIOS DE ESCRITA DE CÓDIGO
// // Exercício 1

// let idade = prompt("Qual sua idade?")
// let idadeMelhorAmiga = prompt("Qual a idade da sua melhor amiga?")

// let maior = Number(idade) > Number(idadeMelhorAmiga)
// let diferença = Number(idade) - Number(idadeMelhorAmiga)

// console.log("Sua idade é maior do que a da sua melhor amiga? " + maior)
// console.log(diferença)


// //Exercício 2

// let numeroPar = prompt("Insira aqui um número par.")
// let resto = Number(numeroPar)%2

// console.log(resto)

//c. Usando apenas números pares, o resto da divisão é sempre 0.

//d. Se for usado um número ímpar, o resto será diferente de 0.


// //Exercício 3

// let listaDeTarefas = []

// let tarefa1 = prompt("Escreva uma tarefa que você precisa realizar hoje.")
// listaDeTarefas.push(tarefa1)

// let tarefa2 = prompt("Escreva outra tarefa que você precisa fazer hoje.")
// listaDeTarefas.push(tarefa2)

// let tarefa3 = prompt("Escreva uma terceira tarefa que você precisa fazer hoje.")
// listaDeTarefas.push(tarefa3)

// console.log(listaDeTarefas)

// let tarefaRealizada = prompt("Digite o índice de uma tarefa já realizada (0, 1 ou 2)")
// listaDeTarefas.splice(Number(tarefaRealizada), 1)

// console.log(listaDeTarefas)


// //Exercício 4

// let nome = prompt("Qual seu nome?")
// let emailDaPessoa = prompt("Qual seu email?")
// const mensagem = "O email " + emailDaPessoa + " foi cadastrado com sucesso. Seja bem-vinde, " + nome + "."

// console.log(mensagem)


// //DESAFIOS
// //Desafio 1
// //a)
// let kelvin1 = (77 - 32)*5/9 + 273.15
// console.log(kelvin1 + "K")

// //b)
// let fahrenheit1 = 80*9/5 + 32
// console.log(fahrenheit1 + "ºF")

// //c)
// let fahrenheit2 = 30*9/5 + 32
// console.log(fahrenheit2 + "ºF")

// let kelvin2 = (fahrenheit2 -32)*5/9 +273.15
// console.log(kelvin2 + "K")

// //d)
// let celsius = prompt("Insira uma temperatura em graus Celsius, sem unidade.")

// let fahrenheit3 = Number(celsius)*9/5 + 32
// console.log(fahrenheit3 + "ºF")

// let kelvin3 = (fahrenheit3 -32)*5/9 + 273.15
// console.log(kelvin3 + "K")


// //Desafio 2
// //a)
// let conta = 280 * 0.05
// console.log("R$" + conta)

// //b)
// let conta2 = (280 * 0.05) * .85
// console.log("R$" + conta2)


// //Desafio 3
// //a)
// let libra = 20
// let quilo1 = libra/2.205
// console.log("20lb equivalem a " + quilo1 + "kg")

// //b)
// let ounce = 10.5
// let quilo2 = ounce/35.274
// console.log("10.5oz equivalem a " + quilo2 + "kg")

// //c)
// let milha = 100
// let metro1 = milha * 1609
// console.log("100mi equivalem a " + metro1 + "m")

// //d)
// let pes = 50
// let metro2 = pes/3.281
// console.log("50ft equivalem a " + metro2 + "m")

// //e)
// let galao = 103.56
// let litro1 = galao * 3.785
// console.log("103.56gal equivalem a " + litro1 + "l")

// //f)
// let xicara = 450
// let litro2 = (xicara * 6) / 25
// console.log("450xic equivalem a " + litro2 + "l")

// //g)
// let pes2 = prompt("Insira um valor em pés, sem a unidade.")
// let metro3 = Number(pes2) / 3.281
// console.log(pes2 + "ft equivalem a " + metro3 + "m")