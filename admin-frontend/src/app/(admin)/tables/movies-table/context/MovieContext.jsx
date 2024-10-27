// import React, { createContext, useReducer, useEffect } from 'react';
// import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// export const MovieContext = createContext();

// const pageSize = 2;

// const initialState = {
//   movies: [],
//   ratings: [],
//   query: '',
//   filters: [],
//   currentPage: 1,
//   totalPages: 1,
//   sortBy: 'movieReleaseDate',
//   sortDirection: 'DESC',
//   pageSize: 2,
// };


// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_MOVIES':
//       return { ...state, movies: action.payload };
//     case 'SET_RATINGS':
//       return { ...state, ratings: action.payload };
//     case 'SET_QUERY':
//       return { ...state, query: action.payload };
//     case 'SET_FILTERS':
//       return { ...state, filters: action.payload };
//     case 'SET_CURRENT_PAGE':
//       return { ...state, currentPage: action.payload };
//     case 'SET_TOTAL_PAGES':
//       return { ...state, totalPages: action.payload };
//     case 'SET_SORT_BY':
//       return { ...state, sortBy: action.payload };
//     case 'SET_SORT_DIRECTION':
//       return { ...state, sortDirection: action.payload };
//     default:
//       return state;
//   }
// };

// export const MovieProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // const movieApiUrl = `http://localhost:8080/movies?search=${state.query}&page=${state.currentPage}&filters=${state.filters.join(',')}`;

//   const movieApiUrl = `http://localhost:8080/movies`;
//   const ratingApiUrl = `http://localhost:8080/ratings`;

//   useEffect(() => {
//     const params = new URLSearchParams(location.search || '');
//     const query = params.get('search') || '';
//     const filters = params.get('ratings') ? params.get('ratings').split(',') : [];
//     const currentPage = parseInt(params.get('page'), 10) || 1;
//     const sortBy = params.get('sortBy') || 'movieReleaseDate';
//     const sortDirection = params.get('sortDirection') || 'DESC';
//     const pageSize = parseInt(params.get('pageSize'), 10) || 2;

//     dispatch({ type: 'SET_QUERY', payload: query });
//     dispatch({ type: 'SET_FILTERS', payload: filters });
//     dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
//     dispatch({ type: 'SET_SORT_BY', payload: sortBy });
//     dispatch({ type: 'SET_SORT_DIRECTION', payload: sortDirection });
//     dispatch({ type: 'SET_PAGE_SIZE', payload: pageSize });
//   }, [location.search]);


//   useEffect(() => {
//     fetchMovies();
//     fetchRatings();
//   }, [state.currentPage, state.query, state.filters]);

//   const fetchMovies = () => {
//     const url = `${movieApiUrl}?search=${state.query}&page=${state.currentPage}&ratings=${state.filters.join(',')}&sortBy=${state.sortBy}&sortDirection=${state.sortDirection}&pageSize=${state.pageSize}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: 'SET_MOVIES', payload: json.data });
//         dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / state.pageSize) });
//       })
//       .catch((error) => console.error('Error fetching movies:', error));
//   };

//   const fetchRatings = () => {
//     fetch(ratingApiUrl)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: 'SET_RATINGS', payload: json.data });
//       })
//       .catch((error) => console.error('Error fetching ratings:', error));
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
//     <MovieContext.Provider value={{ state, dispatch, fetchMovies, updateQueryParams }}>
//       <Routes>
//         <Route path="*" element={children} />
//       </Routes>
//     </MovieContext.Provider>
//   );
// };

// import React, { createContext, useReducer, useEffect } from 'react';
// import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// export const MovieContext = createContext();

// const pageSize = 5; // Số lượng phần tử trên mỗi trang

// const initialState = {
//   movies: [],
//   ratings: [],
//   query: '',
//   filters: [],
//   currentPage: 1,
//   totalPages: 1,
//   sortBy: 'movieReleaseDate',
//   sortDirection: 'DESC',
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_MOVIES':
//       // Kiểm tra nếu action.payload là một mảng
//       if (Array.isArray(action.payload)) {
//         action.payload.forEach((movie) => {
//           movie.movieReleaseDate = new Date(movie.movieReleaseDate).toLocaleDateString();
//         });
//       } else {
//         console.error('Expected payload to be an array, but received:', action.payload);
//       }
//       return { ...state, movie: Array.isArray(action.payload) ? action.payload : [] };
//     case 'SET_RATINGS':
//       return { ...state, ratings: action.payload };
//     case 'SET_NEWS_CATEGORIES':
//       return { ...state, newsCategories: action.payload };
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
// export const MovieProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Xây dựng URL API động dựa trên trạng thái hiện tại của bộ lọc và phân trang
//   const buildApiUrl = () => {
//     const params = new URLSearchParams({
//       search: state.query || '', // Truy vấn tìm kiếm
//       page: state.currentPage || 1, // Trang hiện tại
//       pageSize: pageSize, // Số phần tử trên mỗi trang
//       filters: state.filters.join(','), // Các bộ lọc
//       sortBy: 'movieReleaseDate', // Trường sắp xếp
//       sortDirection: 'DESC', // Hướng sắp xếp
//     });

