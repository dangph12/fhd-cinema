import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { MovieContext } from '../context/MovieContext'

function UpdateMovieModal({ movieId, show, fetchMovies, onHide }) {
  const { state } = useContext(MovieContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({})
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // setForm by movieId
  useEffect(() => {
    if (movieId) {
      const movie = state.movies.find((movie) => movie.movieId === movieId)
      setForm(movie)
    }
  }, [movieId])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.movieTitle) newErrors.movieTitle = 'Movie title is required'
    if (!form.movieStatus) newErrors.movieStatus = 'Movie status is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({})
    setValidated(false)
    setErrors({})
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      fetch(`http://localhost:8080/movies/${movieId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            fetchMovies()
          } else {
            console.error('Failed to update the movie')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      onHide()
      setForm({})
      setErrors({})
    }
    setValidated(true)
  }
  return (
    <Modal show={updateShow} onHide={() => closeUpdateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Update Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
          <Form.Group className="m-2">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('movieTitle', e.target.value)}
              placeholder="Movie Title"
              name="movieTitle"
              value={form.movieTitle}
              isInvalid={!!errors.movieTitle}
            />
            <Form.Control.Feedback type="invalid">{errors.movieTitle}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Movie Status</Form.Label>
            <Form.Select
              required
              name="movieStatus"
              onChange={(e) => setField('movieStatus', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.movieStatus}
              isInvalid={!!errors.movieStatus}>
              <option value="">Select movie status</option>
              <option value={"Now Showing"}>Now Showing</option>
              <option value={"Coming Soon"}>Coming Soon</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.movieStatus}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeUpdateShow()}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="updateForm">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateMovieModal
