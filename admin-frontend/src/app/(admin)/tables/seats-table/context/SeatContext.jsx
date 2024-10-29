// 

import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// Tạo context cho Seat
export const SeatContext = createContext();

const pageSize = 5; // Số ghế trên mỗi trang (có thể điều chỉnh theo nhu cầu)

const initialState = {
  seats: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEATS':
      return { ...state, seats: action.payload };
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

  // Địa chỉ API để lấy danh sách seats
  const seatApiUrl = `http://localhost:8080/seats`;

  useEffect(() => {
    fetchSeats();
  }, [state.currentPage, state.query, state.filters]);

  const fetchSeats = (params = {}) => {
    const { search = state.query, page = state.currentPage, pageSize = 50, sortBy = 'seatName', sortDirection = 'ASC' } = params;

    // Tạo URL với các tham số truy vấn
    const url = `${seatApiUrl}?search=${search}&page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // Giả sử API trả về "data.result" cho danh sách seats và "data.count" cho tổng số mục
        dispatch({ type: 'SET_SEATS', payload: json.data.result });
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
