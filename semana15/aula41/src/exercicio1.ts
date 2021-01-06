//a)
let minhaString: string = "3"

// Se o valor atribuído à variável for um número, ocorre um erro, pois o tipo dela é string.

// ----------------------------------------------------------------------------------------------------------------

//b)
let meuNumero: number = 24

// Para que a variável aceite number e string, devemos usar o union type. No caso, a variável ficaria assim:

let meuNumero2: number | string = 24

// ----------------------------------------------------------------------------------------------------------------

//c) , d)
const pessoa: { nome: string, idade: number, corFavorita: string} = {
    nome: "Marina",
    idade: 30,
    corFavorita: "laranja"
}

type person = {
    nome: string,
    idade: number,
    corFavorita: string
}

// Utilizei o type para definir as propriedades que o objeto deve ter.

const pessoa1: person = {
    nome: "Diana",
    idade: 32,
    corFavorita: "azul"
}

const pessoa2: person = {
    nome: "Fer",
    idade: 36,
    corFavorita: "verde"
}

const pessoa3: person = {
    nome: "Laura",
    idade: 7,
    corFavorita: "cinza"
}

// ----------------------------------------------------------------------------------------------------------------


//e)

enum Cores {
    VIOLETA = "violeta",
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELHO = "vermelho"
}

type person2 = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

const pessoa4: person2 = {
    nome: "Leia",
    idade: 5,
    corFavorita: Cores.VERMELHO
}