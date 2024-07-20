let v = document.getElementById('num');
let res = document.getElementById('res');
let fin = document.getElementById('finalizar');
let add = document.getElementById('adicionar');
let valores = [];

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true;
  }
  else{
    false;
  }
}

function inLista(n, l){
  if(l.index(Number(n)) != -1){
    return true;
  }
  else{
    false;
  }
}

function calcular(){
  if(isNumero(num.value) && !inLista(num.value, valores)){

  }
  else{
    window.alert('valor inválido')
  }
  
}

