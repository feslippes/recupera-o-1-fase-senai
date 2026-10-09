function teste1(){

    let n =  Math.ceil(Math.random() *  201) - 100
  console.log(n);
}
function teste2(){

    let n =  Math.ceil(Math.random() *  201) - 100
      

    if(n < 0){
        n = 0;
    }
    console.log(n);
}
function teste3(){

    let n =  Math.ceil(Math.random() *  201) - 100

    if(n < 0){
        n = 0;
    }
   
    if(n != 0){
        console.log(n); 
    }
}
function teste4(){

   
        let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let vetor2 = [];
    
        for (let i = 0; i < 10; i++) {
            vetor2[i] = vetor1[9 - i];
        }
    
        console.log(vetor1);
        console.log(vetor2);
}
function teste5(){

    let vetor = [];

    for (let i = 0; i < 4; i++) {
        let n = Number(prompt("Digite um número par:"));

        while (n % 2 != 0) {
            alert("Esse número é ímpar! Digite outro.");
            n = Number(prompt("Digite um número par:"));
        }

        vetor[i] = n;
    }

    console.log(vetor);

}
function teste6(){
    let vetor = [];

    for (let i = 0; i < 25; i++) {
        vetor[i] = Math.floor(Math.random() * 100);
    }

    let n1 = Number(prompt("Digite um número entre 0 e 24:"));
    let n2 = Number(prompt("Digite outro número entre 0 e 24:"));

    if (Number.isInteger(n1) && n1 >= 0 && n1 <= 24 &&
        Number.isInteger(n2) && n2 >= 0 && n2 <= 24) {

        console.log("Vetor completo:", vetor);
        console.log("Soma:", vetor[n1] + vetor[n2]);

    } else {
        alert("Digite somente números inteiros entre 0 e 24!");
    }
}
function teste7(){
    let vetor = [];

    for (let i = 0; i < 25; i++) {
        vetor[i] = Math.floor(Math.random() * 100);
    }

    let n1 = Number(prompt("Digite um número entre 0 e 24:"));
    let n2 = Number(prompt("Digite outro número entre 0 e 24:"));

    if (Number.isInteger(n1) && n1 >= 0 && n1 <= 24 &&
        Number.isInteger(n2) && n2 >= 0 && n2 <= 24) {

        console.log("Vetor completo:", vetor);
        console.log("Soma:", vetor[n1] + vetor[n2]);

    } else {
        alert("Digite números inteiros entre 0 e 24!");
    }

    let busca = Number(prompt("Digite um valor para buscar no vetor:"));

    if (vetor.includes(busca)) {
        alert("O valor está presente no vetor!");
    } else {
        alert("O valor NÃO está presente no vetor!");
    }
}
function teste8(){

let pai = [];
let mae = [];
let filho = [];

for (let i = 0; i < 50; i++) {
    pai[i] = Math.floor(Math.random() * 100);
    mae[i] = Math.floor(Math.random() * 100);

    if (i % 2 == 0) {
        filho[i] = pai[i];
    } else {
        filho[i] = mae[i];
    }
}

console.log(pai);
console.log(mae);
console.log(filho);
}
function teste9(){

        let minima = [];
        let maxima = [];
        let medias = [];
        let maiorMedia = 0;
    
        for (let i = 0; i < 30; i++) {
            let t1 = Math.floor(Math.random() * 24) + 12;
            let t2 = Math.floor(Math.random() * 24) + 12;
    
            if (t1 < t2) {
                minima[i] = t1;
                maxima[i] = t2;
            } else {
                minima[i] = t2;
                maxima[i] = t1;
            }
    
            medias[i] = (minima[i] + maxima[i]) / 2;
    
            if (i == 0 || medias[i] > maiorMedia) {
                maiorMedia = medias[i];
            }
    
            console.log(
                "Dia " + (i + 1) +
                " | Mínima: " + minima[i] + "°C" +
                " | Máxima: " + maxima[i] + "°C" +
                " | Média: " + medias[i] + "°C"
            );
    
            if (maxima[i] > minima[i] * 2) {
                console.log("Regra de Von Fahrenkelvin: NÃO cumprida");
            } else {
                console.log("Regra de Von Fahrenkelvin: cumprida");
            }
        }
    
        console.log("Maior temperatura média do mês: " + maiorMedia + "°C"); 
}
function teste10(){

    let vetor = [12, 45, 7, 23, 45, 89, 2, 56, 10, 34];
    let repetido = false;

    for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
            if (vetor[i] == vetor[j]) {
                repetido = true;
            }
        }
    }

    console.log("Vetor:", vetor);

    if (repetido == true) {
        console.log("Atenção! Existem valores duplicados!");
    } else {
        console.log("Tudo certo! Não existem valores duplicados!");
    }



}
function teste11(){
    let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let vetor2 = [10, 11, 12, 13, 14, 15, 16, 17, 18];
    let vetor3 = [19, 20, 21, 22, 23, 24, 25, 26, 27];
    let resultado = [];

    for (let i = 0; i < 3; i++) {
        resultado[i] = vetor1[i];
    }

    for (let i = 0; i < 3; i++) {
        resultado[i + 3] = vetor2[i + 3];
    }

    for (let i = 0; i < 3; i++) {
        resultado[i + 6] = vetor3[i + 6];
    }

    console.log("Vetor 1:", vetor1);
    console.log("Vetor 2:", vetor2);
    console.log("Vetor 3:", vetor3);
    console.log("Vetor resultante:", resultado);
}

  
  