programa {
  funcao inicio() {
    
  inteiro frete,  distancia
   real volume, peso


escreva("qual o peso? ")
leia(peso)

escreva("qual a distancia? ")
leia(distancia)

escreva("qual o volume? ")
leia(volume)


 frete = 15 + (2*peso) + (0.05*distancia) + (10*volume)
 
escreva("o frete é " + frete)
leia(frete)

  }
}
