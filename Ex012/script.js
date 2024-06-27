function calcular(){
  var ano = window.document.getElementById('n1')
  var res = window.document.getElementById('res')
  var n1 = Number(ano.value)

  var sexo = window.document.getElementById('sexo')
  var txt = String(sexo.value)

  


  var s = 2024 - n1
  res.innerHTML = `${s} ${txt}`
}