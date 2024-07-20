let num = document.getElementById('num')
let res = document.getElementById('res')
let fin = document.getElementById('finalizar')
let valores = [];


function isNumber(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }
  else{
    return false
  }
}

function inlista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }
  else{
    return false
  }

}
function adicionar(){
  if(isNumber(num.value) && !inlista(num.value, valores)){
    window.alert('tudo ok')
  }
  else{
    window.alert('Valor inválido ou já encontrado na lisra!')
  }
}