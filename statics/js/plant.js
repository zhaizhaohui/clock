function setClock() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDegrees = ((second / 60) * 360) + 90; 
  const minuteDegrees = ((minute / 60) * 360) + ((second/60)*6) + 90;
  const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 90; 

  const secondHand = document.querySelector('.second .hand');
  const minuteHand = document.querySelector('.minute .hand');
  const hourHand = document.querySelector('.hour .hand');

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setClock, 1000); 

setClock();