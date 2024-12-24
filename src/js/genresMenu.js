'use strict';

const dropdown = document.querySelector('.dropdown');
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.genresContainer');
const genres = document.querySelectorAll('.genres-list-button');

dropdown.addEventListener('mouseover', function () {
  dropdownContent.style.display = 'flex';
});

dropdown.addEventListener('mouseleave', function () {
  dropdownContent.style.display = 'none';
});

document.addEventListener('click', function (event) {
  const isClickInside = dropdown.contains(event.target);
  if (!isClickInside) {
    dropdownContent.style.display = 'none';
  }
});

dropdownContent.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('genres-list-button')) {
    dropdownButton.textContent = event.target.textContent;
    dropdownContent.style.display = 'none';
  }
});
