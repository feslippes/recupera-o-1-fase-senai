programa {
  funcao inicio() {


 //info
 real preco, saldo
 //entrada
 escreva("Preço do item: ")
 leia(preco)
 escreva("Saldo da conta: ")
 leia(saldo)

 //processamento/saida
 se(preco > saldo){
escreva("Voçê não pode comprar o item.")
 }senao se(preco <= saldo){
  escreva("Voçê pode comprar o item.")
 }senao{
  escreva("sei la, se vira aí")
 }
 //saida


  }
}
