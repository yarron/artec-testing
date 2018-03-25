import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import {
  fetchFilms,
} from '_actions/films';
import getInfoFilm from '_utils/film';
import FilmAbout from './FilmAbout';
import FilmInfo from './FilmInfo';

const mapStateToProps = ({ films }, { currentId }) => {
  const film = films.byId[currentId];
  const id = currentId;
  const info = film ? getInfoFilm(film) : {};
  return {
    film,
    id,
    info,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchFilms }, dispatch);

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class FilmContainer extends Component {
  static propTypes = {
    fetchFilms: PropTypes.func.isRequired,
    film: PropTypes.shape({
      id: PropTypes.number,
    }),
    id: PropTypes.number.isRequired,
  }

  static defaultProps = {
    film: undefined,
  }

  render() {
    const { film } = this.props;

    return (
      <div>
        {
          film
            ? (
              <div>
                <FilmAbout {...this.props} />
                <FilmInfo {...this.props} />
              </div>
            )
            : null
        }
      </div>
    );
  }
}
