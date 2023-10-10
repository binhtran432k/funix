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

function checkLanguage() {
  const language = prompt("language? ");
  switch (language) {
    case "Chinese":
    case "Mandarin":
      console.log("MOST number of native speakers!");
      break;
    case "Spanish":
      console.log("2nd place in number of native speakers");
      break;
    case "English":
      console.log("3rd place");
      break;
    case "Hindi":
      console.log("Number 4");
      break;
    case "Arabic":
      console.log("5th most spoken language");
      break;
    default:
      console.log("Great language too :D");
      break;
  }
}

function checkPopulation(country) {
  const population = prompt("Population (Millions)? ");
  console.log(
    population > 33
      ? `${country}'s population is above average`
      : `${country}'s population is below average`,
  );
}

function whoIsWin() {
  /**
   * @param {number[]} scores
   */
  function calcAverage(scores) {
    return scores.length === 0
      ? 0
      : scores.reduce((p, c) => p + c, 0) / scores.length;
  }
  function checkDolphinsWin(dolphins, koalas) {
    const dolphinsAverageScore = calcAverage(dolphins);
    const koalasAverageScore = calcAverage(koalas);
    if (
      dolphinsAverageScore > koalasAverageScore &&
      dolphinsAverageScore >= 100
    ) {
      console.log(`Dolphins ${dolphinsAverageScore} > ${koalasAverageScore}`);
    } else if (
      dolphinsAverageScore < koalasAverageScore &&
      koalasAverageScore >= 100
    ) {
      console.log(`Koalas ${koalasAverageScore} > ${dolphinsAverageScore}`);
    } else if (
      dolphinsAverageScore === koalasAverageScore &&
      dolphinsAverageScore >= 100
    ) {
      console.log(`Both win the trophy! ${dolphinsAverageScore}`);
    } else {
      console.log(`No one! ${dolphinsAverageScore}, ${koalasAverageScore}`);
    }
  }

  checkDolphinsWin([96, 108, 96], [88, 92, 120]);
  checkDolphinsWin([96, 108, 89], [88, 91, 110]);
  checkDolphinsWin([97, 132, 101], [109, 95, 123]);
  checkDolphinsWin([97, 112, 101], [109, 95, 123]);
  checkDolphinsWin([97, 112, 101], [109, 95, 106]);
}

function tipCalculator() {
  function calcTip(bill) {
    if (50 <= bill && bill <= 300) {
      return bill * 0.15;
    }
    return bill * 0.2;
  }
  function _tipCalculator(bill) {
    const tip = calcTip(bill);
    console.log(
      `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip
      }`,
    );
  }
  _tipCalculator(275);
  _tipCalculator(40);
  _tipCalculator(430);
}

tipCalculator();
