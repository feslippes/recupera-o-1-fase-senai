
function primeira(){
//info
let nota1, nota2, nota3
let media
//ler,dados
 nota1 = Number(prompt("Digite a primeira nota: "))
 nota2 = Number(prompt("Digite a segunda nota: "))
 nota3 = Number(prompt("Digite a terceira nota: "))


//process
media = nota1 + nota2 + nota3 / 2
//saida
alert("Media: " + media)

}



//===========================================================================


function segunda(){



let vitorias, empates
let pontos

//entrada de dados
vitorias = Number(prompt("Digite o numero de vitorias: "))
empates = Number(prompt("Digite o numero de empates: "))

//processamentos

pontos = vitorias*3 + empates

alert("Pontos do seu time: " + pontos)
}


//====================================================

function terceira(){

let bruto, premiacoes, presente, comissoes
let lucro

bruto = Number(prompt("valor bruto: "))
premiacoes = Number(prompt("gastos em premiações: "))
presente = Number(prompt("gastos em presentes: "))
comissoes = Number(prompt("gastos em comissões: "))

lucro = bruto - premiacoes - presentes - comissoes

alert("" + lucro)

}

