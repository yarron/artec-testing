import React, { Component } from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import Header from '_components/Header';
import FilmContainer from './FilmContainer';

import styles from './styles.scss';

@CSSModules(styles, { allowMultiple: true })
export default class FilmPage extends Component {
  static propTypes = {
    currentId: PropTypes.number.isRequired,
  }

  shouldComponentUpdate(props) {
    const { currentId: oldId } = this.props;
    const { currentId: newId } = props;

    return oldId !== newId && newId !== 0;
  }

  render() {
    return (
      <div styleName="root">
        <Helmet title="Film Page" />
        <Header back />
        <main styleName="film-page">
          <FilmContainer {...this.props} />
        </main>
      </div>
    );
  }
}
