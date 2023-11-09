/**
 * @typedef Person
 * @property {string} name
 * @property {number} mass
 * @property {number} height
 * @property {number?} bmi
 */

/**
 * @param {number} mass
 * @param {number} height
 * @returns {number}
 */
function calcBMI(mass, height) {
  return mass / (height * height);
}

/**
 * @param {Person} person
 */
function setBmi(person) {
  person.bmi = calcBMI(person.mass, person.height);
}

function main_5_8_1() {
  /** @type {Person} */
  const mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
  };
  /** @type {Person} */
  const john = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
  };

  setBmi(mark);
  console.log(mark);
  setBmi(john);

  if (john.bmi > mark.bmi) {
    console.log(
      `John's BMI (${john.bmi.toFixed(
        1,
      )}) is higher than Mark's (${mark.bmi.toFixed(1)})!`,
    );
  } else {
    console.log(
      `Mark's BMI (${mark.bmi.toFixed(
        1,
      )}) is higher than John's (${john.bmi.toFixed(1)})!`,
    );
  }
}

/**
 * @param {number} bill
 * @returns {number}
 */
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/**
 * @param {number[]} arr
 */
function calcAverage(arr) {
  if (!arr || arr.length === 0) {
    throw new Error("Array must not be empty or null");
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function main_5_8_2() {
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];

  for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
  }

  for (let i = 0; i < bills.length; i++) {
    totals[i] = bills[i] + tips[i];
  }

  console.log(bills, tips, totals);

  console.log(calcAverage(totals));
}

function main() {
  console.log("---------------Lab 5.8.1---------------");
  main_5_8_1();
  console.log("---------------Lab 5.8.2---------------");
  main_5_8_2();
}

main();
