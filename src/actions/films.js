import {
  FETCH_FILMS_REQUEST,
  SET_FILMS,
  GET_FILMS,
} from './constants/films';

export const fetchFilms = payload => ({
  type: FETCH_FILMS_REQUEST,
  payload,
});

export const setFilms = payload => ({
  type: SET_FILMS,
  payload,
});

export const getFilms = payload => ({
  type: GET_FILMS,
  payload,
});
