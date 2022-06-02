//selecting the hidden section
"use strict";

const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");

console.log(btnOpenModal);

//function for opening the modal
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

//function for closing the modal
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

//eventlistener when the user clicks the "show modal" button
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//eventlistener to close the modal when the user clicks esc
document.addEventListener("keydown", function (e) {
  console.log(`${e.key} pressed`);
  if (e.key == "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
