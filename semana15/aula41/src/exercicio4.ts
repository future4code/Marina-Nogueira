type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a) No terminal, usaria o comando "tsc exercicio4.ts"
//b) Sim, teríamos que entrar dentro da pasta src no terminal ou indicar o caminho para o arquivo na linha de comando.
//c) Sim, usando o comando "tsc" é possível transpilar todos os arquivos da pasta src.
//d) A propriedade target está diferente, o ideal é usar o "es6". Ainda não tenho certeza sobre o que essas propriedades significam.