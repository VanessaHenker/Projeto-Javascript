function calcular(){
  let i = document.getElementById('inicio')
  let p = document.getElementById('passos')
  let f = document.getElementById('fim')
  let res = document.getElementById('res')

  let ini = Number(i.value)
  let pass = Number(p.value)
  let fim = Number(f.value)

  for(let cont = ini; cont <=fim; cont += pass){
    res.innerHTML += `${cont}`
  }
}

var ini = 2
var fim = 10

var pass = 2


while(ini <= fim){
  console.log(ini)
  ini = ini + pass
} 
