function calcular(){
  var ano = window.document.getElementById('n1')
  var res = window.document.getElementById('res')
  var n1 = Number(ano.value)

  var sexo1= window.document.getElementById('opcao1')
  var sexo2 = window.document.getElementById('opcao2')
  var txt = String(sexo.value)

  const gn = ["F", "M"];


  var s = 2024 - n1
  res.innerHTML = `${s} ${txt}`
}