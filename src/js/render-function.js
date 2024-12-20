'use strict';

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
    container.innerHTML = '<p>Фильмы не найдены.</p>';
    return;
  }

  movies.forEach(movie => {
    const movieElement = document.createElement('li');
    movieElement.className = 'movies-list-item';
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" class="movies-item-img">
      <h3 class="movies-item-title">${movie.title}</h3>
    `;
    container.insertAdjacentElement('beforeend', movieElement);
  });
}
