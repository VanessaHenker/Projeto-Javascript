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

  

    if (sexoSelecionado == 'M') {
      res.innerHTML = `Detectamos um homem com ${s} anos`;
    } 
    if (sexoSelecionado == 'F') {
        if(s < 18){
          res.innerHTML = `Detectamos uma menina com ${s} anos`;
          document.getElementById('minhaImagem').src = 'imagem-menina.avif'
        }
        if(s > 18){
          res.innerHTML = `Detectamos uma mulher com ${s} anos`;
          document.getElementById('minhaImagem').src = 'imagem-mulher.jpg'
        }
        if(s >= 60){
          res.innerHTML = `Detectamos uma idosa com ${s} anos`;
          document.getElementById('minhaImagem').src = 'imagem-idosa.png'
        }
       
    } 
    
}

