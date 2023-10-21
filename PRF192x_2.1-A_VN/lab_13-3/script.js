/**
 * @param {string} make brand
 * @param {number} speed Current speed
 */
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  this.print();
};

Car.prototype.brake = function () {
  this.speed -= 5;
  this.print();
};

Car.prototype.print = function () {
  console.log(`${this.make}'s speed is ${this.speed}`);
};

/**
 * @param {string} make brand
 * @param {number} speed Current speed
 * @param {number} charge Current charge
 */
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

/**
 * @param {number} chargeTo
 */
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  this.print();
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  this.charge = this.charge < 0 ? 0 : this.charge;
  this.print();
};

EV.prototype.print = function () {
  console.log(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`,
  );
};

class CarCI {
  /**
   * @param {string} make
   * @param {number} speed
   */
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
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
    this.print();
  }

  brake() {
    this.speed -= 5;
    this.print();
  }

  print() {
    console.log(`${this.make}'s speed is ${this.speed}`);
  }
}

const car1 = new EV("Tesla", 120, 23);
car1.print();
car1.accelerate();
car1.brake();
car1.chargeBattery(90);
