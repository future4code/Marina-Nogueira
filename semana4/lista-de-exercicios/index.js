// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

// O código mostra uma função chamada conversorDeMoeda, 
// cujo parâmetro é valorEmDolar.
// Dentro dessa função é criada a variável cotacao, cujo valor 
// vem da transformação em número do que é inserido no prompt
// "Informe o valor da cotação em Dólar."
// Depois disso, a função chama um return que vale a string "R$"
// + o resultado de valorEmDolar*cotacao.
// A condição é fechada e após ela, cria-se a variável meuDinheiro,
// cujo valor é a função conversorDeMoeda com parâmetro 100.
// O código é finalizado com o console.log, que irá imprimir na tela
// o valor de meuDinheiro.
// No caso, a mensagem impressa na tela seria R$18,10.

//                   ------------//--------------

// EXERCÍCIO 2

// O código é iniciado com a declaração da função investeDinheiro,
// cujos parâmetros são tipoDeInvestimento e valor.
// Dentro dessa função são criadas a variável valorAposInvestimento
// e o switch case que vai categorizar pelo tipoDeInvestimento.
// O primeiro case é "Poupança" e dentro dele a variável valorAposInvestimento
// vai resultar na multiplicação de valor por 1.03.
// O segundo case é "Renda Fixa" e dentro dele a variável valorAposInvestimento
// vai resultar na multiplicação de valor por 1.05.
// O terceiro case é "CDB" e dentro dele a variável valorAposInvestimento
// vai resultar na multiplicação de valor por 1.06.
// O quarto case é "Ações" e dentro dele a variável valorAposInvestimento
// vai resultar na multiplicação de valor por 1.1.
// Por último, o switch case chama o default, que vai imprimir o alerta
// "TIPO DE INVESTIMENTO INFORMADO INCORRETO" caso o parâmetro tipoDeInvestimento
// seja preenchido com outra possibilidade que não Poupança, Renda Fixa, CDB ou Ações.
// Após o final do switch case, a função chama o return, que vai informar o valor
// da variável valorAposInvestimento.
// A função é fechada e o código continua com a criação de duas variáveis:
// novoMontante e segundoMontante.
// A variável novoMontante é o resultado da função investeDinheiro com os parâmetros
// "Ações" e 150.
// A variável segundoMontante é o resultado da função investeDinheiro com os parâmetros
// "Tesouro Direto" e 200.
// Após isso, há dois console.log, um para imprimir a variável novoMontante e outro
// para imprimir a variável segundoMontante.
// O console.log(novoMontante) imprimiria na tela o valor 165.
// Já o console.log(segundoMontante) imprimiria undefined e a função resultaria no alert 
//"TIPO DE INVESTIMENTO INFORMADO INCORRETO",
// pois o parâmetro "Tesouro Direto" não existe no switch case.

//                   ------------//--------------

// EXERCÍCIO 3

// O código se inicia com a criação de 3 arrays:
// - numeros, que é uma array com elementos definidos;
// - array1, que é uma array vazia;
// - array2, que também é uma array vazia.
// Depois disso, o código abre um loop com uma condicional if else em que
// é criada a variável numero, referente aos elementos da array numeros.
// A condicional dá que se a variável numero for par, ela deverá
// ser incluída na array1.
// Se a variável numero for ímpar, ela dever ser incluída na array2.
// A condicional se fecha e o código chama três console.log:
// - o primeiro console.log irá imprimir na tela a string "Quantidade total
// de números" e o valor da lenght da array numeros;
//- o segundo console.log irá imprimir na tela o valor da length da array1;
//- o terceiro console.log irá imprimir na tela o valor da length da array2.
// O primeiro console.log imprime o valor 14; o segundo console.log
// imprime o valor 6; e o terceiro console.log imprime o valor 8.

//                   ------------//--------------

// EXERCÍCIO 4

// O código começa com a criação de uma array de números e de duas variáveis let chamadas
// numero1 e numero2 respectivamente. O valor de numero1 é Infinity e o valor de numero2 é
// 0.
// Depois, é criado o loop for...of, com a variável numero relacionada aos elementos da array
// numeros.
// Dentro do loop, há duas condicionais if. A primeira diz que se o valor de numero for menor
// que o valor de numero1, então numero1 é igual a numero.
// A segunda condicional diz que se o valor de numero for maior que o valor de numero2,
// então numero2 é igual a numero.
// O loop é fechado e dois console.log são chamados: o primeiro que imprime o valor de numero1
// e o segundo, que imprime o valor de numero2.
// O console.log(numero1) imprime -10 e o console.log(numero2) imprime 1590.

//---------------------------------------//--------------------------------------------------------------

// EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

// EXERCÍCIO 1

// 
