// @ts-check
"use strict";

function renderWinGame() {
  document.querySelector("body").style.backgroundColor = "#60b347";
  numberLabel.style.width = "30rem";
  numberLabel.textContent = gameState.secretNumber;
}

function onReset() {
  gameState.score = gameState.score <= 0 ? 20 : gameState.score;
  gameState.secretNumber = Math.floor(Math.random() * 20) + 1;
  guessInput.value = "";
  document.querySelector("body").style.backgroundColor = "";
  messageLabel.textContent = "Start guessing...";
  numberLabel.style.width = "";
  scoreLabel.textContent = gameState.score;
  numberLabel.textContent = "?";
  gameState.isPaused = false;
}

function increaseScore() {
  gameState.score++;
  if (gameState.score > gameState.highscore) {
    gameState.highscore = gameState.score;
    highScoreLabel.textContent = gameState.highscore;
  }
  gameState.isPaused = true;
}

function decreaseScore() {
  gameState.score--;
  if (gameState.score <= 0) {
    gameState.isPaused = true;
  }
}

function getLostMessage(fallbackMessage) {
  if (gameState.score > 0) {
    return fallbackMessage;
  }
  return "💥 You lost the game!";
}

function onCheck() {
  if (gameState.isPaused) return;

  const guess = Number(guessInput.value);
  messageLabel.textContent = (function () {
    if (!guess) {
      return "⛔ No number!";
    } else if (guess === gameState.secretNumber) {
      increaseScore();
      renderWinGame();
      return "🎉 Correct number!";
    } else if (guess !== gameState.secretNumber) {
      decreaseScore();
      const isHiger = guess > gameState.secretNumber;
      return getLostMessage(isHiger ? "👆 Too high!" : "👇 Too low!");
    }
  })();
  scoreLabel.textContent = gameState.score;
}

function main() {
  onReset();

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

const gameState = {
  isPaused: false,
  score: 0,
  highscore: 0,
  secretNumber: 0,
};

main();
