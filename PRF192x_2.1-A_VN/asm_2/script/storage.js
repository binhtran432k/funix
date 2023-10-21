"use strict";

/**
 * @param {string} key
 * @param {string} value
 */
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

/**
 * @param {string} key
 * @returns {string|any}
 */
function getFromStorage(key, defaultVal) {
  return localStorage.getItem(key) ?? defaultVal;
}

// Pets
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
 * @property {number} bmi
 */

/** @type {PetData[]} */
const petArr = JSON.parse(getFromStorage("petArr", "[]"));

/**
 * @param {PetData} pet
 */
function addPet(pet) {
  petArr.push(pet);
  saveToStorage("petArr", JSON.stringify(petArr));
}

/**
 * @param {string} petId
 */
function getPet(petId) {
  return petArr.find((p) => p.id === petId);
}

/**
 * @param {PetData} pet
 */
function updatePet(pet) {
  const oldPet = getPet(pet.id);
  if (oldPet) {
    Object.entries(pet).forEach(([key, value]) => {
      oldPet[key] = value;
    });
    oldPet.bmi = NaN;
  }
  saveToStorage("petArr", JSON.stringify(petArr));
}

/**
 * @param {string} petId
 */
function removePet(petId) {
  petArr.splice(0, petArr.length, ...petArr.filter((p) => p.id !== petId));
  saveToStorage("petArr", JSON.stringify(petArr));
}

/**
 * @param {PetData} pet
 */
function getBMI(pet) {
  const factor = pet.type === "Dog" ? 703 : 886;
  return (pet.weight * factor) / (pet.length * pet.length);
}

function changeBmiPets() {
  petArr.forEach((p) => (p.bmi = getBMI(p)));
  saveToStorage("petArr", JSON.stringify(petArr));
}

// Type
const typeArr = ["Cat", "Dog"];

// Breeds
/**
 * @typedef BreedData
 * @property {string} type
 * @property {string} name
 */

/** @type {BreedData[]} */
const breeds = [
  { type: "Cat", name: "Tabby" },
  { type: "Cat", name: "Domestic Medium Hair" },
  { type: "Dog", name: "Mixed Breed" },
  { type: "Cat", name: "Domestic Short Hair" },
  { type: "Cat", name: "Terrier" },
  { type: "Dog", name: "Husky" },
  { type: "Cat", name: "Greyhound" },
  { type: "Dog", name: "Doberman Pinscher" },
  { type: "Cat", name: "Persian" },
  { type: "Cat", name: "Rottweiler" },
];
/** @type {BreedData[]} */
const breedArr = JSON.parse(getFromStorage("breedArr", JSON.stringify(breeds)));

/**
 * @param {BreedData} breed
 */
function addBreed(breed) {
  breedArr.push(breed);
  saveToStorage("breedArr", JSON.stringify(breedArr));
}

/**
 * @param {string} name
 */
function removeBreed(name) {
  breedArr.splice(
    0,
    breedArr.length,
    ...breedArr.filter((breed) => breed.name !== name),
  );
  saveToStorage("breedArr", JSON.stringify(breedArr));
}
