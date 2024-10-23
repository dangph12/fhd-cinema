// import React, { createContext, useReducer, useEffect } from 'react';
// import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// export const CustomerContext = createContext();

// const pageSize = 3;

// const initialState = {
//   customers: [],
//   query: '',
//   filters: [],
//   currentPage: 1,
//   totalPages: 1,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_CUSTOMERS':
//       return { ...state, customers: action.payload };
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

// export const CustomerProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // const customerApiUrl = `http://localhost:8080/customers?search=${state.query}&page=${state.currentPage}&filters=${state.filters.join(',')}`;
//   // useEffect(() => {
//   //   fetchCustomers();
//   // }, [state.currentPage, state.query, state.filters]);

//   // for debug
//   const customerApiUrl = `http://localhost:8080/customers`;
//   useEffect(() => {
//     fetchCustomers();
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

//   const fetchCustomers = () => {
//     fetch(customerApiUrl)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: 'SET_CUSTOMERS', payload: json.data });
//         dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
//       })
//       .catch((error) => console.error('Error fetching customers:', error));
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
//     <CustomerContext.Provider value={{ state, dispatch, fetchCustomers, updateQueryParams }}>
//       <Routes>
//         <Route path="*" element={children} />
//       </Routes>
//     </CustomerContext.Provider>
//   );
// };


import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const CustomerContext = createContext();

const pageSize = 3;  // Set pageSize to 3 as in the Postman request

const initialState = {
  customers: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CUSTOMERS':
      return { ...state, customers: action.payload };
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

export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  // Define the API URL for fetching customers
  const customerApiUrl = `http://localhost:8080/customers`;

  useEffect(() => {
    fetchCustomers();
  }, [state.currentPage, state.query, state.filters]);

  const fetchCustomers = (params = {}) => {
    const { search = state.query, page = state.currentPage, pageSize = 3, sortBy = 'customerName', sortDirection = 'DESC' } = params;

    // Construct the URL with query parameters
    const url = `${customerApiUrl}?search=${search}&page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // Assuming the API returns "data.result" for customers and "data.count" for total count
        dispatch({ type: 'SET_CUSTOMERS', payload: json.data.result });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      })
      .catch((error) => console.error('Error fetching customers:', error));
  };

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

  return (
    <CustomerContext.Provider value={{ state, dispatch, fetchCustomers, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </CustomerContext.Provider>
  );
};
