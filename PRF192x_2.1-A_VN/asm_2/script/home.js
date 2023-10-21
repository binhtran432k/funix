"use strict";

/** @type {HTMLButtonElement} */
const healthyBtn = document.getElementById("healthy-btn");
/** @type {HTMLButtonElement} */
const bmiBtn = document.getElementById("bmi-btn");

let healthyCheck = false;

/**
 * @param {PetData[]} pets
 * @param {boolean} healthyCheck
 */
function renderPetTable(pets, healthyCheck) {
  document.getElementById("tbody").innerHTML = pets
    .filter(
      (p) =>
        !healthyCheck ||
        (healthyCheck && p.vaccinated && p.dewormed && p.sterilized),
    )
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
          <td>${!p.bmi || isNaN(p.bmi) ? "?" : p.bmi.toFixed(2)}</td>
          <td>${getDateString(p.date)}</td>
          <td>
            <button type="button" class="btn btn-danger" onclick="removePetAction('${
              p.id
            }')">Delete</button>
          </td>
        </tr>
      `,
    )
    .join("\n");

  document.getElementById("healthy-btn").innerText = healthyCheck
    ? "Show All Pet"
    : "Show Healthy Pet";
}

/**
 * @param {string} petId
 */
function removePetAction(petId) {
  if (confirm("Are you sure?")) {
    removePet(petId);
    renderPetTable(petArr, healthyCheck);
  }
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
    bmi: NaN,
  };

  const validate = validatePetData(data);
  if (validate) {
    addPet(data);
    clearPetInput();
    renderPetTable(petArr, healthyCheck);
  } else {
    e.preventDefault();
    return false;
  }
  return true;
});

healthyBtn.addEventListener("click", function () {
  healthyCheck = !healthyCheck;
  renderPetTable(petArr, healthyCheck);
});

bmiBtn.addEventListener("click", function () {
  changeBmiPets();
  renderPetTable(petArr, healthyCheck);
});

renderTypeSelect(typeArr);
renderBreedSelect(breedArr);
renderPetTable(petArr, healthyCheck);
