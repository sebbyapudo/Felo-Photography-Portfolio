'use strict'

// Add Event on multiple elements

const addEventOnElements = (elements, eventType, callback) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

// PRELOADING 

// const loadingElement = document.querySelector("[data-loading]");

// window.addEventListener("load", () => {
//   loadingElement.classList.add("loaded");
//   document.body.classList.remove("active");
// })


