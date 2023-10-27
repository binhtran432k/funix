"use strict";

/**
 * @param {string} field name of field
 * @param {any} value value from input
 * @returns {string?} required message
 */
function getRequiredMessage(field, value) {
  if (value === "" || (!value && isNaN(value))) {
    return `Please input for ${field}!`;
  }
}

/**
 * @param {LoginUser} user
 * @returns {string[]} messages
 */
function validateLogin(user) {
  return [
    getRequiredMessage("Username", user.username),
    getRequiredMessage("Password", user.password),
  ].filter(Boolean);
}

/**
 * @returns {UserData}
 */
function getLoginUserInput() {
  return {
    username: usernameInput.value,
    password: passwordInput.value,
  };
}

/**
 * @param {SubmitEvent} e
 */
function onLogin(e) {
  const user = getLoginUserInput();
  const messages = validateLogin(user);
  if (messages.length > 0) {
    alert(messages.join("\n"));
  } else {
    try {
      loginUser(user);
      window.location.href = "../";
    } catch (err) {
      alert(err.message);
    }
  }
  e.preventDefault();
  return false;
}

function setupLoginPage() {
  loginForm.addEventListener("submit", onLogin);

  alert(["username: helloworld", "password: worldhello"].join("\n"));
}

const loginForm = document.getElementById("form-login");
/** @type {HTMLInputElement} */
const usernameInput = document.getElementById("input-username");
/** @type {HTMLInputElement} */
const passwordInput = document.getElementById("input-password");

setupLoginPage();
