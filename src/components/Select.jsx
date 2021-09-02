import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, id, items = [], onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select
          id={ id }
          onChange={ onChange }
        >
          {items.map((item, index) => (
            <option key={ index } value={ item }>{item}</option>))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
