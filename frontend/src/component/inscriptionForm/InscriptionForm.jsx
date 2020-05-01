import React from 'react';
import PropTypes from 'prop-types';

import Field from './field/index';

const InscriptionForm = ({
  email,
  password,
  verifPassword,
  changeField,
  handleInscription,
  surname,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleInscription();
  };

  return (
    <div className="inscription-form">
      <h1>Inscription</h1>
      <form autoComplete="off" className="inscription-form-element" onSubmit={handleSubmit}>
        <Field
          name="surname"
          placeholder="Pseudonyme"
          onChange={changeField}
          value={surname}
        />
        <Field
          name="email"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <Field
          name="verifPassword"
          type="password"
          placeholder="Répétez votre mot de passe"
          onChange={changeField}
          value={verifPassword}
        />
        <button
          type="submit"
          className="inscription-form-button"
        >
          OK
        </button>
      </form>
    </div>
  );
};

InscriptionForm.propTypes = {
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  verifPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleInscription: PropTypes.func.isRequired,
};

export default InscriptionForm;
