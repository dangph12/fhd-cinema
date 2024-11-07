import React, { createContext, useReducer, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const SaleContext = createContext()

const pageSize = 10

const initialState = {
  bookings: [],
  cinemas: [],
  filters: {
    cinemaId: '',
    movieId: '',
    bookingId: '',
    customerPhone: '',
    customerEmail: '',
    startDate: '',
    endDate: '',
    sortBy: 'bookingCreateAt',
    sortDirection: 'DESC',
  },
  currentPage: 1,
  totalPages: 1,
  totalPrice: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKINGS':
      return { ...state, bookings: action.payload }
    case 'SET_CINEMAS':
      return { ...state, cinemas: action.payload }
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } }
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload }
    case 'SET_TOTAL_PAGES':
      return { ...state, totalPages: action.payload }
    case 'SET_TOTAL_PRICE':
      return { ...state, totalPrice: action.payload }
    default:
      return state
  }
}

export const SaleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const location = useLocation()
  const navigate = useNavigate()

  const buildApiUrl = () => {
    const params = new URLSearchParams({
      cinemaId: state.filters.cinemaId || '',
      movieId: state.filters.movieId || '',
      bookingId: state.filters.bookingId || '',
      customerPhone: state.filters.customerPhone || '',
      customerEmail: state.filters.customerEmail || '',
      startDate: state.filters.startDate || '',
      endDate: state.filters.endDate || '',
      page: state.currentPage || 1,
      pageSize: pageSize,
      sortBy: state.filters.sortBy || '',
      sortDirection: state.filters.sortDirection || '',
    })
    return `http://localhost:8080/bookings/view?${params.toString()}`
  }

  const fetchBookings = async () => {
    const apiUrl = buildApiUrl()
    console.log(apiUrl)
    try {
      const response = await fetch(apiUrl)
      const contentType = response.headers.get('content-type')
      console.log(response)
      if (contentType && contentType.includes('application/json')) {
        const json = await response.json()
        if (json.status === 'success' && json.data) {
          dispatch({ type: 'SET_BOOKINGS', payload: json.data.result || [] })
          dispatch({ type: 'SET_TOTAL_PAGES', payload: Math.ceil((json.data.count || 0) / pageSize) })
          dispatch({ type: 'SET_TOTAL_PRICE', payload: json.data.totalPrice || 0 })
        } else {
          console.error('Unexpected API response:', json)
        }
      } else {
        console.error('Expected JSON response but received:', response)
      }
    } catch (error) {
      console.error('Error fetching bookings:', error)
    }
  }

  const fetchCinemas = async () => {
    try {
      const response = await fetch('http://localhost:8080/cinemas')
      const json = await response.json()
      if (json.status === 'success' && json.data) {
        dispatch({ type: 'SET_CINEMAS', payload: json.data })
      } else {
        console.error('Unexpected API response:', json)
      }
    } catch (error) {
      console.error('Error fetching cinemas:', error)
    }
  }

  useEffect(() => {
    fetchBookings()
  }, [state.currentPage, state.filters])

  useEffect(() => {
    fetchCinemas()
  }, [])

  return <SaleContext.Provider value={{ state, dispatch, fetchBookings }}>{children}</SaleContext.Provider>
}
