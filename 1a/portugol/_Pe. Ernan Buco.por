programa {
  funcao inicio() {
    
   real custos_mensais
   real qtd_recebido, qtd_faltando
  
   

   escreva("custo mensal da igreja: ")
  leia(custos_mensais)

  escreva("doacoes e dizimos recebido: ")
  leia(qtd_recebido)

qtd_faltando = qtd_recebido - custos_mensais

escreva("Faltam " + qtd_faltando + "para pagar completamente os custos mensais.")
leia(qtd_faltando)
  }
}
