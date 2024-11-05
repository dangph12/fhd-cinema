import React, { useContext } from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { SaleContext } from '../context/SaleContext';

const SearchBar = () => {
  const { state, dispatch, updateQueryParams } = useContext(SaleContext);

  const handleSearch = (event) => {
    const query = event.target.value;
    dispatch({ type: 'SET_QUERY', payload: query });
    updateQueryParams({ query, page: 1 });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch(event);
    }
  };

  const handleCinemaChange = (event) => {
    const selectedCinema = event.target.value;
    dispatch({ type: 'SET_FILTERS', payload: { cinema: selectedCinema } });
    updateQueryParams({ cinema: selectedCinema, page: 1 });
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'SET_FILTERS', payload: { [name]: value } });
    updateQueryParams({ [name]: value, page: 1 });
  };

  return (
    <Container className="pt-3">
      <h1 style={{textAlign: "center"}}> Total Revenue By Cinema</h1>
      <Row>
        <Col md={6}>
          <FormControl
            className="p-3 mb-3 rounded"
            size="lg"
            type="text"
            placeholder="Search by movie title"
            value={state.query}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            className="p-3 mb-3 rounded bg-body text-dark border-secondary"
            onChange={handleCinemaChange}
            value={state.filters.cinema || ''}
          >
            <option value="">All Cinema</option>
            {state.cinemas.map((cinema) => (
              <option key={cinema.cinemaId} value={cinema.cinemaName}>
                {cinema.cinemaName}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;