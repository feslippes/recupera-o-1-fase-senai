// let nomeUsuario = 'Umberto Doisberto'

//{⭐⭐} Decisão de Compra: Peça ao usuário para inserir o preço de um item
// e o saldo da sua conta. Em seguida, determine se eles podem comprar o item ou não.


function controleTripulacao(){

let numeroMarujos, qntComida

numeroMarujos = Number(prompt("quantidade de marujos: "))
qntComida = Number(prompt("quantidade de comida: "))


if(numeroMarujos >= 10 && qntComida >= 1.5){
    alert("Provisões suficientes. Rumo ao horizonte!")
}else{
    alert("Algo está errado. Posseidom não quer ninguém no mar hoje")
}

}







//Exercícios do {#0027}.SQ02
//=======================================================================================================================================
//12
function conversorTemperaturas(){

let f, c
c = Number(prompt("Digite a temperatura em Celsius: "))

f = c * 9/5 + 32

if(f > 68){
    alert("Super calor!")
}else if(f < 68){
    alert("temperatura convertida para Fahrenheit: " + f)
}else{
    alert("erro de digitação.")
}




}

//11
function verificarVoto(){

let idade

idade = Number(prompt("digite a sua idade: "))

if(idade >= 16){
    alert("ja esta elegivel.")
}else if(idade < 16){
    alert("ainda não esta elegivel.")
}else{
    alert("erro de digitação.")
}

}

//10
function idadeCachorro(){

    let idade

    idade = Number(prompt("Digite a idade do cachorro: "))

    idade = idade * 7

    alert("a idade do seu cachorro em idade humana é: " + idade)
}

//9
function comprasDecisao(){
    let precoItem
    let saldo

    precoItem = Number(prompt("preço do item:"))
    saldo = Number(prompt("saldo da conta:"))

    if(precoItem > saldo){
        alert("voçê não pode comprar este item.")
    }else if(precoItem < saldo){
        alert("Voçê pode comprar este item.")
    }else if(precoItem = saldo){
        alert("Voçê pode comprar este item.")
    }else{
        alert("erro de digitaçâo.")
    }
    

}

//8
function senha(){

let senha

senha = prompt("digite uma senha: ")



if(senha.length >= 8 ){
    alert("senha segura")
}else{
    alert("senha insegura")
}




}

//4
function diaSemana(){

let numero

numero = Number(prompt("digite um numero de 1 a 7: "))

if(numero == 1){
    prompt("Domingo")

}else if(numero == 2){
    prompt("Segunda")
}else if(numero == 3){
    prompt("Terça")
}else if(numero == 4){
    prompt("Quarta")
}else if(numero == 5){
    prompt("Quinta")
}else if(numero == 6){
    prompt("Sexta")
}else if(numero == 7){
    prompt("Sabado")
}else{
    prompt("erro, digite um numero de 1 a 7.")
}


}

//5
function numeros(){
  //entendimento  
    // felipe
      //este progama le dois numeros digitados pelo usuario e verifica se um numero é maior que o outro

  //infos e variaveis
  let numero1,numero2

  //entrada de dados
  // jean
  numero1 = Number(prompt("Digite o numero1:"))
  numero2 = Number(prompt("Digite o numero2:"))
  //processamentos
  //saida - Rafael
    if(numero1 > numero2){
        alert(numero1 + ' é maior que ' + numero2)
    }else if(numero2 > numero1){
        alert(numero2 + ' é maior que ' + numero1)
    }else{
        alert('Os números são iguais')
    }

}

//1
function verificarMaioridade(){
    //entendimento
         //o progama deve ler a idade de uma pessoa e informar se e maior de idade ou nao
    //infos e variaveis
    let idade
    //entrada de dados
    idade = Number(prompt("Digite sua idade: "))
    //processamentos
    //saida
    if(idade >= 18){
        alert("Maior de idade")
    }else{
        alert("Menor de idade")
    }
}
//=======================================================================================================================================








//Exercícios do {#0011}
//=======================================================================================================================================

function calcularLucroGanso(){
    // entendimento
        // O programa deve ler gastos, faturamento em ingressos e faturamento na loja e calcular o lucro em reais e o lucro percentual.

    // infos e variáveis
    let gastos, faturamentoIngressos, faturamentoLoja
    let lucroReais, lucroPercentual

    // entrada de dados
    gastos = Number(prompt('Digite o gasto de hoje:'))
        // gastos = Number('100')
        // gastos = 100
    faturamentoIngressos = Number(prompt('Faturamento em ingressos:'))
    faturamentoLoja = Number(prompt('Faturamento na loja de itens:'))

    // processamento
    let faturamentoTotal = faturamentoIngressos + faturamentoLoja 
    lucroReais = faturamentoTotal - gastos
    
    // gastos       --  100%
    // lucroReais   --  x% (lucroPercentual)
    // gastos*lucroPercentual = lucroReais*100
    // lucroPercentual = (lucroReais*100)/gastos
    lucroPercentual = (lucroReais/gastos)*100

    // saída
    alert('Lucro: R$' + lucroReais.toFixed(2) + ' ou ' + lucroPercentual + '%')
}


// v68.4
// git add . // manda o git procurar e listar todas as alterações
// git commit -m "feat/ v68.5 login do pokemon" // oficializa uma nova versão local
// git push // envia essa nova versão para o github


function calcularPrecoDoPrompt(){
    // entendimento
        // ler o tamanho do texto do prompt e calcular o seu custo. 
        // o custo é calculado por: 5 tokens fixos + 1 token por caracter do prompt.

    // infos e variáveis
    let textoPrompt
    let tamanhoPrompt 
    let totalDeTokens
    // leitura de dados
    // tamanhoPrompt = Number(prompt('Quantos caracteres tem seu prompt?'))
    textoPrompt = prompt('Digite seu prompt')
    // processamento
    tamanhoPrompt = textoPrompt.length
    totalDeTokens = 5 + tamanhoPrompt
    // saída
    alert("Seu prompt vai consumir " + totalDeTokens + ' tokens')
}
//=======================================================================================================================================