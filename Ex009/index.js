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
  teste[i] = i
}

for(var i = 0;  i < teste.length; i++){
  console.log(teste[i])
}

for(let i = 0; i < teste.length; i++){
  console.log(`A posicao ${i} tem o valor ${teste[i]}`)
}