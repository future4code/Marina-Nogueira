// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// EXERCÍCIO 1

// O código do exercício está criando um laço.
// O resultado impresso no console é 10.


// EXERCÍCIO 2

// a) Os elementos 19, 21, 23, 25, 27, 30 serão impressos no console.
//b) Sim, o for...of... é suficiente. O código abaixo poderia ser usado:

// let i = 0
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// for (let numero of lista) {
//     console.log("Index: " + i)
//     if (numero > 0) {
//         console.log(numero)
//     }
//     i++
// }


// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 3

    // const arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
// a)

// for (let elemento of arrayOriginal) {
//     console.log(elemento)
// }

// b)

    // for (let elemento of arrayOriginal) {
    //     console.log(elemento / 10)
    // }

// c)

// let arrayPares = []

// for (let i = 0; i < arrayOriginal.length; i++) {
//     if (arrayOriginal[i] % 2 === 0) {
//         arrayPares.push(arrayOriginal[i])
//     }
// }
// console.log(arrayPares)

// d)
// 
// let index = 0

// for (let numero of arrayOriginal) {
//     console.log("O elemento do index " + index + " é: " + numero)
//     index++
// }

// e)

// let valorMaximo = 0
// let valorMinimo = 70

// for (let index = 0; index < arrayOriginal.length; index++) {
//     let elementoValorMaximo = arrayOriginal[index]

//     if (valorMaximo < elementoValorMaximo) {
//         valorMaximo = elementoValorMaximo
//     }

//     let elementoValorMinimo = arrayOriginal[index]

//     if (valorMinimo > elementoValorMinimo) {
//         valorMinimo = elementoValorMinimo
//     }
// }

// console.log("O maior número é " + valorMaximo + " e o menor é " + valorMinimo)