const WORLD_POPULATION = 7_900;

/**
 * @typedef Country
 * @property {string} country
 * @property {string} capital
 * @property {string} language
 * @property {number} population unit in million
 * @property {string[]} neighbours
 * @property {() => void?} describe
 * @property {() => void?} checkIsland
 * @property {boolean?} isIsland
 */

/** @returns {Country} */
function getMyCountry() {
  return {
    country: "Vietnam",
    capital: "Hanoi",
    language: "Vietnamese",
    population: 99,
    neighbours: ["Laos", "Cambodia", "China"],
  };
}

function main5_1() {
  const myCountry = getMyCountry();
  console.log(myCountry);
}

function main5_2() {
  const myCountry = getMyCountry();
  console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
  );
  myCountry.population += 2;
  console.log(myCountry.population);
  myCountry["population"] -= 2;
  console.log(myCountry.population);
}
function main5_3() {
  const myCountry = getMyCountry();

  myCountry.describe = function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`,
    );
  };

  myCountry.checkIsland = function () {
    this.isIsland = this.neighbours.length === 0;
  };

  myCountry.describe();

  myCountry.checkIsland();
  console.log(myCountry);
}

function main5_4() {
  for (let i = 0; i < 50; i++) {
    console.log(`Voter number ${i + 1} is currently voting`);
  }
}

/**
 * @param {number} population
 */
function percentageOfWorld1(population) {
  return (population / WORLD_POPULATION) * 100;
}

function main5_5() {
  /** [[Vietnam, Thailand, China, United States]] */
  const populations = [99, 66, 1441, 334];
  const percentages = populations.map(percentageOfWorld1);
  const percentages2 = [];
  for (let i = 0; i < populations.length; i++) {
    percentages2[i] = (populations[i] / WORLD_POPULATION) * 100;
  }
  console.log(percentages, percentages2);
  console.log(
    percentages2.length === percentages.length &&
      percentages2.every((_, i) => percentages[i] === percentages2[i]),
  );
}

function main5_6() {
  const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
  ];

  for (let i = 0; i < listOfNeighbours.length; i++) {
    const neighbours = listOfNeighbours[i];
    if (neighbours.length >= 2) {
      for (let j = 1; j < neighbours.length; j++) {
        console.log(neighbours[j]);
      }
    }
  }
}

function main5_7() {
  /** [[Vietnam, Thailand, China, United States]] */
  const populations = [99, 66, 1441, 334];
  const percentages = populations.map(percentageOfWorld1);
  const percentages3 = [];
  let i = 0;
  while (i < populations.length) {
    percentages3[i] = (populations[i] / WORLD_POPULATION) * 100;
    i++;
  }
  console.log(percentages, percentages3);
  console.log(
    percentages3.length === percentages.length &&
      percentages3.every((_, i) => percentages[i] === percentages3[i]),
  );
}

function main() {
  console.log("-------------------Lab 5.1-------------------");
  main5_1();
  console.log("-------------------Lab 5.2-------------------");
  main5_2();
  console.log("-------------------Lab 5.3-------------------");
  main5_3();
  console.log("-------------------Lab 5.4-------------------");
  main5_4();
  console.log("-------------------Lab 5.5-------------------");
  main5_5();
  console.log("-------------------Lab 5.6-------------------");
  main5_6();
  console.log("-------------------Lab 5.7-------------------");
  main5_7();
}

main();
