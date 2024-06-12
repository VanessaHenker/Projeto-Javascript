/* var idade = 66
console.log(`Você tem ${idade} anos`)

if(idade < 16){
  console.log('Não vota')
}else if(idade < 18 || idade > 65){
  console.log('Voto opcional')
}else{
  console.log('Voto obrigatório')
}
 */


//Estrutura while

var cont = 0

while(cont < 6){
  console.log('Tudo bem?')
  cont++
}

function calcular(){
  var txt = window.document.querySelector('input#n1')
  var res = window.document.querySelector('div#res')
  var vel = Number(txt.value)

  res.innerHTML = `Você quer ${vel} passos`

  var cont = 0

  while(cont < value){
    res.innerHTML = `<p>Passo ${vel} </p>`
    cont++
  }
}