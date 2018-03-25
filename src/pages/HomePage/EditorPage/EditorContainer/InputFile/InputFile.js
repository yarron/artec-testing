import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class InputFile extends PureComponent {
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

    handleChange({ [name]: URL.createObjectURL(target.files[0]) });
  };

  render() {
    const { title, name, value } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>
          {title}
          <input
            type="file"
            className="form-control"
            id={name}
            placeholder={title}
            onChange={this.handleChange}
          />
        </label>
        <img src={value} alt={title} height={150} className="img-thumbnail" />
      </div>
    );
  }
}
