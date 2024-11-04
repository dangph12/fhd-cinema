// import React, { createContext, useReducer, useEffect } from 'react';
// import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// export const SaleContext = createContext();

// const pageSize = 10; // Số lượng phần tử trên mỗi trang

// const initialState = {
//   sales: [],
//   movies: [],
//   query: '',
//   filters: [],
//   currentPage: 1,
//   totalPages: 1,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_SALES':
//       return { ...state, sales: action.payload };
//     case 'SET_MOVIES':
//       return { ...state, movies: action.payload };
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

// // Component Provider để cung cấp dữ liệu và hành động tới các component con
// export const SaleProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const buildApiUrl = () => {
//     const params = new URLSearchParams({
//       search: state.query || '',
//       page: state.currentPage || 1,
//       pageSize: pageSize,
//       filters: state.filters.join(','),
//       sortBy: 'totalRenevue',
//       sortDirection: 'DESC',
//     });
//     return `http://localhost:8080/sales/view?${params.toString()}`;
//   };

//   const fetchMovies = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/movies');
//       const json = await response.json();
//       if (json && json.data) {
//         dispatch({ type: 'SET_MOVIES', payload: json.data });
//       } else {
//         console.error('Expected json.data to be an array, but received:', json);
//       }
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//   };

//   const fetchSales = async () => {
//     const apiUrl = buildApiUrl();
//     try {
//       const response = await fetch(apiUrl);
//       const json = await response.json();
//       if (json && json.data.result && Array.isArray(json.data.result)) {
//         dispatch({ type: 'SET_SALES', payload: json.data.result });
//         dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
//       } else {
//         console.error('Expected json.data.result to be an array, but received:', json.data.result);
//       }
//     } catch (error) {
//       console.error('Error fetching sales:', error);
//     }
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

//   useEffect(() => {
//     const params = new URLSearchParams(location.search || '');
//     const query = params.get('query') || '';
//     const filters = params.get('filters') ? params.get('filters').split(',') : [];
//     const currentPage = parseInt(params.get('page'), 10) || 1;

//     dispatch({ type: 'SET_QUERY', payload: query });
//     dispatch({ type: 'SET_FILTERS', payload: filters });
//     dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
//   }, [location.search]);

//   useEffect(() => {
//     fetchSales();
//     fetchMovies();
//   }, [state.currentPage, state.query, state.filters]);

//   return (
//     <SaleContext.Provider value={{ state, dispatch, fetchSales, updateQueryParams }}>
//       <Routes>
//         <Route path="*" element={children} />
//       </Routes>
//     </SaleContext.Provider>
//   );
// };


import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const SaleContext = createContext();

const pageSize = 5; // Số lượng phần tử trên mỗi trang

const initialState = {
  sales: [],
  movies: [],
  cinemas: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SALES':
      return { ...state, sales: action.payload };
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'SET_CINEMAS':
      return { ...state, cinemas: action.payload };
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

// Component Provider để cung cấp dữ liệu và hành động tới các component con
export const SaleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  const buildApiUrl = () => {
    const params = new URLSearchParams({
      movieTitle: state.query || '',
      page: state.currentPage || 1,
      // cinemas: state.query || '',
      cinemas: state.filters.cinema ? state.filters.cinema.replace(/\+/g, ' ') : '',
      startDate: state.query || '',
      endDate: state.query || '',
      pageSize: pageSize,
      sortBy: 'totalRevenue',
      sortDirection: 'DESC',
    });
    console.log(`http://localhost:8080/sales/view?${params.toString()}`);
    return `http://localhost:8080/sales/view?${params.toString()}`;
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:8080/movies');
      const json = await response.json();
      if (json && json.data) {
        dispatch({ type: 'SET_MOVIES', payload: json.data });
      } else {
        console.error('Expected json.data to be an array, but received:', json);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchCinemas = async () => {
    try {
      const response = await fetch('http://localhost:8080/cinemas');
      const json = await response.json();
      if (json && json.data) {
        dispatch({ type: 'SET_CINEMAS', payload: json.data });
      } else {
        console.error('Expected json.data to be an array, but received:', json);
      }
    } catch (error) {
      console.error('Error fetching cinemas:', error);
    }
  };

  const fetchSales = async () => {
    const apiUrl = buildApiUrl();
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();

      console.log('fetchSales', json);

      if (json && json.data && json.data.result && Array.isArray(json.data.result)) {
        dispatch({ type: 'SET_SALES', payload: json.data.result });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      } else {
        console.error('Expected json.data.result to be an array, but received:', json.data.result);
      }
    } catch (error) {
      console.error('Error fetching sales:', error);
    }
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

    // navigate({ search: `?${searchParams.toString()}` });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search || '');
    const query = params.get('query') || '';
    const filters = params.get('filters') ? params.get('filters').split(',') : [];
    const currentPage = parseInt(params.get('page'), 10) || 1;

    dispatch({ type: 'SET_QUERY', payload: query });
    dispatch({ type: 'SET_FILTERS', payload: filters });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
  }, [location.search]);

  useEffect(() => {
    fetchSales();
    fetchMovies();
    fetchCinemas();
  }, [state.currentPage, state.query, state.filters]);

  return (
    <SaleContext.Provider value={{ state, dispatch, fetchSales, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </SaleContext.Provider>
  );
};
