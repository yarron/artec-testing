import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { withRouter } from 'react-router-dom';

import getInfoFilm from '_utils/film';
import styles from './styles.scss';

@withRouter
@CSSModules(styles, { allowMultiple: true })
export default class FilmsItem extends PureComponent {
  static propTypes = {
    film: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  handleChangeSlide = (event) => {
    event.preventDefault();
    const { film: { id }, history } = this.props;

    history.push(`/films/${id}`);
  }

  render() {
    const { film } = this.props;
    const data = getInfoFilm(film);

    return (
      <div styleName="root" className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
        <article styleName="thumb">
          <a href="/" onClick={this.handleChangeSlide}>
            <header>
              <div styleName="image-wrap">
                <img src={film.img} alt={data.title} />
              </div>
              <h3>{data.title}</h3>
              <div>{data.yearTitle}: {data.year}</div>
              <div>{data.genresTitle}: {data.genres}</div>
              <div>{data.directorTitle}: {data.directors}</div>
              <div>{data.durationTitle}: {data.duration}</div>
            </header>
          </a>
        </article>
      </div>
    );
  }
}
