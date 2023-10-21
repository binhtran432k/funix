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

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car2.brake();
car1.brake();
car1.accelerate();
car2.brake();
car2.accelerate();
car1.brake();
