// import React, { useState, useEffect, useContext } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'
// import { MovieContext } from '../context/MovieContext'

// function UpdateMovieModal({ movieId, show, fetchMovies, onHide }) {
//   const { state } = useContext(MovieContext)

//   const [updateShow, setUpdateShow] = useState(false)

//   const [form, setForm] = useState({})
//   const [validated, setValidated] = useState(false)
//   const [errors, setErrors] = useState({})

//   useEffect(() => {
//     setUpdateShow(show)
//   }, [show])

//   // setForm by movieId
//   useEffect(() => {
//     if (movieId) {
//       const movie = state.movies.find((movie) => movie.movieId === movieId)
//       setForm(movie)
//     }
//   }, [movieId])

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     })
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (!form.movieTitle) newErrors.movieTitle = 'Movie title is required'
//     if (!form.movieStatus) newErrors.movieStatus = 'Movie status is required'
//     return newErrors
//   }

//   const closeUpdateShow = () => {
//     onHide()
//     setUpdateShow(false)
//     setForm({})
//     setValidated(false)
//     setErrors({})
//   }

//   const handleUpdate = (e) => {
//     e.preventDefault()

//     const newErrors = validateForm()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       e.stopPropagation()
//     } else {
//       fetch(`http://localhost:8080/movies/${movieId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchMovies()
//           } else {
//             console.error('Failed to update the movie')
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error)
//         })
//       setUpdateShow(false)
//       onHide()
//       setForm({})
//       setErrors({})
//     }
//     setValidated(true)
//   }
//   return (
//     <Modal show={updateShow} onHide={() => closeUpdateShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Update Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
//           <Form.Group className="m-2">
//             <Form.Label>Movie Title</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               onChange={(e) => setField('movieTitle', e.target.value)}
//               placeholder="Movie Title"
//               name="movieTitle"
//               value={form.movieTitle}
//               isInvalid={!!errors.movieTitle}
//             />
//             <Form.Control.Feedback type="invalid">{errors.movieTitle}</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>Movie Status</Form.Label>
//             <Form.Select
//               required
//               name="movieStatus"
//               onChange={(e) => setField('movieStatus', e.target.value)}
//               className="bg-body text-dark border-secondary"
//               value={form.movieStatus}
//               isInvalid={!!errors.movieStatus}>
//               <option value="">Select movie status</option>
//               <option value={"Now Showing"}>Now Showing</option>
//               <option value={"Coming Soon"}>Coming Soon</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.movieStatus}</Form.Control.Feedback>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={() => closeUpdateShow()}>
//           Close
//         </Button>
//         <Button variant="primary" type="submit" form="updateForm">
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }

// export default UpdateMovieModal


