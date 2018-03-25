import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SwipeableViews from 'react-swipeable-views';

import getFilmsSelector from '_selectors/films';

import {
  fetchFilms,
  getFilms,
} from '_actions/films';

import FilmsPage from './FilmsPage';
import FilmPage from './FilmPage';

const getCurrentId = (path) => {
  const currentId = Number(path.split('/')
    .filter(item => item !== '')
    .pop());
  const isNum = !Number.isNaN(currentId);

  return isNum ? currentId : 0;
};

const mapStateToProps = (state, props) => {
  const films = getFilmsSelector(state);
  const { paginate } = state.films;
  const currentId = getCurrentId(props.location.pathname);

  return {
    films,
    paginate,
    currentId,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFilms,
  getFilms,
}, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export default class HomePage extends PureComponent {
  static propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentId: PropTypes.number.isRequired,
    paginate: PropTypes.shape({
      page: PropTypes.number,
      limit: PropTypes.number,
      count: PropTypes.number,
      visible: PropTypes.number,
    }).isRequired,
    fetchFilms: PropTypes.func.isRequired,
  }

  static springConfigStyle = {
    delay: '0.1s',
    duration: '0.8s',
    easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
  }

  static slideStyle = {
    height: '100vh',
  }

  componentDidMount() {
    const { films, paginate } = this.props;

    if (films.length < paginate.limit) {
      this.props.fetchFilms({
        ...paginate,
        page: paginate.page + 1,
      });
    }
  }

  render() {
    const { currentId } = this.props;
    const slide = currentId ? 1 : 0;

    return (
      <SwipeableViews
        slideStyle={HomePage.slideStyle}
        index={slide}
        springConfig={HomePage.springConfigStyle}
        onChangeIndex={this.handleChangeIndex}
      >
        <FilmsPage {...this.props} />
        <FilmPage {...this.props} />
      </SwipeableViews>
    );
  }
}
