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

var teste =  window.document.getElementsByTagName('p')[0]

  if(hours >= 6 && hours < 12){
    console.log('Bom dia: ');
  }
  if(hours >= 12 && hours < 18){
    console.log('Boa tarde: ');
  }
  else{
    console.log('Boa noite: ');
  }