//     return `http://localhost:8080/movies?${params.toString()}`;
//   };

//   // Hàm fetch dữ liệu từ API
//   const fetchMovies = () => {
//     const apiUrl = buildApiUrl(); // Xây dựng URL với các tham số
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((json) => {
//         console.log('Fetched movies data:', json); // In dữ liệu để kiểm tra
  
//         // Kiểm tra nếu json.data.result là một mảng và có dữ liệu hợp lệ
//         if (json && json.data && Array.isArray(json.data.result)) {
//           dispatch({ type: 'SET_MOVIES', payload: json.data.result }); // Sử dụng json.data.result
//           dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) }); // Lấy số trang từ json.data.count
//         } else {
//           console.error('Expected json.data.result to be an array, but received:', json.data);
//         }
//       })
//       .catch((error) => console.error('Error fetching movie:', error));
//   };
  

//   // Hàm fetch danh mục tin tức
//   const fetchRatings = () => {
//     const ratingApiUrl = `http://localhost:8080/ratings`;
//     fetch(ratingApiUrl)
//       .then((response) => response.json())
//       .then((json) => dispatch({ type: 'SET_RATINGS', payload: json.data }))
//       .catch((error) => console.error('Error fetching ratings:', error));
//   };

//   // Hàm cập nhật các tham số truy vấn trên URL (query params)
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

//   // Khi URL thay đổi, phân tích query params và cập nhật state
//   useEffect(() => {
//     const params = new URLSearchParams(location.search || '');
//     const query = params.get('query') || '';
//     const filters = params.get('filters') ? params.get('filters').split(',') : [];
//     const currentPage = parseInt(params.get('page'), 10) || 1;

//     dispatch({ type: 'SET_QUERY', payload: query });
//     dispatch({ type: 'SET_FILTERS', payload: filters });
//     dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
//   }, [location.search]);

//   // Khi component render lần đầu, fetch dữ liệu
//   useEffect(() => {
//     fetchMovies();
//     fetchRatings();
//   }, [state.currentPage, state.query, state.filters]);

//   return (
//     <MovieContext.Provider value={{ state, dispatch, fetchMovies, updateQueryParams }}>
//       <Routes>
//         <Route path="*" element={children} />
//       </Routes>
//     </MovieContext.Provider>
//   );
// };


import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const MovieContext = createContext();

const pageSize = 5; // Số lượng phần tử trên mỗi trang

const initialState = {
  movies: [],
  ratings: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      if (Array.isArray(action.payload)) {
        action.payload.forEach((movie) => {
          // movie.movieReleaseDate = movie.movieReleaseDate.split("T")[0].split("-").reverse().join("/");
          // movie.movieReleaseDate = new Date(movie.movieReleaseDate).toISOString().split('T')[0];
          movie.movieReleaseDate = movie.movieReleaseDate.split("T")[0];
        });
      } else {
        console.error('Expected payload to be an array, but received:', action.payload);
      }
      return { ...state, movies: Array.isArray(action.payload) ? action.payload : [] };
    case 'SET_RATINGS':
      return { ...state, ratings: action.payload };
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
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  const buildApiUrl = () => {
    const params = new URLSearchParams({
      search: state.query || '',
      page: state.currentPage || 1,
      pageSize: pageSize,
      filters: state.filters.join(','),
      sortBy: 'movieReleaseDate',
      sortDirection: 'DESC',
    });
    return `http://localhost:8080/movies?${params.toString()}`;
  };

  const fetchMovies = () => {
    const apiUrl = buildApiUrl();
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        if (json && json.data && Array.isArray(json.data.result)) {
          dispatch({ type: 'SET_MOVIES', payload: json.data.result });
          dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
        } else {
          console.error('Expected json.data.result to be an array, but received:', json.data);
        }
      })
      .catch((error) => console.error('Error fetching movie:', error));
  };

  const fetchRatings = () => {
    const ratingApiUrl = `http://localhost:8080/ratings`;
    fetch(ratingApiUrl)
      .then((response) => response.json())
      .then((json) => dispatch({ type: 'SET_RATINGS', payload: json.data }))
      .catch((error) => console.error('Error fetching ratings:', error));
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
    fetchMovies();
    fetchRatings();
  }, [state.currentPage, state.query, state.filters]);

  return (
    <MovieContext.Provider value={{ state, dispatch, fetchMovies, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </MovieContext.Provider>
  );
};