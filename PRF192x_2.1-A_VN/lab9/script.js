"use strict";

/**
 * @typedef GameState
 * @property {number} currentScore
 * @property {boolean} isPaused
 * @property {User} activeUser
 * @property {Record<number, User>} userMap
 */

/**
 * @typedef User
 * @property {number} id
 * @property {number} score
 * @property {Element} lblScore
 * @property {Element} lblCurrentScore
 * @property {Element} elePlayer
 */

/**
 * @param {number} min
 * @param {number} max
 */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {GameState} gameState
 */
function makeNextTurn(gameState) {
  gameState.activeUser.elePlayer.classList.remove("player--active");
  const nextId = gameState.activeUser.id === 0 ? 1 : 0;
  changeUserById(gameState, nextId);
  gameState.activeUser.elePlayer.classList.add("player--active");
}

/**
 * @param {GameState} gameState
 * @param {0 | 1} id
 */
function changeUserById(gameState, id) {
  gameState.activeUser = gameState.userMap[id];
}

function onRoll() {
  if (gameState.isPaused) {
    return;
  }
  const dice = randInt(1, 6);
  eleDice.classList.remove("hidden");
  eleDice.src = `dice-${dice}.png`;
  const activeUser = gameState.activeUser;
  if (dice !== 1) {
    gameState.currentScore += dice;
  } else {
    gameState.currentScore = 0;
    makeNextTurn(gameState);
  }
  activeUser.lblCurrentScore.textContent = gameState.currentScore;
}

function onNew() {
  gameState.currentScore = 0;
  gameState.isPaused = false;
  Object.values(gameState.userMap).map((u) => {
    u.score = 0;
    u.elePlayer.classList.remove("player--active");
    u.elePlayer.classList.remove("player--winner");
    u.lblScore.textContent = 0;
    u.lblCurrentScore.textContent = 0;
  });
  changeUserById(gameState, 0);

  gameState.activeUser.elePlayer.classList.add("player--active");
  eleDice.classList.add("hidden");
}

function onHold() {
  if (gameState.isPaused) {
    return;
  }
  const activeUser = gameState.activeUser;
  const nextScore =
    Number(activeUser.lblScore.textContent) + gameState.currentScore;
  activeUser.lblScore.textContent = nextScore;
  activeUser.lblCurrentScore.textContent = 0;
  gameState.currentScore = 0;
  if (nextScore >= 10) {
    activeUser.elePlayer.classList.add("player--winner");
    gameState.isPaused = true;
  } else {
    makeNextTurn(gameState);
  }
}

function main() {
  onNew();
  btnRoll.addEventListener("click", onRoll);
  btnNew.addEventListener("click", onNew);
  btnHold.addEventListener("click", onHold);
}

const lblScoreFst = document.getElementById("score--0");
const lblScoreSnd = document.getElementById("score--1");
const lblCurrentScoreFst = document.getElementById("current--0");
const lblCurrentScoreSnd = document.getElementById("current--1");
const [eleDice] = document.getElementsByClassName("dice");
const [elePlayerFst] = document.getElementsByClassName("player--0");
const [elePlayerSnd] = document.getElementsByClassName("player--1");
const [btnNew] = document.getElementsByClassName("btn--new");
const [btnRoll] = document.getElementsByClassName("btn--roll");
const [btnHold] = document.getElementsByClassName("btn--hold");

/** @type {GameState} */
const gameState = {
  currentScore: 0,
  isPaused: false,
  userMap: {
    0: {
      id: 0,
      score: 0,
      lblScore: lblScoreFst,
      lblCurrentScore: lblCurrentScoreFst,
      elePlayer: elePlayerFst,
    },
    1: {
      id: 1,
      score: 0,
      lblScore: lblScoreSnd,
      lblCurrentScore: lblCurrentScoreSnd,
      elePlayer: elePlayerSnd,
    },
  },
};
main();
