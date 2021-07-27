"use strict";
var player1 = prompt("enter player1 name");
var player2 = prompt("enter player2 name");
/*---------selecting elements----------*/
const diceImg = document.querySelector(".dice");
//initially making the dice to disapper
diceImg.style.display = "none";
const btnRoll = document.querySelector(".btn--roll");
const btnNewGame = document.querySelector(".btn--new");
const scorePlayer1 = document.querySelector("#score--0");
const scorePlayer2 = document.querySelector("#score--1");
const btnHold = document.querySelector(".btn--hold");
const currentPlayer1 = document.querySelector("#current--0");
const currentPlayer2 = document.querySelector("#current--1");
const overlay = document.querySelector(".overlay");
const winner = document.querySelector(".winner");
const close = document.querySelector(".close");
const winnerMessage = document.querySelector(".winner-message");
let diceTotal = 0;
scorePlayer1.value = 0;
scorePlayer2.value = 0;

let turn = 1;
//function for roll dice click
const rollDice = () => {
  checkWin();

  currentPlayer1.value = 0;
  currentPlayer2.value = 0;
  //generating random number from 1 to 6
  window.diceNumber = Math.floor(Math.random() * 6) + 1;
  diceImg.value = diceNumber;

  //making the dice appear after roll dice button click
  diceImg.style.display = "block";
  //changing the score of dice based on the random dice number
  diceImg.src = `dice-${diceNumber}.png`;
  diceTotal = diceTotal + diceImg.value;
  //Adding for current scores
  if (turn == 1) {
    currentPlayer1.value = diceTotal;
    currentPlayer1.textContent = currentPlayer1.value;
  }
  if (turn == 2) {
    currentPlayer2.value = diceTotal;
    currentPlayer2.textContent = currentPlayer2.value;
  }
  //CHANGING TURNS
  if (diceImg.value == 1) {
    if (turn == 1) {
      turn = 2;
      currentPlayer1.value = 0;
      diceTotal = 0;
      currentPlayer1.textContent = 0;
    } else if (turn == 2) {
      turn = 1;
      currentPlayer1.value = 0;
      diceTotal = 0;
      currentPlayer2.textContent = 0;
    }
  }
};
//for dice roll on click on roll dice button
btnRoll.addEventListener("click", rollDice);

//function for new game
const newGame = () => {
  diceImg.style.display = "none";
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentPlayer1.textContent = 0;
  currentPlayer2.textContent = 0;
  btnHold.style.display = "block";
  btnRoll.style.display = "block";
  scorePlayer1.value = 0;
  scorePlayer2.value = 0;
  player1 = prompt("enter player1 name");
  player2 = prompt("enter player2 name");
  turn = 1;
};
//onClick event call on new game button
btnNewGame.addEventListener("click", newGame);

btnHold.addEventListener("click", function () {
  if (turn == 1) {
    turn = 2;
    scorePlayer1.value = scorePlayer1.value + currentPlayer1.value;
    scorePlayer1.textContent = scorePlayer1.value;
    diceTotal = 0;
    currentPlayer1.textContent = 0;
  } else if (turn == 2) {
    turn = 1;
    scorePlayer2.value = scorePlayer2.value + currentPlayer2.value;
    scorePlayer2.textContent = scorePlayer2.value;
    diceTotal = 0;
    currentPlayer2.textContent = 0;
  }
});

close.addEventListener("click", function () {
  winner.classList.add("hidden");
  overlay.classList.add("hidden");
});
//function calculating winner
function checkWin() {
  if (scorePlayer1.value >= 100) {
    btnHold.style.display = "none";
    btnRoll.style.display = "none";
    winner.classList.remove("hidden");
    overlay.classList.remove("hidden");
    if (!player1) {
      winnerMessage.textContent = `player1 won`;
    } else {
      winnerMessage.textContent = `${player1} won`;
    }
  } else if (scorePlayer2.value >= 100) {
    btnHold.style.display = "none";
    btnRoll.style.display = "none";
    winner.classList.remove("hidden");
    overlay.classList.remove("hidden");
    if (!player2) {
        winnerMessage.textContent = `player2 won`;
      } else {
        winnerMessage.textContent = `${player2} won`;
      }
  }
}
