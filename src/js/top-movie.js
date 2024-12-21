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

  return data.results;
}

serviceMovie()
  .then(movies => {
    const moviesMarkup = createMarkup(movies);
    container.insertAdjacentHTML('beforeend', moviesMarkup);

    const duplicateMarkup = createMarkup(movies);
    container.insertAdjacentHTML('beforeend', duplicateMarkup);

    const movieCardWidth = container.firstElementChild.offsetWidth;
    const totalMovies = movies.length * 2;
    const containerWidth = (movieCardWidth + 16) * totalMovies;

    container.style.width = `${containerWidth}px`;

    container.style.animationDuration = `${totalMovies * 2}s`;
  })
  .catch(error => console.log(error.message));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, original_title, overview }) => `<li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" class="movie-card-img">
            <div class="movie-card-overlay">
              <h3 class="movie-card-title">${original_title}</h3>
              <p class="movie-card-description">${overview}</p>
            </div>
        </li>`
    )
    .join('');
}
