programa {
  funcao inicio() {
    //info
    inteiro numero_um, numero_dois

    //entrada
    escreva("Digite o primeiro numero: ")
    leia(numero_um)

    escreva("Digite o segundo numero: ")
    leia(numero_dois)
    //processamento/saida

     se(numero_um > numero_dois){
      escreva("O numero " + numero_um + " é maior que o numero " + numero_dois)
     }senao se(numero_dois > numero_um){
      escreva("O numero " + numero_dois + " é maior que o numero " + numero_um)
     }senao{
      escreva("os dois numeros são iguais " + numero_um + " = " + numero_dois)
     }

    //saida
  }
}
