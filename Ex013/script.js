let i = document.getElementById('inicio')
let p = document.getElementById('passos')
let f = document.getElementById('fim')
let res = document.getElementById('res')

let ini =  2
let pass = 2
let fim =  10

 /*  res.innerHTML += `${ini}`
  res.innerHTML += `${pass}`
  res.innerHTML += `${fim}` */

  while(ini <= fim){
    res.innerHTML += ` ${ini} `
    ini = ini + pass
  } 


function calcular(){
    res.innerHTML = 'Contando: '

    let ini = Number(i.value)
    let pass = Number(p.value)
    let fim = Number(f.value)
    
    while(ini <= fim){
      res.innerHTML += ` ${ini} `
      ini += ini + pass
    }  
 
}

/* var ini = 2
var fim = 10

var pass = 2


while(ini <= fim){
  console.log(ini)
  ini = ini + pass
} 
 */