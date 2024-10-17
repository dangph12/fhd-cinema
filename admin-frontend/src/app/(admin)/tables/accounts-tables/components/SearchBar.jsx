import React, { useContext } from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { AccountContext } from '../context/AccountContext';

const SearchBar = () => {
  const { state, dispatch } = useContext(AccountContext);

  const handleSearch = (event) => {
    dispatch({ type: 'SET_QUERY', payload: event.target.value });
  };

  const handleFilters = (event) => {
    dispatch({ type: 'SET_FILTERS', payload: event.target.value });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch(event);
    }
  };

  return (
    <Container className="pt-3">
      <Row>
        <Col md={8}>
          <FormControl
            className="p-3 mb-3 rounded"
            size="lg"
            type="text"
            placeholder="Search by account name"
            value={state.query}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </Col>
        <Col md={4} className="d-flex flex-column align-items-start fs-4">
          <Form.Check
            label="Customer"
            name="filter"
            value="customer"
            checked={state.filters.includes('customer')}
            onChange={(e) => handleFilters(e)}
          />
          <Form.Check
            label="Staff"
            name="filter"
            value="staff"
            checked={state.filters.includes('staff')}
            onChange={(e) => handleFilters(e)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
