import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

@CSSModules(styles, { allowMultiple: true })
export default class FilmInfo extends PureComponent {
  static propTypes = {
    film: PropTypes.shape({}).isRequired,
  };

  render() {
    const {
      film,
    } = this.props;

    return (
      <div styleName="root" className="container">
        <h3>О фильме</h3>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{film.genresTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{film.genres}</div>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{film.durationTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{film.duration}</div>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{film.yearTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{film.year}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{film.actorsTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{film.actors}</div>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{film.countriesTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{film.countriesStr}</div>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{film.directorTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{film.directors}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
