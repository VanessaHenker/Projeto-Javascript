function calcular(){
  var i = document.getElementById('inicio')
  var p = document.getElementById('passos')
  var f = document.getElementById('fim')
  var res = document.getElementById('res')

  var ini = Number(i.value)
  var pass = Number(p.value)
  var fim = Number(f.value)

  var cont = pass

while(ini <= fim){
    res.innerHTML = `Passos ${ini}`
    cont++
  }
}

var passos = 2
var ini = 2
var fim = 4



while(ini <= fim){
  console.log('Tudo bem?')
  passos++
} 
