// import React, { createContext, useReducer, useEffect } from 'react';
// import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// export const TicketContext = createContext();

// const pageSize = 2;

// const initialState = {
//   tickets: [],
//   query: '',
//   filters: [],
//   currentPage: 1,
//   totalPages: 1,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_TICKETS':
//       // make ticketCreateAt readable
//       action.payload.forEach((ticket) => {
//         ticket.ticketCreateAt = new Date(ticket.ticketCreateAt).toLocaleString();
//       });
//       return { ...state, tickets: action.payload };
//     case 'SET_QUERY':
//       return { ...state, query: action.payload };
//     case 'SET_FILTERS':
//       return { ...state, filters: action.payload };
//     case 'SET_CURRENT_PAGE':
//       return { ...state, currentPage: action.payload };
//     case 'SET_TOTAL_PAGES':
//       return { ...state, totalPages: action.payload };
//     default:
//       return state;
//   }
// };

// export const TicketProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // const ticketApiUrl = `http://localhost:8080/tickets?search=${state.query}&page=${state.currentPage}&filters=${state.filters.join(',')}`;
//   // useEffect(() => {
//   //   fetchTickets();
//   // }, [state.currentPage, state.query, state.filters]);

//   // for debug
//   const ticketApiUrl = `http://localhost:8080/tickets`;
//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   useEffect(() => {
//     const params = new URLSearchParams(location.search || '');
//     const query = params.get('query') || '';
//     const filters = params.get('filters') ? params.get('filters').split(',') : [];
//     const currentPage = parseInt(params.get('page'), 10) || 1;

//     dispatch({ type: 'SET_QUERY', payload: query });
//     dispatch({ type: 'SET_FILTERS', payload: filters });
//     dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
//   }, [location.search]);

//   const fetchTickets = () => {
//     fetch(ticketApiUrl)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: 'SET_TICKETS', payload: json.data });
//         dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
//       })
//       .catch((error) => console.error('Error fetching tickets:', error));
//   };

//   const updateQueryParams = (params) => {
//     const searchParams = new URLSearchParams(location.search);
//     Object.keys(params).forEach((key) => {
//       if (params[key] !== undefined) {
//         searchParams.set(key, params[key]);
//       } else {
//         searchParams.delete(key);
//       }
//     });
//     navigate({ search: searchParams.toString() });
//   };

//   return (
//     <TicketContext.Provider value={{ state, dispatch, fetchTickets, updateQueryParams }}>
//       <Routes>
//         <Route path="*" element={children} />
//       </Routes>
//     </TicketContext.Provider>
//   );
// };

// import React, { createContext, useReducer, useEffect } from 'react';
// import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// // Create TicketContext
// export const TicketContext = createContext();

// const pageSize = 3; // Number of items per page

// // Initial state for TicketContext
// const initialState = {
//   tickets: [],
//   query: '',
//   filters: [],
//   currentPage: 1,
//   totalPages: 1,
// };

// // Reducer to handle state updates
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_TICKETS':
//       // Make ticketCreateAt readable
//       if (Array.isArray(action.payload)) {
//         action.payload.forEach((ticket) => {
//           ticket.ticketCreateAt = new Date(ticket.ticketCreateAt).toLocaleString();
//         });
//       } else {
//         console.error('Expected payload to be an array, but received:', action.payload);
//       }
//       return { ...state, tickets: Array.isArray(action.payload) ? action.payload : [] };

//     case 'SET_QUERY':
//       return { ...state, query: action.payload };

//     case 'SET_FILTERS':
//       return { ...state, filters: action.payload };

//     case 'SET_CURRENT_PAGE':
//       return { ...state, currentPage: action.payload };

//     case 'SET_TOTAL_PAGES':
//       return { ...state, totalPages: action.payload };

//     default:
//       return state;
//   }
// };

// // TicketProvider to wrap around components
// export const TicketProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Function to build the API URL with search, filters, pagination, and sorting
//   const buildApiUrl = () => {
//     const params = new URLSearchParams({
//       search: state.query || '', // Search query
//       page: state.currentPage || 1, // Current page
//       pageSize: pageSize, // Number of items per page
//       filters: state.filters.join(','), // Filters (if any)
//       sortBy: 'ticketCreateAt', // Sort by creation date
//       sortDirection: 'DESC', // Sort in descending order
//     });

//     return `ttp://localhost:8080/tickets?${params.toString()}`;
//   };

