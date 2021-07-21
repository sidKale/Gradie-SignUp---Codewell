"use strict";
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const create = document.querySelector(".create-account");

create.addEventListener("click", function () {
  if (email === " " && password === " ") {
    email.style.border = "red";
  }
});
