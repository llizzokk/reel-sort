'use strict';

import './css/genres-page.css';
import { fetchGenres, fetchMoviesByGenre } from './js/pixabay-api.js';
import { renderGenres, renderMovies } from './js/render-function.js';
import 'loaders.css';

const genresContainer = document.querySelector('.genresContainer');
const moviesContainer = document.querySelector('.moviesContainer');
const button = document.getElementById('load-btn');
const loader = document.querySelector('.loader-container');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalInfo = document.querySelector('.modal-info');

let currentPage = 1;
let genreId = null;
let PER_PAGE = 15;

const urlParams = new URLSearchParams(window.location.search);

function getQueryParam(param) {
  return urlParams.get(param);
}

function getQueryParamName(paramName) {
  return urlParams.get(paramName);
}

genreId = getQueryParam('genre');
const genreSelectName = getQueryParamName('genreName');

async function init() {
  try {
    if (genreId) {
      loader.style.display = 'flex';
      const moviesSelect = await fetchMoviesByGenre(
        genreId,
        currentPage,
        PER_PAGE
      );
      renderMovies(moviesSelect, moviesContainer);
      const buttonSelect = document.querySelector('.dropdown-button');
      buttonSelect.textContent = genreSelectName;
      button.classList.replace('load-more-hidden', 'btn');
    }

    const genres = await fetchGenres();
    renderGenres(genres, genresContainer);

    genresContainer.addEventListener('click', async event => {
      if (event.target.classList.contains('genres-list-button')) {
        const allGenresButtons = document.querySelectorAll(
          '.genres-list-button'
        );
        allGenresButtons.forEach(button =>
          button.classList.remove('genres-activated')
        );

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

        event.target.classList.add('genres-activated');

        genreId = event.target.dataset.genreId;
        currentPage = 1;

        button.classList.replace('load-more-hidden', 'btn');

        moviesContainer.innerHTML = '';
        try {
          loader.style.display = 'flex';

          const movies = await fetchMoviesByGenre(
            genreId,
            currentPage,
            PER_PAGE
          );
          renderMovies(movies, moviesContainer);
        } catch (error) {
          console.error('Ошибка при загрузке фильмов:', error);
        } finally {
          loader.style.display = 'none';
        }
      }
    });
  } catch (error) {
    console.log(error.message);
    errorMessage.classList.replace('error-hidden', 'error-message');
  } finally {
    loader.style.display = 'none';
  }
}

init();

button.addEventListener('click', handleLoad);
modalCloseBtn.addEventListener('click', closeModal);

async function handleLoad() {
  if (!genreId) return;

  button.classList.replace('btn', 'load-more-hidden');
  currentPage += 1;

  try {
    loader.style.display = 'block';

    const movies = await fetchMoviesByGenre(genreId, currentPage, PER_PAGE);
    renderMovies(movies, moviesContainer);

    const movieItem = document.querySelector('.movies-list-item');
    const itemHeight = movieItem.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: itemHeight,
      behavior: 'smooth',
    });
    button.classList.replace('load-more-hidden', 'btn');
  } catch (error) {
    console.log(error.message);
    errorMessage.classList.replace('error-hidden', 'error-message');
  } finally {
    button.disabled = false;
    loader.style.display = 'none';
  }
}

export function handleMovieClick(movie) {
  const { title, overview, poster_path, release_date, vote_average } = movie;

  modalInfo.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" width="300" class="modal-img">
    <div class="modal-wrap">
    <h2 class="modal-title">${title}</h2>
    <p class="modal-text">Release Date: <span class="modal-text-span">${release_date}</span></p>
    <p class="modal-text">Rating: <span class="modal-text-span">${vote_average}</span></p>
    <p class="modal-text">Overview: <span class="modal-text-span">${overview}</span></p>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});
