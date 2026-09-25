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


    
}


function exer3(){}


function exer4(){}