import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination(props) {
    console.log(props.postsPerPage, props.totalPosts);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li key={page} className="page-item">
            <a href="!#" className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
};
