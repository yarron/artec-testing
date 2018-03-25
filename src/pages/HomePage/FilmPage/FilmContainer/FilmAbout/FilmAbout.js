import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import ReactStars from 'react-stars';
import styles from './styles.scss';

@CSSModules(styles, { allowMultiple: true })
export default class FilmAbout extends PureComponent {
  static propTypes = {
    film: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
    info: PropTypes.shape({}).isRequired,
  };

  render() {
    const { film, info } = this.props;

    return (
      <div styleName="root" className="container">
        <div className="row">
          <div className="col-12 col-sm-4">
            <div styleName="image"><img src={film.img} alt={film.title} /></div>
          </div>
          <div className="col-12 col-sm-8">
            <h2>{film.title}</h2>
            <div styleName="rating">
              <span>IMDB</span>
              <ReactStars
                edit={false}
                count={10}
                size={15}
                color1="#f2f2f2"
                color2="#ff7c31"
                value={info.ratingImdb}
              />
              <span>{info.ratingImdb} / 10</span>
            </div>
            <div styleName="rating">
              <span>Kinopoisk</span>
              <ReactStars
                edit={false}
                count={10}
                size={15}
                color1="#f2f2f2"
                color2="#ff7c31"
                value={info.ratingKinopoisk}
              />
              <span>{info.ratingKinopoisk} / 10</span>
            </div>
            <div styleName="rating">
              <span>Rate Amount</span>
              <span>{film.rate_amount_str}</span>
            </div>
            <div styleName="description">{film.plot}</div>
          </div>

        </div>
      </div>
    );
  }
}
