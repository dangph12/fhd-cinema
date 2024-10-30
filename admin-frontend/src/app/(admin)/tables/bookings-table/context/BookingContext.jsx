import React, { createContext, useReducer, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export const BookingContext = createContext();

const pageSize = 3;

const initialState = {
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
    case 'SET_BOOKINGS':
      // make showtime.showtimeAt readable
      action.payload.forEach((booking) => {
        // booking.showtime.showtimeAt = new Date(booking.showtime.showtimeAt).toLocaleString();
        // booking.bookingCreateAt = new Date(booking.bookingCreateAt).toLocaleString();
        booking.showtime.showtimeAt = convertTime(booking.showtime.showtimeAt);
        booking.bookingCreateAt = convertTime(booking.bookingCreateAt);
      });
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

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const navigate = useNavigate();

  const buildApiUrl = () => {
    const params = new URLSearchParams({
      search: '',
      bookingId: state.query || '',
      page: state.currentPage || 1,
      pageSize: pageSize,
      filters: state.filters.join(','),
    });
    return `http://localhost:8080/bookings?${params.toString()}`;
  };

  const bookingApiUrl = buildApiUrl();

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
    fetchBookings();
  }, [state.currentPage, state.query, state.filters]);

  const fetchMoviesForBookings = async (bookings) => {
    const updatedBookings = await Promise.all(
      bookings.map(async (booking) => {
        const movieResponse = await fetch(`http://localhost:8080/movies/${booking.showtime.movieId}`);
        const movieData = await movieResponse.json();
        const movie = movieData.data;
        return { ...booking, movie };
      })
    );
    return updatedBookings;
  };

  const fetchBookings = () => {
    fetch(bookingApiUrl)
      .then((response) => response.json())
      .then(async (json) => {
        const bookingsWithMovies = await fetchMoviesForBookings(json.data.result);
        dispatch({ type: 'SET_BOOKINGS', payload: bookingsWithMovies });
        dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil(json.data.count / pageSize) });
      })
      .catch((error) => console.error('Error fetching bookings:', error));
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
    <BookingContext.Provider value={{ state, dispatch, fetchBookings, updateQueryParams }}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </BookingContext.Provider>
  );
};