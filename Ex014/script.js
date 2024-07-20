function calcular(){
  var v = document.getElementById('num')
  var res = document.getElementById('res')

  var valor = Number(v.value)

  if(v.value.length == 0){
    window.alert('Erro, digite um numero')
  }
  else{
    res.innerHTML = "";
    for(let i = 1; i <= 10; i++){
      var linha = valor + "x" + i + " = " + (valor * i)
      var elementoLinha = document.createElement("p")
      elementoLinha.textContent = linha
      res.appendChild(elementoLinha)
    }
  }
}

let num = document.getElementById('num');
let res = document.getElementById('res');
let lista = document.getElementById('lista');
let valores = [];

function isNumber(n) {
  return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
  return l.indexOf(Number(n)) !== -1;
}

function adicionar() {
  if (isNumber(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado!`;
    lista.appendChild(item); // Corrigido para appendChild
  } else {
    window.alert('Valor inválido ou já encontrado na lista!');
  }
}
