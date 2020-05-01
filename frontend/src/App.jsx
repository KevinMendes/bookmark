import React from 'react';
// Validation des props
import PropTypes from 'prop-types';
// Import des components
import Navbar from './component/navbar/navbar';
import LoginForm from './containers/LoginForm';
import InscriptionForm from './containers/InscriptionForm';
import Lists from './containers/Lists';
import './App.css';

const App = ({ logged }) => (
  <div className="App">
    {!logged && (
      <div className="form-wrap">
        <LoginForm />
        <InscriptionForm />
      </div>
    )}
    {logged && (
      <div>
        <Navbar />
        <Lists />
      </div>
    )}
  </div>
);

App.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default App;
