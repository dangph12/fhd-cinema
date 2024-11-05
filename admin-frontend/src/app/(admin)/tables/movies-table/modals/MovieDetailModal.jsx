import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap'
import { MovieContext } from '../context/MovieContext'

function MovieDetailModal({ movieId, show, onHide }) {
  const { state } = useContext(MovieContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({
    ratingName: '',
    movieTitle: '',
    movieGenre: '',
    movieDirector: '',
    movieReleaseDate: '',
    movieTrailerUrl: '',
    movieDescription: '',
    movieLanguage: '',
    moviePosterUrl: '',
    movieCast: '',
    movieStatus: '',
    movieFormat: '',
    movieDurationMinute: 0,
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (movieId) {
      const movie = state.movies.find((movie) => movie.movieId === movieId)
      setSelectedMovie({
        ratingName: movie.rating.ratingName,
        movieTitle: movie.movieTitle,
        movieGenre: movie.movieGenre,
        movieDirector: movie.movieDirector,
        movieReleaseDate: movie.movieReleaseDate,
        movieTrailerUrl: movie.movieTrailerUrl,
        movieDescription: movie.movieDescription,
        movieLanguage: movie.movieLanguage,
        moviePosterUrl: movie.moviePosterUrl,
        movieCast: movie.movieCast,
        movieStatus: movie.movieStatus,
        movieFormat: movie.movieFormat,
        movieDurationMinute: movie.movieDurationMinute,
      })
    }
  }, [movieId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedMovie({
      ratingName: '',
      movieTitle: '',
      movieGenre: '',
      movieDirector: '',
      movieReleaseDate: '',
      movieTrailerUrl: '',
      movieDescription: '',
      movieLanguage: '',
      moviePosterUrl: '',
      movieCast: '',
      movieStatus: '',
      movieFormat: '',
      movieDurationMinute: 0,
    })
  }

  return (
    <Modal fullscreen={true} show={detailShow} onHide={() => closeDetailShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Detail Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="detailForm">
          <Container>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control readOnly type="text" value={selectedMovie.ratingName} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Title</Form.Label>
                  <Form.Control readOnly type="text" value={selectedMovie.movieTitle} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Genre</Form.Label>
                  <Form.Control type="text" readOnly name="movieGenre" className="bg-body text-dark border-secondary" value={selectedMovie.movieGenre} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Director</Form.Label>
                  <Form.Control type="text" readOnly name="movieDirector" className="bg-body text-dark border-secondary" value={selectedMovie.movieDirector} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Cast</Form.Label>
                  <Form.Control type="text" readOnly name="movieCast" className="bg-body text-dark border-secondary" value={selectedMovie.movieCast} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Status</Form.Label>
                  <Form.Control type="text" readOnly name="movieStatus" className="bg-body text-dark border-secondary" value={selectedMovie.movieStatus} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Format</Form.Label>
                  <Form.Control type="text" readOnly name="movieFormat" className="bg-body text-dark border-secondary" value={selectedMovie.movieFormat} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Duration Minute</Form.Label>
                  <Form.Control type="number" readOnly name="movieDurationMinute" className="bg-body text-dark border-secondary" value={selectedMovie.movieDurationMinute} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Release Date</Form.Label>
                  <Form.Control type="date" readOnly name="movieReleaseDate" className="bg-body text-dark border-secondary" value={selectedMovie.movieReleaseDate} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Trailer URL</Form.Label>
                  <Form.Control type="text" readOnly name="movieTrailerUrl" className="bg-body text-dark border-secondary" value={selectedMovie.movieTrailerUrl} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Language</Form.Label>
                  <Form.Control type="text" readOnly name="movieLanguage" className="bg-body text-dark border-secondary" value={selectedMovie.movieLanguage} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Poster URL</Form.Label>
                  <Form.Control type="text" readOnly name="moviePosterUrl" className="bg-body text-dark border-secondary" value={selectedMovie.moviePosterUrl} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Description</Form.Label>
                  <Form.Control as="textarea" rows={3} readOnly name="movieDescription" className="bg-body text-dark border-secondary" value={selectedMovie.movieDescription} />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default MovieDetailModal