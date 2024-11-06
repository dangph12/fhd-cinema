import React, { useContext, useState } from 'react'
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap'
import AsyncSelect from 'react-select/async'
import { SaleContext } from '../context/SaleContext'

const SearchBar = () => {
  const { state, dispatch, fetchBookings } = useContext(SaleContext)
  const [inputValue, setInputValue] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)

  // Hàm cập nhật các trường khác
  const handleInputChange = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'SET_FILTERS', payload: { [name]: value } })
  }

  // Xóa dữ liệu cũ và lấy dữ liệu mới khi thay đổi Movie
  const handleSelectMovie = (selectedOption) => {
    setSelectedMovie(selectedOption || '')
    dispatch({ type: 'SET_BOOKINGS', payload: [] }) // Xóa kết quả cũ
    if (selectedOption) {
      dispatch({ type: 'SET_FILTERS', payload: { movieId: selectedOption ? selectedOption.value : '' } })
      console.log(selectedOption.value)
    }
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 }) // Reset trang về 1
  }

  // Xóa dữ liệu cũ và lấy dữ liệu mới khi thay đổi Cinema
  const handleSelectCinema = (e) => {
    const selectedCinemaId = e.target.value
    dispatch({ type: 'SET_BOOKINGS', payload: [] }) // Xóa kết quả cũ
    dispatch({ type: 'SET_FILTERS', payload: { cinemaId: selectedCinemaId } })
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 }) // Reset trang về 1
  }

  const loadMovies = async (inputValue) => {
    try {
      const response = await fetch(`http://localhost:8080/movies?search=${inputValue}&pageSize=10`)
      const json = await response.json()

      if (json.data && Array.isArray(json.data.result)) {
        const options = json.data.result.map((movie) => ({
          label: movie.movieTitle,
          value: movie.movieId,
        }))
        return [{ label: 'All Movies', value: '' }, ...options]
      } else {
        console.warn('Unexpected data format:', json)
        return [{ label: 'All Movies', value: '' }]
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
      return [{ label: 'All Movies', value: '' }]
    }
  }

  return (
    <Container className="pt-3">
      <Row>
        <Col md={4}>
          <AsyncSelect
            cacheOptions
            loadOptions={loadMovies}
            onChange={handleSelectMovie}
            onInputChange={setInputValue}
            value={selectedMovie}
            placeholder="Search by movie title"
            isClearable
          />
        </Col>
        <Col md={4}>
          <FormControl
            type="date"
            name="startDate"
            placeholder="Start Date"
            onChange={(e) => {
              handleInputChange(e)
              fetchBookings()
            }}
          />
        </Col>
        <Col md={4}>
          <FormControl
            type="date"
            name="endDate"
            placeholder="End Date"
            onChange={(e) => {
              handleInputChange(e)
              fetchBookings()
            }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <Form.Select name="cinemaId" onChange={handleSelectCinema} value={state.filters.cinemaId || ''}>
            <option value="">All Cinemas</option>
            {state.cinemas.map((cinema) => (
              <option key={cinema.cinemaId} value={cinema.cinemaId}>
                {cinema.cinemaName}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <FormControl
            placeholder="Enter booking ID"
            name="bookingId"
            onChange={(e) => {
              handleInputChange(e)
              fetchBookings()
            }}
          />
        </Col>
        <Col md={4}>
          <FormControl
            placeholder="Customer Phone"
            name="customerPhone"
            onChange={(e) => {
              handleInputChange(e)
              fetchBookings()
            }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <FormControl
            placeholder="Customer Email"
            name="customerEmail"
            onChange={(e) => {
              handleInputChange(e)
              fetchBookings()
            }}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar
