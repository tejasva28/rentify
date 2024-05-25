'use strict';

/**
 * element toggle function
 */
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

document.addEventListener('DOMContentLoaded', function () {
  // Load header
  fetch('./header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      initializeHeaderScripts(); // Initialize scripts after loading header
    });

  // Load footer
  fetch('./footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});

function initializeHeaderScripts() {
  const addListingButton = document.getElementById('add-listing-btn');

  if (addListingButton) {
    addListingButton.addEventListener('click', function () {
      window.location.href = './add-listing.html';
    });
  }

  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  const navCloseBtn = document.querySelector("[data-nav-close-btn]");
  const navOpenBtn = document.querySelector("[data-nav-open-btn]");
  const navbarLinks = document.querySelectorAll("[data-nav-link]");

  const navElemArr = [overlay, navCloseBtn, navOpenBtn];

  for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

  for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
      elemToggleFunc(navbar);
      elemToggleFunc(overlay);
    });
  }

  const header = document.querySelector("[data-header]");

  window.addEventListener("scroll", function () {
    window.scrollY >= 400 ? header.classList.add("active") : header.classList.remove("active");
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const addListingButton = document.getElementById('add-listing-btn');

  if (addListingButton) {
    addListingButton.addEventListener('click', function () {
      window.location.href = './add-listing.html';
    });
  }

  loadHTML('header.html', 'header');
  loadHTML('footer.html', 'footer');
});

/**
 * Load external HTML into elements
 */
function loadHTML(url, elementId) {
  fetch(url)
    .then(response => {
      console.log(`Fetching ${url}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      console.log(`Loaded ${url} successfully`);
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error(`Error loading ${url}:`, error);
    });
}

/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

/**
 * header active state
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
});
