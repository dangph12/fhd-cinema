import React, { createContext, useReducer, useEffect } from 'react';

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
    case 'SET_FILTERS': {
      if (state.filters.includes(action.payload)) {
        return { ...state, filters: state.filters.filter((filter) => filter !== action.payload) };
      }
      return { ...state, filters: [...state.filters, action.payload] };
    }
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

  const accountApiUrl = `http://localhost:8080/accounts?search=${state.query}&page=${state.currentPage}&filters=${state.filters.join(',')}`;

  useEffect(() => {
    fetchAccounts();
  }, [state.currentPage, state.query, state.filters]);

  const fetchAccounts = () => {
    fetch(accountApiUrl)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'SET_ACCOUNTS', payload: json.data.accountDtos });
        // fetch total counts of accounts, then calc totalPages = Math.ceil(counts / pageSize)
        // page Size = 2 for debug
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      })
      .catch((error) => console.error('Error fetching accounts:', error));
  };

  return <AccountContext.Provider value={{ state, dispatch, fetchAccounts }}>{children}</AccountContext.Provider>;
};
