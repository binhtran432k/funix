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
const petArr = [
  {
    id: "P001",
    name: "Tom",
    age: "3",
    type: "Cat",
    weight: "5",
    length: "50",
    color: "#ff0000",
    breed: "Tabby",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    date: new Date("2022-03-01"),
  },
  {
    id: "P002",
    name: "Tom",
    age: "5",
    type: "Dog",
    weight: "3",
    length: "40",
    color: "#00ff00",
    breed: "Mixed Breed",
    vaccinated: false,
    dewormed: false,
    sterilized: false,
    date: new Date("2022-03-02"),
  },
];

function parseNumber(value) {
  return value ? Number(value) : NaN;
}

/**
 * @param {Date} value
 */
function getDateString(value) {
  const date = ("00" + value.getDate()).slice(-2);
  const month = ("00" + (value.getMonth() + 1)).slice(-2);
  const year = ("0000" + value.getFullYear()).slice(-4);
  return `${date}/${month}/${year}`;
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

function clearInput() {
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
 * @param {PetData[]} pets
 */
function renderTableData(pets) {
  const petHtml = pets
    .map(
      (p) => `
        <tr>
          <th scope="row">${p.id}</th>
          <td>${p.name}</td>
          <td>${p.age}</td>
          <td>${p.type}</td>
          <td>${p.weight} kg</td>
          <td>${p.length} cm</td>
          <td>${p.breed}</td>
          <td>
            <i class="bi bi-square-fill" style="color: ${p.color}"></i>
          </td>
          <td><i class="bi bi-${
            p.vaccinated ? "check" : "x"
          }-circle-fill"></i></td>
          <td><i class="bi bi-${
            p.dewormed ? "check" : "x"
          }-circle-fill"></i></td>
          <td><i class="bi bi-${
            p.sterilized ? "check" : "x"
          }-circle-fill"></i></td>
          <td>${getDateString(p.date)}</td>
          <td>
            <button type="button" class="btn btn-danger" data="${
              p.id
            }">Delete</button>
          </td>
        </tr>
      `,
    )
    .join("\n");
  document.getElementById("tbody").innerHTML = petHtml;
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
  if (validate) {
    petArr.push(data);
    clearInput();
    renderTableData(petArr);
  } else {
    e.preventDefault();
    return false;
  }
  return true;
});

renderTableData(petArr);
