function verificar(){
  var data = new data()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if(fano.value.lenght == 0 || Number(fano.value) > ano){
    window.alert('Erro, verifique os dados novamente!')
  }
}