

import React, { useContext } from 'react';
import { FormControl, Container, Row, Col } from 'react-bootstrap';
import { ScreenContext } from '../context/ScreenContext';

const SearchBar = () => {
  const { state, dispatch, updateQueryParams, fetchScreens } = useContext(ScreenContext);

  // Xử lý sự kiện khi nhập từ khóa tìm kiếm
  const handleSearch = (event) => {
    const query = event.target.value;

    // Cập nhật từ khóa tìm kiếm trong `state`
    dispatch({ type: 'SET_QUERY', payload: query });

    // Cập nhật URL và gọi `fetchScreens` để thực hiện tìm kiếm mới
    updateQueryParams({ search: query, page: 1 });
    fetchScreens({ search: query, page: 1, pageSize: 8, sortBy: 'screenName', sortDirection: 'ASC' });
  };

  // Xử lý các bộ lọc (nếu cần)
  const handleFilters = (event) => {
    const filter = event.target.value;
    let newFilters = [...state.filters];

    if (event.target.checked) {
      newFilters.push(filter);
    } else {
      newFilters = newFilters.filter(f => f !== filter);
    }

    // Cập nhật bộ lọc trong `state`
    dispatch({ type: 'SET_FILTERS', payload: newFilters });

    // Cập nhật URL và gọi `fetchScreens` với bộ lọc mới
    updateQueryParams({ filters: newFilters.join(','), page: 1 });
    fetchScreens({ search: state.query, filters: newFilters.join(','), page: 1 });
  };

  // Xử lý phím Enter để tìm kiếm
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
            placeholder="Search by screen name"
            value={state.query}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </Col>
        {/* <Col md={4} className="d-flex flex-column align-items-start fs-4">
          <Form.Check
            label="Now Showing"
            name="filter"
            value="Now Showing"
            checked={state.filters.includes('Now Showing')}
            onChange={handleFilters}
          />
          <Form.Check
            label="Coming Soon"
            name="filter"
            value="Coming Soon"
            checked={state.filters.includes('Coming Soon')}
            onChange={handleFilters}
          />
        </Col> */}
      </Row>
    </Container>
  );
};

export default SearchBar;