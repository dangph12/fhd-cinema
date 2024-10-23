// import React, { useContext } from 'react';
// import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
// import { NewsContext } from '../context/NewsContext';

// const SearchBar = () => {
//   const { state, dispatch, updateQueryParams } = useContext(NewsContext);

//   const handleSearch = (event) => {
//     const query = event.target.value;
//     dispatch({ type: 'SET_QUERY', payload: query });
//     updateQueryParams({ query, page: 1 });
//   };

//   const handleFilters = (event) => {
//     const filter = event.target.value;
//     let newFilters;
//     if (state.filters.includes(filter)) {
//       newFilters = state.filters.filter(f => f !== filter);
//     } else {
//       newFilters = [...state.filters, filter];
//     }
//     dispatch({ type: 'SET_FILTERS', payload: newFilters });
//     updateQueryParams({ filters: newFilters.join(','), page: 1 });
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       handleSearch(event);
//     }
//   };

//   return (
//     <Container className="pt-3">
//       <Row>
//         <Col md={8}>
//           <FormControl
//             className="p-3 mb-3 rounded"
//             size="lg"
//             type="text"
//             placeholder="Search by news name"
//             value={state.query}
//             onChange={handleSearch}
//             onKeyDown={handleKeyDown}
//           />
//         </Col>
//         <Col md={4} className="d-flex flex-column align-items-start fs-4">
//           <Form.Check
//             label="Admin"
//             name="filter"
//             value="Admin"
//             checked={state.filters.includes('Admin')}
//             onChange={(e) => handleFilters(e)}
//           />
//           <Form.Check
//             label="Customer"
//             name="filter"
//             value="Customer"
//             checked={state.filters.includes('Customer')}
//             onChange={(e) => handleFilters(e)}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SearchBar;

import React, { useContext } from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { NewsContext } from '../context/NewsContext';

const SearchBar = () => {
  const { state, dispatch, updateQueryParams, fetchNews } = useContext(NewsContext);

  // Handle search input
  const handleSearch = (event) => {
    const query = event.target.value;

    // Update the query state
    dispatch({ type: 'SET_QUERY', payload: query });

    // Send a search request with the updated query and selected categories
    const selectedCategories = state.filters.join(',');
    updateQueryParams({ search: query, newsCategories: selectedCategories, page: 1 });
    fetchNews({ search: query, newsCategories: selectedCategories, page: 1 });
  };

  // Handle category filters
  const handleFilters = (event) => {
    const filter = event.target.value;
    let newFilters;

    if (state.filters.includes(filter)) {
      newFilters = state.filters.filter(f => f !== filter);  // Remove filter
    } else {
      newFilters = [...state.filters, filter];  // Add filter
    }

    // Update the filters state
    dispatch({ type: 'SET_FILTERS', payload: newFilters });

    // Send a search request with the updated filters and query
    const selectedCategories = newFilters.join(',');
    updateQueryParams({ search: state.query, newsCategories: selectedCategories, page: 1 });
    fetchNews({ search: state.query, newsCategories: selectedCategories, page: 1 });
  };

  // Handle the Enter key
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
            placeholder="Search by news title"
            value={state.query}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </Col>
        <Col md={4} className="d-flex flex-column align-items-start fs-4">
          <Form.Check
            label="Khuyến mãi"
            name="filter"
            value="Khuyến mãi"
            checked={state.filters.includes('Khuyến mãi')}
            onChange={handleFilters}
          />
          <Form.Check
            label="Lịch chiếu"
            name="filter"
            value="Lịch chiếu"
            checked={state.filters.includes('Lịch chiếu')}
            onChange={handleFilters}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
