"use strict";

/** @type {HTMLButtonElement} */
const logoutBtn = document.getElementById("btn-logout");

const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");

function onLogout() {
  logoutUser();
  window.location.href = ".";
}

function setupHomePage() {
  if (currentUser.value) {
    loginModal.style.display = "none";
    welcomeMessage.innerText = `Welcome ${currentUser.value.firstName}`;
    logoutBtn.addEventListener("click", onLogout);
  } else {
    mainContent.style.display = "none";
  }
}

setupHomePage();
