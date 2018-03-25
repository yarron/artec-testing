import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import { MdSettingsBackupRestore, MdSave } from 'react-icons/lib/md/';
import { withRouter } from 'react-router-dom';

import InputText from './InputText';
import InputTextarea from './InputTextarea';
import InputFile from './InputFile';
import InputTime from './InputTime';

import styles from './styles.scss';

@withRouter
@CSSModules(styles, { allowMultiple: true })
export default class EditorFields extends PureComponent {
  static propTypes = {
    film: PropTypes.shape({
      id: PropTypes.number,
    }),
    history: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
    saveFilm: PropTypes.func.isRequired,
  }

  static defaultProps = {
    film: undefined,
  }

  constructor(props) {
    super(props);

    this.state = {
      ...props.film,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      ...props.film,
    });
  }

  getInvalid() {
    const inInvalidCount = ['isInvalid_title', 'isInvalid_img', 'isInvalid_plot']
      .filter(name => this.state[name]).length;
    return inInvalidCount;
  }

  handleChange = state => this.setState(state);

  handleCancel = () => {
    const { history } = this.props;

    history.goBack();
  }

  handleSave = () => {
    const { history, saveFilm, film } = this.props;

    let { id } = film;

    if (!id) {
      id = Date.now();
    }

    saveFilm({
      ...film,
      ...this.state,
      id,
    });

    history.push('/films');
  }

  render() {
    return (
      <div styleName="root" className="container">
        <div styleName="header">
          <h1>Editor</h1>
          <div>
            <button styleName="btn-cancel" onClick={this.handleCancel}>
              <MdSettingsBackupRestore size="24" color="#212121" />
              Назад
            </button>
            <button styleName="btn-save" disabled={this.getInvalid()} onClick={this.handleSave}>
              <MdSave size="24" color="#212121" />
              Сохранить
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <InputText
              name="title"
              title="Заголовок"
              value={this.state.title}
              handleChange={this.handleChange}
              isRequired
            />
            <InputFile
              name="img"
              title="Картинка"
              value={this.state.img}
              handleChange={this.handleChange}
              isRequired
            />
            <InputTextarea
              name="plot"
              title="Описание"
              value={this.state.plot}
              handleChange={this.handleChange}
              isRequired
            />
            <InputText
              name="year"
              title="Год"
              value={String(this.state.year) || ''}
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
              name="countriesStr"
              title={this.state.countriesTitle}
              value={this.state.countriesStr}
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
