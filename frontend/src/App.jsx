import React from 'react';
// Validation des props
import PropTypes from 'prop-types';
// Import des components
import {
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './containers/NavBar';
import LoginForm from './containers/LoginForm';
import InscriptionForm from './containers/InscriptionForm';
import Lists from './containers/Lists';
import AddList from './containers/AddList';
import Modif from './containers/Modif';
import './App.css';

const App = ({
  logged, loading, handleLoadVideos, handleLoadImages,
}) => (
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
        <Switch>
          <Route path="/addList">
            <AddList />
          </Route>
          <Route path="/modif">
            <Modif />
          </Route>
          {loading && (
            <div className="loading">
              Chargement, veuillez patienter...
            </div>
          )}
          {!loading && (
            handleLoadVideos(),
            handleLoadImages(),
              <Route path="/">
                <Lists />
              </Route>
          )}
        </Switch>
      </div>
    )}
  </div>
);
App.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default App;
