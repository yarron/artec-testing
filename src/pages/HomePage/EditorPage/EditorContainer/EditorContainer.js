import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  saveFilm,
} from '_actions/films';
import EditorFields from './EditorFields';

const mapStateToProps = ({ films }, { currentId }) => {
  const film = films.byId[currentId];
  const id = currentId;

  return {
    film,
    id,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ saveFilm }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export default class EditorContainer extends Component {
  render() {
    return (
      <EditorFields {...this.props} />
    );
  }
}
