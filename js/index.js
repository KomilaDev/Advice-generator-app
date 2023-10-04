"use strict";

let fetch__btn = document.querySelector(".fetch__btn"),
  title = document.querySelector(".title"),
  text = document.querySelector(".text");

fetch__btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((res) => {
      title.innerHTML = `ADVICE #${res.slip.id}`;
      text.innerHTML = res.slip.advice;
    });
});
