// import React, { useContext } from 'react';
// import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
// import { MovieContext } from '../context/MovieContext';

// const SearchBar = () => {
//   const { state, dispatch, updateQueryParams } = useContext(MovieContext);

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
//             placeholder="Search by movie title"
//             value={state.query}
//             onChange={handleSearch}
//             onKeyDown={handleKeyDown}
//           />
//         </Col>
//         <Col md={4} className="d-flex flex-column align-items-start fs-4">
//           <Form.Check
//             label="Now Showing"
//             name="filter"
//             value="Now Showing"
//             checked={state.filters.includes('Now Showing')}
//             onChange={(e) => handleFilters(e)}
//           />
//           <Form.Check
//             label="Coming Soon"
//             name="filter"
//             value="Coming Soon"
//             checked={state.filters.includes('Coming Soon')}
//             onChange={(e) => handleFilters(e)}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SearchBar;


// import React, { useContext, useState } from 'react';
// import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
// import { MovieContext } from '../context/MovieContext';
// import debounce from 'lodash/debounce';

// const SearchBar = () => {
//   const { state, dispatch, updateQueryParams, fetchMovies } = useContext(MovieContext);
//   const [searchInput, setSearchInput] = useState(state.query || '');

//   // Hàm debounce để chờ người dùng hoàn tất nhập liệu trước khi gọi tìm kiếm
//   const debouncedSearch = debounce((query, selectedRatings) => {
//     // Cập nhật query params và gọi fetchMovies sau khi người dùng ngừng nhập liệu
//     updateQueryParams({ search: query, ratings: selectedRatings, page: 1 });
//     fetchMovies({ search: query, ratings: selectedRatings, page: 1 });
//   }, 500); // Chờ 500ms sau lần nhập cuối trước khi gọi tìm kiếm

//   // Handle search input
//   const handleSearchInput = (event) => {
//     const query = event.target.value;
//     setSearchInput(query); // Cập nhật giá trị input tạm thời
//     dispatch({ type: 'SET_QUERY', payload: query }); // Cập nhật state query

//     // Gọi hàm debounce để gửi yêu cầu tìm kiếm sau khi ngừng nhập
//     const selectedRatings = state.filters.join(',');
//     debouncedSearch(query, selectedRatings);
//   };

  
//   // const handleFilters = (event) => {
//   //   const filter = event.target.value;
//   //   let newFilters;

//   //   if (state.filters.includes(filter)) {
//   //     newFilters = state.filters.filter(f => f !== filter);  // Xóa filter
//   //   } else {
//   //     newFilters = [...state.filters, filter];  // Thêm filter
//   //   }

//   //   // Cập nhật filters state
//   //   dispatch({ type: 'SET_FILTERS', payload: newFilters });

//   //   // Gọi tìm kiếm với filters mới
//   //   const selectedRatings = newFilters.join(',');
//   //   updateQueryParams({ search: state.query, ratings: selectedRatings, page: 1 });
//   //   fetchNews({ search: state.query, ratings: selectedRatings, page: 1 });
//   // };

//   // Handle rating filters
//   const handleFilters = (event) => {
//     const filter = event.target.value;
//     let newFilters;
  
//     if (state.filters.includes(filter)) {
//       newFilters = state.filters.filter(f => f !== filter);  // Remove filter
//     } else {
//       newFilters = [...state.filters, filter];  // Add filter
//     }
  
//     // Update filters state
//     dispatch({ type: 'SET_FILTERS', payload: newFilters });
  
//     // Fetch movies with the new filters
//     const selectedRatings = newFilters.join(',');
//     updateQueryParams({ search: state.query, ratings: selectedRatings, page: 1 });
//     fetchMovies({ search: state.query, ratings: selectedRatings, page: 1 });
//   };
  


//   // Handle Enter key
//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       handleSearchInput(event);
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
//             placeholder="Search by movie title"
//             value={searchInput}
//             onChange={handleSearchInput}
//             onKeyDown={handleKeyDown}
//           />
//         </Col>
//         <Col md={4} className="d-flex flex-column align-items-start fs-4">
//           <Form.Check
//             label="Now Showing"
//             name="filter"
//             value="Now Showing"
//             checked={state.filters.includes('Now Showing')}
//             onChange={handleFilters}
//           />
//           <Form.Check
//             label="Coming Soon"
//             name="filter"
//             value="Coming Soon"
//             checked={state.filters.includes('Coming Soon')}
//             onChange={handleFilters}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SearchBar;


// import React, { useContext, useState, useEffect } from 'react';
// import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
// import { MovieContext } from '../context/MovieContext';
// import debounce from 'lodash/debounce';

