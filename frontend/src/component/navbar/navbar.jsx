import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ handleLogout, loggedMessage }) => (
  <header className="App-header">
    <Link to="/">
      <div className="inscription-form-logged">
        <p className="inscription-form-message">
          {loggedMessage}
        </p>
        <button
          type="button"
          className="inscription-form-button"
          onClick={handleLogout}
        >
          Déconnexion
        </button>
      </div>
    </Link>
  </header>
);

Navbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,
};

Navbar.defaultProps = {
  loggedMessage: 'Connecté',
};


export default Navbar;
