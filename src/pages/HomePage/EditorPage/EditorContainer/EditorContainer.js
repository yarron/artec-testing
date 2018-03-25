import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import {
  fetchFilms,
} from '_actions/films';
import getInfoFilm from '_utils/film';
import InputText from './InputText';
import InputTextarea from './InputTextarea';
import InputFile from './InputFile';
import InputTime from './InputTime';

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
export default class EditorContainer extends Component {
  static propTypes = {
    film: PropTypes.shape({
      id: PropTypes.number,
    }),
    info: PropTypes.shape({}).isRequired,
  }

  static defaultProps = {
    film: undefined,
  }

  constructor(props) {
    super(props);

    this.state = {
      ...props.film,
      ...props.info,
    };
  }

  componentWillReceiveProps(props) {
    this.state = {
      ...props.film,
      ...props.info,
    };
  }

  handleChange = state => this.setState(state);

  render() {
    return (
      <div className="container">
        Editor
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputText
              name="title"
              title="Заголовок"
              value={this.state.title}
              handleChange={this.handleChange}
            />
            <InputFile
              name="img"
              title="Картинка"
              value={this.state.img}
              handleChange={this.handleChange}
            />
            <InputTextarea
              name="plot"
              title="Описание"
              value={this.state.plot}
              handleChange={this.handleChange}
            />
            <InputText
              name="year"
              title="Год"
              value={String(this.state.year)}
              handleChange={this.handleChange}
            />
            <InputTime
              name="duration"
              title="Продолжительность"
              value={this.state.duration}
              handleChange={this.handleChange}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputText
              name="genres"
              title={this.state.genresTitle}
              value={this.state.genres}
              handleChange={this.handleChange}
            />
            <InputText
              name="countries"
              title={this.state.countriesTitle}
              value={this.state.countries}
              handleChange={this.handleChange}
            />
            <InputText
              name="actors"
              title={this.state.actorsTitle}
              value={this.state.actors}
              handleChange={this.handleChange}
            />
            <InputText
              name="directors"
              title={this.state.directorTitle}
              value={this.state.directors}
              handleChange={this.handleChange}
            />
            <InputText
              name="ratingImdb"
              title={this.state.ratingImdbTitle}
              value={String(this.state.ratingImdb)}
              handleChange={this.handleChange}
            />
            <InputText
              name="ratingKinopoisk"
              title={this.state.ratingKinopoiskTitle}
              value={String(this.state.ratingKinopoisk)}
              handleChange={this.handleChange}
            />
            <InputText
              name="ratingKinopoisk"
              title="Rate amount"
              value={this.state.rate_amount_str}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
