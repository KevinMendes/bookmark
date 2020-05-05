/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Card = ({
  posts,
  deleteVideo,
  deleteImage,
  setOldMedia,
}) => {
  if (posts.lien.length > 100) {
    // eslint-disable-next-line no-param-reassign
    posts.lien = `${posts.lien.slice(0, 75)}...`;
  }
  // eslint-disable-next-line no-param-reassign
  const createdAt = posts.createdAt.slice(0, 10);
  const handleSetOldMedia = async () => {
    await setOldMedia(posts);
  };
  const deleteMedia = (e) => {
    const mediaId = e.currentTarget.value.substring(6);
    if (posts.duree) {
      deleteVideo(mediaId);
    } else {
      deleteImage(mediaId);
    }
  };
  return (
    <div className="list-wrap" id={`media${posts.id}`}>
      <a className="App-link" href={posts.lien}>
        <p>{posts.titre}</p>
        <p>{posts.lien}</p>
      </a>
      <p>
        {posts.auteur}
        {' '}
        -
        {'Ajouté le '}
        {createdAt}
      </p>
      <p>
        {' '}
        Tag(s) :
        {' '}
        {posts.tags.map((tag) => (
          <span key={`${posts.id}tag${tag.id}`} className="tag">
            {tag.tag}
            {' '}
          </span>
        ))}
      </p>
      {posts.duree ? (
        <div className="bottom-wrap">
          <p>
            {' '}
            Hauteur :
            {' '}
            {posts.hauteur}
            px
          </p>
          <p>
            {' '}
            Largeur :
            {' '}
            {posts.largeur}
            px
          </p>
          <p>
            {' '}
            Durée :
            {`${posts.duree} secondes`}
          </p>
        </div>
      ) : (
        <div className="bottom-wrap">
          <p>
            {' '}
            Hauteur :
            {' '}
            {posts.hauteur}
            px
          </p>
          <p>
            {' '}
            Largeur :
            {' '}
            {posts.largeur}
            px
          </p>
        </div>
      )}
      <div className="bottom-button">
        <Link to="/modif" onClick={handleSetOldMedia}>
          <Button variant="primary"> modifier </Button>
        </Link>
        <Button variant="danger" value={`button${posts.id}`} onClick={deleteMedia}>
          {' '}
          Supprimer
          {' '}
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  deleteVideo: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
  setOldMedia: PropTypes.func.isRequired,
};

export default Card;
