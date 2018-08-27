import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, placeholder, value, onChange}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;
