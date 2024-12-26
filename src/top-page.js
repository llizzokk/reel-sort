'use strict';

import './css/top-page.css';
import axios from 'axios';
import 'loaders.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOP_RATED_ENDPOINT = '/movie/top_rated';
const SEARCH_ENDPOINT = '/search/movie';
const API_KEY = '5cd3b967f25ca5ea88c6b3955d7951c5';

const container = document.querySelector('.moviesContainer');
const button = document.getElementById('top-load-btn');
const form = document.querySelector('.top-form');
const loader = document.querySelector('.loader-container');
const errorMessage = document.querySelector('.error');

let currentPage = 1;
let currentSearch = '';

async function serviceTopMovie(searchValue = '', page = 1) {
  const endpoint = searchValue ? SEARCH_ENDPOINT : TOP_RATED_ENDPOINT;

  try {
    loader.style.display = 'block';
    const { data } = await axios(`${BASE_URL}${endpoint}`, {
      params: {
        api_key: API_KEY,
        query: searchValue,
        page,
      },
    });
    return data.results;
  } catch (error) {
    console.log(error.message);
    errorMessage.classList.replace('error-hidden', 'error-message');
    return [];
  } finally {
    loader.style.display = 'none';
  }
}

(async function loadInitialMovies() {
  try {
    const movies = await serviceTopMovie();
    renderMovies(movies);
  } catch (error) {
    console.log(error.message);
    errorMessage.classList.replace('error-hidden', 'error-message');
  }
})();

function createTopMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title }) => `<li class="movies-list-item">
          <img src="https://image.tmdb.org/t/p/w200${poster_path}" alt="${title}" class="movies-item-img" width="234" height="351">
          <h3 class="movies-item-title">${title}</h3>
      </li>`
    )
    .join('');
}

function renderMovies(movies) {
  if (!movies || movies.length === 0) {
    errorMessage.classList.replace('error-hidden', 'error-message');
    return;
  }
  errorMessage.classList.replace('error-message', 'error-hidden');
  const moviesMarkup = createTopMarkup(movies);
  container.insertAdjacentHTML('beforeend', moviesMarkup);
}

button.addEventListener('click', handleLoad);
form.addEventListener('submit', handleSubmit);

async function handleLoad() {
  button.classList.replace('btn', 'load-more-hidden');
  button.disabled = true;
  currentPage += 1;

  try {
    const movies = await serviceTopMovie(currentSearch, currentPage);
    renderMovies(movies);

    const movieItem = document.querySelector('.movies-list-item');
    if (movieItem) {
      const itemHeight = movieItem.getBoundingClientRect().height;
      window.scrollBy({
        left: 0,
        top: itemHeight,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    console.log(error.message);
    errorMessage.classList.replace('error-hidden', 'error-message');
  } finally {
    button.classList.replace('load-more-hidden', 'btn');
    button.disabled = false;
  }
}

async function handleSubmit(event) {
  event.preventDefault();

  const searchValue = event.currentTarget.elements.search.value.trim();

  if (searchValue !== currentSearch) {
    currentSearch = searchValue;
    currentPage = 1;
    container.innerHTML = '';
  }

  loader.classList.remove('hidden');
  button.classList.replace('btn', 'load-more-hidden');

  try {
    const movies = await serviceTopMovie(searchValue, currentPage);
    renderMovies(movies);

    if (movies.length > 0) {
      button.classList.replace('load-more-hidden', 'btn');
    }
  } catch (error) {
    console.log(error.message);
    errorMessage.classList.replace('error-hidden', 'error-message');
  } finally {
    loader.classList.add('hidden');
    event.target.elements.search.value = '';
  }
}
