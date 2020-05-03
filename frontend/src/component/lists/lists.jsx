import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import Card from '../../containers/Card';

const Lists = ({
  userId, videos, images,
}) => {
  const [videoPage, setVideoPage] = useState([]);
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const [videoPerPage, setVideoPerPage] = useState(3);

  const lastVideoIndex = currentVideoPage * videoPerPage;
  const firstVideoIndex = lastVideoIndex - videoPerPage;
  const currentVideos = videos.slice(firstVideoIndex, lastVideoIndex);
  console.log(currentVideos);
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
          {currentVideos.map((video) => (
            <Card key={video.id} {...video} />
          ))}
          <Pagination postsPerPage={videoPerPage} totalPosts={videos.length} />
          <p className="pagination"> 1 - 2 - 3 </p>
        </div>
        {/** ********* PASSAGE COTE DROIT ********** */}
        <div className="stick">
          <h1 className="title-no_wrap"> Image </h1>
          {images.map((image) => (
            <Card key={image.id} {...image} />
          ))}
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
  videos: PropTypes.arrayOf(PropTypes.number, PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.number, PropTypes.string).isRequired,
  videoPage: PropTypes.number.isRequired,
  setVideoPage: PropTypes.number.isRequired,
  setCurrentVideoPage: PropTypes.number.isRequired,
  setVideoPerPage: PropTypes.number.isRequired,
};


export default Lists;
