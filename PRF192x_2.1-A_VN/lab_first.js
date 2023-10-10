const country = "Vietnam";
const continent = "Asia";
let population = 39908501;
const isIsland = false;
let language = "Vietnamese";
const finlandPopulation = 6000000;
const averagePopulation = 33000000;

console.log(`isIsland: ${isIsland}`);
console.log(`population: ${population}`);
console.log(`country: ${country}`);
console.log(`language: ${language}`);

language = "English";
console.log(`language: ${language}`);

console.log(`population / 2: ${population / 2}`);
console.log("-> Increase population by 1");
population += 1;
console.log(`population: ${population}`);
console.log(
  `is population bigger than Finland's population: ${
    population > finlandPopulation
  }`,
);
console.log(
  `is population lesser than average population: ${
    population < averagePopulation
  }`,
);

const description = `${country} and its ${(population / 1000000).toFixed(
  2,
)} million people speak ${language}`;

console.log(description);
