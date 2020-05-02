import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../../containers/Card';

const Lists = ({
  userId, videos, images,
}) => {
  console.log(videos, images);
  return (
    <main>
      <div className="title-wrap">
        <h1 className="list-title"> Video </h1>
        <h1 className="list-title"> Image </h1>
      </div>
      <Link to="/addList">
        <button type="submit">
          {' '}
          Ajouter un média
          {' '}
        </button>
      </Link>
      <div className="main-wrap">
        <div className="stick">
          <h1 className="title-no_wrap"> Video </h1>
          {videos.map((video) => {
            return (
              <Card key={video.id} {...video} />
            );
          })}
          <p className="pagination"> 1 - 2 - 3 </p>
        </div>
        {/** ********* PASSAGE COTE DROIT ********** */}
        <div className="stick">
          <h1 className="title-no_wrap"> Image </h1>
          {images.map((image) => {
            return (
              <Card key={image.id} {...image} />
            );
          })}
          <p className="pagination"> 1 - 2 - 3 </p>
        </div>
      </div>
    </main>
  );
};

Lists.propTypes = {
  userId: PropTypes.number.isRequired,
  handleLoadVideos: PropTypes.func.isRequired,
  handleLoadImages: PropTypes.func.isRequired,
  video: PropTypes.arrayOf(PropTypes.number, PropTypes.string).isRequired,
  image: PropTypes.arrayOf(PropTypes.number, PropTypes.string).isRequired,
};

export default Lists;
