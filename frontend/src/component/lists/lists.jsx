import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Lists = ({ userId, handleLoadVideos, handleLoadImages }) => {
  handleLoadImages();
  handleLoadVideos();
  return (
    <main>
      <div className="title-wrap">
        <h1 className="list-title"> Video </h1>
        <h1 className="list-title"> Image </h1>
      </div>
      <Link to="/addList">
        <button type="submit">
          {' '}
          Ajouter
          {' '}
        </button>
      </Link>
      <div className="main-wrap">
        <div className="stick">
          <h1 className="title-no_wrap"> Video </h1>
          <div className="list-wrap">
            <a className="App-link" href="lien.fr">
              <p>Titre de la video</p>
              <p> lien.fr</p>
            </a>
            <p>auteur - date</p>
            <p> Tag 1 - Tag 2 - Tag 3 </p>
            <div className="bottom-wrap">
              <p> Hauteur : 200px </p>
              <p> Largeur : 200px </p>
              <p> Durée : 17:28 </p>
            </div>
            <div className="bottom-button">
              <button type="submit"> modifier </button>
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
            <p>auteur - date</p>
            <p> Tag 1 - Tag 2 - Tag 3 </p>
            <div className="bottom-wrap">
              <p> Hauteur : 200px </p>
              <p> Largeur : 200px </p>
            </div>
            <div className="bottom-button">
              <button type="submit"> modifier </button>
            </div>
          </div>
          <p className="pagination"> 1 - 2 - 3 </p>
        </div>
      </div>
    </main>
  );
};

export default Lists;
