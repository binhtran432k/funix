"use strict";

/**
 * @typedef PetData
 * @property {string} id
 * @property {string} name
 * @property {number} age
 * @property {string} type
 * @property {number} weight
 * @property {number} length
 * @property {string} color
 * @property {string} breed
 * @property {boolean} vaccinated
 * @property {boolean} dewormed
 * @property {boolean} sterilized
 * @property {Date} date
 */

/** @type {HTMLButtonElement} */
const submitBtn = document.getElementById("submit-btn");
/** @type {HTMLInputElement} */
const idInput = document.getElementById("input-id");
/** @type {HTMLInputElement} */
const nameInput = document.getElementById("input-name");
/** @type {HTMLInputElement} */
const ageInput = document.getElementById("input-age");
/** @type {HTMLInputElement} */
const typeInput = document.getElementById("input-type");
/** @type {HTMLInputElement} */
const weightInput = document.getElementById("input-weight");
/** @type {HTMLInputElement} */
const lengthInput = document.getElementById("input-length");
/** @type {HTMLInputElement} */
const colorInput = document.getElementById("input-color-1");
/** @type {HTMLInputElement} */
const breedInput = document.getElementById("input-breed");
/** @type {HTMLInputElement} */
const vaccinatedInput = document.getElementById("input-vaccinated");
/** @type {HTMLInputElement} */
const dewormedInput = document.getElementById("input-dewormed");
/** @type {HTMLInputElement} */
const sterilizedInput = document.getElementById("input-sterilized");

/** @type {PetData[]} */
const petArr = [];

function parseNumber(value) {
  return value ? Number(value) : NaN;
}

/**
 * @param {PetData} data
 * @returns {string[]} messages
 */
function getRequiredMessage(field, value) {
  if (value === "" || (!value && isNaN(value))) {
    return `Please input for ${field}`;
  }
}

/**
 * @param {string} field
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
function getMinMaxMessage(field, value, min, max) {
  if (value < min || value > max) {
    return `${field} must be between ${min} and ${max}!`;
  }
}

/**
 * @param {string} field
 * @param {string} value
 */
function getSelectMessage(field, value) {
  if (!value) {
    return `Please select ${field}!`;
  }
}

/**
 * @param {PetData} data
 * @returns {string[]} messages
 */
function getValidatedMessages(data) {
  const petIds = petArr.map((p) => p.id);
  return [
    getRequiredMessage("Id", data.id),
    getRequiredMessage("Name", data.name),
    getRequiredMessage("Age", data.age),
    getRequiredMessage("Weight", data.weight),
    getRequiredMessage("Length", data.length),
    getRequiredMessage("Color", data.color),
    petIds.includes(data.id) ? "ID must be unique!" : false,
    getMinMaxMessage("Age", data.age, 1, 15),
    getMinMaxMessage("Weight", data.weight, 1, 15),
    getMinMaxMessage("Length", data.length, 1, 100),
    getSelectMessage("Type", data.type),
    getSelectMessage("Breed", data.breed),
  ].filter(Boolean);
}

/**
 * @param {PetData} data
 */
function validateData(data) {
  const messages = getValidatedMessages(data);
  if (messages.length > 0) {
    alert(messages.join("\n"));
    return false;
  }
  return true;
}

submitBtn.addEventListener("click", function (e) {
  const data = {
    id: idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseNumber(weightInput.value),
    length: parseNumber(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date(),
  };

  const validate = validateData(data);
  return true;
});

