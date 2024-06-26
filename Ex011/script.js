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

  if(hours < 12){
    hora.innerHTML = `Bom dia, agora são ${hours}:${minutes}`
  document.getElementById('minhaImagem').src = 'image-dia.jpeg';
  }
  if(hours >= 12){
    hora.innerHTML = `Boa tarde, agora são ${hours}:${minutes}`
    document.getElementById('minhaImagem').src = 'image-tarde.jpg';
 
  }
  if(hours > 17 || hours <= 4){
    hora.innerHTML = `Boa noite, agora são ${hours}:${minutes}`
    document.getElementById('minhaImagem').src = 'image-noite.jpg';
  }