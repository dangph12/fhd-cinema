// import React, { useContext } from 'react';
// import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
// import { CustomerContext } from '../context/CustomerContext';

// const SearchBar = () => {
//   const { state, dispatch, updateQueryParams } = useContext(CustomerContext);

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
//             placeholder="Search by customer name"
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
import { CustomerContext } from '../context/CustomerContext';

const SearchBar = () => {
  const { state, dispatch, updateQueryParams, fetchCustomers } = useContext(CustomerContext);

  // Handle search input
  const handleSearch = (event) => {
    const query = event.target.value;

    // Update the query state
    dispatch({ type: 'SET_QUERY', payload: query });

    // Update the URL and trigger a search
    updateQueryParams({ search: query, page: 1 });
    fetchCustomers({ search: query, page: 1, pageSize: 3, sortBy: 'customerName', sortDirection: 'DESC' });
  };

  // Handle filters (optional)
  const handleFilters = (event) => {
    const filter = event.target.value;
    let newFilters = [...state.filters];

    if (event.target.checked) {
      newFilters.push(filter);
    } else {
      newFilters = newFilters.filter(f => f !== filter);
    }

    // Update the filters state
    dispatch({ type: 'SET_FILTERS', payload: newFilters });

    // Update the URL and fetch with new filters
    updateQueryParams({ filters: newFilters.join(','), page: 1 });
    fetchCustomers({ search: state.query, filters: newFilters.join(','), page: 1 });
  };

  // Handle Enter key for search
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
            placeholder="Search by customer name"
            value={state.query}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </Col>
        {/* <Col md={4} className="d-flex flex-column align-items-start fs-4">
          <Form.Check
            label="Admin"
            name="filter"
            value="Admin"
            checked={state.filters.includes('Admin')}
            onChange={handleFilters}
          />
          <Form.Check
            label="Customer"
            name="filter"
            value="Customer"
            checked={state.filters.includes('Customer')}
            onChange={handleFilters}
          />
        </Col> */}
      </Row>
    </Container>
  );
};

export default SearchBar;
