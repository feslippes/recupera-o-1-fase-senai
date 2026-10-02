let nomes = ["daniel, Pedro, Felipe, cabral, marcos, gustavo, araujo"]

function escreverNomes(){
  for(let i=0; i<6; i++){
   document.getElementById('listaNomes').innerHTML += '<p>' +  nomes[i] + '</p>'
 }

}

function testar(){
    
}

//  let usuario = nomes[1]
  //  console.log(usuario);
  //   console.log(nomes);