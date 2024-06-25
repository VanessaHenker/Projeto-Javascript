/*
num.push(2) = acrescenta uma posção no vetor
num.length = quantidade de posições
num.sort() = organiza os numeros em ordem crescente

num.sort()
num.push()

*/
console.log('Vai começar..')
var teste = [5]
//var teste = [5,6,7] - exemplo

for(var i = 0; i < 5; i++){
  teste[i] = 0
}

for(var i = 0;  i < teste.length; i++){
  console.log(teste[i])
}

for(let i = 0; i < teste.length; i++){
  console.log(`A posicao ${i} tem o valor ${teste[i]}`)
}

for(var i in teste){
  console.log(`A posicao ${i} tem o valor ${teste[i]}`)
}

let pos = teste.indexOf(1)
if(pos == -1){
  console.log('Valor não existe no vetor')
}
else{
  console.log(`O valor X esta na posição ${pos}`)
}