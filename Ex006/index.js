/* var vel = 60.5
console.log(`A velocidade do seu carro é ${vel}km/h`)

if (vel > 60) {
  console.log('Você ultrapaasou a velocidade, MULTADO!')
}

console.log('Diriga sempre com um cinto de segurança') */

function calcular(){
  var txtv = window.document.querySelector('input#txtvel')
  var res = window.document.querySelector('div#res')
  var vel = Number(txtv.value)
  res.innerHTML = `<p> Sua velocidade atual é de <strong>${vel}km/hr</strong></p>`

  if(vel > 60){
    res.innerHTML += '<p>Você está <strong>multado</strong></p>'
  }

  res.innerHTML += '</p>Diriga sempre com cinto de segurança</p>'
}
