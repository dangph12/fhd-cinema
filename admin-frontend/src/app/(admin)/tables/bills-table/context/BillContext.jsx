// import React, { createContext, useReducer, useEffect } from 'react';
// import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// export const BillContext = createContext();

// const pageSize = 2;

// const initialState = {
//   bills: [],
//   bookings: [],
//   query: '',
//   filters: [],
//   currentPage: 1,
//   totalPages: 1,
// };

// const convertTime = (time) => {
//   if (!time) return ''; // Return an empty string if time is undefined or null

//   const [datePart, timePart] = time.split("T");

//   if (!datePart || !timePart) {
//     console.error("Invalid datetime format:", time);
//     return time; // Return original time if splitting fails
//   }

//   const formattedDate = datePart.split("-").reverse().join("/");
//   const formattedTime = timePart.slice(0, 5); // "HH:mm"

//   return `${formattedDate} ${formattedTime}`;
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_BILLS':
//       // modify billCreatedAt to be more readable
//       action.payload.forEach((bill) => {
//         bill.billCreatedAt = convertTime(bill.billCreatedAt);
//       });
//       return { ...state, bills: action.payload };
//     case 'SET_BOOKINGS':
//       return { ...state, bookings: action.payload };
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

// export const BillProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // const billApiUrl = `http://localhost:8080/bills?search=${state.query}&page=${state.currentPage}&filters=${state.filters.join(',')}`;
//   // useEffect(() => {
//   //   fetchBills();
//   // }, [state.currentPage, state.query, state.filters]);

//   const billApiUrl = `http://localhost:8080/bills`;
//   useEffect(() => {
//     fetchBills();
//     fetchBookings();
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



//   const fetchBills = () => {
//     fetch(billApiUrl)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: 'SET_BILLS', payload: json.data });
//         dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
//       })
//       .catch((error) => console.error('Error fetching bills:', error));
//   };

//   const fetchBookings = () => {
//     fetch('http://localhost:8080/bookings')
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: 'SET_BOOKINGS', payload: json.data });
//       })
//       .catch((error) => console.error('Error fetching bookings:', error));
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
//     <BillContext.Provider value={{ state, dispatch, fetchBills, updateQueryParams }}>
//       <Routes>
//         <Route path="*" element={children} />
//       </Routes>
//     </BillContext.Provider>
//   );
// };


import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const BillContext = createContext();

const pageSize = 2; // Số lượng phần tử trên mỗi trang

const initialState = {
  bills: [],
  bookings: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const convertTime = (time) => {
  if (!time) return ''; // Return an empty string if time is undefined or null

  const [datePart, timePart] = time.split("T");

  if (!datePart || !timePart) {
    console.error("Invalid datetime format:", time);
    return time; // Return original time if splitting fails
  }

  const formattedDate = datePart.split("-").reverse().join("/");
  const formattedTime = timePart.slice(0, 5); // "HH:mm"

  return `${formattedDate} ${formattedTime}`;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BILLS':
      if (Array.isArray(action.payload)) {
        action.payload.forEach((bill) => {
          bill.billCreatedAt = convertTime(bill.billCreatedAt);
        });
      } else {
        console.error('Expected payload to be an array, but received:', action.payload);
      }
      return { ...state, bills: Array.isArray(action.payload) ? action.payload : [] };
    case 'SET_BOOKINGS':
      return { ...state, bookings: action.payload };
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
export const BillProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  const buildApiUrl = () => {
    const params = new URLSearchParams({
      search: state.query || '',
      page: state.currentPage || 1,
      pageSize: pageSize,
      filters: state.filters.join(','),
      sortBy: 'billAmount',
      sortDirection: 'DESC',
    });
    return `http://localhost:8080/bills?${params.toString()}`;
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:8080/bookings');
      const json = await response.json();
      if (json && json.data) {
        dispatch({ type: 'SET_BOOKINGS', payload: json.data }); // Cập nhật screens vào state
      } else {
        console.error('Expected json.data to be an array, but received:', json);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const fetchBills = async () => {
    const apiUrl = buildApiUrl();
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      if (json && json.data && Array.isArray(json.data.result)) {
        dispatch({ type: 'SET_BILLS', payload: json.data.result });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      } else {
        console.error('Expected json.data.result to be an array, but received:', json.data);
      }
    } catch (error) {
      console.error('Error fetching bills:', error);
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
    fetchBills();
    fetchBookings();
  }, [state.currentPage, state.query, state.filters]);

  return (
    <BillContext.Provider value={{ state, dispatch, fetchBills, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </BillContext.Provider>
  );
};