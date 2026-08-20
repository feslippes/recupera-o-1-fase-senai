programa {
  inclua biblioteca Util --> u
  funcao inicio() {
    inteiro valor_sorteado, numero_digitado

    valor_sorteado = u.sorteia(1, 10)
    escreva("Digite seu numero: ")
    leia(numero_digitado)

   se( numero_digitado == valor_sorteado){
    escreva("acertou")

    }senao{
escreva("errou")
escreva("\no numero era : " + valor_sorteado)
    }
   }

  }
}
