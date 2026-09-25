function exer1(){
let idadeDigitada = 0
let somaIdades = 0
let maiorNome = ""

let maiorIdade = 0
for(i = 0; i<5; i++){

nomeDigitado = prompt("digite um nome: ")
idadeDigitada = Number(prompt("digite uma idade: "))
somaIdades = somaIdades + idadeDigitada / 5

if(idadeDigitada > maiorIdade){

    maiorIdade = idadeDigitada
    maiorNome = nomeDigitado
}

   // id1 + id2 + id3 + id4 + id5 / 5

}
alert("Media das idades: " + somaIdades.toFixed(2) + "\n pessoa mais velha: "
 + "[ " + maiorNome + " / " + maiorIdade + " ]").toFixed(2);

}


function exer2(){

let jogador1
let jogador2

let numeroCarta1 = 0
let numeroCarta2 = 0
let somaDePontos1 = 0
let somaDePontos2 = 0
jogador1 = prompt("Digite o nome do primeiro jogador: ")
jogador2 = prompt("Digite o nome do segundo jogador: ")

for(i=0; i<5; i++){

numeroCarta1 = Number(prompt("Agora é a vez do jogador 1 jogar! \nJogue sua carta: "))
numeroCarta2 = Number(prompt("Agora é a vez do jogador 2 jogar! \nJogue sua carta: "))

somaDePontos1 = somaDePontos1 + numeroCarta1
somaDePontos2 = somaDePontos2 + numeroCarta2




}

if(somaDePontos1 > somaDePontos2){
    alert("jogador 1 venceu!!")
}else if(somaDePontos1 < somaDePontos2){
    alert("jogador 2 venceu!!")
}else{
    alert("Empate!")
}

}
//alert(somaDePontos1 + "|" + somaDePontos2)



function exer3(){}


function exer4(){}