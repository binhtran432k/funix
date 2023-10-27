"use strict";

class Task {
  /**
   * @param {Task} todo
   */
  static parse(todo) {
    return new Task(todo.task, todo.owner, todo.isDone);
  }

  /**
   * @param {string} task content of task
   * @param {string} owner username of task owner
   * @param {boolean} isDone is the task done or not
   */
  constructor(task, owner, isDone = false) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }

  toggle() {
    this.isDone = !this.isDone;
  }
}

/**
 * @param {string} field name of field
 * @param {any} value value from input
 * @returns {string?} required message
 */
function getRequiredMessage(field, value) {
  if (value === "" || (!value && isNaN(value))) {
    return `Please input for ${field}!`;
  }
}

/**
 * @returns {Task[]}
 */
function getTodoArr() {
  return JSON.parse(getFromStorage(TODO_KEY, "[]")).map(Task.parse);
}

/**
 * @param {string} task
 * @param {string} owner
 *
 * @throws {Error}
 */
function addTodoByOwner(task, owner) {
  if (todoArr.find((t) => t.task === task && t.owner === owner)) {
    throw new Error("Task must be unique!");
  }

  todoArr.push(new Task(task, owner));

  saveToStorage(TODO_KEY, JSON.stringify(todoArr));
}

function getTodoListByOwner(owner) {
  return todoArr.filter((t) => t.owner === owner);
}

/**
 * @param {string} task
 * @param {string} owner
 * @param {boolean?} isDone toggle value if undefined
 *
 * @throws {Error}
 */
function checkTodoByOwner(task, owner, isDone) {
  const todo = todoArr.find((t) => t.task === task && t.owner === owner);

  if (!todo) {
    throw new Error("Task does not exist!");
  }

  if (isDone === undefined) {
    todo.toggle();
  } else {
    todo.isDone = isDone;
  }

  saveToStorage(TODO_KEY, JSON.stringify(todoArr));
}

/**
 * @param {string} task
 * @param {string} owner
 */
function removeTodoByOwner(task, owner) {
  todoArr.splice(
    0,
    todoArr.length,
    ...todoArr.filter(
      (t) => t.owner !== owner || (t.task !== task && t.owner === owner),
    ),
  );

  saveToStorage(TODO_KEY, JSON.stringify(todoArr));
}

/**
 * @param {SubmitEvent} e
 */
function handleAddTodo(e) {
  try {
    if (!currentUser.value) {
      throw new Error("Please login to add task!");
    }

    const owner = currentUser.value.username;
    const task = taskInput.value;

    if (!task) {
      throw new Error("Please input for task!");
    }

    addTodoByOwner(task, owner);

    resetTodoPageView();
  } catch (err) {
    alert(err.message);
  }
  e.preventDefault();
  return false;
}

/**
 * @param {string} task
 */
function handleToggleTodo(task) {
  try {
    if (!currentUser.value) {
      throw new Error("Please login to toggle task!");
    }

    const owner = currentUser.value.username;

    checkTodoByOwner(task, owner);

    resetTodoPageView();
  } catch (err) {
    alert(err.message);
  }
}

/**
 * @param {string} task
 */
function handleRemoveTodo(task) {
  try {
    if (!currentUser.value) {
      throw new Error("Please login to remove task!");
    }

    const owner = currentUser.value.username;

    removeTodoByOwner(task, owner);

    resetTodoPageView();
  } catch (err) {
    alert(err.message);
  }
}

function handleTodoListClick(e) {
  /** @type {HTMLElement} */
  const element = e.target;

  if (element.classList.contains("task-item")) {
    const task = element.dataset.task;
    handleToggleTodo(task);
  } else if (element.classList.contains("close")) {
    const task = element.parentNode.dataset.task;
    handleRemoveTodo(task);
  }
}

function renderTodoList() {
  if (!currentUser.value) {
    return;
  }

  const owner = currentUser.value.username;

  todoList.innerHTML = getTodoListByOwner(owner).map(
    (t) => `
<li class="task-item${t.isDone ? " checked" : ""}" data-task="${t.task}">${
      t.task
    }<span class="close">×</span></li>
    `,
  );
}

function resetTodoPageView() {
  taskInput.value = "";
  renderTodoList();
}

function setupTodoPage() {
  resetTodoPageView();
  todoList.addEventListener("click", handleTodoListClick);

  todoForm.addEventListener("submit", handleAddTodo);
}

const todoForm = document.getElementById("form-todo");
/** @type {HTMLInputElement} */
const taskInput = document.getElementById("input-task");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "TODO_LIST";
const todoArr = getTodoArr();

setupTodoPage();
