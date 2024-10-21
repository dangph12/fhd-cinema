import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

function CreateShowtimeModal({ show, fetchShowtimes, onHide }) {
  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({ showtimeName: '', showtimeType: '' })
  const [movies, setMovies] = useState([])
  const [screens, setScreens] = useState([])
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    fetch('http://localhost:8080/screens')
      .then((response) => response.json())
      .then((json) => {
        setScreens(json.data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  const closeCreateShow = () => {
    onHide()
    setCreateShow(false)
    setForm({ showtimeName: '', showtimePassword: '', showtimeType: '' })
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.showtimeName) newErrors.showtimeName = 'Showtime name is required'
    if (!form.showtimeType) newErrors.showtimeType = 'Showtime type is required'
    return newErrors
  }

  const handleCreate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      fetch('http://localhost:8080/showtimes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            fetchShowtimes()
          } else {
            console.error('Failed to create the showtime')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setCreateShow(false)
      onHide()
      setForm({ showtimeName: '', showtimePassword: '', showtimeType: '' })
      setErrors({})
    }
    setValidated(true)
  }
  return (
    <Modal show={createShow} onHide={() => closeCreateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Create Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
          <Form.Group controlId="formMovie">
            <Form.Label>Movie</Form.Label>
            <Form.Select
              value={form.movieId || ''}
              onChange={(e) => setField('movieId', e.target.value)}
              isInvalid={!!errors.movieId}
              className="bg-body text-dark border-secondary"
            >
              <option value="">Choose...</option>
              {movies.map((movie) => (
                <option key={movie.id} value={movie.id}>
                  {movie.movieTitle}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.movieId}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formScreen">
            <Form.Label>Screen</Form.Label>
            <Form.Select
              value={form.screenId || ''}
              onChange={(e) => setField('screenId', e.target.value)}
              isInvalid={!!errors.screenId}
              className="bg-body text-dark border-secondary"
            >
              <option value="">Choose...</option>
              {screens.map((screen) => (
                <option key={screen.id} value={screen.id}>
                  {screen.screenName} - {screen.cinema.cinemaName} - {screen.cinema.location.locationName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.screenId}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formShowtimeName">
            <Form.Label>Showtime Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter showtime name"
              value={form.showtimeName}
              onChange={(e) => setField('showtimeName', e.target.value)}
              isInvalid={!!errors.showtimeName}
              className="bg-body text-dark border-secondary"
            />
            <Form.Control.Feedback type="invalid">
              {errors.showtimeName}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeCreateShow()}>
          Close
        </Button>
        <Button type="submit" variant="primary" form="createForm">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateShowtimeModal
