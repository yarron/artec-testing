import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

@CSSModules(styles, { allowMultiple: true })
export default class FilmInfo extends PureComponent {
  static propTypes = {
    info: PropTypes.shape({}).isRequired,
  };

  render() {
    const {
      info,
    } = this.props;

    return (
      <div styleName="root" className="container">
        <h3>О фильме</h3>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{info.genresTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{info.genres}</div>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{info.durationTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{info.duration}</div>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{info.yearTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{info.year}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{info.actorsTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{info.actors}</div>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{info.countriesTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{info.countries}</div>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="row align-items-center" styleName="border">
                  <div className="col-12 col-sm-4">{info.directorTitle}</div>
                  <div className="col-12 col-sm-8 text-muted">{info.directors}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
