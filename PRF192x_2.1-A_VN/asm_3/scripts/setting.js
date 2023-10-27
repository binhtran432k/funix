"use strict";

function renderCategoryDropdown() {
  categoryInput.innerHTML = categoryArr.map(
    (c) => `<option value="${c.id}">${c.name}</option>`,
  );
}

function setupSettingPage() {
  renderCategoryDropdown();
  categoryInput.value = currentSetting.category;
  pageSizeInput.value = currentSetting.pageSize;
  settingForm.addEventListener("submit", handleSaveSetting);
}

/**
 * @param {SubmitEvent} e
 */
function handleSaveSetting(e) {
  try {
    if (!pageSizeInput.value) {
      throw new Error("Please input for page size!");
    }
    if (pageSizeInput.value <= 0 || 100 < pageSizeInput.value) {
      throw new Error("Page size must be from 1 to 100!");
    }
    currentSetting.pageSize = Number(pageSizeInput.value);
    currentSetting.category = categoryInput.value;
    saveSettingToStorage();
    window.location.href = "../pages/news.html";
  } catch (err) {
    alert(err.message);
  }
  e.preventDefault();
  return false;
}

const settingForm = document.getElementById("form-setting");
/** @type {HTMLInputElement} */
const categoryInput = document.getElementById("input-category");
/** @type {HTMLInputElement} */
const pageSizeInput = document.getElementById("input-page-size");

setupSettingPage();
