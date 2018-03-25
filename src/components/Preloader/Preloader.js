import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

@CSSModules(styles, { allowMultiple: true })
export default class Preloader extends PureComponent {
  render() {
    return (
      <div styleName="preloader"><span /></div>
    );
  }
}
