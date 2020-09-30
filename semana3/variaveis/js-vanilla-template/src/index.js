/* Exercícios de interpretação de código
1. console.log(b) será impresso como 10
 console.log(a, b) será impresso como 10 5

2. console.log(a, b, c) será impresso 10 10 10 */

// Exercícios de escrita de código

// Exercício 1
let nome
let idade
console.log (typeof nome)
console.log (typeof idade)

/* O tipo impresso é undefined, o que acontece por não 
existir nenhum valor atribuído às variáveis.*/

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome)
console.log(typeof idade)

/*Ambas as variáveis são do tipo string. Não sei porque,
imaginei que a variável idade seria do tipo number.*/

console.log(`Olá ${nome}, você tem ${idade} anos.`)

//Exercício 2
let endereço
endereço = prompt("Qual seu endereço?")
console.log(`Pergunta: Qual seu endereço? Resposta: ${endereço}`)

let residência
residência = prompt("Você mora em casa ou apartamento?")
console.log(`Pergunta: Você mora em casa ou apartamento? Resposta: ${residência}`)

let cor
cor = prompt("Qual sua cor favorita?")
console.log(`Pergunta: Qual sua cor favorita? Resposta: ${cor}`)

let animal
animal = prompt("Qual seu animal favorito?")
console.log(`Pergunta: Qual seu animal favorito? Resposta: ${animal}`)

let comida
comida = prompt("Qual sua comida predileta?")
console.log(`Pergunta: Qual sua comida predileta? Resposta: ${comida}`)

//Exercício 3
let arrayComidasPreferidas = ['mexerica', 'creme de milho', 'beijinho', 'manga', 'chocolate']
console.log(arrayComidasPreferidas)
console.log(`Essas são minhas comidas preferidas: ${arrayComidasPreferidas[0]}
${arrayComidasPreferidas[1]}
${arrayComidasPreferidas[2]} 
${arrayComidasPreferidas[3]}
${arrayComidasPreferidas[4]}`)

arrayComidasPreferidas[1] = comida

console.log(`Essas são minhas comidas preferidas: ${arrayComidasPreferidas[0]}
${arrayComidasPreferidas[1]}
${arrayComidasPreferidas[2]} 
${arrayComidasPreferidas[3]}
${arrayComidasPreferidas[4]}`)

//Exercício 4
let arrayPerguntas = ['Você está com calor?', 
'Está chovendo agora?', 
'Você tem boca?']
let arrayRespostas = [true, false, true]

console.log(`${arrayPerguntas[0]} ${arrayRespostas[0]}`)
console.log(`${arrayPerguntas[1]} ${arrayRespostas[1]}`)
console.log(`${arrayPerguntas[2]} ${arrayRespostas[2]}`)