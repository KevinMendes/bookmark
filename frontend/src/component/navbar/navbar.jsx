import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ handleLogout }) => (
  <header className="App-header">
    <Link to="/">
      <button
        type="button"
        className="inscription-form-button"
        onClick={handleLogout}
      >
        Déconnexion
      </button>
    </Link>
  </header>
);

Navbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  loggedMessage: 'Connecté',
};


export default Navbar;
