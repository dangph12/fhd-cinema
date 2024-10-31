// import React, { useState, useEffect, useContext } from 'react';
// import { Modal, Form, Button } from 'react-bootstrap';
// import { ShowtimeContext } from '../context/ShowtimeContext';

// function UpdateShowtimeModal({ showtimeId, show, fetchShowtimes, onHide }) {
//   const { state } = useContext(ShowtimeContext);

//   const [updateShow, setUpdateShow] = useState(false);
//   const [form, setForm] = useState({
//     movieId: '',
//     screenId: '',
//     showtimePrice: 0,
//     showtimeAt: '',
//   });
//   const [validated, setValidated] = useState(false);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     setUpdateShow(show);
//   }, [show]);

//   // Populate form with the selected showtime item details based on showtimeId
//   useEffect(() => {
//     if (showtimeId) {
//       const showtime = state.showtimes.find((showtimeItem) => showtimeItem.showtimeId === showtimeId);
//       if (showtime) {
//         setForm({
//           movieId: showtime.movie?.movieId || '',
//           screenId: showtime.screen.screenId,
//           showtimePrice: showtime.showtimePrice,
//           showtimeAt: showtime.showtimeAt,
//         });
//       }
//     }
//   }, [showtimeId, state.showtimes]);

//   // Set individual form field values
//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     });
//   };

//   // Validate form before submission
//   const validateForm = () => {
//     const newErrors = {};
//     if (!form.movieId) newErrors.movieId = 'Movie is required';
//     if (!form.screenId) newErrors.screenId = 'Screen is required';
//     if (!form.showtimePrice) newErrors.showtimePrice = 'Showtime price is required';
//     if (!form.showtimeAt) newErrors.showtimeAt = 'Showtime at is required';
//     return newErrors;
//   };

//   // Close the modal and reset the form
//   const closeUpdateShow = () => {
//     onHide();
//     setUpdateShow(false);
//     setForm({ movieId: '', screenId: '', showtimePrice: 0, showtimeAt: '', });
//     setValidated(false);
//     setErrors({});
//   };

//   // Handle form submission and update request
//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     // Validate the form and check for errors
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       e.stopPropagation();
//     } else {
//       // Prepare the data for the update request
//       const updateData = {
//         movieId: form.movieId,
//         screenId: form.screenId,
//         showtimeId: showtimeId,
//         showtimePrice: form.showtimePrice,
//         showtimeAt: form.showtimeAt,
//       };

//       // Perform the PUT request to update the showtime
//       fetch(`http://localhost:8080/showtimes/${showtimeId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updateData),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchShowtimes();  // Refresh the showtime list after update
//           } else {
//             console.error('Failed to update the movie');
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });

//       // Close the modal and reset the form
//       closeUpdateShow();
//     }
//     setValidated(true);
//   };

//   return (
//     <Modal show={updateShow} onHide={() => closeUpdateShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Update Showtime</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">

//           {/* Movie */}
//           <Form.Group className="m-2">
//             <Form.Label>Movie</Form.Label>
//             <Form.Select
//               required
//               name="movieId"
//               onChange={(e) => setField('movieId', e.target.value)}
//               className="bg-body text-dark border-secondary"
//               value={form.movieId}
//               isInvalid={!!errors.movieId}
//             >
//               <option value="">Select movie</option>
//               {state.movies.map((movie) => (
//                 <option key={movie.movieId} value={movie.movieId}>
//                   {movie.movieTitle}
//                 </option>
//               ))}
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.movieId}</Form.Control.Feedback>
//           </Form.Group>

//           {/* Screen */}
//           <Form.Group className="m-2">
//             <Form.Label>Screen</Form.Label>
//             <Form.Select
//               required
//               name="screenId"
//               onChange={(e) => setField('screenId', e.target.value)}
//               className="bg-body text-dark border-secondary"
//               value={form.screenId}
//               isInvalid={!!errors.screenId}
//             >
//               <option value="">Select screen</option>
//               {state.screens.map((screen) => (
//                 <option key={screen.screenId} value={screen.screenId}>
//                   {screen.screenName}
//                 </option>
//               ))}
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.screenId}</Form.Control.Feedback>
//           </Form.Group>

//           {/* Showtime price */}
//           <Form.Group className="m-2">
//             <Form.Label>Showtime Price</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               onChange={(e) => setField('showtimePrice', e.target.value)}
//               placeholder="Showtime price"
//               name="showtimePrice"
//               value={form.showtimePrice}
//               isInvalid={!!errors.showtimePrice}
//             />
//             <Form.Control.Feedback type="invalid">{errors.showtimePrice}</Form.Control.Feedback>
//           </Form.Group>

//           {/* Showtime At */}
//           <Form.Group className="m-2">
//             <Form.Label>Showtime At</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               onChange={(e) => setField('showtimeAt', e.target.value)}
//               placeholder="Showtime at"
//               name="showtimeAt"
//               value={form.showtimeAt}
//               isInvalid={!!errors.showtimeAt}
//             />
//             <Form.Control.Feedback type="invalid">{errors.showtimeAt}</Form.Control.Feedback>
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
//   );
// }

// export default UpdateShowtimeModal;


import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { ShowtimeContext } from '../context/ShowtimeContext'

function UpdateShowtimeModal({ showtimeId, show, fetchShowtimes, onHide }) {
  const { state } = useContext(ShowtimeContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({ movieId: '', screenId: '', showtimePrice: 0, showtimeAt: '' })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // Hàm chuyển đổi từ dd/MM/yyyy HH:mm sang định dạng datetime-local (YYYY-MM-DDTHH:MM)
  const toDatetimeLocal = (time) => {
    if (!time) return '';

    const [datePart, timePart] = time.split(" ");
    const [day, month, year] = datePart.split("/").map(Number);
    const [hours, minutes] = timePart.split(":").map(Number);

    const date = new Date(year, month - 1, day, hours, minutes);
    return date.toISOString().slice(0, 16); // Định dạng YYYY-MM-DDTHH:MM
  };


  // setForm by showtimeId
  useEffect(() => {
    if (showtimeId) {
      const showtime = state.showtimes.find((showtime) => showtime.showtimeId === showtimeId)
      if (showtime) {
        setForm({
          movieId: showtime.movie.movieId,
          screenId: showtime.screen.screenId,
          showtimePrice: showtime.showtimePrice,
          showtimeAt: toDatetimeLocal(showtime.showtimeAt)
        })
      }
    }
  }, [showtimeId, state.showtimes])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const validateForm = () => {
    const newErrors = {}
    if (!form.movieId) newErrors.movieId = 'Movie is required'
    if (!form.screenId) newErrors.screenId = 'Screen is required'
    if (!form.showtimePrice) newErrors.showtimePrice = 'Showtime price is required'
    if (!form.showtimeAt) newErrors.showtimeAt = 'Showtime at is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ movieId: '', screenId: '', showtimePrice: 0, showtimeAt: '' })
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
      fetch(`http://localhost:8080/showtimes/${showtimeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            fetchShowtimes()
          } else {
            console.error('Failed to update the showtime')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      onHide()
      setForm({ movieId: '', screenId: '', showtimePrice: 0, showtimeAt: '' })
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
            <Form.Label>Screen Name</Form.Label>
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
        <Button variant="secondary" onClick={() => closeUpdateShow()}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="updateForm" onClick={handleUpdate}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateShowtimeModal