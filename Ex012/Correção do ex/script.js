function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if(fano.value.lenght == 0 || Number(fano.value) > ano ||  Number(fano.value) < 1900){
    window.alert('Erro, verifique os dados novamente!')
  }
  else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    var tam = document.getElementById('conteudo-principal')
    tam.style.height = '250px'

    if(fsex[0].checked){
      
      if(idade >=0 && idade < 18){
        //criança
        genero = 'Menino'
        img.setAttribute('src', 'imagem-menino.webp')
      }
      if(idade  >= 18){
        //jovem
        genero = 'Homem'
        img.setAttribute('src', 'imagem-homem.avif')
      }
      if(idade >= 50) {
        //adulto
        genero = 'Idoso'
        img.setAttribute('src', 'homem-idoso.jpg')
      }
    }
    else if(fsex[1].checked){
      if(idade >=0 && idade < 18){
        //criança
        genero = 'Menina'
        img.setAttribute('src', 'imagem-menina.avif')
      }
      if(idade  >= 18){
        //jovem
        genero = 'Mulher'
        img.setAttribute('src', 'imagem-mulher.jpg')
      }
      if(idade >= 50) {
        //adulto
        genero = 'Idosa'
        img.setAttribute('src', 'imagem-idosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    img.classList.add('nova-classe')
    res.appendChild(img)
  }
}