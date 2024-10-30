import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

function ChooseShowtime({ errors, form, setField, setSelectedScreenId }) {
  const [movies, setMovies] = useState([])
  const [selectedMovieId, setSelectedMovieId] = useState('')
  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then((response) => response.json())
      .then((json) => {
        json.data = json.data.filter((movie) => movie.movieStatus === 'Now Showing')
        setMovies(json.data)
      })
  }, [])

  const [showtimes, setShowtimes] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8080/showtimes`)
      .then((response) => response.json())
      .then((json) => {
        json.data = json.data.filter((showtime) => showtime.movieId === selectedMovieId)
        json.data.forEach((showtime) => {
          showtime.showtimeAt = new Date(showtime.showtimeAt).toLocaleString()
        })
        setShowtimes(json.data)
      })
  }, [selectedMovieId])

  const handleChange = (e) => {
    setField('showtimeId', e.target.value)
    const showtime = showtimes.find((showtime) => showtime.showtimeId === e.target.value)
    setSelectedScreenId(showtime.screen.screenId)
  }

  return (
    <>
      <Form.Group className="m-2">
        <Form.Label>Movie</Form.Label>
        <Form.Select
          required
          name="movieId"
          onChange={(e) => setSelectedMovieId(e.target.value)}
          className="bg-body text-dark border-secondary"
          value={selectedMovieId}
          style={{ maxHeight: '150px', overflowY: 'auto' }}>
          <option key="default" value="">
            Select movie
          </option>
          {movies.map((movie, index) => (
            <option key={index} value={movie.movieId}>
              {movie.movieTitle}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-2">
        <Form.Label>Showtime</Form.Label>
        <Form.Select
          required
          name="showtimeId"
          onChange={(e) => handleChange(e)}
          className="bg-body text-dark border-secondary"
          value={form.showtimeId}
          isInvalid={!!errors.showtimeId}
          style={{ maxHeight: '150px', overflowY: 'auto' }}>
          <option key="default" value="">
            Select showtime
          </option>
          {showtimes.map((showtime, index) => (
            <option key={index} value={showtime.showtimeId}>
              {showtime.showtimeAt} - {showtime.screen.screenName} - {showtime.screen.cinema.cinemaName} -{' '}
              {showtime.screen.cinema.location.locationName}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">{errors.showtimeId}</Form.Control.Feedback>
      </Form.Group>
    </>
  )
}

export default ChooseShowtime
