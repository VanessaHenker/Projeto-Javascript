function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if(fano.value.lenght == 0 || Number(fano.value) > ano){
    window.alert('Erro, verifique os dados novamente!')
  }
  else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    if(fsex[0].checked){
      genero = 'Homem'
      if(idade >=0 && idade < 10){
        //criança
        //let img = document.getElementById('minhaImagem')
        document.getElementById('minhaImagem').src = 'imagem-menino.webp'

        img.setAttribute('src', 'imagem-menino.webp')
      }
      else if(idade  < 21){
        //jovem
      }
      else if(idade < 50){
        //adulto
      }else{
        //idoso
      }
    }
    else if(fsex[1].checked){
      genero = 'Mulher'
      if(idade >=0 && idade < 10){
        //criança
      }
      else if(idade  < 21){
        //jovem
      }
      else if(idade < 50){
        //adulto
      }else{
        //idoso
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    
  }
}