import { takeLatest, all, put } from 'redux-saga/effects';

import normalizeFilms from '_api/normalize';
import data from '_api/backend/data.json';

import {
  setFilms,
  getFilms,
} from '_actions/films';

import {
  FETCH_FILMS_REQUEST,
} from '_constants/films';

export function* fetchFilms({ payload }) {
  try {
    const films = normalizeFilms(data, payload);

    yield put(setFilms(films));
    yield put(getFilms({
      ...payload,
      visible: payload.visible + payload.count,
    }));
  } catch (err) {
    console.log(err);
  }
}


export default function* () {
  yield all([
    takeLatest(FETCH_FILMS_REQUEST, fetchFilms),
  ]);
}
