"use strict";

function onOpenModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function onCloseModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function main() {
  [...Array(btnOpenModals.length)].forEach((_, i) => {
    btnOpenModals.item(i)?.addEventListener("click", onOpenModal);
  });

  [btnCloseModal, overlay].forEach((x) =>
    x.addEventListener("click", onCloseModal),
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      onCloseModal();
    }
  });
}

const [modal] = document.getElementsByClassName("modal");
const [overlay] = document.getElementsByClassName("overlay");
const [btnCloseModal] = document.getElementsByClassName("close-modal");
const btnOpenModals = document.getElementsByClassName("show-modal");

main();
