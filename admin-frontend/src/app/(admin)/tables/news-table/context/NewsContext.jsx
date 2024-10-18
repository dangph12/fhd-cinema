import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const NewsContext = createContext();

const pageSize = 2;

const initialState = {
  news: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return { ...state, news: action.payload };
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

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  // const newsApiUrl = `http://localhost:8080/news?search=${state.query}&page=${state.currentPage}&filters=${state.filters.join(',')}`;
  // useEffect(() => {
  //   fetchNews();
  // }, [state.currentPage, state.query, state.filters]);

  // for debug
  const newsApiUrl = `http://localhost:8080/news`;
  useEffect(() => {
    fetchNews();
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

  const fetchNews = () => {
    fetch(newsApiUrl)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'SET_NEWS', payload: json.data });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      })
      .catch((error) => console.error('Error fetching news:', error));
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
    <NewsContext.Provider value={{ state, dispatch, fetchNews, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </NewsContext.Provider>
  );
};