import React, { useState, useEffect, useContext } from 'react';
import { Container, Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { MovieContext } from '../context/MovieContext';
import TextEditor from '../../common/TextEditor';

function UpdateMovieModal({ movieId, show, fetchMovies, onHide }) {
  const { state } = useContext(MovieContext);

  const [updateShow, setUpdateShow] = useState(false);
  const [form, setForm] = useState({
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
  });
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUpdateShow(show);
  }, [show]);

  // Populate form with the selected movie item details based on movieId
  useEffect(() => {
    if (movieId) {
      const movie = state.movies.find((movieItem) => movieItem.movieId === movieId);
      if (movie) {
        setForm({
          ratingId: movie.rating?.ratingId || '',
          movieTitle: movie.movieTitle,
          movieGenre: movie.movieGenre,
          movieDirector: movie.movieDirector,
          movieCast: movie.movieCast,
          movieStatus: movie.movieStatus,
          movieFormat: movie.movieFormat,
          movieDurationMinute: movie.movieDurationMinute,
          movieReleaseDate: movie.movieReleaseDate,
          movieTrailerUrl: movie.movieTrailerUrl,
          movieDescription: movie.movieDescription,
          movieLanguage: movie.movieLanguage,
          moviePosterUrl: movie.moviePosterUrl,
        });
      }
    }
  }, [movieId]);

  // Set individual form field values
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    if (!form.movieTitle) newErrors.movieTitle = 'Movie title is required';
    if (!form.movieStatus) newErrors.movieStatus = 'Movie status is required';
    if (!form.ratingId) newErrors.ratingId = 'Rating is required';
    return newErrors;
  };

  // Close the modal and reset the form
  const closeUpdateShow = () => {
    onHide();
    setUpdateShow(false);
    setForm({ ratingId: '', movieTitle: '', movirGenre: '', movieDirector: '', movieCast: '', movieStatus: '', movieFormat: '', movieDurationMinute: 0, movieReleaseDate: '', movieTrailerUrl: '', movieDescription: '', movieLanguage: '', moviePosterUrl: '' });
    setValidated(false);
    setErrors({});
  };

  // Handle form submission and update request
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Validate the form and check for errors
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      e.stopPropagation();
    } else {
      // Prepare the data for the update request
      const updateData = {
        ratingId: form.ratingId,
        movieId: movieId,
        movieTitle: form.movieTitle,
        movieGenre: form.movieGenre,
        movieDirector: form.movieDirector,
        movieCast: form.movieCast,
        movieStatus: form.movieStatus,
        movieFormat: form.movieFormat,
        movieDurationMinute: form.movieDurationMinute,
        movieReleaseDate: form.movieReleaseDate,
        movieTrailerUrl: form.movieTrailerUrl,
        movieDescription: form.movieDescription,
        movieLanguage: form.movieLanguage,
        moviePosterUrl: form.moviePosterUrl,
      };

      // Perform the PUT request to update the movie
      fetch(`http://localhost:8080/movies/${movieId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetchMovies();  // Refresh the movie list after update
          } else {
            console.error('Failed to update the movie');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // Close the modal and reset the form
      closeUpdateShow();
    }
    setValidated(true);
  };

  return (
    <Modal fullscreen={true} show={updateShow} onHide={() => closeUpdateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Update Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
          <Container>
            <Row>
              <Col>
                {/* Movie Rating */}
                <Form.Group className="m-2">
                  <Form.Label>Movie Rating</Form.Label>
                  <Form.Select
                    required
                    name="ratingId"
                    onChange={(e) => setField('ratingId', e.target.value)}
                    className="bg-body text-dark border-secondary"
                    value={form.ratingId}
                    isInvalid={!!errors.ratingId}
                  >
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
                {/* Movie Title */}
                <Form.Group className="m-2">
                  <Form.Label>Movie Title</Form.Label>
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
                {/* Movie genre */}
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
                {/* Movie director */}
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
                {/* Movie cast */}
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
                {/* Movie Status */}
                <Form.Group className="m-2">
                  <Form.Label>Movie Status</Form.Label>
                  <Form.Select
                    required
                    name="movieStatus"
                    onChange={(e) => setField('movieStatus', e.target.value)}
                    className="bg-body text-dark border-secondary"
                    value={form.movieStatus}
                    isInvalid={!!errors.movieStatus}
                  >
                    <option value="">Select movie status</option>
                    <option value="Now Showing">Now Showing</option>
                    <option value="Coming Soon">Coming Soon</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.movieStatus}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                {/* Movie Format */}
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
                {/* Movie Duration Minute */}
                <Form.Group className="m-2">
                  <Form.Label>Movie duration minute</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    onChange={(e) => setField('movieDurationMinute', e.target.value)}
                    placeholder="Movie duration minute"
                    name="movieDurationMinute"
                    value={form.movieDurationMinute}
                    isInvalid={!!errors.movieDurationMinute}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieDurationMinute}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                {/* Movie Release Date */}
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
                {/* Movie Trailer URL */}
                <Form.Group className="m-2">
                  <Form.Label>Movie trailer URL</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setField('movieTrailerUrl', e.target.value)}
                    placeholder="Movie trailer URL"
                    name="movieTrailerUrl"
                    value={form.movieTrailerUrl}
                    isInvalid={!!errors.movieTrailerUrl}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieTrailerUrl}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                {/* Movie Language */}
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
                {/* Movie Poster URL */}
                <Form.Group className="m-2">
                  <Form.Label>Movie poster URL</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setField('moviePosterUrl', e.target.value)}
                    placeholder="Movie poster URL"
                    name="moviePosterUrl"
                    value={form.moviePosterUrl}
                    isInvalid={!!errors.moviePosterUrl}
                  />
                  <Form.Control.Feedback type="invalid">{errors.moviePosterUrl}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                {/* Movie Description */}
                <Form.Group className="m-2">
                  <Form.Label>Movie description</Form.Label>
                  {/* <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    onChange={(e) => setField('movieDescription', e.target.value)}
                    placeholder="Movie description"
                    name="movieDescription"
                    value={form.movieDescription}
                    isInvalid={!!errors.movieDescription}
                  /> */}
                  <TextEditor
                    object="movie"
                    description={form.movieDescription}
                    field="movieDescription"
                    setField={setField}
                  />
                  <Form.Control.Feedback type="invalid">{errors.movieDescription}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </Container>
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
  );
}

export default UpdateMovieModal;