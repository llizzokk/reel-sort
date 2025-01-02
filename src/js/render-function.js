'use strict';

import { handleMovieClick } from '../genres-page';

export function renderGenres(genres, container) {
  container.innerHTML = '';
  genres.forEach(genre => {
    const button = document.createElement('button');
    button.className = 'genres-list-button';
    button.textContent = genre.name;
    button.dataset.genreId = genre.id;
    container.appendChild(button);
  });
}

export function renderMovies(movies, container) {
  if (movies.length === 0) {
    container.innerHTML = '<p>No movies found.</p>';
    return;
  }

  movies.forEach(movie => {
    const movieElement = document.createElement('li');
    movieElement.className = 'movies-list-item';
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" class="movies-item-img" width="234" height="351">
      <h3 class="movies-item-title">${movie.title}</h3>
    `;
    container.insertAdjacentElement('beforeend', movieElement);

    movieElement.addEventListener('click', () => handleMovieClick(movie));
  });
}
