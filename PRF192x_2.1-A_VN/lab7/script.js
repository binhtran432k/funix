"use strict";

function renderWinGame() {
  document.querySelector("body").style.backgroundColor = "#60b347";
  numberLabel.style.width = "30rem";
  numberLabel.textContent = secretNumber;
}

function resetGame() {
  score = score <= 0 ? 20 : score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  guessInput.value = "";
  document.querySelector("body").style.backgroundColor = null;
  messageLabel.textContent = "Start guessing...";
  numberLabel.style.width = null;
  scoreLabel.textContent = score;
  numberLabel.textContent = secretNumber;
  isPause = false;
}

function increaseScore() {
  score++;
  if (score > highscore) {
    highscore = score;
    highScoreLabel.textContent = highscore;
  }
  isPause = true;
}

function decreaseScore() {
  if (isPause) return;

  score--;
  if (score <= 0) {
    isPause = true;
  }
}

function getLostMessage(fallbackMessage) {
  if (score > 0) {
    return fallbackMessage;
  }
  return "💥 You lost the game!";
}

function onCheck() {
  if (isPause) return;

  const guess = Number(guessInput.value);
  messageLabel.textContent = (function () {
    if (!guess) {
      return "⛔ No number!";
    } else if (guess === secretNumber) {
      increaseScore();
      renderWinGame();
      return "🎉 Correct number!";
    } else if (guess > secretNumber) {
      decreaseScore();
      return getLostMessage("👆 Too high!");
    } else if (guess < secretNumber) {
      decreaseScore();
      return getLostMessage("👇 Too low!");
    }
  })();
  scoreLabel.textContent = score;
}

function onReset() {
  resetGame();
}

function main() {
  resetGame();

  checkButton.addEventListener("click", onCheck);

  againButton.addEventListener("click", onReset);
}

/** @type {HTMLElement} */
const messageLabel = document.querySelector(".message");
/** @type {HTMLElement} */
const numberLabel = document.querySelector(".number");
/** @type {HTMLElement} */
const scoreLabel = document.querySelector(".score");
/** @type {HTMLElement} */
const highScoreLabel = document.querySelector(".highscore");
/** @type {HTMLInputElement} */
const guessInput = document.querySelector(".guess");
/** @type {HTMLButtonElement} */
const checkButton = document.querySelector(".check");
/** @type {HTMLButtonElement} */
const againButton = document.querySelector(".again");

let isPause = false;
let score = 0;
let highscore = 0;
let secretNumber = 0;
main();
