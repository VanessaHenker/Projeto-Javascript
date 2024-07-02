function calcular() {
  var ano = window.document.getElementById('n1')
  var res = window.document.getElementById('res')
  var n1 = Number(ano.value)

  if (n1 > 2024 || n1 < 1900) {
    alert("Erro, ano inválido!")
  }
  else {
    var s = 2024 - n1


    const radios = document.getElementsByName('sexo');
    let sexoSelecionado = '';
    for (const radio of radios) {
      if (radio.checked) {
        sexoSelecionado = radio.value;
        break;
      }
    }

    if (sexoSelecionado == 'M') {
      if (s < 18) {
        res.innerHTML = `Detectamos um menino com ${s} anos`;
        document.getElementById('minhaImagem').src = 'imagem-menino.webp'
      }
      if (s >= 18) {
        res.innerHTML = `Detectamos um homem com ${s} anos`;
        document.getElementById('minhaImagem').src = 'imagem-homem.avif'
      }
      if (s >= 60) {
        res.innerHTML = `Detectamos um idoso com ${s} anos`;
        document.getElementById('minhaImagem').src = 'homem-idoso.jpg'
      }
    }
    else if (sexoSelecionado == 'F') {
      if (s < 18) {
        res.innerHTML = `Detectamos uma menina com ${s} anos`;
        document.getElementById('minhaImagem').src = 'imagem-menina.avif'
      }
      if (s >= 18) {
        res.innerHTML = `Detectamos uma mulher com ${s} anos`;
        document.getElementById('minhaImagem').src = 'imagem-mulher.jpg'
      }
      if (s >= 60) {
        res.innerHTML = `Detectamos uma idosa com ${s} anos`;
        document.getElementById('minhaImagem').src = 'imagem-idosa.png'
      }

    } 
    else{
      alert("Erro, sexo não especificado!")
    }
  }
}

