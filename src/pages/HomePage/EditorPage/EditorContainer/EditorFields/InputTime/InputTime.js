import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class InputTime extends PureComponent {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
  }

  static defaultProps = {
    value: '',
  }

  handleChange = ({ target }) => {
    const { name, handleChange } = this.props;

    handleChange({ [name]: target.value });
  };

  render() {
    const { title, name, value } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>
          {title}
          <input
            type="time"
            className="form-control"
            id={name}
            placeholder={title}
            value={value.padStart(5, '0')}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
