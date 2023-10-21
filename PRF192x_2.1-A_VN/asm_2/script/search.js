"use strict";

/** @type {HTMLButtonElement} */
const findBtn = document.getElementById("find-btn");

/**
 * @param {PetData[]} pets
 */
function renderPetSearchTable(pets) {
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
        </tr>
      `,
    )
    .join("\n");
}

findBtn.addEventListener("click", function () {
  const id = idInput.value;
  const name = nameInput.value;
  const breed = breedInput.value;
  const type = typeInput.value;
  const vaccinated = vaccinatedInput.checked;
  const dewormed = dewormedInput.checked;
  const sterilized = sterilizedInput.checked;
  const filteredPets = petArr
    .filter((p) => !id || (id && p.id.indexOf(id) >= 0))
    .filter((p) => !name || (name && p.name.indexOf(name) >= 0))
    .filter((p) => !type || (type && p.type === type))
    .filter((p) => !breed || (breed && p.breed === breed))
    .filter((p) => !vaccinated || (vaccinated && p.vaccinated === vaccinated))
    .filter((p) => !dewormed || (dewormed && p.dewormed === dewormed))
    .filter((p) => !sterilized || (sterilized && p.sterilized === sterilized));

  renderPetSearchTable(filteredPets);
});

renderTypeSelect(typeArr);
renderBreedSelect(breedArr);
