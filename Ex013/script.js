 function calcular(){
  let i = document.getElementById('inicio')
  let p = document.getElementById('passos')
  let f = document.getElementById('fim')
  let res = document.getElementById('res')

    res.innerHTML = 'Contando: '

    let ini = Number(i.value)
    let pass = Number(p.value)
    let fim = Number(f.value)
    
    while(ini <= fim){
      res.innerHTML += ` ${ini} `
      ini = ini + pass
    }  
 
}

function somar(){
  var a = document.getElementById('teste1')
  var b = document.getElementById('teste2')
  
  var at = Number(a.value)
  var bt = Number(b.value)

  var s = at + bt

  res.innerHTML = ` ${s} `
}

/* var ini = 2
var fim = 10

var pass = 2


while(ini <= fim){
  console.log(ini)
  ini = ini + pass
} 
 */