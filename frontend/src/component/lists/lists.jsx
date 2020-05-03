import React from 'react';
import { Link } from 'react-router-dom';
import VideoPagination from '../../containers/videoPagination';
import ImagePagination from '../../containers/imagePagination';

const Lists = () => (
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
      <VideoPagination />
      {/** ********* PASSAGE COTE DROIT ********** */}
      <ImagePagination />
    </div>
  </main>
);

export default Lists;
