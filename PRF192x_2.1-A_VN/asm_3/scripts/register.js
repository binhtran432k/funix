"use strict";

/**
 * @typedef _RegisterUser
 * @property {string} confirmPassword
 * @typedef {UserData & _RegisterUser} RegisterUser
 */

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
 * @param {RegisterUser} registerUser
 * @returns {string[]} messages
 */
function validateRegister(registerUser) {
  const matchPasswordMessage =
    registerUser.password !== registerUser.confirmPassword
      ? "The password must match the confirm password!"
      : undefined;

  const minPasswordSizeMessage =
    registerUser.password.length < 8
      ? "The password must have at least 8 characters!"
      : undefined;

  return [
    getRequiredMessage("First Name", registerUser.firstName),
    getRequiredMessage("Last Name", registerUser.lastName),
    getRequiredMessage("Username", registerUser.username),
    getRequiredMessage("Password", registerUser.password),
    getRequiredMessage("Confirm Password", registerUser.confirmPassword),
    matchPasswordMessage,
    minPasswordSizeMessage,
  ].filter(Boolean);
}

/**
 * @returns {RegisterUser}
 */
function getRegisterUserInput() {
  return {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    username: usernameInput.value,
    password: passwordInput.value,
    confirmPassword: confirmPasswordInput.value,
  };
}

/**
 * @param {SubmitEvent} e
 */
function onRegister(e) {
  const user = getRegisterUserInput();
  const messages = validateRegister(user);
  if (messages.length > 0) {
    alert(messages.join("\n"));
  } else {
    try {
      registerUser(
        new User(
          user.firstName,
          user.lastName,
          user.username,
          hashCode(user.password),
        ),
      );
      window.location.href = "../pages/login.html";
    } catch (err) {
      alert(err.message);
    }
  }

  e.preventDefault();
  return false;
}

function setupRegisterPage() {
  registerForm.addEventListener("submit", onRegister);
}

/** @type {HTMLButtonElement} */
const registerForm = document.getElementById("form-register");

/** @type {HTMLInputElement} */
const firstNameInput = document.getElementById("input-firstname");
/** @type {HTMLInputElement} */
const lastNameInput = document.getElementById("input-lastname");
/** @type {HTMLInputElement} */
const usernameInput = document.getElementById("input-username");
/** @type {HTMLInputElement} */
const passwordInput = document.getElementById("input-password");
/** @type {HTMLInputElement} */
const confirmPasswordInput = document.getElementById("input-password-confirm");

setupRegisterPage();
