function calcular(){
  var ano = window.document.getElementById('n1')
  var res = window.document.getElementById('res')
  var n1 = Number(ano.value)

  
  var s = 2024 - n1
  res.innerHTML = `Você tem ${s} anos`
}


function verificarSexo(sexo) {
  var teste =  window.document.getElementById('teste')

    if (sexo.toLowerCase() === 'F') {
        return 'Feminino';
    } else if (sexo.toLowerCase() === 'M') {
        return 'Masculino';
    } else {
        return 'Sexo não especificado';
    }

  teste.innerHTML = `Você tem ${s} anos`
}