const secondHand = document.querySelector(".second-hand");
const minuteHand= document.querySelector(".minute-hand");
const hourHand= document.querySelector(".hour-hand");

function setdate(){
     const now= new Date();
     const seconds= now.getSeconds();
     const secondsDeegrees= ((seconds/60)*360)+90;
     secondHand.style.transform = `rotate(${secondsDeegrees}deg)`;

     const minutes= now.getMinutes();
     const minutesDeegrees= ((minutes/60)*360)+90;
     minuteHand.style.transform = `rotate(${minutesDeegrees}deg)`;

     const hour= now.getHours();
     const hourDeegrees= ((hour/12)*360)+90;
     hourHand.style.transform = `rotate(${hourDeegrees}deg)`;
}

setInterval(setdate, 1000)