//   // Fetch tickets from the API
//   const fetchTickets = () => {
//     const apiUrl = buildApiUrl(); // Build the dynamic API URL
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((json) => {
//         console.log('Fetched tickets data:', json); // Debugging
//         // Ensure data is valid before dispatching
//         if (json && json.data && Array.isArray(json.data.result)) {
//           dispatch({ type: 'SET_TICKETS', payload: json.data.result });
//           dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
//         } else {
//           console.error('Expected json.data.result to be an array, but received:', json.data);
//         }
//       })
//       .catch((error) => console.error('Error fetching tickets:', error));
//   };

//   // Update URL query parameters
//   const updateQueryParams = (params) => {
//     const searchParams = new URLSearchParams(location.search);

//     Object.keys(params).forEach((key) => {
//       if (params[key] !== undefined) {
//         searchParams.set(key, params[key]);
//       } else {
//         searchParams.delete(key);
//       }
//     });

//     navigate({ search: searchParams.toString() });
//   };

//   // Parse URL parameters and update state
//   useEffect(() => {
//     const params = new URLSearchParams(location.search || '');
//     const query = params.get('query') || '';
//     const filters = params.get('filters') ? params.get('filters').split(',') : [];
//     const currentPage = parseInt(params.get('page'), 10) || 1;

//     dispatch({ type: 'SET_QUERY', payload: query });
//     dispatch({ type: 'SET_FILTERS', payload: filters });
//     dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
//   }, [location.search]);

//   // Fetch tickets whenever currentPage, query, or filters change
//   useEffect(() => {
//     fetchTickets();
//   }, [state.currentPage, state.query, state.filters]);

//   return (
//     <TicketContext.Provider value={{ state, dispatch, fetchTickets, updateQueryParams }}>
//       <Routes>
//         <Route path="*" element={children} />
//       </Routes>
//     </TicketContext.Provider>
//   );
// }; 

import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// Create TicketContext
export const TicketContext = createContext();

const pageSize = 3; // Number of items per page

// Initial state for TicketContext
const initialState = {
  tickets: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

// Reducer to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TICKETS':
      // Make ticketCreateAt readable
      if (Array.isArray(action.payload)) {
        action.payload.forEach((ticket) => {
          ticket.ticketCreateAt = new Date(ticket.ticketCreateAt).toLocaleString();
        });
      } else {
        console.error('Expected payload to be an array, but received:', action.payload);
      }
      return { ...state, tickets: Array.isArray(action.payload) ? action.payload : [] };

    case 'SET_QUERY':
      return { ...state, query: action.payload };

    case 'SET_FILTERS':
      return { ...state, filters: action.payload };

    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };

    case 'SET_TOTAL_PAGES':
      return { ...state, totalPages: action.payload };

    default:
      return state;
  }
};

// TicketProvider to wrap around components
export const TicketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to build the API URL with search, filters, pagination, and sorting
  const buildApiUrl = () => {
    const params = new URLSearchParams({
      search: state.query || '', // Search query
      page: state.currentPage || 1, // Current page
      pageSize: pageSize, // Number of items per page (3 items in this case)
      filters: state.filters.join(','), // Filters (if any)
      sortBy: 'ticketCreateAt', // Sort by creation date
      sortDirection: 'DESC', // Sort in descending order
    });

    return `http://localhost:8080/tickets?${params.toString()}`;
  };

  // Fetch tickets from the API
  const fetchTickets = () => {
    const apiUrl = buildApiUrl(); // Build the dynamic API URL
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log('Fetched tickets data:', json); // Debugging
        // Ensure data is valid before dispatching
        if (json && json.data && Array.isArray(json.data.result)) {
          dispatch({ type: 'SET_TICKETS', payload: json.data.result });
          dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
        } else {
          console.error('Expected json.data.result to be an array, but received:', json.data);
        }
      })
      .catch((error) => console.error('Error fetching tickets:', error));
  };

  // Update URL query parameters
  const updateQueryParams = (params) => {
    const searchParams = new URLSearchParams(location.search);

    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined) {
        searchParams.set(key, params[key]);
      } else {
        searchParams.delete(key);
      }
    });

    navigate({ search: searchParams.toString() });
  };

  // Parse URL parameters and update state
  useEffect(() => {
    const params = new URLSearchParams(location.search || '');
    const query = params.get('query') || '';
    const filters = params.get('filters') ? params.get('filters').split(',') : [];
    const currentPage = parseInt(params.get('page'), 10) || 1;

    dispatch({ type: 'SET_QUERY', payload: query });
    dispatch({ type: 'SET_FILTERS', payload: filters });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
  }, [location.search]);

  // Fetch tickets whenever currentPage, query, or filters change
  useEffect(() => {
    fetchTickets();
  }, [state.currentPage, state.query, state.filters]);

  return (
    <TicketContext.Provider value={{ state, dispatch, fetchTickets, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </TicketContext.Provider>
  );
};
