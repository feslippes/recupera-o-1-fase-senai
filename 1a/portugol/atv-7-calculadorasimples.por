programa {
  funcao inicio() {
    

 //info
 inteiro n1, n2
 inteiro resultado
 cadeia operacao
 //entrada

 escreva("#1: ")
leia(n1)

escreva("operação + - * / : ")
leia(operacao)

  escreva("#2: ")
leia(n2)


 //processamento/saida



 se(operacao == "+"){
  
 resultado = n1 + n2
 escreva("resultado: " + resultado)

 }senao se(operacao == "-"){
  resultado = n1 - n2
  escreva("resultado: " + resultado)
 }senao se(operacao == "*"){
  resultado = n1 * n2
  escreva("resultado: " + resultado)
 }senao se(operacao == "/"){
  resultado = n1 / n2
  escreva("resultado: " + resultado)
 }senao{
escreva("erro, a operação digitada não é valida")
 }

 //saida


  }
}
