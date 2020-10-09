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
      let primeiraCartaPessoa = comprarCarta()
      let segundaCartaPessoa = comprarCarta()
      let primeiraCartaPC = comprarCarta()
      let segundaCartaPC = comprarCarta()

      if ((primeiraCartaPessoa.valor === 11) && (segundaCartaPessoa.valor === 11)) {
         primeiraCartaPessoa = comprarCarta()
         segundaCartaPessoa = comprarCarta()
         alert(primeiraCartaPessoa.texto + " " + segundaCartaPessoa.texto + " = 22. Sortear novamente!")
      } else if ((primeiraCartaPC.valor === 11) && (segundaCartaPC.valor === 11)) {
         primeiraCartaPC = comprarCarta()
         segundaCartaPC = comprarCarta()
         alert(primeiraCartaPC.texto + " " + segundaCartaPC.texto + " = 22. Sortear novamente!")
      } else {
         pontuacaoPessoa = primeiraCartaPessoa.valor + segundaCartaPessoa.valor
         pontuacaoPC = primeiraCartaPC.valor + segundaCartaPC.valor

         let arrayCartasExtras = []
         let arrayCartasExtrasPC = []

         if (confirm("Suas cartas são: " + primeiraCartaPessoa.texto + ", " + segundaCartaPessoa.texto + ". A carta revelada do computador é "
         + primeiraCartaPC.texto + "." + "\n" + "Deseja comprar mais uma carta?")) {
                        
            while(pontuacaoPessoa < 21
               //  && confirm("Deseja comprar mais uma carta?")
                ) {
               let cartaExtra = comprarCarta()
               arrayCartasExtras.push(cartaExtra.texto)
               confirm("Suas cartas são " + primeiraCartaPessoa.texto + ", " + segundaCartaPessoa.texto + ", " + arrayCartasExtras + 
               ". A carta revelada do computador é " + primeiraCartaPC.texto + ".")
               // + "\n" + "Deseja comprar mais uma carta?"
               pontuacaoPessoa += cartaExtra.valor
            }
            alert("Suas cartas são " + primeiraCartaPessoa.texto + ", " + segundaCartaPessoa.texto + ", " + arrayCartasExtras + 
            ". Sua pontuação é " + pontuacaoPessoa + ". As cartas do computador são " + primeiraCartaPC.texto + ", " + segundaCartaPC.texto + 
            ". A pontuação do computador é " + pontuacaoPC + ". O computador venceu!")
         } else {
               while(pontuacaoPC <= pontuacaoPessoa) {
               let cartaExtraPC = comprarCarta()
               arrayCartasExtrasPC.push(cartaExtraPC.texto)
               pontuacaoPC += cartaExtraPC.valor
            }
            if (pontuacaoPessoa > pontuacaoPC) {
               alert ("Suas cartas são " + primeiraCartaPessoa.texto + ", " + segundaCartaPessoa.texto + ", " + arrayCartasExtras + 
               ". Sua pontuação é " + pontuacaoPessoa + ". As cartas do computador são " + primeiraCartaPC.texto + ", " + segundaCartaPC.texto + ", " + 
               arrayCartasExtrasPC + ". A pontuação do computador é " + pontuacaoPC + ". Parabéns, você venceu!")
            } else if ((pontuacaoPessoa < pontuacaoPC) && (pontuacaoPC <=21)) {
               alert("Suas cartas são " + primeiraCartaPessoa.texto + " " + segundaCartaPessoa.texto + " " + arrayCartasExtras + 
               ". Sua pontuação é " + pontuacaoPessoa + ". As cartas do computador são " + primeiraCartaPC.texto + " " + segundaCartaPC.texto + 
               arrayCartasExtrasPC + ". A pontuação do computador é " + pontuacaoPC + ". O computador venceu!")
            } else if (pontuacaoPessoa === pontuacaoPC) {
               alert("Suas cartas são " + primeiraCartaPessoa.texto + " " + segundaCartaPessoa.texto + " " + arrayCartasExtras + 
               ". Sua pontuação é " + pontuacaoPessoa + ". As cartas do computador são " + primeiraCartaPC.texto + " " + segundaCartaPC.texto + 
               arrayCartasExtrasPC + ". A pontuação do computador é " + pontuacaoPC + ". Deu empate!")
            }
         }
      }
  } else {
     alert("O jogo acabou.")
  }   