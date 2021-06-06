import React from 'react';
// import Nav from 'react-bootstrap/Nav';
import Button  from 'react-bootstrap/Button';

const Pagination = ({ itemsPerPage, totalItems, paginateTogether }) => {
  const pageNumber = []

  for(var i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
    pageNumber.push(i);
  }
  return(
    <nav>
      <ul className="pagniation">
        {pageNumber.map(number => (
          <li key={number} className="page-items">
            <Button variant="outline-dark" onClick={() => paginateTogether(number)} className="pagination-link">
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;
