import React, { useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Container, Pagination } from 'react-bootstrap';

function MoviePagination() {
  const { state, dispatch, fetchMovies, updateQueryParams } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, [state.currentPage]);

  // const setCurrentPage = (page) => {
  //   dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  //   updateQueryParams({ page });
  // };

  const handlePreviousClick = () => {
    if (state.currentPage > 1) {
      const newPage = state.currentPage - 1;
      dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage });
      updateQueryParams({ page: newPage });
    }
  };

  const handleNextClick = () => {
    if (state.currentPage < state.totalPages) {
      const newPage = state.currentPage + 1;
      dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage });
      updateQueryParams({ page: newPage });
    }
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    dispatch({ type: 'SET_CURRENT_PAGE', payload: selectedPage });
    updateQueryParams({ page: selectedPage });
  };

  const handleFirstClick = () => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
    updateQueryParams({ page: 1 });
  };

  const handleLastClick = () => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: state.totalPages });
    updateQueryParams({ page: state.totalPages });
  };

  return (
    <Container className="d-flex justify-content-center mt-3">
      <Pagination>
        {/* First Button */}
        <Pagination.First 
          onClick={handleFirstClick} 
          disabled={state.currentPage === 1} 
        />
  
        {/* Previous Button */}
        <Pagination.Prev 
          onClick={handlePreviousClick} 
          disabled={state.currentPage === 1} 
        />
  
        {/* Page Numbers */}
        {Array.from({ length: state.totalPages }, (_, index) => (
          <Pagination.Item 
            key={index + 1} 
            active={index + 1 === state.currentPage} 
            onClick={() => handlePageClick({ selected: index + 1 })}
          >
            {index + 1}
          </Pagination.Item>
        ))}
  
        {/* Next Button */}
        <Pagination.Next 
          onClick={handleNextClick} 
          disabled={state.currentPage === state.totalPages} 
        />
  
        {/* Last Button */}
        <Pagination.Last 
          onClick={handleLastClick} 
          disabled={state.currentPage === state.totalPages} 
        />
      </Pagination>
    </Container>
  );  

}

export default MoviePagination;