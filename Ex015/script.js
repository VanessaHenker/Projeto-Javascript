let num = document.getElementById('num');
let res = document.getElementById('res');
let lista = document.getElementById('lista');
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
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado!`
    lista.appenChild(item)
  }
  else{
    window.alert('Valor inválido ou já encontrado na lista!')
  }
}