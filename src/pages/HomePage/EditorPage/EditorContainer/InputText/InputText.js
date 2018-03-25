import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class InputText extends PureComponent {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
  }

  static defaultProps = {
    value: '',
    title: '',
    name: '',
  }

  handleChange = ({ target }) => {
    const { name, handleChange } = this.props;

    handleChange({ [name]: target.value });
  };

  render() {
    const {
      title,
      name,
      value,
    } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>
          {title}
          <input
            type="text"
            className="form-control"
            id={name}
            placeholder={title}
            value={value}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
