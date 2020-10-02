/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log("Bem-vinde ao jogo de BlackJack!")
 
 let pontuacaoPessoa
 let pontuacaoPC

  if (confirm("Quer iniciar uma nova rodada?")) {
      const primeiraCartaPessoa = comprarCarta()
      const segundaCartaPessoa = comprarCarta()
      const primeiraCartaPC = comprarCarta()
      const segundaCartaPC = comprarCarta()

      pontuacaoPessoa = primeiraCartaPessoa.valor + segundaCartaPessoa.valor
      pontuacaoPC = primeiraCartaPC.valor + segundaCartaPC.valor

      console.log("Você - cartas: " + primeiraCartaPessoa.texto + " " + segundaCartaPessoa.texto)
      console.log("pontuação: " + pontuacaoPessoa)
      console.log("Computador - cartas: " + primeiraCartaPC.texto + " " + segundaCartaPessoa.texto)
      console.log("pontuação: " + pontuacaoPC)

      if (pontuacaoPessoa > pontuacaoPC) {
         console.log("Parabéns! Você ganhou!")
      } else if (pontuacaoPC > pontuacaoPessoa) {
         console.log("Que pena, o computador venceu. :/")
      } else {
         console.log("Empate!")
      }
  } else {
     console.log("O jogo acabou.")
  }