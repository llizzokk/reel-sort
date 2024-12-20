'use strict';

import './css/genres-page.css';
import { fetchGenres, fetchMoviesByGenre } from './js/pixabay-api.js';
import { renderGenres, renderMovies } from './js/render-function.js';

const genresContainer = document.querySelector('.genresContainer');
const moviesContainer = document.querySelector('.moviesContainer');
const button = document.getElementById('load-btn');

let currentPage = 1;
let genreId = null;
let PER_PAGE = 15;

async function init() {
  try {
    const genres = await fetchGenres();
    renderGenres(genres, genresContainer);

    genresContainer.addEventListener('click', async event => {
      if (event.target.classList.contains('genres-list-button')) {
        genreId = event.target.dataset.genreId;
        currentPage = 1;
        button.classList.replace('load-more-hidden', 'btn');

        moviesContainer.innerHTML = '';
        try {
          const movies = await fetchMoviesByGenre(
            genreId,
            currentPage,
            PER_PAGE
          );
          renderMovies(movies, moviesContainer);
        } catch (error) {
          console.error('Ошибка при загрузке фильмов:', error);
        }
      }
    });
  } catch (error) {
    console.error('Ошибка инициализации приложения:', error);
  }
}

init();

button.addEventListener('click', handleLoad);

async function handleLoad() {
  if (!genreId) return; // Если не выбран жанр, не загружаем фильмы

  button.classList.replace('btn', 'load-more-hidden');
  currentPage += 1;

  try {
    const movies = await fetchMoviesByGenre(genreId, currentPage, PER_PAGE);
    renderMovies(movies, moviesContainer); // Добавляем новые фильмы в конец списка
    button.classList.replace('load-more-hidden', 'btn');
  } catch (error) {
    console.log('Ошибка при загрузке следующих фильмов:', error);
  } finally {
    button.disabled = false;
  }
}
