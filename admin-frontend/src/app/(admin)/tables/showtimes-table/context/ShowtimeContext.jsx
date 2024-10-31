import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const ShowtimeContext = createContext();

const pageSize = 10; // Số lượng phần tử trên mỗi trang

const initialState = {
  showtimes: [],
  movies: [],
  screens: [],
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
    case 'SET_SHOWTIMES':
      if (Array.isArray(action.payload)) {
        action.payload.forEach((showtime) => {
          // showtime.showtimeAt = new Date(showtime.showtimeAt).toISOString().split('T')[0];
          // showtime.showtimeAt = showtime.showtimeAt.split('T')[0].split('-').reverse().join('/')
          showtime.showtimeAt = convertTime(showtime.showtimeAt);
        });
      } else {
        console.error('Expected payload to be an array, but received:', action.payload);
      }
      return { ...state, showtimes: Array.isArray(action.payload) ? action.payload : [] };
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
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
export const ShowtimeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  const buildApiUrl = () => {
    const params = new URLSearchParams({
      movieTitle: state.query || '',
      page: state.currentPage || 1,
      pageSize: pageSize,
      filters: state.filters.join(','),
      sortBy: 'showtimePrice',
      sortDirection: 'DESC',
    });
    return `http://localhost:8080/showtimes?${params.toString()}`;
  };

  // Update showtime with movie
  const updateShowtimesWithMovie = (showtimes) => {
    const showtimesWithMovie = Promise.all(showtimes.map(async (showtime) => {
      try {
        const response = await fetch(`http://localhost:8080/movies/${showtime.movieId}`);
        const json = await response.json();
        delete showtime.movieId;
        return { ...showtime, movie: json.data };
      } catch (error) {
        console.error('Error fetching movie:', error);
        return { ...showtime, movie: null };
      }
    }));
    return showtimesWithMovie;
  }

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:8080/movies');
      const json = await response.json();
      if (json && json.data) {
        dispatch({ type: 'SET_MOVIES', payload: json.data }); // Cập nhật movies vào state
      } else {
        console.error('Expected json.data to be an array, but received:', json);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
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

  const fetchShowtimes = async () => {
    const apiUrl = buildApiUrl();
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      if (json && json.data.result && Array.isArray(json.data.result)) {
        const showtimesWithMovie = await updateShowtimesWithMovie(json.data.result);
        dispatch({ type: 'SET_SHOWTIMES', payload: showtimesWithMovie });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      } else {
        console.error('Expected json.data to be an array, but received:', json.data.result);
      }
    } catch (error) {
      console.error('Error fetching showtimes:', error);
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
    fetchShowtimes();
    fetchMovies();
    fetchScreens();
  }, [state.currentPage, state.query, state.filters]);

  return (
    <ShowtimeContext.Provider value={{ state, dispatch, fetchShowtimes, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </ShowtimeContext.Provider>
  );
};