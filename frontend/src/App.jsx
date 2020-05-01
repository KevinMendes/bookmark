import React from 'react';
// Validation des props
import PropTypes from 'prop-types';
// Import des components
import Navbar from './component/navbar/navbar';
import LoginForm from './containers/LoginForm';
import InscriptionForm from './containers/InscriptionForm';
import './App.css';

const App = ({ loading, logged }) => (
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
          <main>
            <div className="title-wrap">
              <h1 className="list-title"> Video </h1>
              <h1 className="list-title"> Image </h1>
            </div>
            <div className="main-wrap">
              <div className="stick">
                <h1 className="title-no_wrap"> Video </h1>
                <div className="list-wrap">
                  <a className="App-link" href="lien.fr">
                    <p>Titre de la video</p>
                    <p> lien.fr</p>
                  </a>
                  <p>
                    auteur - date
                  </p>
                  <p> Tag 1 - Tag 2 - Tag 3 </p>
                  <div className="bottom-wrap">
                    <p> Hauteur : 200px </p>
                    <p> Largeur : 200px </p>
                    <p> Durée : 17:28 </p>
                  </div>
                </div>
                <p className="pagination"> 1 - 2 - 3 </p>
              </div>
              <div className="stick">
                <h1 className="title-no_wrap"> Image </h1>
                <div className="list-wrap">
                  <a className="App-link" href="lien.fr">
                    <p>Titre de la video</p>
                    <p> lien.fr</p>
                  </a>
                  <p>
                    auteur - date
                  </p>
                  <p> Tag 1 - Tag 2 - Tag 3 </p>
                  <div className="bottom-wrap">
                    <p> Hauteur : 200px </p>
                    <p> Largeur : 200px </p>
                  </div>
                </div>
                <p className="pagination"> 1 - 2 - 3 </p>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
);

App.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default App;
