import React, { useEffect } from 'react';
import { Container, Pagination } from 'react-bootstrap';

function TablePagination({ state, dispatch, fetch, updateQueryParams }) {

  // useEffect(() => {
  //   fetch();
  // }, [state.currentPage]);

  const setCurrentPage = (page) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
    updateQueryParams({ page });
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const handlePreviousClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, state.totalPages));
  };

  const handleFirstClick = () => {
    setCurrentPage(1);
  };

  const handleLastClick = () => {
    setCurrentPage(state.totalPages);
  };

  return (
    <Container className="d-flex justify-content-center mt-3">
      <Pagination>
        <Pagination.First onClick={() => handleFirstClick()} disabled={state.currentPage === 1} />
        <Pagination.Prev onClick={() => handlePreviousClick()} disabled={state.currentPage === 1} />
        {Array.from({ length: state.totalPages }, (_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === state.currentPage} onClick={() => handlePageClick({ selected: index })}>
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handleNextClick()} disabled={state.currentPage === state.totalPages} />
        <Pagination.Last onClick={() => handleLastClick()} disabled={state.currentPage === state.totalPages} />
      </Pagination>
    </Container>
  );
}

export default TablePagination;