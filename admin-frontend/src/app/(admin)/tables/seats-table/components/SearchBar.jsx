// // import React, { useContext } from 'react';
// import { FormControl, Container, Row, Col, Form } from 'react-bootstrap';
// import { SeatContext } from '../context/SeatContext';

// const SearchBarSeats = () => {
//   const { state, dispatch, updateQueryParams, fetchSeats } = useContext(SeatContext);

//   // Xử lý sự kiện khi nhập từ khóa tìm kiếm
//   const handleSearch = (event) => {
//     const query = event.target.value;

//     // Cập nhật từ khóa tìm kiếm trong `state`
//     dispatch({ type: 'SET_QUERY', payload: query });

//     // Cập nhật URL và gọi `fetchSeats` để thực hiện tìm kiếm mới
//     updateQueryParams({ search: query, page: 1 });
//     fetchSeats({ search: query, page: 1, pageSize: 5, sortBy: 'seatName', sortDirection: 'ASC' });
//   };

//   // Xử lý các bộ lọc cho trạng thái `booked` và `available`
//   const handleBookedFilter = (event) => {
//     const isBooked = event.target.checked;
//     let newFilters = [...state.filters];

//     if (isBooked) {
//       newFilters.push('booked');
//     } else {
//       newFilters = newFilters.filter(f => f !== 'booked');
//     }

//     // Cập nhật bộ lọc trong `state`
//     dispatch({ type: 'SET_FILTERS', payload: newFilters });

//     // Cập nhật URL và gọi `fetchSeats` với bộ lọc mới
//     updateQueryParams({ filters: newFilters.join(','), page: 1 });
//     fetchSeats({ search: state.query, filters: newFilters.join(','), page: 1 });
//   };

//   const handleAvailableFilter = (event) => {
//     const isAvailable = event.target.checked;
//     let newFilters = [...state.filters];

//     if (isAvailable) {
//       newFilters.push('available');
//     } else {
//       newFilters = newFilters.filter(f => f !== 'available');
//     }

//     // Cập nhật bộ lọc trong `state`
//     dispatch({ type: 'SET_FILTERS', payload: newFilters });

//     // Cập nhật URL và gọi `fetchSeats` với bộ lọc mới
//     updateQueryParams({ filters: newFilters.join(','), page: 1 });
//     fetchSeats({ search: state.query, filters: newFilters.join(','), page: 1 });
//   };

//   // Xử lý phím Enter để tìm kiếm
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
//             placeholder="Search by seat name"
//             value={state.query}
//             onChange={handleSearch}
//             onKeyDown={handleKeyDown}
//           />
//         </Col>
//         <Col md={4} className="d-flex flex-column align-items-start fs-4">
//           <Form.Check
//             label="Booked"
//             name="filter"
//             value="booked"
//             checked={state.filters.includes('booked')}
//             onChange={handleBookedFilter}
//           />
//           <Form.Check
//             label="Available"
//             name="filter"
//             value="available"
//             checked={state.filters.includes('available')}
//             onChange={handleAvailableFilter}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SearchBar;


// import React, { useContext } from 'react';
// import { FormControl, Container, Row, Col, Form } from 'react-bootstrap';
// import { SeatContext } from '../context/SeatContext';

// const SearchBarSeats = () => {
//   const { state, dispatch, updateQueryParams, fetchSeats } = useContext(SeatContext);

//   // Xử lý sự kiện khi nhập từ khóa tìm kiếm
//   const handleSearch = (event) => {
//     const query = event.target.value;

//     // Cập nhật từ khóa tìm kiếm trong state
//     dispatch({ type: 'SET_QUERY', payload: query });

//     // Cập nhật URL và gọi fetchSeats để thực hiện tìm kiếm mới
//     updateQueryParams({ search: query, page: 1 });
//     fetchSeats({ search: query, page: 1, pageSize: 5, sortBy: 'seatName', sortDirection: 'ASC' });
//   };

//   // Xử lý các bộ lọc cho trạng thái `Booked` và `Available`
//   const handleFilterChange = (event) => {
//     const filter = event.target.value;
//     let newFilters = [...state.filters];

//     if (event.target.checked) {
//       newFilters.push(filter);
//     } else {
//       newFilters = newFilters.filter(f => f !== filter);
//     }

//     // Cập nhật bộ lọc trong state
//     dispatch({ type: 'SET_FILTERS', payload: newFilters });

