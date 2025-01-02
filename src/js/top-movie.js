'use strict';

import axios from 'axios';
import '../css/styles.css';
import 'loaders.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/movie/week';
const API_KEY = '5cd3b967f25ca5ea88c6b3955d7951c5';

const container = document.querySelector('.top-movie-list');
const loader = document.querySelector('.loader-container');
const errorMessage = document.querySelector('.error');

async function loadMovies() {
  loader.style.display = 'block';

  try {
    const { data } = await axios(`${BASE_URL}${END_POINT}`, {
      params: {
        api_key: API_KEY,
        language: window.currentLanguage || 'en',
      },
    });

    const moviesMarkup = createMarkup(data.results);
    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend', moviesMarkup);

    const duplicateMarkup = createMarkup(data.results);
    container.insertAdjacentHTML('beforeend', duplicateMarkup);

    const movieCardWidth = container.firstElementChild.offsetWidth;
    const totalMovies = data.results.length * 2;
    const containerWidth = (movieCardWidth + 16) * totalMovies;

    container.style.width = `${containerWidth}px`;
    container.style.animationDuration = `${totalMovies * 2}s`;
  } catch (error) {
    console.error(error.message);
    errorMessage.classList.replace('error-hidden', 'error-message');
  } finally {
    loader.style.display = 'none';
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title, overview }) => `<li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" class="movie-card-img" width="252" height="375">
            <div class="movie-card-overlay">
              <h3 class="movie-card-title">${title}</h3>
              <p class="movie-card-description">${overview}</p>
            </div>
        </li>`
    )
    .join('');
}

loadMovies();

window.addEventListener('languageChange', loadMovies);
