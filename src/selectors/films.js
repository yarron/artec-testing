import { createSelector } from 'reselect';

const getFilms = ({ films }) => films;
const getFilmsEnd = ({ films: { paginate } }) => paginate.visible;
const getFilmsSelector = createSelector(
  [getFilms, getFilmsEnd],
  (films, end) => films.allIds
    .slice(0, end).filter(id => id !== 0)
    .map(id => films.byId[id]),
);

export default getFilmsSelector;
