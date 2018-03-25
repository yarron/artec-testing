const getInfoFilm = (film) => {
  const {
    categories,
    collectives,
    duration,
    title,
    year,
    ratings,
    countries: countriesObj,
  } = film;

  const genresTitle = categories.title || '-';
  const genres = categories.list
    ? categories.list.map(item => item.name).join(', ')
    : '';

  const countriesTitle = countriesObj.title || '-';
  const countries = countriesObj.list
    ? countriesObj.list.map(item => item.name).join(', ')
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
  const previewTitle = 'Preview';
  const preview = '-'; // film.img source not valid

  return {
    yearTitle,
    directorTitle,
    durationTitle,
    previewTitle,
    genresTitle,
    actorsTitle,
    countriesTitle,
    actors,
    genres,
    directors,
    year,
    title,
    duration,
    preview,
    ratingImdb,
    ratingKinopoisk,
    countries,
  };
};

export default getInfoFilm;
