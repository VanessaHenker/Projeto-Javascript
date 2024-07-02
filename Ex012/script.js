function calcular(){
  var ano = window.document.getElementById('n1')
  var res = window.document.getElementById('res')
  var n1 = Number(ano.value)

  
  var s = 2024 - n1
 
  const radios = document.getElementsByName('sexo');
    let sexoSelecionado = '';
    for (const radio of radios) {
      if (radio.checked) {
        sexoSelecionado = radio.value;
        break;
      }
    }

    

    if (sexoSelecionado === 'M') {
      res.textContent = `Detectamos uma mulher com ${s} anos`;
    } else if (sexoSelecionado === 'F') {
        res.innerHTML = `Detectamos um homem com ${s} anos`;
    } else {
      res.innerHTML = `Você tem ${s} anos, sexo não especificado!`;
    }
}

