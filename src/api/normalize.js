const getInfoFilm = (film) => {
  const {
    categories,
    collectives,
    duration,
    title,
    year,
    ratings,
    countries,
  } = film;

  const genresTitle = categories.title || '-';
  const genres = categories.list
    ? categories.list.map(item => item.name).join(', ')
    : '';

  const countriesTitle = countries.title || '-';
  const countriesStr = countries.list
    ? countries.list.map(item => item.name).join(', ')
    : '';

  const directorTitle = collectives && collectives[0]
    ? collectives[0].title
    : '-';
  const directors = collectives && (collectives[0] && collectives[0].list)
    ? collectives[0].list.map(item => item.name).join(', ')
    : '-';
  const actorsTitle = collectives && collectives[1]
    ? collectives[1].title
    : '-';
  const actors = collectives && (collectives[1] && collectives[1].list)
    ? collectives[1].list.map(item => item.name).join(', ')
    : '-';

  const ratingImdb = ratings && ratings.imdb
    ? Number(ratings.imdb)
    : 0;

  const ratingKinopoisk = ratings && ratings.kinopoisk
    ? Number(ratings.kinopoisk)
    : 0;

  const yearTitle = 'Год выпуска';
  const durationTitle = 'Продолжительность';
  const ratingImdbTitle = 'Райтинг IMDB';
  const ratingKinopoiskTitle = 'Райтинг kinopoisk';

  return {
    yearTitle,
    directorTitle,
    durationTitle,
    genresTitle,
    actorsTitle,
    countriesTitle,
    ratingImdbTitle,
    ratingKinopoiskTitle,
    actors,
    genres,
    directors,
    year,
    title,
    duration,
    ratingImdb,
    ratingKinopoisk,
    countriesStr,
  };
};

const normalizeFilms = (data, paginate, photo) => {
  const byId = {};
  const allIds = [];

  if (Array.isArray(data)) {
    data.forEach((item) => {
      const film = {
        ...item,
        ...getInfoFilm(item),
      };
      film.img = photo;
      delete film.countries;
      delete film.categories;
      delete film.collectives;
      delete film.ratings;

      allIds.push(film.id);
      byId[film.id] = film;
    });
  } else {
    byId[data.id] = data;
    allIds.push(data.id);
  }
  return {
    byId,
    allIds,
    paginate,
  };
};

export default normalizeFilms;
