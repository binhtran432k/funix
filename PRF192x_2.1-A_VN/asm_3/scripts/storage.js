"use strict";

/**
 * @typedef Category
 * @property {string} id
 * @property {string} name
 */

/**
 * @param {string} key
 * @param {string?} value
 */
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

/**
 * @param {string} key
 * @param {string} defaultVal
 * @returns {string | any}
 */
function getFromStorage(key, defaultVal) {
  return localStorage.getItem(key) ?? defaultVal;
}

/**
 * @param {string} key
 */
function removeFromStorage(key) {
  localStorage.removeItem(key);
}

/**
 * @template T
 */
class Optional {
  /**
   * @param {T} value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * @param {T} value
   */
  set(value) {
    this.value = value;
  }

  unset() {
    this.value = null;
  }
}

class Setting {
  /**
   * @param {number} pageSize
   * @param {string} category
   */
  constructor(pageSize, category) {
    this.pageSize = pageSize;
    this.category = category;
  }

  /**
   * @param {Setting} setting
   */
  static parse(setting) {
    return new Setting(setting.pageSize, setting.category);
  }
}

/**
 * Get hash code from a string
 * @param {string} str string to hash
 * @returns {string} a 32 bit integer as string
 */
function hashCode(str) {
  return [...str]
    .map((c) => c.charCodeAt(0))
    .reduce((hash, char) => 0 | ((hash << 5) - hash + char))
    .toString();
}

/**
 * @param {UserData} userData
 * @returns {User}
 */
function parseUser(userData) {
  return new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password,
  );
}

/** @returns {User?} */
function getCurrentUser() {
  const dbCurrentUser = JSON.parse(getFromStorage(CURRENT_USER_KEY, "null"));
  if (dbCurrentUser) {
    return parseUser(dbCurrentUser);
  }
  return null;
}

function getSettingFromStorage() {
  const defaultSetting = new Setting(5, categoryArr[0].id);
  return Setting.parse(
    JSON.parse(getFromStorage(CURRENT_SETTING, JSON.stringify(defaultSetting))),
  );
}

function saveSettingToStorage() {
  saveToStorage(CURRENT_SETTING, JSON.stringify(currentSetting));
}

/** @returns {User[]} */
function getUserArr() {
  /** @type {User[]} */
  const initialUserArr = [
    new User("Hello", "World", "helloworld", hashCode("worldhello")),
  ];

  return JSON.parse(
    getFromStorage(USER_KEY, JSON.stringify(initialUserArr)),
  ).map((u) => parseUser(u));
}

/**
 * @param {User} user
 * @throws {Error} duplicate user error
 */
function registerUser(user) {
  const isDuplicateUserMessage = !!userArr.find(
    (u) => u.username === user.username,
  );

  if (isDuplicateUserMessage) {
    throw new Error("Username must be unique!");
  }

  userArr.push(user);
  saveToStorage(USER_KEY, JSON.stringify(userArr));
}

/**
 * @param {UserData} user login user
 */
function loginUser(user) {
  const dbUser = userArr.find((u) => u.username === user.username);

  if (!dbUser || !dbUser.checkPassword(user.password)) {
    throw new Error("Invalid user login!");
  }

  currentUser.set(dbUser);

  saveToStorage(CURRENT_USER_KEY, JSON.stringify(currentUser.value));
}

function logoutUser() {
  currentUser.unset();

  removeFromStorage(CURRENT_USER_KEY);
}

const USER_KEY = "USER_ARRAY";
const CURRENT_USER_KEY = "CURRENT_USER";
const CURRENT_SETTING = "SETTING";

const userArr = getUserArr();
/** @type {Category[]} */
const categoryArr = [
  { id: "general", name: "General" },
  { id: "business", name: "Business" },
  { id: "entertainment", name: "Entertainment" },
  { id: "health", name: "Health" },
  { id: "science", name: "Science" },
  { id: "sports", name: "Sports" },
  { id: "technology", name: "Technology" },
];
const currentUser = new Optional(getCurrentUser());
const currentSetting = getSettingFromStorage();
