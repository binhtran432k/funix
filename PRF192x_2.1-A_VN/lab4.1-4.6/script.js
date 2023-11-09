/** In million */
const WORLD_POPULATION = 7_900;

/**
 * @param {string} country
 * @param {number} population in million unit
 * @param {string} capitalCity
 * @returns {string}
 */
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

function main4_1() {
  console.log("--------------------Lab 4.1--------------------");
  console.log(describeCountry("Vietnam", 99, "Hanoi"));
  console.log(describeCountry("Thailand", 66, "Bangkok"));
  console.log(describeCountry("China", 1441, "Beijing"));
}

/**
 * @param {number} population
 */
function percentageOfWorld1(population) {
  return (population / WORLD_POPULATION) * 100;
}

/**
 * @param {number} population
 */
const percentageOfWorld2 = function (population) {
  return (population / WORLD_POPULATION) * 100;
};

function main4_2() {
  console.log("--------------------Lab 4.2--------------------");
  console.log(`Vietnam's percentage of world is ${percentageOfWorld1(99)}%`);
  console.log(`Thailand's percentage of world is ${percentageOfWorld1(66)}%`);
  console.log(`China's percentage of world is ${percentageOfWorld1(1441)}%`);

  console.log(`Vietnam's percentage of world is ${percentageOfWorld2(99)}%`);
  console.log(`Thailand's percentage of world is ${percentageOfWorld2(66)}%`);
  console.log(`China's percentage of world is ${percentageOfWorld2(1441)}%`);
}

/**
 * @param {number} population
 */
const percentageOfWorld3 = (population) =>
  (population / WORLD_POPULATION) * 100;

function main4_3() {
  console.log("--------------------Lab 4.3--------------------");
  console.log(`Vietnam's percentage of world is ${percentageOfWorld3(99)}%`);
  console.log(`Thailand's percentage of world is ${percentageOfWorld3(66)}%`);
  console.log(`China's percentage of world is ${percentageOfWorld3(1441)}%`);
}

/**
 * @param {string} country
 * @param {number} population in million
 */
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population,
  ).toFixed(1)}% of the world`;
}

function main4_4() {
  console.log("--------------------Lab 4.4--------------------");
  console.log(describePopulation("Vietnam", 99));
  console.log(describePopulation("Thailand", 66));
  console.log(describePopulation("China", 1441));
}

function main4_5() {
  console.log("--------------------Lab 4.5--------------------");
  /** [[Vietnam, Thailand, China, United States]] */
  const populations = [99, 66, 1441, 334];
  console.log(populations);
  console.log(populations.length === 4);
  const percentages = populations.map((x) => percentageOfWorld1(x));
  console.log(percentages);
}

function main4_6() {
  console.log("--------------------Lab 4.6--------------------");
  const neighbours = ["Laos", "Cambodia"];
  console.log(neighbours);
  neighbours.push("China");
  console.log(neighbours);
  neighbours.splice(
    0,
    neighbours.length,
    ...neighbours.filter((x) => x !== "China"),
  );
  console.log(neighbours);
  if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
  }
  const laosIndex = neighbours.indexOf("Laos");
  if (laosIndex != -1) {
    neighbours[laosIndex] = "Hello my friend, Laos!";
  }
  console.log(neighbours);
}

function main() {
  main4_1();
  main4_2();
  main4_3();
  main4_4();
  main4_5();
  main4_6();
}

main();
