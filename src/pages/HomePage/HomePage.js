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
import EditorPage from './EditorPage';

const getCurrentPath = (path) => {
  const pathArr = path.split('/').filter(item => item !== '');
  const currentId = Number(pathArr.pop());
  const isNum = !Number.isNaN(currentId);
  const route = pathArr.pop();

  return {
    currentId: isNum ? currentId : 0,
    route,
  };
};

const mapStateToProps = (state, props) => {
  const films = getFilmsSelector(state);
  const { paginate } = state.films;
  const { currentId, route } = getCurrentPath(props.location.pathname);
  let slide = 1;

  if (route === 'add' || route === 'edit') {
    slide = 0;
  } else if (currentId) {
    slide = 2;
  }

  return {
    films,
    paginate,
    slide,
    currentId,
    history: props.history,
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
    slide: PropTypes.number.isRequired,
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
    const { slide } = this.props;

    return (
      <SwipeableViews
        slideStyle={HomePage.slideStyle}
        index={slide}
        springConfig={HomePage.springConfigStyle}
        onChangeIndex={this.handleChangeIndex}
      >
        <EditorPage {...this.props} />
        <FilmsPage {...this.props} />
        <FilmPage {...this.props} />
      </SwipeableViews>
    );
  }
}
