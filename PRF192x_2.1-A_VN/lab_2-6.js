function getBMI(mass, height) {
  return mass / (height * height);
}

function printIsMarkHigherBMI(mark, john) {
  const markBMI = getBMI(mark.mass, mark.height);
  const johnBMI = getBMI(john.mass, john.height);
  const markHigherBMI = markBMI > johnBMI;
  if (markHigherBMI) {
    console.log(
      `Mark's BMI (${markBMI.toFixed(
        1,
      )}) is higher than John's (${johnBMI.toFixed(1)})`,
    );
  } else {
    console.log(
      `John's BMI (${johnBMI.toFixed(
        1,
      )}) is higher than Mark's (${markBMI.toFixed(1)})`,
    );
  }
}

function test() {
  printIsMarkHigherBMI({ mass: 78, height: 1.69 }, { mass: 92, height: 1.95 });
  printIsMarkHigherBMI({ mass: 95, height: 1.88 }, { mass: 85, height: 1.76 });
}

test();
