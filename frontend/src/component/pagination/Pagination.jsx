import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({ totalPosts, postsPerPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li key={page} className="page-item">
            <a onClick={() => paginate(page)} href="!#" className="page-link">
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
  paginate: PropTypes.func.isRequired,
};
