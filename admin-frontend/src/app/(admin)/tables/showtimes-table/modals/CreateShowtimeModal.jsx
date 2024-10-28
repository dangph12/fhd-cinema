// import React, { useState, useEffect } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'

// function CreateShowtimeModal({ show, fetchShowtimes, onHide }) {
//   const [createShow, setCreateShow] = useState(false)

//   useEffect(() => {
//     setCreateShow(show)
//   }, [show])

//   const [form, setForm] = useState({ movieId: '', screenId: '', showtimePrice: '', showtimeAt: '' })
//   const [movies, setMovies] = useState([])
//   const [screens, setScreens] = useState([])
//   const [validated, setValidated] = useState(false)
//   const [errors, setErrors] = useState({})

//   useEffect(() => {
//     fetch('http://localhost:8080/movies')
//       .then((response) => response.json())
//       .then((json) => {
//         setMovies(json.data)
//       })
//       .catch((error) => {
//         console.error('Error:', error)
//       })
//     fetch('http://localhost:8080/screens')
//       .then((response) => response.json())
//       .then((json) => {
//         setScreens(json.data)
//       })
//       .catch((error) => {
//         console.error('Error:', error)
//       })
//   }, [])

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     })
//   }

//   const closeCreateShow = () => {
//     onHide()
//     setCreateShow(false)
//     setForm({ movieId: '', screenId: '', showtimePrice: '', showtimeAt: '' })
//     setValidated(false)
//     setErrors({})
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (!form.movieId) newErrors.movieId = 'Movie id is required'
//     if (!form.screenId) newErrors.screenId = 'Showtime type is required'
//     if (!form.showtimePrice) newErrors.showtimePrice = 'Showtime price is required'
//     if (!form.showtimeAt) newErrors.showtimeAt = 'Showtime at is required'
//     return newErrors
//   }

//   const handleCreate = (e) => {
//     e.preventDefault()

//     const newErrors = validateForm()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       e.stopPropagation()
//     } else {
//       fetch('http://localhost:8080/showtimes', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchShowtimes()
//           } else {
//             console.error('Failed to create the showtime')
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error)
//         })
//       setCreateShow(false)
//       onHide()
//       setForm({ movieId: '', screenId: '', showtimePrice: '', showtimeAt: '' })
//       setErrors({})
//     }
//     setValidated(true)
//   }
//   return (
//     <Modal show={createShow} onHide={() => closeCreateShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Create Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
//           <Form.Group controlId="formMovie">
//             <Form.Label>Movie</Form.Label>
//             <Form.Select
//               value={form.movieId || ''}
//               onChange={(e) => setField('movieId', e.target.value)}
//               isInvalid={!!errors.movieId}
//               className="bg-body text-dark border-secondary"
//             >
//               <option value="">Choose...</option>
//               {movies.map((movie) => (
//                 <option key={movie.id} value={movie.id}>
//                   {movie.movieTitle}
//                 </option>
//               ))}
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">
//               {errors.movieId}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formScreen">
//             <Form.Label>Screen</Form.Label>
//             <Form.Select
//               value={form.screenId || ''}
//               onChange={(e) => setField('screenId', e.target.value)}
//               isInvalid={!!errors.screenId}
//               className="bg-body text-dark border-secondary"
//             >
//               <option value="">Choose...</option>
//               {screens.map((screen) => (
//                 <option key={screen.id} value={screen.id}>
//                   {screen.screenName} - {screen.cinema.cinemaName} - {screen.cinema.location.locationName}
//                 </option>
//               ))}
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">
//               {errors.screenId}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formShowtimePrice">
//             <Form.Label>Showtime Price</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter showtime price"
//               value={form.showtimePrice}
//               onChange={(e) => setField('showtimePrice', e.target.value)}
//               isInvalid={!!errors.showtimePrice}
//               className="bg-body text-dark border-secondary"
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.showtimePrice}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formShowtimeAt">
//             <Form.Label>Showtime At</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter showtime at"
//               value={form.showtimeAt}
//               onChange={(e) => setField('showtimeAt', e.target.value)}
//               isInvalid={!!errors.showtimeAt}
//               className="bg-body text-dark border-secondary"
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.showtimeAt}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={() => closeCreateShow()}>
//           Close
//         </Button>
//         <Button type="submit" variant="primary" form="createForm">
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }

// export default CreateShowtimeModal


import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap'
import { ShowtimeContext } from '../context/ShowtimeContext'

function CreateShowtimeModal({ show, onHide }) {
  const { state, fetchShowtimes } = useContext(ShowtimeContext)

  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({
    movieId: '',
    screenId: '',
    showtimePrice: 0,
    showtimeAt: '',
  })

  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

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
      movieId: '',
      screenId: '',
      showtimePrice: 0,
      showtimeAt: '',
    })
    setValidated(false)
    setErrors({})
    setPosterFile(null)
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.movieId) newErrors.movieId = 'Movie is required'
    if (!form.screenId) newErrors.screenId = 'Screen is required'
    if (!form.showtimePrice) newErrors.showtimePrice = 'Showtime price is required'
    if (!form.showtimeAt) newErrors.showtimeAt = 'Showtime at is required'
    return newErrors
  }

  const createShowtime = async () => {
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
  }

  const handleCreate = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      await createShowtime()
      closeCreateShow()
    }
  }

  return (
    <Modal show={createShow} onHide={() => closeCreateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Create Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
          <Form.Group className="m-2">
            <Form.Label>Movie</Form.Label>
            <Form.Select
              required
              name="movieId"
              onChange={(e) => setField('movieId', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.movieId}
              isInvalid={!!errors.movieId}>
              <option value="">Select movie</option>
              {state.movies.map((movie) => (
                <option key={movie.movieId} value={movie.movieId}>
                  {movie.movieTitle}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.movieId}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Screen</Form.Label>
            <Form.Select
              required
              name="screenId"
              onChange={(e) => setField('screenId', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.screenId}
              isInvalid={!!errors.screenId}>
              <option value="">Select screen</option>
              {state.screens.map((screen) => (
                <option key={screen.screenId} value={screen.screenId}>
                  {screen.screenName} - {screen.cinema.cinemaName} - {screen.cinema.location.locationName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.screenId}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Showtime Price</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('showtimePrice', e.target.value)}
              placeholder="Showtime price"
              name="showtimePrice"
              value={form.showtimePrice}
              isInvalid={!!errors.showtimePrice}
            />
            <Form.Control.Feedback type="invalid">{errors.showtimePrice}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Showtime At</Form.Label>
            <Form.Control
              required
              type="datetime-local"
              onChange={(e) => setField('showtimeAt', e.target.value)}
              placeholder="Showtime at"
              name="showtimeAt"
              value={form.showtimeAt}
              isInvalid={!!errors.showtimeAt}
            />
            <Form.Control.Feedback type="invalid">{errors.showtimeAt}</Form.Control.Feedback>
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