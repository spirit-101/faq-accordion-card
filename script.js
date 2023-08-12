"use strict";

const accordionContainer = document.querySelector(".accordion-container");
const accordionText = document.querySelectorAll(".accordion__text");
const accordionHeading = document.querySelectorAll(".heading__secondary");
const arrow = document.querySelectorAll(".arrow");

let accordionID;

const removeClass = function (el, className) {
  el.forEach((elem) => elem.classList.remove(className));
};

const addClass = function (el, addClass) {
  document.querySelector(`${el}--${accordionID}`).classList.add(addClass);
};

accordionContainer.addEventListener("click", function (e) {
  const accordion = e.target.closest(".accordion__title-box");

  if (!accordion) return;

  accordionID = accordion.dataset.id;

  // Removing "active" classes
  removeClass(accordionText, "accordion__text--active");
  removeClass(accordionHeading, "accordion__title--active");
  removeClass(arrow, "arrow--active");

  // Activating "active" classes
  addClass(".accordion__text", "accordion__text--active");
  addClass(".accordion__title", "accordion__title--active");
  addClass(".arrow", "arrow--active");
});
