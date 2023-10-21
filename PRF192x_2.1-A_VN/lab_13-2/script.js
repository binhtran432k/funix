/**
 * @param {string} make
 * @param {number} speed Current speed
 */
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  this.printSpeed();
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  this.printSpeed();
};

Car.prototype.brake = function () {
  this.speed -= 5;
  this.printSpeed();
};

Car.prototype.printSpeed = function () {
  console.log(`${this.make}'s speed is ${this.speed}`);
};

class CarCI {
  /**
   * @param {string} make
   * @param {number} speed
   */
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
    this.printSpeed();
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  /**
   * @param {number} speedUS
   */
  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }

  accelerate() {
    this.speed += 10;
    this.printSpeed();
  }

  brake() {
    this.speed -= 5;
    this.printSpeed();
  }

  printSpeed() {
    console.log(`${this.make}'s speed is ${this.speed}`);
  }
}

const car1 = new CarCI("BMW", 120);
const car2 = new CarCI("Mercedes", 95);

car1.accelerate();
car2.brake();
car1.brake();
car1.accelerate();
car2.brake();
car2.accelerate();
car1.brake();

console.log(`${car1.make}'s speedUS is ${car1.speedUS}`);

console.log(`${car2.make}'s speedUS is ${car2.speedUS}`);

car1.speedUS = 120;
car2.speedUS = 95;

car1.printSpeed();
car2.printSpeed();
