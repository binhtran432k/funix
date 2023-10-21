"use strict";

/** @type {HTMLButtonElement} */
const importBtn = document.getElementById("import-btn");
/** @type {HTMLButtonElement} */
const exportBtn = document.getElementById("export-btn");
/** @type {HTMLInputElement} */
const fileInput = document.getElementById("input-file");

function clearDataInput() {
  fileInput.value = "";
}

exportBtn.addEventListener("click", function () {
  const blob = new Blob([JSON.stringify({ petArr, breedArr }, undefined, 4)], {
    type: "application/json",
  });
  saveAs(blob, "petData.json");
});

importBtn.addEventListener("click", function () {
  const file = fileInput.files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
      try {
        /** @type {{petArr: PetData[], breedArr: BreedData[]}}*/
        const { petArr: importPetArr, breedArr: importBreedArr } = JSON.parse(
          evt.target.result,
        );
        const oldPetMap = Object.fromEntries(petArr.map((p) => [p.id, p]));
        const oldBreedMap = Object.fromEntries(
          breedArr.map((b) => [b.name, b]),
        );

        // Update data values base on index
        importPetArr.forEach((p) => (oldPetMap[p.id] = p));
        importBreedArr.forEach((b) => (oldBreedMap[b.name] = b));

        petArr.splice(
          0,
          petArr.length,
          ...Object.entries(oldPetMap).map(([, v]) => v),
        );
        breedArr.splice(
          0,
          breedArr.length,
          ...Object.entries(oldBreedMap).map(([, v]) => v),
        );

        saveToStorage("petArr", JSON.stringify(petArr));
        saveToStorage("breedArr", JSON.stringify(breedArr));

        clearDataInput();
        alert("Import Success!");
      } catch (e) {
        console.log(e);
        alert("Invalid data format!");
      }
    };
    reader.onerror = function () {
      alert("Cannot load file to import!");
    };
  } else {
    alert("Please choose a file to import!");
  }
});
