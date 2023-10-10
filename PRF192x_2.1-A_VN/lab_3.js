// Setup prompt
const prompt = require("prompt-sync")();

function fu3_1() {
  console.log("9" - "5"); // 4
  console.log("19" - "13" + "17"); // 617
  console.log("19" - "13" + 17); // 23
  console.log("123" < 57); // false
  console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
}

function fu3_2() {
  const numNeighbours = prompt(
    "How many neighbor countries does your country have? ",
  );
  if (Number(numNeighbours) === 1) {
    console.log("Only 1 border!");
  } else if (numNeighbours > 1) {
    console.log("More than 1 border!");
  } else {
    console.log("No borders");
  }
}

fu3_2();
