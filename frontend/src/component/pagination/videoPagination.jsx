/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import Card from '../../containers/Card';

const VideoPagination = ({ videos }) => {
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const [videoPerPage] = useState(3);

  const lastVideoIndex = currentVideoPage * videoPerPage;
  const firstVideoIndex = lastVideoIndex - videoPerPage;
  const currentVideos = videos.slice(firstVideoIndex, lastVideoIndex);

  const paginate = (pageNumber) => setCurrentVideoPage(pageNumber);

  return (
    <div className="stick">
      <h1 className="title-no_wrap"> Video </h1>
      {currentVideos.map((video) => (
        <Card key={video.id} posts={video} />
      ))}
      <Pagination postsPerPage={videoPerPage} totalPosts={videos.length} paginate={paginate} />
    </div>
  );
};

VideoPagination.propTypes = {
  videos: PropTypes.array.isRequired,
};


export default VideoPagination;
