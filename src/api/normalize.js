const normalizeFilms = (data, paginate, photo) => {
  const byId = {};
  const allIds = [];

  if (Array.isArray(data)) {
    data.forEach((item) => {
      const film = item;
      film.img = photo;
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
