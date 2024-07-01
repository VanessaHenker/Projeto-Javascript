function calcular(){
  var ano = window.document.getElementById('n1')
  var res = window.document.getElementById('res')
  var n1 = Number(ano.value)

  

  var s = 2024 - n1
  res.innerHTML = `Você tem ${s} anos`
}