import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import Card from '../../containers/Card';

const ImagePagination = ({ images }) => {
  const [currentImagePage, setCurrentImagePage] = useState(1);
  const [imagePerPage] = useState(3);

  const lastImageIndex = currentImagePage * imagePerPage;
  const firstImageIndex = lastImageIndex - imagePerPage;
  const currentImages = images.slice(firstImageIndex, lastImageIndex);

  const paginate = (pageNumber) => setCurrentImagePage(pageNumber);

  return (
    <div className="stick">
      <h1 className="title-no_wrap"> Image </h1>
      {currentImages.map((image) => (
        <Card key={image.id} posts={image} />
      ))}
      <Pagination postsPerPage={imagePerPage} totalPosts={images.length} paginate={paginate} />
    </div>
  );
};

ImagePagination.propTypes = {
  images: PropTypes.arrayOf(PropTypes.number, PropTypes.string).isRequired,
  // eslint-disable-next-line react/require-default-props
  setCurrentImagePage: PropTypes.number,
};

export default ImagePagination;
