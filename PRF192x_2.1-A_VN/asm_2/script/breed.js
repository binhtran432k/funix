"use strict";

/**
 * @param {BreedData} data
 * @returns {string[]} messages
 */
function getValidatedMessages(data) {
  const breedNames = breedArr.map((b) => b.name);
  return [
    breedNames.includes(data.name) ? "Breed must be unique!" : false,
    getRequiredMessage("Breed", data.name),
    getSelectMessage("Type", data.type),
  ].filter(Boolean);
}

/**
 * @param {BreedData} data
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
  typeInput.value = "";
  breedInput.value = "";
}

/**
 * @param {BreedData[]} breeds
 */
function renderBreedTable(breeds) {
  document.getElementById("tbody").innerHTML = breeds
    .map(
      (p, i) => `
        <tr>
          <td scope="row">${i + 1}</td>
          <td>${p.name}</td>
          <td>${p.type}</td>
          <td>
            <button type="button" class="btn btn-danger" onclick="removeBreedAction('${
              p.name
            }')">Delete</button>
          </td>
        </tr>
      `,
    )
    .join("\n");
}

/**
 * @param {string} breedName
 */
function removeBreedAction(breedName) {
  if (confirm("Are you sure?")) {
    removeBreed(breedName);
    renderBreedTable(breedArr);
  }
}

submitBtn.addEventListener("click", function (e) {
  const data = {
    name: breedInput.value,
    type: typeInput.value,
  };

  const validate = validateData(data);
  if (validate) {
    addBreed(data);
    clearInput();
    renderBreedTable(breedArr);
  } else {
    e.preventDefault();
    return false;
  }
  return true;
});

renderTypeSelect(typeArr);
renderBreedTable(breedArr);
