import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/lib/md/';

import bgHeaderCommon from '_assets/images/bg_home_page.jpg';

import styles from './styles.scss';

@withRouter
@CSSModules(styles, { allowMultiple: true })
export default class Header extends PureComponent {
  static propTypes = {
    back: PropTypes.bool,
    history: PropTypes.shape({
      goBack: PropTypes.func,
      push: PropTypes.func,
    }).isRequired,
  }

  static defaultProps = {
    back: false,
  }

  handleBack = () => {
    const { history } = this.props;

    if (history.action === 'POP') {
      history.push('/films');
    } else {
      history.goBack();
    }
  }

  render() {
    return (
      <header styleName="root">
        <img styleName="bg-header common" src={bgHeaderCommon} alt="background" />
        <div className="container">
          <button
            styleName="btn-back"
            onClick={this.handleBack}
          >
            {
              this.props.back
                ? (<MdChevronLeft size="40" color="#212121" />)
                : null
            }
            <h1>FILMS</h1>
          </button>
        </div>
        <div styleName="gradient-border" />
      </header>
    );
  }
}
