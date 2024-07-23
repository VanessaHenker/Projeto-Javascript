let num = document.getElementById('num');
let res = document.getElementById('res');
let lista = document.getElementById('lista');
let valores = [];


function isNumber(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true;
  }
  else{
    return false;
  }
}

function inlista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true;
  }
  else{
    return false;
  }

}
function adicionar(){
  if(isNumber(num.value) && !inlista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado!`
    lista.appendChild(item);
    res.innerHTML = ''
  }
  else if(inlista(num.value,valores)){
    window.alert('Valor já encontrado na lista!')
  }
  else{
    window.alert('Valor inválido!')
  }
  num.value = ''
  num.focus()
}

function finalizar(){
  var tam = document.getElementById('conteudo-principal')
  tam.style.height = '200px'
  if(valores.length == 0){
    window.alert('Adicione valor antes de finalizar!')
  }
  else{
    tam.style.height = '300px'
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    
    for(let pos in valores){
      soma += valores[pos]

      if(valores[pos] > maior){
        maior = valores[pos]
      }
      if(valores[pos] < menor){
        menor = valores[pos]
      }
    }
    media = soma / total
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
    res.innerHTML += `<p>O maior número é ${maior}</p>`
    res.innerHTML += `<p>O menor número é ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    res.innerHTML += `<p>A média de todos os valores é ${media}</p>`
  }
}

import React, { useState } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contador Simples</h2>
      <p>O contador está em: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
}

export default SimpleCounter;
