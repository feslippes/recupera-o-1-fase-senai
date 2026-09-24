//   let i = 0
//   
//   while(i<5){
//       let produto = Number(prompt('Digite o preço do produto ' + i + ' : '))
//   
//       i++
//   }



//       let total = 0
//       let produto = 1
//       let qnt = 0
//       while(i != 0){
//           let produto = Number(prompt('Digite o preço do produto ' + i + '° : '))
//       
//          if(produto == 0) qnt++
//       total += produto 
//       
//          alert("Valor total: " + total + "\nQuantidade: " + qnt)
//       }



//parte 1
//=======================================================================================================

let resultado = document.getElementById('resultado')

function ex1(){

resultado.innerHTML = 'Parte 1, ex1 ' 

let i = 0 
while(i<10){
    i++
    let quadrado = i*i
    console.log(i + ': ' + quadrado);
    resultado.innerHTML += '<p>' + i + ': ' + quadrado + '</p>'
}
}
function ex2(){

    resultado.innerHTML = 'Parte 1, ex2'

    let i = 11

    while(i>1){
        i--
        console.log(i);

        resultado.innerHTML += '<p>' + i + '</p>'
    }
        
}
function ex3(){

    resultado.innerHTML = 'Parte 1, ex3'
let soma = 0
let i = 1
while(i<=100){
    soma += i
    i++

    console.log("soma dos numeros de 1 a 100: " + soma)

}
resultado.innerHTML += '<p>' + soma + '</p>'

}
function ex4(){

    resultado.innerHTML = 'Parte 1, ex4'


    let tabuada = 5
    let i = 0
    while(i<10){
        i++
       let soma = tabuada * i

       console.log(tabuada + ' x ' + i + ' = ' + soma);

      resultado.innerHTML += '<p>' + tabuada + ' x ' + i + ' = ' + soma + '</p>'

    }

}
function ex5(){
resultado.innerHTML = 'Parte 1, ex5'

let numeroRecebido

numeroRecebido = Number(prompt("Digite um numero: "))


let tabuada = numeroRecebido
let i = 0
while(i<10){
    i++
   let soma = tabuada * i

   console.log(tabuada + ' x ' + i + ' = ' + soma);

  resultado.innerHTML += '<p>' + tabuada + ' x ' + i + ' = ' + soma + '</p>'

}

}
function ex6(){
resultado.innerHTML = 'Parte 1, ex6'

for(let i = 1; i<=20; i++){
    if(i%2 != 0){
        resultado.innerHTML += '<p class="numeros">' + i + '</p>'
    }
}
}
function ex7(){
resultado.innerHTML = 'Parte 1, ex7'

let l = 0
let i = 11

    while(i>1 || l<10){
        (i-- && l++)
        
        console.log(i);

        resultado.innerHTML += '<p>' + i + ' / ' + l + '</p>'
    } 

}   
function ex8(){
resultado.innerHTML = 'Parte 1, ex8'

let n 
let resultados

n = Number(prompt("Digite um numero: "))
resultados = Number(prompt("Digite um numero: "))

let result
for(let i = 1; i <= n; i++){
    result = resultados * i;
}
resultado.innerHTML = '<p>' + resultados + '</p>'

}
function ex9(){
resultado.innerHTML = 'Parte 1, ex9'

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); resultado.innerHTML += '<p>' + "FizzBuzz" + '<p>';
    } else if (i % 3 === 0) {
        console.log("Fizz"); resultado.innerHTML +=  '<p>' + "Fizz" + '</p>';
    } else if (i % 5 === 0) {
        console.log("Buzz"); resultado.innerHTML += '<p>' + "Buzz" + '</p>';
    } else {
        console.log(i); resultado.innerHTML += '<p>' +  i + '</p>';
    }
 

}



}
function ex10(){
resultado.innerHTML = 'Parte 1, ex10'


  

}
 




//parte 2
//=======================================================================================================

function ex11(){
resultado.innerHTML = 'Parte 2, ex1'

let senha1, senha2

senha1 = prompt("Digite sua senha1: ")
senha2 = prompt("Digite a senha2 novamente: ")

while(senha2 != senha1){
  senha2 = prompt( "Senha não correspondente. Digite novamente: ")

}
alert("acesso liberado!")
}
function ex22(){
resultado.innerHTML = 'Parte 2, ex2'

let frutas
let cntgFruta


while(frutas != "cereja"){
    
    frutas = prompt("qual fruta a acrescentar? ").toLowerCase()
     cntgFruta++
 
 
    
}
alert("salada de fruta pronta!!" + "\nquantidade de frutas na salada: " + cntgFruta)

}
function ex33(){
resultado.innerHTML = 'Parte 2, ex3'

let hpCastelo = 100
let valorDano
let rodadas = 0


while(hpCastelo > 0){

    valorDano = Number(prompt("Digite o valor do dano: "))
    hpCastelo = hpCastelo - valorDano
    rodadas++

    if(hpCastelo > 0){
    alert("vida restante do castelo: " + hpCastelo)
    }
}
alert("castelo destruido! " + "\nNumero de rodadas: " + rodadas)

}
function ex44(){
resultado.innerHTML = 'Parte 2, ex4'
}
function ex55(){
resultado.innerHTML = 'Parte 2, ex5'
}
function ex66(){
resultado.innerHTML = 'Parte 2, ex6'
}
function ex77(){
resultado.innerHTML = 'Parte 2, ex7'
}   
function ex88(){
resultado.innerHTML = 'Parte 2, ex8'
}
function ex99(){
resultado.innerHTML = 'Parte 2, ex9'
}
function ex110(){
resultado.innerHTML = 'Parte 2, ex10'
}





//parte 3
//=======================================================================================================

function ex111(){
resultado.innerHTML = 'Parte 3, ex1'
}
function ex222(){
resultado.innerHTML = 'Parte 3, ex2'
}
function ex333(){
resultado.innerHTML = 'Parte 3, ex3'
}
function ex444(){
resultado.innerHTML = 'Parte 3, ex4'
}
function ex555(){
resultado.innerHTML = 'Parte 3, ex5'
}
function ex666(){
resultado.innerHTML = 'Parte 3, ex6'
}
function ex777(){
resultado.innerHTML = 'Parte 3, ex7'
}   
function ex888(){
resultado.innerHTML = 'Parte 3, ex8'
}
function ex999(){
resultado.innerHTML = 'Parte 3, ex9'
}
function ex1110(){
resultado.innerHTML = 'Parte 3, ex10'
}
       
   

   
