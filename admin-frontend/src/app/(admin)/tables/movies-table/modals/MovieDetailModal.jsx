import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { MovieContext } from '../context/MovieContext'

function MovieDetailModal({ movieId, show, onHide }) {
  const { state } = useContext(MovieContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (movieId) {
      const movie = state.movies.find((movie) => movie.movieId === movieId)
      setSelectedMovie(movie)
    }
  }, [movieId])

  const closeDetailShow = () => {
    onHide()
    setUpdateShow(false)
    setSelectedMovie({})
  }

  return (
    <Modal show={detailShow} onHide={() => closeDetailShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Detail Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="detailForm">
          <Form.Group className="m-2">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              readOnly
              type="text"
              onChange={(e) => setField('movieTitle', e.target.value)}
              placeholder="Movie Title"
              name="movieTitle"
              value={selectedMovie.movieTitle}
            />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Movie Status</Form.Label>
            <Form.Control
              type="text"
              readOnly
              name="movieStatus"
              onChange={(e) => setField('movieStatus', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={selectedMovie.movieStatus}></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default MovieDetailModal
