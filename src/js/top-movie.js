'use strict';

import '../css/styles.css';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/movie/week';
const API_KEY = '5cd3b967f25ca5ea88c6b3955d7951c5';

const container = document.querySelector('.top-movie-list');

async function serviceMovie() {
  const { data } = await axios(`${BASE_URL}${END_POINT}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
}

serviceMovie()
  .then(data => {
    container.insertAdjacentHTML('beforeend', createMarkup(data.results));
  })
  .catch(error => console.log(error.message));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, original_title }) => `<li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
        </li>`
    )
    .join('');
}
