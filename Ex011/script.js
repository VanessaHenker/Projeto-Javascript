let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

// Exibe o horário atual no formato HH:MM:SS
let currentTime = hours + ':' + minutes + ':' + seconds;
console.log('Horário atual: ' + currentTime);

var hora = window.document.getElementById('hora-atual')
var imagemDia = window.document.getElementById('imgDia')

  if(hours >= 6 && hours < 12){
    console.log('Bom dia: ');
    hora.innerHTML = `Agora são ${hours}:${minutes}`
  }
  if(hours >= 12 && hours < 18){
    console.log('Boa tarde: ');
    hora.innerHTML = `Agora são ${hours}:${minutes}`
  }
  else{
    console.log('Boa noite: ');
    hora.innerHTML = `Agora são ${hours}:${minutes}`
  }