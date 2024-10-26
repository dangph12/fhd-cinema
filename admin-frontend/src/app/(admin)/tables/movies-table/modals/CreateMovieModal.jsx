import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap'
import { MovieContext } from '../context/MovieContext'
import TextEditor from '../../common/TextEditor'
import uploadToS3 from '../../common/UploadToS3'

function CreateMovieModal({ show, onHide }) {
  const { state, fetchMovies } = useContext(MovieContext)

  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({
    ratingId: '',
    movieTitle: '',
    movieGenre: '',
    movieDirector: '',
    movieCast: '',
    movieStatus: '',
    movieFormat: '',
    movieDurationMinute: '',
    movieReleaseDate: '',
    movieTrailerUrl: '',
    movieDescription: '',
    movieLanguage: '',
    moviePosterUrl: '',
  })

  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})
  const [posterFile, setPosterFile] = useState(null)

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  const closeCreateShow = () => {
    onHide()
    setCreateShow(false)
    setForm({
      ratingId: '',
      movieTitle: '',
      movieGenre: '',
      movieDirector: '',
      movieCast: '',
      movieStatus: '',
      movieFormat: '',
      movieDurationMinute: 0,
      movieReleaseDate: '',
      movieTrailerUrl: '',
      movieDescription: '',
      movieLanguage: '',
      moviePosterUrl: '',
    })
    setValidated(false)
    setErrors({})
    setPosterFile(null)
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.ratingId) newErrors.ratingId = 'Movie rating is required'
    if (!form.movieTitle) newErrors.movieTitle = 'Movie title is required'
    if (!form.movieGenre) newErrors.movieGenre = 'Movie genre is required'
    if (!form.movieDirector) newErrors.movieDirector = 'Movie director is required'
    if (!form.movieCast) newErrors.movieCast = 'Movie cast is required'
    if (!form.movieStatus) newErrors.movieStatus = 'Movie status is required'
    if (!form.movieFormat) newErrors.movieFormat = 'Movie format is required'
    if (!form.movieDurationMinute) newErrors.movieDurationMinute = 'Movie duration is required'
    if (!form.movieReleaseDate) newErrors.movieReleaseDate = 'Movie release date is required'
    if (!form.movieTrailerUrl) newErrors.movieTrailerUrl = 'Movie trailer URL is required'
    if (!form.movieDescription) newErrors.movieDescription = 'Movie description is required'
    if (!form.movieLanguage) newErrors.movieLanguage = 'Movie language is required'
    if (!posterFile) newErrors.moviePosterUrl = 'Movie poster is required'
    return newErrors
  }

  const createMovie = async () => {
    const posterUrl = await uploadToS3('movies', posterFile)

    const createdMovie = { ...form, moviePosterUrl: posterUrl }
    setForm(createdMovie)

    fetch('http://localhost:8080/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createdMovie),
    })
      .then((response) => {
        if (response.ok) {
          fetchMovies()
        } else {
          console.error('Failed to create the movie')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const handleCreate = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      await createMovie()
      closeCreateShow()
    }
  }

  return (
    <Modal fullscreen={true} show={createShow} onHide={() => closeCreateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Create Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
          <Container>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie rating</Form.Label>
                  <Form.Select
                    required
                    name="ratingId"
                    onChange={(e) => setField('ratingId', e.target.value)}
                    className="bg-body text-dark border-secondary"
                    value={form.ratingId}
                    isInvalid={!!errors.ratingId}>
                    <option value="">Select movie rating</option>
                    {state.ratings.map((rating) => (
                      <option key={rating.ratingId} value={rating.ratingId}>
                        {rating.ratingName}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.ratingId}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setField('movieTitle', e.target.value)}
                    placeholder="Movie title"
                    name="movieTitle"
                    value={form.movieTitle}
                    isInvalid={!!errors.movieTitle}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieTitle}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie genre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setField('movieGenre', e.target.value)}
                    placeholder="Movie genre"
                    name="movieGenre"
                    value={form.movieGenre}
                    isInvalid={!!errors.movieGenre}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieGenre}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie director</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setField('movieDirector', e.target.value)}
                    placeholder="Movie director"
                    name="movieDirector"
                    value={form.movieDirector}
                    isInvalid={!!errors.movieDirector}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieDirector}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie cast</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setField('movieCast', e.target.value)}
                    placeholder="Movie cast"
                    name="movieCast"
                    value={form.movieCast}
                    isInvalid={!!errors.movieCast}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieCast}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie status</Form.Label>
                  <Form.Select
                    required
                    name="movieStatus"
                    onChange={(e) => setField('movieStatus', e.target.value)}
                    className="bg-body text-dark border-secondary"
                    value={form.movieStatus}
                    isInvalid={!!errors.movieStatus}>
                    <option value="">Select movie status</option>
                    <option value={'Now Showing'}>Now Showing</option>
                    <option value={'Coming Soon'}>Coming Soon</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.movieStatus}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie format</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setField('movieFormat', e.target.value)}
                    placeholder="Movie format"
                    name="movieFormat"
                    value={form.movieFormat}
                    isInvalid={!!errors.movieFormat}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieFormat}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie duration minute</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setField('movieDurationMinute', Number(e.target.value))}
                    placeholder="Movie duration minute"
                    name="movieDurationMinute"
                    value={form.movieDurationMinute}
                    isInvalid={!!errors.movieDurationMinute}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieDurationMinute}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie release date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    onChange={(e) => setField('movieReleaseDate', e.target.value)}
                    placeholder="Movie release date"
                    name="movieReleaseDate"
                    value={form.movieReleaseDate}
                    isInvalid={!!errors.movieReleaseDate}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieReleaseDate}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie trailer</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setField('movieTrailerUrl', e.target.value)}
                    placeholder="Movie trailer"
                    name="movieTrailerUrl"
                    value={form.movieTrailerUrl}
                    isInvalid={!!errors.movieTrailerUrl}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieTrailerUrl}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie language</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setField('movieLanguage', e.target.value)}
                    placeholder="Movie language"
                    name="movieLanguage"
                    value={form.movieLanguage}
                    isInvalid={!!errors.movieLanguage}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieLanguage}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Poster</Form.Label>
                  <Form.Control type="file" accept="image/*" onChange={(e) => setPosterFile(e.target.files[0])} isInvalid={!!errors.moviePosterUrl} />
                  <Form.Control.Feedback type="invalid">{errors.moviePosterUrl}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="m-2">
                <Form.Label>Movie description</Form.Label>
                <TextEditor object="movies" field="movieDescription" description={form.movieDescription} setField={setField} />
              </Form.Group>
            </Row>
          </Container>
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

export default CreateMovieModal