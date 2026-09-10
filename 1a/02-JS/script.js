// let nomeUsuario = 'Umberto Doisberto'


//{#0030} Exercícios com Condições Compostas (if, &&, ||)

//01
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
//2
function testeRecrutamento(){

    let saberNadar, idade, temRecomendacao

    saberNadar = confirm("você sabe nada? (ok=sim, cancelar=Não)")
    idade = prompt("Qual a sua idade? ")
    temRecomendacao = confirm("tem carta de recomendação? (ok=sim, cancelar=Não)")

    if(saberNadar==true && idade>=16){
        alert("Aprovado para o navio!")
    }else if(temRecomendacao==true && idade>=14){
        alert("Aprovado sob recomendação. Monitorar nas primeiras viagens")
    }else{
        alert("Reprovado. Volte quando estiver mais preparado para o mar.")
    }

}
//3
function maquinaFumaca(){


    let criancasPequenas, velocidadeVento

   criancasPequenas = confirm("a area perto da maquina esta sem crianças pequenas?")

   velocidadeVento = confirm("A velocidade do vento esta a pelo menos 0,5m/s ?")

if(criancasPequenas==true && velocidadeVento==true){
    alert("Fumaça liberada. Que comecem os mistérios!")
}else{
    alert("Fumaça bloqueada. Aguardar condições ideais.")
}


}
//4
function deslocamentoEventos(){

    let estaGripado, tempoViagem

    estaGripado = confirm("você esta gripado? ")
    tempoViagem = Number(prompt("Quantos minutos a viagem dará?"))

    if(estaGripado==false && tempoViagem<45){
        alert("Viagem autorizada. Rumo ao show!")
    }else{
        alert("Deslocamento inviável. Melhor recusar este evento.")
    }
}
//5


//=================================================================================================================


//Exercícios {#0027}.sq05

//5.7
function albergueJuca(){

    let qtd_dias, valorDaDiaria
    let totalBruto, descontos10, descontos15, totalPagar
    let multa=150

    qtd_dias = Number(prompt("quantos dias irá ficar?"))
  
if(qtd_dias <= 5){
    valorDaDiaria = 100
}else if(qtd_dias <=10){
valorDaDiaria =90 
}else{
    valorDaDiaria = 80
}

totalBruto = qtd_dias * valorDaDiaria
descontos10 = totalBruto * 10/100
descontos15 = totalBruto * 15/100

totalPagar = totalBruto - (descontos10 = descontos15) + multa

    alert("total bruto: $" + totalBruto.toFixed(2) +
          "\nDesconto emocional: R$" + descontos10.toFixed(2) +
          "\nDesconto publico: R$" + descontos15.toFixed(2) +
          "\nmulta: R$" + multa.toFixed(2) +
          "\n===========================================" +
          "\nTotal a pagar: R$" + totalPagar
         )

}
//5.
function feiraJuca(){

    let maca

    maca = Number(prompt("Quantas maçãs você vai comprar? "))
    valorMaca
    if(maca )
}



//=================================================================================================================

//{#0012} Refatoração de exercícios antigos [se/senao]




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


//{#0012} Refatoração de exercícios antigos [se/senao]

//1
function transportes(){

    let peso, distancia, volume
    let frete

    peso = Number(prompt("peso: "))
    distancia = Number(prompt("distancia: "))
    volume = Number(prompt("volume: "))

    frete=15+(2*peso)+(0.05*distancia)+(10*volume)

    alert("frete: " + frete.toFixed(2))
}
//2
function faturamento(){

    let brutoTotal, metaLucro, total
    let premiacoes,presentes, comissoes

    brutoTotal + Number(prompt("Valor bruto: "))
    premiacoes + Number(prompt("Valor gasto em premiações: "))
    presentes + Number(prompt("Valor gasto em presentes: "))
    comissoes + Number(prompt("Valor gasto em comissões: "))
    metaLucro + Number(prompt("Meta de lucro esperada: "))

    total = brutoTotal - (premiacoes + presentes + comissoes)

   alert("total: R$" + total + "\nMeta: R$")

}



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