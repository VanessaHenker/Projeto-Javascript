function calcular(){
  var v = document.getElementById('num')
  var res = document.getElementById('res')

  var valor = Number(v.value)

  res.innerHTML = "";
  for(let i = 1; i <= 10; i++){
     var linha = valor + "x" + i + " = " + (valor * 1)
     var elementoLinha = document.createElement("p")
     elementoLinha.textContent = linha
     res.appendChild(elementoLinha)
  
  }
}