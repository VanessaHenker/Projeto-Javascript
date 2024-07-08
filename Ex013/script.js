 function calcular(){
  let i = document.getElementById('inicio')
  let p = document.getElementById('passos')
  let f = document.getElementById('fim')
  let res = document.getElementById('res')

  if(i.value.length == 0 || p.value.length == 0 || f.value.length == 0){
    window.alert('Erro, faltam dados')
  }
  else{
    res.innerHTML = 'Contando: '
    let ini = Number(i.value)
    let pass = Number(p.value)
    let fim = Number(f.value)
    
    if(pass == 0){
      pass = 1
    }
    if(ini < 0 || pass < 0 || fim < 0){
      window.alert('Erro, numero negativo')
    }
    else{
      while(ini <= fim){
        res.innerHTML += ` ${ini} `
        ini = ini + pass
      }  
    }
  }
}

