function calcular(){
  var txt = window.document.querySelector('input#txtl')
  var res = window.document.querySelector('div#res')
  var vel = String(txt.value)

  res.innerHTML = `<p>Você mora em ${vel}`

  if(vel != 'Brasil' && vel != 'brasil' && vel != "Brazil"){
    res.innerHTML += '<p>Você é estrangeiro'
  }
  else{
    res.innerHTML += '<p>Você é brasileiro'
  }
}