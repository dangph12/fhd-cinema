// import React, { useState, useEffect, useContext } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'
// import { CinemaContext } from '../context/CinemaContext'

// function UpdateCinemaModal({ cinemaId, show, fetchCinemas, onHide }) {
//   const { state } = useContext(CinemaContext)

//   const [updateShow, setUpdateShow] = useState(false)

//   const [form, setForm] = useState({ cinemaName: '', locationId: '' })
//   const [validated, setValidated] = useState(false)
//   const [errors, setErrors] = useState({})

//   useEffect(() => {
//     setUpdateShow(show)
//   }, [show])

//   // setForm by cinemaId
//   useEffect(() => {
//     if (cinemaId) {
//       const cinema = state.cinemas.find((cinema) => cinema.cinemaId === cinemaId)
//       setForm({
//         cinemaName: cinema.cinemaName,
//         locationId: cinema.location.locationId,
//       })
//     }
//   }, [cinemaId])

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     })
//   }
//   const validateForm = () => {
//     const newErrors = {}
//     if (!form.cinemaName) newErrors.cinemaName = 'Cinema name is required'
//     if (!form.locationId) newErrors.locationId = 'Location is required'
//     return newErrors
//   }

//   const closeUpdateShow = () => {
//     onHide()
//     setUpdateShow(false)
//     setForm({ cinemaName: '', locationName: '' })
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
//       const { cinemaId, cinemaPassword, ...updateData } = form
//       fetch(`http://localhost:8080/cinemas/${cinemaId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updateData),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchCinemas()
//           } else {
//             console.error('Failed to update the cinema')
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error)
//         })
//       setUpdateShow(false)
//       onHide()
//       setForm({ cinemaName: '', cinemaType: '' })
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
//             <Form.Label>Cinema name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               onChange={(e) => setField('cinemaName', e.target.value)}
//               placeholder="Cinema name"
//               name="cinemaName"
//               value={form.cinemaName}
//               isInvalid={!!errors.cinemaName}
//             />
//             <Form.Control.Feedback type="invalid">{errors.cinemaName}</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>Location</Form.Label>
//             <Form.Select
//               className="bg-body text-dark border-secondary"
//               required
//               onChange={(e) => setField('locationId', e.target.value)}
//               value={form.locationId}>
//               <option value="">Select location</option>
//               {state.locations.map((location) => (
//                 <option key={location.locationId} value={location.locationId}>
//                   {location.locationName}
//                 </option>
//               ))}
//             </Form.Select>
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

// export default UpdateCinemaModal


import React, { useState, useEffect, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { CinemaContext } from '../context/CinemaContext';

function UpdateCinemaModal({ cinemaId, show, fetchCinemas, onHide }) {
  const { state } = useContext(CinemaContext);
  const [updateShow, setUpdateShow] = useState(false);
  const [form, setForm] = useState({ cinemaName: '', locationId: '' });
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUpdateShow(show);
  }, [show]);

  // Set form data based on cinemaId
  useEffect(() => {
    if (cinemaId) {
      const cinema = state.cinemas.find((cinema) => cinema.cinemaId === cinemaId);
      if (cinema) {
        setForm({
          cinemaName: cinema.cinemaName,
          locationId: cinema.location.locationId,
        });
      }
    }
  }, [cinemaId, state.cinemas]);

  // Handle field changes
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!form.cinemaName) newErrors.cinemaName = 'Cinema name is required';
    if (!form.locationId) newErrors.locationId = 'Location is required';
    return newErrors;
  };

  // Close the modal
  const closeUpdateShow = () => {
    onHide();
    setUpdateShow(false);
    setForm({ cinemaName: '', locationId: '' });
    setValidated(false);
    setErrors({});
  };

  // Handle update
  const handleUpdate = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      e.stopPropagation();
    } else {
      fetch(`http://localhost:8080/cinemas/${cinemaId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            fetchCinemas(); // Fetch updated list of cinemas
          } else {
            console.error('Failed to update the cinema');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      setUpdateShow(false);
      onHide();
      setForm({ cinemaName: '', locationId: '' });
      setErrors({});
    }
    setValidated(true);
  };

  return (
    <Modal show={updateShow} onHide={() => closeUpdateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Update Cinema</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
          <Form.Group className="m-2">
            <Form.Label>Cinema Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter cinema name"
              value={form.cinemaName}
              onChange={(e) => setField('cinemaName', e.target.value)}
              isInvalid={!!errors.cinemaName}
            />
            <Form.Control.Feedback type="invalid">{errors.cinemaName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Location</Form.Label>
            <Form.Select
              required
              onChange={(e) => setField('locationId', e.target.value)}
              value={form.locationId}
              className="bg-body text-dark border-secondary"
              isInvalid={!!errors.locationId}
            >
              <option value="">Select location</option>
              {state.locations.map((location) => (
                <option key={location.locationId} value={location.locationId}>
                  {location.locationName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.locationId}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeUpdateShow}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="updateForm">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateCinemaModal;
