import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const SeatContext = createContext();

const pageSize = 2;

const initialState = {
  seats: [],
  seatTypes: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEATS':
      return { ...state, seats: action.payload };
    case 'SET_SEAT_TYPES':
      return { ...state, seatTypes: action.payload };
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

export const SeatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  // const seatApiUrl = `http://localhost:8080/seats?search=${state.query}&page=${state.currentPage}&filters=${state.filters.join(',')}`;
  // useEffect(() => {
  //   fetchSeats();
  // }, [state.currentPage, state.query, state.filters]);

  // for debug
  const seatApiUrl = `http://localhost:8080/seats`;
  useEffect(() => {
    fetchSeats();
  }, []);

  const seatTypeApiUrl = `http://localhost:8080/seat-types`;
  useEffect(() => {
    fetch(seatTypeApiUrl)
      .then((response) => response.json())
      .then((json) => dispatch({ type: 'SET_SEAT_TYPES', payload: json.data }))
      .catch((error) => console.error('Error fetching seat types:', error));
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

  const fetchSeats = () => {
    fetch(seatApiUrl)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'SET_SEATS', payload: json.data });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      })
      .catch((error) => console.error('Error fetching seats:', error));
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
    <SeatContext.Provider value={{ state, dispatch, fetchSeats, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </SeatContext.Provider>
  );
};