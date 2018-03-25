import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';

import Preloader from '_components/Preloader';
import Header from '_components/Header';
import FilmsItem from './FilmsItem';

import styles from './styles.scss';

@CSSModules(styles, { allowMultiple: true })
export default class FilmsPage extends Component {
  static propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentId: PropTypes.number,
    getFilms: PropTypes.func.isRequired,
    paginate: PropTypes.shape({
      page: PropTypes.number,
      limit: PropTypes.number,
      count: PropTypes.number,
      visible: PropTypes.number,
    }).isRequired,
  };

  static defaultProps = {
    currentId: null,
  }

  componentDidMount() {
    this.container.parentNode.addEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.currentId === this.props.currentId;
  }

  componentWillUnmount() {
    this.container.parentNode.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollHeight = Math.max(
      this.container.parentNode.scrollHeight,
      this.container.parentNode.offsetHeight,
      this.container.parentNode.clientHeight,
    );
    const scrolled = window.pageYOffset || this.container.parentNode.scrollTop;

    if (scrollHeight <= scrolled + windowHeight) {
      const { paginate } = this.props;

      if (paginate.visible < paginate.limit) {
        this.props.getFilms({
          ...paginate,
          visible: paginate.visible + paginate.count,
        });
      }
    }
  }

  handleRef = (node) => {
    this.container = node;
  }

  render() {
    const { films, paginate: { visible, limit } } = this.props;

    return (
      <div ref={this.handleRef} >
        <Helmet title="Home Page" />
        <Header common />
        <main styleName="root">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div styleName="description">Description header
                </div>
                <h3>Films list</h3>
              </div>
            </div>

            <div className="row">
              {
                films.map(film => (
                  <FilmsItem key={film.id} film={film} />
                ))
              }
              {
                visible < limit
                  ? <Preloader />
                  : null
              }

            </div>
          </div>
        </main>
      </div>
    );
  }
}
