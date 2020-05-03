import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ handleLogout }) => {
  const handleClick = () => {
    handleLogout();
  };
  return (
    <header className="App-header">
      <Link to="/">
        <button
          type="button"
          className="inscription-form-button"
          onClick={handleClick}
        >
          Déconnexion
        </button>
      </Link>
    </header>
  );
};

Navbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};


export default Navbar;
