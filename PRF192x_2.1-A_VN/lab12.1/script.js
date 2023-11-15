"use strict";

function getDogMessage(index, age) {
  if (age >= 3) {
    return `Dog number ${index + 1} is an adult, and is ${age} years old`;
  } else {
    return `Dog number ${index + 1} is still a puppy`;
  }
}

/**
 * @param {number[]} dogKate
 * @param {number[]} dogJulia
 */
function checkDogs(dogJulia, dogKate) {
  const dogJuliaOnly = dogJulia.slice(1).slice(0, -1);
  const dogAges = [...dogJuliaOnly, ...dogKate];
  dogAges.forEach((age, i) => console.log(getDogMessage(i, age)));
}

function main() {
  function printTitle(message) {
    const totalLen = 40;
    const prefixLen = Math.floor((totalLen - message.length) / 2);
    const postfixLen = totalLen - prefixLen - message.length;
    console.log("-".repeat(prefixLen) + message + "-".repeat(postfixLen));
  }
  printTitle("Data 1");
  checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  printTitle("Data 2");
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
  printTitle("End");
}

main();
