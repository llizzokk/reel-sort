'use strict';

import axios from 'axios';

const API_KEY = '5cd3b967f25ca5ea88c6b3955d7951c5';
const BASE_URL = 'https://api.themoviedb.org/3';
const GENRE_URL = `${BASE_URL}/genre/movie/list`;
const MOVIE_URL = `${BASE_URL}/discover/movie`;

export async function fetchGenres() {
  try {
    const response = await axios.get(GENRE_URL, {
      params: {
        api_key: API_KEY,
        language: window.currentLanguage || 'en',
      },
    });
    return response.data.genres;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function fetchMoviesByGenre(genreId, page = 1, perPage = 15) {
  try {
    const response = await axios.get(MOVIE_URL, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
        language: window.currentLanguage || 'en',
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
