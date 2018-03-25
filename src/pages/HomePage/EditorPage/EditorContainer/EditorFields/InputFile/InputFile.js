import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class InputFile extends PureComponent {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    isRequired: PropTypes.bool,
  }

  static defaultProps = {
    value: '',
    title: '',
    name: '',
    isRequired: false,
  }

  getValid(value) {
    const { isRequired } = this.props;

    return !(isRequired && !value);
  }

  handleChange = ({ target }) => {
    const { name, handleChange } = this.props;

    handleChange({ [name]: URL.createObjectURL(target.files[0]) });
  };

  handleChangeUrl = ({ target }) => {
    const { name, handleChange } = this.props;

    handleChange({ [name]: target.value, [`isInvalid_${name}`]: !this.getValid(target.value) });
  };

  render() {
    const { title, name, value } = this.props;
    const isValid = this.getValid(value);

    return (
      <div className="form-group">
        <label htmlFor={name}>
          {title}
          <input
            type="file"
            className={isValid ? 'form-control' : 'form-control is-invalid'}
            id={name}
            placeholder={title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className={isValid ? 'form-control' : 'form-control is-invalid'}
            placeholder={title}
            value={value}
            onChange={this.handleChangeUrl}
          />
          {
            !isValid
              ? (
                <div className="invalid-feedback">
                  Обязательное поле
                </div>
              )
              : null
          }
        </label>
        <div>
          <img src={value} alt="" height={150} className="img-thumbnail" />
        </div>
      </div>
    );
  }
}
