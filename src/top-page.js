'use strict';

import './css/top-page.css';
import axios from 'axios';
import 'loaders.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const END_POINT = '/movie/top_rated';
const API_KEY = '5cd3b967f25ca5ea88c6b3955d7951c5';

const container = document.querySelector('.moviesContainer');
const loader = document.querySelector('.loader-container');
const errorMessage = document.querySelector('.error');

async function serviceTopMovie() {
  const { data } = await axios(`${BASE_URL}${END_POINT}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
}

serviceTopMovie()
  .then(movies => {
    loader.style.display = 'block';
    const moviesMarkup = createTopMarkup(movies);
    container.insertAdjacentHTML('beforeend', moviesMarkup);
  })
  .catch(error => {
    console.log(error.message);
    errorMessage.classList.replace('error-hidden', 'error-message');
  })
  .finally(() => {
    loader.style.display = 'none';
  });

function createTopMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title }) => `<li class="movies-list-item">
            <img src="https://image.tmdb.org/t/p/w200${poster_path}" alt="${title}" class="movies-item-img">
      <h3 class="movies-item-title">${title}</h3>
        </li>`
    )
    .join('');
}
