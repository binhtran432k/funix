"use strict";

/** @type {HTMLButtonElement} */
const submitBtn = document.getElementById("submit-btn");
/** @type {HTMLInputElement} */
const idInput = document.getElementById("input-id");
/** @type {HTMLInputElement} */
const nameInput = document.getElementById("input-name");
/** @type {HTMLInputElement} */
const ageInput = document.getElementById("input-age");
/** @type {HTMLInputElement} */
const weightInput = document.getElementById("input-weight");
/** @type {HTMLInputElement} */
const lengthInput = document.getElementById("input-length");
/** @type {HTMLInputElement} */
const colorInput = document.getElementById("input-color-1");
/** @type {HTMLInputElement} */
const vaccinatedInput = document.getElementById("input-vaccinated");
/** @type {HTMLInputElement} */
const dewormedInput = document.getElementById("input-dewormed");
/** @type {HTMLInputElement} */
const sterilizedInput = document.getElementById("input-sterilized");
/** @type {HTMLInputElement} */
const breedInput = document.getElementById("input-breed");
/** @type {HTMLInputElement} */
const typeInput = document.getElementById("input-type");

const sidebar = document.getElementById("sidebar");

const changeEvent = new Event("change");

function parseNumber(value) {
  return value ? Number(value) : NaN;
}

/**
 * @param {string} date
 */
function getDateString(value) {
  const date = new Date(value);
  const dateStr = ("00" + date.getDate()).slice(-2);
  const monthStr = ("00" + (date.getMonth() + 1)).slice(-2);
  const yearStr = ("0000" + date.getFullYear()).slice(-4);
  return `${dateStr}/${monthStr}/${yearStr}`;
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
 * @param {BreedData[]} breedArr
 */
function renderBreedSelect(breedArr) {
  breedInput.innerHTML = `
    <option value="" default>Select Breed</option>
    ${breedArr
      .filter((breed) => breed.type === typeInput.value)
      .map((breed) => `<option value="${breed.name}">${breed.name}</option>`)}
  `;
}

/**
 * @param {string[]} typeArr
 */
function renderTypeSelect(typeArr) {
  typeInput.innerHTML = `
    <option value="" default>Select Type</option>
    ${typeArr.map((type) => `<option value="${type}">${type}</option>`)}
  `;
}

/**
 * @param {PetData} data
 * @param {boolean?} noIdCheck
 * @returns {string[]} messages
 */
function getValidatedPetMessages(data, noIdCheck) {
  const petIds = petArr.map((p) => p.id);
  return [
    getRequiredMessage("Id", data.id),
    getRequiredMessage("Name", data.name),
    getRequiredMessage("Age", data.age),
    getRequiredMessage("Weight", data.weight),
    getRequiredMessage("Length", data.length),
    getRequiredMessage("Color", data.color),
    !noIdCheck && petIds.includes(data.id) ? "ID must be unique!" : false,
    getMinMaxMessage("Age", data.age, 1, 15),
    getMinMaxMessage("Weight", data.weight, 1, 15),
    getMinMaxMessage("Length", data.length, 1, 100),
    getSelectMessage("Type", data.type),
    getSelectMessage("Breed", data.breed),
  ].filter(Boolean);
}

/**
 * @param {PetData} data
 * @param {boolean?} noIdCheck
 */
function validatePetData(data, noIdCheck) {
  const messages = getValidatedPetMessages(data, noIdCheck);
  if (messages.length > 0) {
    alert(messages.join("\n"));
    return false;
  }
  return true;
}

function clearPetInput() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "";
  breedInput.value = "";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}

/**
 * @param {PetData} pet
 */
function fillPetInput(pet) {
  idInput.value = pet.id;
  nameInput.value = pet.name;
  ageInput.value = pet.age;
  weightInput.value = pet.weight;
  lengthInput.value = pet.length;
  colorInput.value = pet.color;
  vaccinatedInput.checked = pet.vaccinated;
  dewormedInput.checked = pet.dewormed;
  sterilizedInput.checked = pet.sterilized;
  typeInput.value = pet.type;
  typeInput.dispatchEvent(changeEvent);
  breedInput.value = pet.breed;
}

sidebar &&
  sidebar.addEventListener("click", function (e) {
    if (!e.target.closest("li>a")) {
      sidebar.classList.toggle("active");
    }
  });

typeInput &&
  typeInput.addEventListener("change", function () {
    renderBreedSelect(breedArr);
  });
