import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const AccountContext = createContext();

const pageSize = 2;

const initialState = {
  accounts: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACCOUNTS':
      return { ...state, accounts: action.payload };
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

export const AccountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  const accountApiUrl = `http://localhost:8080/accounts?search=${state.query}&page=${state.currentPage}&filters=${state.filters.join(',')}`;
  useEffect(() => {
    fetchAccounts();
  }, [state.currentPage, state.query, state.filters]);

  // for debug
  // const accountApiUrl = `http://localhost:8080/accounts`;
  // useEffect(() => {
  //   fetchAccounts();
  // }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search || '');
    const query = params.get('query') || '';
    const filters = params.get('filters') ? params.get('filters').split(',') : [];
    const currentPage = parseInt(params.get('page'), 10) || 1;

    dispatch({ type: 'SET_QUERY', payload: query });
    dispatch({ type: 'SET_FILTERS', payload: filters });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
  }, [location.search]);

  const fetchAccounts = () => {
    fetch(accountApiUrl)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'SET_ACCOUNTS', payload: json.data.accountDtos });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      })
      .catch((error) => console.error('Error fetching accounts:', error));
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
    <AccountContext.Provider value={{ state, dispatch, fetchAccounts, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </AccountContext.Provider>
  );
};