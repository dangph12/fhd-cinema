import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const ShowtimeContext = createContext();

const pageSize = 2;

const initialState = {
  showtimes: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SHOWTIMES':
      return { ...state, showtimes: action.payload };
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

export const ShowtimeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  // const showtimeApiUrl = `http://localhost:8080/showtimes?search=${state.query}&page=${state.currentPage}&filters=${state.filters.join(',')}`;
  // useEffect(() => {
  //   fetchShowtimes();
  // }, [state.currentPage, state.query, state.filters]);

  // for debug
  const showtimeApiUrl = `http://localhost:8080/showtimes`;
  useEffect(() => {
    fetchShowtimes();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search || '');
    const query = params.get('query') || '';
    const filters = params.get('filters') ? params.get('filters').split(',') : [];
    const currentPage = parseInt(params.get('page'), 10) || 1;

    dispatch({ type: 'SET_QUERY', payload: query });
    dispatch({ type: 'SET_FILTERS', payload: filters });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
  }, [location.search]);

  const fetchShowtimes = () => {
    fetch(showtimeApiUrl)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'SET_SHOWTIMES', payload: json.data });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      })
      .catch((error) => console.error('Error fetching showtimes:', error));
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
    <ShowtimeContext.Provider value={{ state, dispatch, fetchShowtimes, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </ShowtimeContext.Provider>
  );
};