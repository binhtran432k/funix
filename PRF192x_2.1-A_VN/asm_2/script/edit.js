"use strict";

/** @type {HTMLInputElement} */
const petForm = document.getElementById("container-form");

/**
 * @param {PetData[]} pets
 */
function renderPetEditTable(pets) {
  document.getElementById("tbody").innerHTML = pets
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
            <button type="button" class="btn btn-warning" onclick="startEditPet('${
              p.id
            }')">Edit</button>
          </td>
        </tr>
      `,
    )
    .join("\n");
}

/**
 * @param {string} petId
 */
function startEditPet(petId) {
  const pet = getPet(petId);
  if (pet) {
    petForm.classList.remove("hide");
    fillPetInput(pet);
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
  };

  const validate = validatePetData(data, true);
  if (validate) {
    updatePet(data);
    clearPetInput();
    renderPetEditTable(petArr);
    petForm.classList.add("hide");
  } else {
    e.preventDefault();
    return false;
  }
  return true;
});

renderTypeSelect(typeArr)
renderPetEditTable(petArr);
