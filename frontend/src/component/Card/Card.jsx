import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Card = ({
  posts,
  // lien,
  // titre,
  // duree,
  // hauteur,
  // largeur,
  // tags,
  // auteur,
  // createdAt,
  // id,
  deleteVideo,
  deleteImage,
}) => {
  if (posts.lien.length > 100) {
    // eslint-disable-next-line no-param-reassign
    posts.lien = `${posts.lien.slice(0, 75)}...`;
  }
  // eslint-disable-next-line no-param-reassign
  const createdAt = posts.createdAt.slice(0, 10);
  const deleteMedia = (e) => {
    const mediaId = e.currentTarget.value.substring(6);
    if (posts.duree) {
      deleteVideo(mediaId);
    } else {
      deleteImage(mediaId);
    }
  };
  const handleChange = () => {
    console.log(posts);
    return (
      <Redirect to="/modif" currentPost={posts} />
    );
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
        <Button variant="primary" onClick={handleChange}> modifier </Button>
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
  tags: PropTypes.arrayOf(PropTypes.string, PropTypes.number).isRequired,
  lien: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  duree: PropTypes.number.isRequired,
  auteur: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  hauteur: PropTypes.number.isRequired,
  largeur: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  deleteVideo: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.number, PropTypes.string).isRequired,
};

export default Card;
