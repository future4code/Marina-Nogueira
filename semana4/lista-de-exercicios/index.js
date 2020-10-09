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
// Já o console.log(segundoMontante) resultaria no alert "TIPO DE INVESTIMENTO INFORMADO INCORRETO",
// pois o parâmetro "Tesouro Direto" não existe no switch case da função.

//                   ------------//--------------