programa {
  funcao inicio() {
    
    inteiro bruto_total, premiacoes, presentes, comissoes
    real lucro
    

   escreva("valor bruto: ")
    leia(bruto_total)

    escreva("qual o valor das premiacoes? ")
    leia(premiacoes)

    escreva("quanto foi gastado em presentes? ")
    leia(presentes)

    escreva("quanto foi em comissoes? ")
    leia(comissoes)

real despesas = premiacoes + presentes + comissoes

  lucro = bruto_total - despesas

    escreva("este é o lucro total: " + lucro)
    




  }
}
