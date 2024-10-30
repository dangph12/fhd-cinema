import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const SeatContext = createContext();

const pageSize = 20; // Số lượng phần tử trên mỗi trang

const initialState = {
  seats: [],
  tickets: [],
  seatsTypes: [],
  screens: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEATS':
      return { ...state, seats: action.payload };
    case 'SET_TICKETS':
      return { ...state, tickets: action.payload };
    case 'SET_SEATS_TYPES':
      return { ...state, seatsTypes: action.payload };
    case 'SET_SCREENS':
      return { ...state, screens: action.payload };
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
export const SeatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  const buildApiUrl = () => {
    const params = new URLSearchParams({
      search: state.query || '',
      page: state.currentPage || 1,
      pageSize: pageSize,
      filters: state.filters.join(','),
      sortBy: 'seatName',
      sortDirection: 'DESC',
    });
    return `http://localhost:8080/seats?${params.toString()}`;
  };

  const fetchScreens = async () => {
    try {
      const response = await fetch('http://localhost:8080/screens');
      const json = await response.json();
      if (json && json.data) {
        dispatch({ type: 'SET_SCREENS', payload: json.data }); // Cập nhật screens vào state
      } else {
        console.error('Expected json.data to be an array, but received:', json);
      }
    } catch (error) {
      console.error('Error fetching screens:', error);
    }
  };

  const fetchSeatsTypes = async () => {
    try {
      const response = await fetch('http://localhost:8080/seats-types');
      const json = await response.json();
      if (json && json.data) {
        dispatch({ type: 'SET_SEATS_TYPES', payload: json.data }); // Cập nhật seatsTypes trong state
      } else {
        console.error('Expected json.data to be an array, but received:', json);
      }
    } catch (error) {
      console.error('Error fetching seatsTypes:', error);
    }
  };

  const fetchTickets = async () => {
    try {
      const response = await fetch('http://localhost:8080/tickets');
      const json = await response.json();
      if (json && json.data) {
        dispatch({ type: 'SET_TICKETS', payload: json.data }); // Cập nhật tickets trong state
      } else {
        console.error('Expected json.data to be an array, but received:', json);
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const fetchSeats = async () => {
    const apiUrl = buildApiUrl();
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      if (json && json.data.result && Array.isArray(json.data.result)) {
        dispatch({ type: 'SET_SEATS', payload: json.data.result });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      } else {
        console.error('Expected json.data to be an array, but received:', json.data.result);
      }
    } catch (error) {
      console.error('Error fetching seats:', error);
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

    navigate({ search: searchParams.toString() });
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
    fetchSeats();
    fetchScreens();
    fetchSeatsTypes();
    fetchTickets();
  }, [state.currentPage, state.query, state.filters]);

  return (
    <SeatContext.Provider value={{ state, dispatch, fetchSeats, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </SeatContext.Provider>
  );
};