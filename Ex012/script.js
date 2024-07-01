function calcular(){
  var ano = window.document.getElementById('n1')
  var res = window.document.getElementById('res')
  var n1 = Number(ano.value)

  
  var s = 2024 - n1
  res.innerHTML = `Você tem ${s} anos`

  const radios = document.getElementsByName('sexo');
    let sexoSelecionado = '';
    for (const radio of radios) {
      if (radio.checked) {
        sexoSelecionado = radio.value;
        break;
      }
    }

    

    if (sexoSelecionado === 'F') {
      res.textContent += ' Feminino';
    } else if (sexoSelecionado === 'M') {
        res.innerHTML += ' Masculino';
    } else {
      res.innerHTML = 'Sexo não especificado';
    }
}

