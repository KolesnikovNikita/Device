const openButton = document.querySelector(".button-write-us");
const popupForm = document.querySelector(".modal-write-us");
const closeButton = popupForm.querySelector(".modal-close");
const userLink = popupForm.querySelector(".write-us-input");
const modalForm = popupForm.querySelector(".write-us-form");
const userEmail = popupForm.querySelector(".write-us-email");

let isStorageSuppurt = true;
let storage = "";

try {
  storage = localStorage.getItem("user");
} catch (err) {
  isStorageSuppurt = false;
}

if (storage) {
  userLink.value = storage;
} else {
  userLink.focus();
}

openButton.addEventListener("click", function () {
  popupForm.classList.add("modal-show");
  userLink.focus();
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.remove("modal-show");
  popupForm.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupForm.classList.contains("modal-show")) {
      evt.preventDefault();
      popupForm.classList.remove("modal-show");
    }
  }
});
