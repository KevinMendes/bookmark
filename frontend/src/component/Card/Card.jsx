import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  lien, titre, duree, hauteur, largeur, tags, auteur, createdAt,
}) => {
  if (lien.length > 100) {
    lien = `${lien.slice(0, 75)}...`;
  }
  createdAt = createdAt.slice(0, 10);

  return (
    <div className="list-wrap">
      <a className="App-link" href={lien}>
        <p>{titre}</p>
        <p>{lien}</p>
      </a>
      <p>
        {auteur}
        {' '}
        -
        {'Ajouté le '}
        {createdAt}
      </p>
      <p>
        {' '}
        {' '}
        Tag(s) :
        {' '}
        {tags.map((tag) => (
          <span key={`${createdAt}${titre}`} className="tag">
            {tag.tag}
            {' '}
          </span>
        ))}
      </p>
      {duree
        ? (
          <div className="bottom-wrap">
            <p>
              {' '}
              Hauteur :
              {' '}
              {hauteur}
              px
            </p>
            <p>
              {' '}
              Largeur :
              {' '}
              {largeur}
              px
            </p>
            <p>
              {' '}
              Durée :
              {' '}
              {`${duree} secondes`}
            </p>
          </div>
        )
        : (
          <div className="bottom-wrap">
            <p>
              {' '}
              Hauteur :
              {' '}
              {hauteur}
              px
            </p>
            <p>
              {' '}
              Largeur :
              {' '}
              {largeur}
              px
            </p>
          </div>
        )}
      <div className="bottom-button">
        <button type="submit"> modifier </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Card;
