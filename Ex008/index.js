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

  var cont = 1

  if(vel > 0){
    res.innerHTML = `Você quer ${vel} passos`
  }
  else{
    res.innerHTML = 'Tente novamente com numeros positivos'
  }

  while(cont <= vel){
    res.innerHTML += `<p>Passo ${cont} </p>`
    cont++
  }
}