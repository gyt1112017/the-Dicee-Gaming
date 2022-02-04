function randomNumber(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var randomNumber1 = randomNumber(1, 6);
var randomNumber2 = randomNumber(1, 6);

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerText="🚩 Player1 Wins!";
}

if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerText="Player2 Wins! 🚩";
}

if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerText="Draw!";
}
