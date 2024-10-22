// import React, { createContext, useReducer, useEffect } from 'react';
// import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// export const NewsContext = createContext();

// const pageSize = 2;

// const initialState = {
//   news: [],
//   newsCategories: [],
//   query: '',
//   filters: [],
//   currentPage: 1,
//   totalPages: 1,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_NEWS':
//       // make newsCreateAt to be readable
//       action.payload.forEach((news) => {
//         news.newsCreateAt = new Date(news.newsCreateAt).toLocaleDateString();
//       });
//       return { ...state, news: action.payload };
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

// export const NewsProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // const newsApiUrl = `http://localhost:8080/news?search=${state.query}&page=${state.currentPage}&filters=${state.filters.join(',')}`;
//   // useEffect(() => {
//   //   fetchNews();
//   // }, [state.currentPage, state.query, state.filters]);

//   // for debug
//   const newsApiUrl = `http://localhost:8080/news`;
//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const newsCategoriesApiUrl = `http://localhost:8080/newscategories`;
//   useEffect(() => {
//     fetch(newsCategoriesApiUrl)
//       .then((response) => response.json())
//       .then((json) => dispatch({ type: 'SET_NEWS_CATEGORIES', payload: json.data }))
//       .catch((error) => console.error('Error fetching news categories:', error));
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

//   const fetchNews = () => {
//     fetch(newsApiUrl)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: 'SET_NEWS', payload: json.data });
//         dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
//       })
//       .catch((error) => console.error('Error fetching news:', error));
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
//     <NewsContext.Provider value={{ state, dispatch, fetchNews, updateQueryParams }}>
//       <Routes>
//         <Route path="*" element={children} />
//       </Routes>
//     </NewsContext.Provider>
//   );
// };

// import React, { createContext, useReducer, useEffect } from 'react';
// import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// // Tạo context cho News
// export const NewsContext = createContext();

// const pageSize = 3; // Số lượng phần tử trên mỗi trang

// // Trạng thái ban đầu của NewsContext
// const initialState = {
//   news: [],
//   newsCategories: [],
//   query: '',
//   filters: [],
//   currentPage: 1,
//   totalPages: 1,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_NEWS':
//       // Kiểm tra nếu action.payload là một mảng
//       if (Array.isArray(action.payload)) {
//         action.payload.forEach((news) => {
//           news.newsCreateAt = new Date(news.newsCreateAt).toLocaleDateString();
//         });
//       } else {
//         console.error('Expected payload to be an array, but received:', action.payload);
//       }
//       return { ...state, news: Array.isArray(action.payload) ? action.payload : [] };

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
// export const NewsProvider = ({ children }) => {
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
//       sortBy: 'newsCreateAt', // Trường sắp xếp
//       sortDirection: 'DESC', // Hướng sắp xếp
//     });

//     return `http://localhost:8080/news?${params.toString()}`;
//   };

//   // Hàm fetch dữ liệu từ API
//   const fetchNews = () => {
//     const apiUrl = buildApiUrl(); // Xây dựng URL với các tham số
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((json) => {
//         // Kiểm tra nếu json.data là một mảng và có dữ liệu hợp lệ
//         if (json && json.data && Array.isArray(json.data)) {
//           dispatch({ type: 'SET_NEWS', payload: json.data });
//           dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
//         } else {
//           console.error('Expected json.data to be an array, but received:', json.data);
//         }
//       })
//       .catch((error) => console.error('Error fetching news:', error));
//   };
  
  

//   // Hàm fetch danh mục tin tức
//   const fetchNewsCategories = () => {
//     const newsCategoriesApiUrl = `http://localhost:8080/newscategories`;
//     fetch(newsCategoriesApiUrl)
//       .then((response) => response.json())
//       .then((json) => dispatch({ type: 'SET_NEWS_CATEGORIES', payload: json.data }))
//       .catch((error) => console.error('Error fetching news categories:', error));
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
//     fetchNews();
//     fetchNewsCategories();
//   }, [state.currentPage, state.query, state.filters]);

//   return (
//     <NewsContext.Provider value={{ state, dispatch, fetchNews, updateQueryParams }}>
//       <Routes>
//         <Route path="*" element={children} />
//       </Routes>
//     </NewsContext.Provider>
//   );
// };


import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

// Tạo context cho News
export const NewsContext = createContext();

const pageSize = 3; // Số lượng phần tử trên mỗi trang

// Trạng thái ban đầu của NewsContext
const initialState = {
  news: [],
  newsCategories: [],
  query: '',
  filters: [],
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      // Kiểm tra nếu action.payload là một mảng
      if (Array.isArray(action.payload)) {
        action.payload.forEach((news) => {
          news.newsCreateAt = new Date(news.newsCreateAt).toLocaleDateString();
        });
      } else {
        console.error('Expected payload to be an array, but received:', action.payload);
      }
      return { ...state, news: Array.isArray(action.payload) ? action.payload : [] };

    case 'SET_NEWS_CATEGORIES':
      return { ...state, newsCategories: action.payload };

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
export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  // Xây dựng URL API động dựa trên trạng thái hiện tại của bộ lọc và phân trang
  const buildApiUrl = () => {
    const params = new URLSearchParams({
      search: state.query || '', // Truy vấn tìm kiếm
      page: state.currentPage || 1, // Trang hiện tại
      pageSize: pageSize, // Số phần tử trên mỗi trang
      filters: state.filters.join(','), // Các bộ lọc
      sortBy: 'newsCreateAt', // Trường sắp xếp
      sortDirection: 'DESC', // Hướng sắp xếp
    });

    return `http://localhost:8080/news?${params.toString()}`;
  };

  // Hàm fetch dữ liệu từ API
  const fetchNews = () => {
    const apiUrl = buildApiUrl(); // Xây dựng URL với các tham số
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log('Fetched news data:', json); // In dữ liệu để kiểm tra
  
        // Kiểm tra nếu json.data.result là một mảng và có dữ liệu hợp lệ
        if (json && json.data && Array.isArray(json.data.result)) {
          dispatch({ type: 'SET_NEWS', payload: json.data.result }); // Sử dụng json.data.result
          dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) }); // Lấy số trang từ json.data.count
        } else {
          console.error('Expected json.data.result to be an array, but received:', json.data);
        }
      })
      .catch((error) => console.error('Error fetching news:', error));
  };
  

  // Hàm fetch danh mục tin tức
  const fetchNewsCategories = () => {
    const newsCategoriesApiUrl = `http://localhost:8080/newscategories`;
    fetch(newsCategoriesApiUrl)
      .then((response) => response.json())
      .then((json) => dispatch({ type: 'SET_NEWS_CATEGORIES', payload: json.data }))
      .catch((error) => console.error('Error fetching news categories:', error));
  };

  // Hàm cập nhật các tham số truy vấn trên URL (query params)
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

  // Khi URL thay đổi, phân tích query params và cập nhật state
  useEffect(() => {
    const params = new URLSearchParams(location.search || '');
    const query = params.get('query') || '';
    const filters = params.get('filters') ? params.get('filters').split(',') : [];
    const currentPage = parseInt(params.get('page'), 10) || 1;

    dispatch({ type: 'SET_QUERY', payload: query });
    dispatch({ type: 'SET_FILTERS', payload: filters });
    dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
  }, [location.search]);

  // Khi component render lần đầu, fetch dữ liệu
  useEffect(() => {
    fetchNews();
    fetchNewsCategories();
  }, [state.currentPage, state.query, state.filters]);

  return (
    <NewsContext.Provider value={{ state, dispatch, fetchNews, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </NewsContext.Provider>
  );
};
