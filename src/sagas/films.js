import { takeLatest, all, put, call } from 'redux-saga/effects';

import normalizeFilms from '_api/normalize';
import data from '_api/backend/data.json';
import Photo from '_assets/images/no_image.jpg';

import {
  setFilms,
  getFilms,
} from '_actions/films';

import {
  FETCH_FILMS_REQUEST,
} from '_constants/films';

export function* fetchFilms({ payload }) {
  try {
    const authApi = {
      register() {
        return fetch(Photo)
          .then(res => res.blob())
          .then(blob => URL.createObjectURL(blob));
      },
    };

    const photo = yield call(authApi.register);
    const films = normalizeFilms(data, payload, photo);
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
