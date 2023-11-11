/**
 * @param {number[]} arr
 */
function printForecast(arr) {
  const innerTxt = arr
    .map((x, i) => `${x}ºC in ${i + 1} day${i > 0 ? "s" : ""}`)
    .join(" ... ");
  console.log(`... ${innerTxt} ..`);
}

function main() {
  printForecast([17, 21, 23]);
  printForecast([12, 5, -5, 0, 4]);
}

main();
