function calcular(){
  var i = document.getElementById('inicio')
  var p = document.getElementById('passos')
  var f = document.getElementById('fim')
  var res = document.getElementById('res')

  var ini = Number(i.value)
  var pass = Number(p.value)
  var fim = Number(f.value)

  while(ini <= fim){
    res.innerHTML += `Passos ${ini}`
    ini = ini + pass
  }
}

var ini = 1
var fim = 10

var pass = 1


while(ini <= fim){
  console.log(ini)
  ini = ini + pass
} 