// const SearchBar = () => {
//   const { state, dispatch, updateQueryParams, fetchMovies } = useContext(MovieContext);
//   const [searchInput, setSearchInput] = useState(state.query || '');

//   // Set default filters (both "Now Showing" and "Coming Soon")
//   useEffect(() => {
//     if (!state.filters.length) {
//       const defaultFilters = ['Now Showing', 'Coming Soon'];
//       dispatch({ type: 'SET_FILTERS', payload: defaultFilters });
//       updateQueryParams({ search: searchInput, ratings: defaultFilters.join(','), page: 1 });
//       fetchMovies(); // Fetch movies with default filters
//     }
//   }, []); // Empty array ensures this only runs on the first render

//   // Debounce function for search input
//   const debouncedSearch = debounce((query, filters) => {
//     updateQueryParams({ search: query, ratings: filters.join(','), page: 1 });
//     fetchMovies(); // Fetch with updated query and filters
//   }, 500);

//   // Handle search input changes
//   const handleSearchInput = (event) => {
//     const query = event.target.value;
//     setSearchInput(query); // Update local input state
//     dispatch({ type: 'SET_QUERY', payload: query }); // Update global state query

//     // Call debounce search with both search input and filters
//     debouncedSearch(query, state.filters);
//   };

//   // Handle filter changes
//   const handleFilters = (event) => {
//     const filter = event.target.value;
//     let updatedFilters;

//     if (state.filters.includes(filter)) {
//       updatedFilters = state.filters.filter(f => f !== filter); // Remove filter
//     } else {
//       updatedFilters = [...state.filters, filter]; // Add filter
//     }

//     dispatch({ type: 'SET_FILTERS', payload: updatedFilters }); // Update global state filters

//     // Fetch movies with updated filters and search input
//     debouncedSearch(searchInput, updatedFilters);
//   };

//   // Handle Enter key press to prevent form submission
//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
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
//             placeholder="Search by movie title"
//             value={searchInput}
//             onChange={handleSearchInput}
//             onKeyDown={handleKeyDown}
//           />
//         </Col>
//         <Col md={4} className="d-flex flex-column align-items-start fs-4">
//           <Form.Check
//             label="Now Showing"
//             name="filter"
//             value="Now Showing"
//             checked={state.filters.includes('Now Showing')}
//             onChange={handleFilters}
//           />
//           <Form.Check
//             label="Coming Soon"
//             name="filter"
//             value="Coming Soon"
//             checked={state.filters.includes('Coming Soon')}
//             onChange={handleFilters}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SearchBar;


import React, { useContext, useState, useEffect } from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { MovieContext } from '../context/MovieContext';
import debounce from 'lodash/debounce';

const SearchBar = () => {
  const { state, dispatch, updateQueryParams, fetchMovies } = useContext(MovieContext);
  const [searchInput, setSearchInput] = useState(state.query || '');

  // Set default filters (both "Now Showing" and "Coming Soon")
  useEffect(() => {
    if (!state.filters.length) {
      const defaultFilters = ['Now Showing', 'Coming Soon'];
      dispatch({ type: 'SET_FILTERS', payload: defaultFilters });
      updateQueryParams({ search: searchInput, filters: defaultFilters.join(','), page: 1 });
      fetchMovies(); // Fetch movies with default filters
    }
  }, []); // Empty array ensures this only runs on the first render

  // Debounce function for search input
  const debouncedSearch = debounce((query, filters) => {
    updateQueryParams({ search: query, filters: filters.join(','), page: 1 }); // Resets page to 1
    fetchMovies(); // Fetch with updated query and filters
  }, 500);

  // Handle search input changes
  const handleSearchInput = (event) => {
    const query = event.target.value;
    setSearchInput(query); // Update local input state
    dispatch({ type: 'SET_QUERY', payload: query }); // Update global state query

    // Call debounce search with both search input and filters
    debouncedSearch(query, state.filters);
  };

  // Handle filter changes
  const handleFilters = (event) => {
    const filter = event.target.value;
    let updatedFilters;

    if (state.filters.includes(filter)) {
      updatedFilters = state.filters.filter(f => f !== filter); // Remove filter
    } else {
      updatedFilters = [...state.filters, filter]; // Add filter
    }

    dispatch({ type: 'SET_FILTERS', payload: updatedFilters }); // Update global state filters

    // Fetch movies with updated filters and search input
    debouncedSearch(searchInput, updatedFilters);
  };

  // Handle Enter key press to prevent form submission
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
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
            placeholder="Search by movie title"
            value={searchInput}
            onChange={handleSearchInput}
            onKeyDown={handleKeyDown}
          />
        </Col>
        <Col md={4} className="d-flex flex-column align-items-start fs-4">
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
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;