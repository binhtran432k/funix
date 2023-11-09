/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number} average of a, b, c
 */
const calcAverage = (a, b, c) => a + b + c / 3;

function printWinner(winner, winAvg, loseAvg) {
  console.log(`${winner} win 🏆 (${winAvg} vs. ${loseAvg})`);
}

/**
 * @param {number} avgDolphins
 * @param {number} avgKoalas
 */
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    printWinner("Dolphins", avgDolphins, avgKoalas);
  } else if (avgKoalas >= 2 * avgDolphins) {
    printWinner("Koalas", avgKoalas, avgDolphins);
  } else {
    console.log("No team wins...");
  }
}

function main4_7_1() {
  checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
  checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
}

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function main4_7_2() {
  const bills = [125, 555, 44];
  console.log(bills);
  const tips = bills.map(calcTip);
  console.log(tips);
  const totals = bills.map((x, i) => x + tips[i]);
  console.log(totals);
}

function main() {
  console.log("------------------Lab 4.7.1------------------");
  main4_7_1();
  console.log("------------------Lab 4.7.2------------------");
  main4_7_2();
}

main();