//     // Cập nhật URL và gọi fetchSeats với bộ lọc mới
//     updateQueryParams({ filters: newFilters.join(','), page: 1 });
//     fetchSeats({ search: state.query, filters: newFilters.join(','), page: 1 });
//   };

//   // Xử lý phím Enter để tìm kiếm
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
//             placeholder="Search by seat name"
//             value={state.query}
//             onChange={handleSearch}
//             onKeyDown={handleKeyDown}
//           />
//         </Col>
//         <Col md={4} className="d-flex flex-column align-items-start fs-4">
//           <Form.Check
//             label="Booked"
//             name="filter"
//             value="booked"
//             checked={state.filters.includes('booked')}
//             onChange={handleFilterChange}
//           />
//           <Form.Check
//             label="Available"
//             name="filter"
//             value="available"
//             checked={state.filters.includes('available')}
//             onChange={handleFilterChange}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SearchBarSeats;

// import React, { useContext, useState } from 'react';
// import { FormControl, Container, Row, Col, Form } from 'react-bootstrap';
// import { SeatContext } from '../context/SeatContext';

// const SeatsSearchBar = () => {
//   const { state, dispatch, fetchSeats, updateQueryParams } = useContext(SeatContext);
//   const [filters, setFilters] = useState({ search: '', booked: null });

//   // Handle search input changes
//   const handleSearch = (event) => {
//     const searchQuery = event.target.value;
//     setFilters({ ...filters, search: searchQuery });

//     // Dispatch and fetch filtered data
//     dispatch({ type: 'SET_QUERY', payload: searchQuery });
//     updateQueryParams({ search: searchQuery, page: 1 });
//     fetchSeats({ search: searchQuery, page: 1, booked: filters.booked });
//   };

//   // Handle filter changes for "Booked" and "Available" checkboxes
//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     const bookedFilter = name === 'booked' ? (checked ? true : null) : filters.booked;
//     const availableFilter = name === 'available' ? (checked ? false : null) : filters.booked;

//     const newBookedStatus = bookedFilter === true ? true : availableFilter === false ? false : null;

//     setFilters({ ...filters, booked: newBookedStatus });
//     dispatch({ type: 'SET_FILTERS', payload: newBookedStatus });

//     // Update URL and fetch filtered data
//     updateQueryParams({ booked: newBookedStatus, page: 1 });
//     fetchSeats({ search: filters.search, booked: newBookedStatus, page: 1 });
//   };

//   return (
//     <Container className="pt-3">
//       <Row>
//         <Col md={8}>
//           <FormControl
//             className="p-3 mb-3 rounded"
//             size="lg"
//             type="text"
//             placeholder="Search by seat name"
//             value={filters.search}
//             onChange={handleSearch}
//           />
//         </Col>
//         <Col md={4} className="d-flex flex-column align-items-start fs-4">
//           <Form.Check
//             label="Booked"
//             name="booked"
//             checked={filters.booked === true}
//             onChange={handleCheckboxChange}
//           />
//           <Form.Check
//             label="Available"
//             name="available"
//             checked={filters.booked === false}
//             onChange={handleCheckboxChange}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SeatsSearchBar;


import React, { useContext } from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { SeatContext } from '../context/SeatContext';
const SearchBar = () => {
  const { state, dispatch, updateQueryParams } = useContext(SeatContext);

  const handleSearch = (event) => {
    const query = event.target.value;
    dispatch({ type: 'SET_QUERY', payload: query });
    updateQueryParams({ query, page: 1 });
  };

  const handleFilters = (event) => {
    const filter = event.target.value;
    let newFilters;
    if (state.filters.includes(filter)) {
      newFilters = state.filters.filter(f => f !== filter);
    } else {
      newFilters = [...state.filters, filter];
    }
    dispatch({ type: 'SET_FILTERS', payload: newFilters });
    updateQueryParams({ filters: newFilters.join(','), page: 1 });
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
            placeholder="Search by seat id"
            value={state.query}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </Col>
        {/* <Col md={4} className="d-flex flex-column align-items-start fs-4">
          <Form.Check
            label="true"
            name="filter"
            value="true"
            checked={state.filters.includes('true')}
            onChange={(e) => handleFilters(e)}
          />
          <Form.Check
            label="false"
            name="filter"
            value="false"
            checked={state.filters.includes('false')}
            onChange={(e) => handleFilters(e)}
          />
        </Col> */}
      </Row>
    </Container>
  );
};

export default SearchBar;