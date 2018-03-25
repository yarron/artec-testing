import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';

import Header from '_components/Header';
import EditorContainer from './EditorContainer';

import styles from './styles.scss';

@CSSModules(styles, { allowMultiple: true })
export default class EditorPage extends PureComponent {
  render() {
    return (
      <div styleName="root">
        <Helmet title="Editor Page" />
        <Header back />
        <main styleName="editor-page">
          <EditorContainer {...this.props} />
        </main>
      </div>
    );
  }
}
