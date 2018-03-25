import { externalRequest } from './request';

export const fetchFilmExternal = id =>
  externalRequest(`http://test/${id}`, {});

export const fetchFilmsExternal = pageId =>
  externalRequest(`http://test?page=${pageId}`, {});
