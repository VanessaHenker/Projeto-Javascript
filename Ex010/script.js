function parImpar(n){
  if(n%2 == 0){
    return 'impar!'
  }
  else{
    return 'par'
  }
} 

console.log(parImpar(6))

function soma(n1 = 0, n2 = 0){
  return n1 + n2
}

console.log(soma(2,2))

let v = function(x){
  return x*2
}

console.log(v(5))


function fatorial(n){
  let fat = 1
  for(let i = n; i > 1; i--){
    fat *= i
  }
  return fat
}

console.log(fatorial(5))