
function diceRoll() {
var x = Math.round(Math.random()*6);
var y = Math.round(Math.random()*6);
var a = document.querySelectorAll("img")[0];
var b = document.querySelectorAll("img")[1];


if (x == 6) {
  a.setAttribute("src", "images/dice6.png");
}
if (x == 5) {
  a.setAttribute("src", "images/dice5.png");
}
if (x == 4) {
  a.setAttribute("src", "images/dice4.png");
}
if (x == 3) {
  a.setAttribute("src" , "images/dice3.png");
}
if (x == 2) {
  a.setAttribute("src", "images/dice2.png");
}
if (x == 1) {
  a.setAttribute("src", "images/dice1.png");
}

if (y == 6) {
  b.setAttribute("src", "images/dice6.png");
}
if (y == 5) {
  b.setAttribute("src", "images/dice5.png");
}
if (y ==4) {
  b.setAttribute("src", "images/dice4.png");
}
if (y == 3) {
  b.setAttribute("src" , "images/dice3.png");
}
if (y == 2) {
  b.setAttribute("src", "images/dice2.png");
}
if (y == 1) {
  b.setAttribute("src", "images/dice1.png");
}
if (x>y) {
  document.querySelector("h1").innerHTML = "Player 1 has won."
}
if (x<y) {
  document.querySelector("h1").innerHTML = "Player 2 has won."
}
if (x == y) {
  document.querySelector("h1").innerHTML = "It is a draw."
}

}
