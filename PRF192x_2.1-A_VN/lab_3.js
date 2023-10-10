// Setup prompt
const prompt = require("prompt-sync")();

function simpleMath() {
  console.log("9" - "5"); // 4
  console.log("19" - "13" + "17"); // 617
  console.log("19" - "13" + 17); // 23
  console.log("123" < 57); // false
  console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
}

function checkNeighbors() {
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

function findCountry() {
  function stringToBoolean(txt) {
    return txt === "false" ? false : !!txt;
  }
  const expectedLanguage = "English";
  const expectedPopulation = 50;
  const expectedIsIsland = false;
  const country = prompt("Where are you from? ");
  const language = prompt("Which language do you use in your country? ");
  const population = Number(
    prompt("What is the population(In millions) of your country? "),
  );
  const isIsland = stringToBoolean(prompt("Is your country a island? "));
  if (
    language === expectedLanguage &&
    population < expectedPopulation &&
    isIsland === expectedIsIsland
  ) {
    console.log(`You should live in ${country} :)`);
  } else {
    console.log(`${country} does not meet your criteria :(`);
  }
}

findCountry();
