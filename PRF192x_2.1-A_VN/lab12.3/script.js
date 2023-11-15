"use strict";

/**
 * @param {number[]} ages
 */
const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((p, c, _, arr) => p + c / arr.length, 0);

function main() {
  function printTitle(message) {
    const totalLen = 40;
    const prefixLen = Math.floor((totalLen - message.length) / 2);
    const postfixLen = totalLen - prefixLen - message.length;
    console.log("-".repeat(prefixLen) + message + "-".repeat(postfixLen));
  }
  printTitle("Data 1");
  console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
  printTitle("Data 2");
  console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
  printTitle("End");
}

main();
