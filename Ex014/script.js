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