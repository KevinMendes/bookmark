import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  list,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        list={list}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  list: PropTypes.string,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  list: '',
  value: '',
  type: 'text',
};

// == Export
export default Field;
