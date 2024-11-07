

import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const ScreenContext = createContext();

const pageSize = 10;  

const initialState = {
  screens: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
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

export const ScreenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  // Địa chỉ API để lấy danh sách screens
  const screenApiUrl = `http://localhost:8080/screens`;

  useEffect(() => {
    fetchScreens();
  }, [state.currentPage, state.query, state.filters]);

  const fetchScreens = (params = {}) => {
    const { search = state.query, page = state.currentPage, pageSize = 8, sortBy = 'screenName', sortDirection = 'ASC' } = params;

    // Tạo URL với các tham số truy vấn
    const url = `${screenApiUrl}?search=${search}&page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // Giả sử API trả về "data.result" cho danh sách screens và "data.count" cho tổng số mục
        dispatch({ type: 'SET_SCREENS', payload: json.data.result });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      })
      .catch((error) => console.error('Error fetching screens:', error));
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
    <ScreenContext.Provider value={{ state, dispatch, fetchScreens, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </ScreenContext.Provider>
  );
};
