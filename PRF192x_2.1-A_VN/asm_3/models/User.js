"use strict";

/**
 * @typedef UserData
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} username
 * @property {string} password
 */

class User {
  /**
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} username
   * @param {string} password
   */
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }

  checkPassword(password) {
    return this.password === hashCode(password);
  }
}
