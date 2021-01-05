// a)

//Entradas: numeros (que é type array)
// Saídas: estatisticas (que é type object)

function obterEstatisticas(numeros: Array<number>) {

    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// ----------------------------------------------------------------------------------------------------------------

//b) As outras variáveis são numerosOrdenados, do tipo number; soma, do tipo number; e num, também do tipo number.

// ----------------------------------------------------------------------------------------------------------------

//c)
type estatisticas = {
    maior: number,
    menor: number,
    media: number
}

type amostraDeDados = {
    numeros: Array<number>,
    obterEstatisticas: (numeros: number) => estatisticas
}

console.log(obterEstatisticas([1, 5, 7, 9, 13]))