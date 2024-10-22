// import React, { useState, useEffect, useContext } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'
// import { TicketContext } from '../context/TicketContext'

// function UpdateTicketModal({ ticketId, show, fetchTickets, onHide }) {
//   const { state } = useContext(TicketContext)

//   const [updateShow, setUpdateShow] = useState(false)

//   const [form, setForm] = useState({ ticketName: '', ticketType: 0 })
//   const [validated, setValidated] = useState(false)
//   const [errors, setErrors] = useState({})

//   useEffect(() => {
//     setUpdateShow(show)
//   }, [show])

//   // setForm by ticketId
//   useEffect(() => {
//     if (ticketId) {
//       const ticket = state.tickets.find((ticket) => ticket.ticketId === ticketId)
//       setForm(ticket)
//     }
//   }, [ticketId])

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     })
//   }
//   const validateForm = () => {
//     const newErrors = {}
//     if (!form.ticketName) newErrors.ticketName = 'Ticket name is required'
//     if (!form.ticketType) newErrors.ticketType = 'Ticket type is required'
//     if (!form.ticketPassword && !form.ticketId) newErrors.ticketPassword = 'Ticket password is required'
//     return newErrors
//   }

//   const closeUpdateShow = () => {
//     onHide()
//     setUpdateShow(false)
//     setForm({ ticketName: '', ticketType: '' })
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
//       const { ticketId, ticketPassword, ...updateData } = form
//       fetch(`http://localhost:8080/tickets/${ticketId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updateData),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchTickets()
//           } else {
//             console.error('Failed to update the ticket')
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error)
//         })
//       setUpdateShow(false)
//       onHide()
//       setForm({ ticketName: '', ticketType: '' })
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
//             <Form.Label>Ticket name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               onChange={(e) => setField('ticketName', e.target.value)}
//               placeholder="Ticket name"
//               name="ticketName"
//               value={form.ticketName}
//               isInvalid={!!errors.ticketName}
//             />
//             <Form.Control.Feedback type="invalid">{errors.ticketName}</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>Ticket type</Form.Label>
//             <Form.Select
//               required
//               name="ticketType"
//               onChange={(e) => setField('ticketType', Number(e.target.value))}
//               className="bg-body text-dark border-secondary"
//               value={form.ticketType}
//               isInvalid={!!errors.ticketType}>
//               <option value="">Select ticket type</option>
//               <option value={1}>Customer</option>
//               <option value={2}>Staff</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.ticketType}</Form.Control.Feedback>
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

// export default UpdateTicketModal


// import React, { useState, useEffect, useContext } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'
// import { TicketContext } from '../context/TicketContext'

// function UpdateTicketModal({ ticketId, show, fetchTickets, onHide }) {
//   const { state } = useContext(TicketContext)

//   const [updateShow, setUpdateShow] = useState(false)

//   // Update form fields: ticketName and ticketPrice
//   const [form, setForm] = useState({ ticketName: '', ticketPrice: 0 })
//   const [validated, setValidated] = useState(false)
//   const [errors, setErrors] = useState({})

//   useEffect(() => {
//     setUpdateShow(show)
//   }, [show])

//   // Set form fields by ticketId
//   useEffect(() => {
//     if (ticketId) {
//       const ticket = state.tickets.find((ticket) => ticket.ticketId === ticketId)
//       setForm(ticket)
//     }
//   }, [ticketId, state.tickets])

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     })
//   }

//   // Validate form input
//   const validateForm = () => {
//     const newErrors = {}
//     if (!form.ticketName) newErrors.ticketName = 'Ticket name is required'
//     if (!form.ticketPrice || form.ticketPrice <= 0) newErrors.ticketPrice = 'Ticket price is required and should be greater than 0'
//     return newErrors
//   }

//   const closeUpdateShow = () => {
//     onHide()
//     setUpdateShow(false)
//     setForm({ ticketName: '', ticketPrice: 0 })
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
//       const { ticketId, ...updateData } = form // Remove ticketId from form data to send
//       fetch(`http://localhost:8080/tickets/${ticketId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updateData),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchTickets() // Re-fetch the updated ticket list
//           } else {
//             console.error('Failed to update the ticket')
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error)
//         })
//       setUpdateShow(false)
//       onHide()
//       setForm({ ticketName: '', ticketPrice: 0 })
//       setErrors({})
//     }
//     setValidated(true)
//   }

//   return (
//     <Modal show={updateShow} onHide={() => closeUpdateShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Update Ticket</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
//           <Form.Group className="m-2">
//             <Form.Label>Ticket name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               onChange={(e) => setField('ticketName', e.target.value)}
//               placeholder="Ticket name"
//               name="ticketName"
//               value={form.ticketName}
//               isInvalid={!!errors.ticketName}
//             />
//             <Form.Control.Feedback type="invalid">{errors.ticketName}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="m-2">
//             <Form.Label>Ticket price</Form.Label>
//             <Form.Control
//               required
//               type="number"
//               min="0"
//               onChange={(e) => setField('ticketPrice', Number(e.target.value))}
//               placeholder="Ticket price"
//               name="ticketPrice"
//               value={form.ticketPrice}
//               isInvalid={!!errors.ticketPrice}
//             />
//             <Form.Control.Feedback type="invalid">{errors.ticketPrice}</Form.Control.Feedback>
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

// export default UpdateTicketModal

// import React, { useState, useEffect, useContext } from 'react';
// import { Modal, Form, Button } from 'react-bootstrap';
// import { TicketContext } from '../context/TicketContext';

// function UpdateTicketModal({ ticketId, show, fetchTickets, onHide }) {
//   const { state } = useContext(TicketContext);
//   const [updateShow, setUpdateShow] = useState(false);
//   const [form, setForm] = useState({ ticketName: '', ticketPrice: 0 });
//   const [validated, setValidated] = useState(false);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     setUpdateShow(show);
//   }, [show]);

//   // Set form fields based on the ticketId when the modal opens
//   useEffect(() => {
//     if (ticketId) {
//       const ticket = state.tickets.find((ticket) => ticket.ticketId === ticketId);
//       if (ticket) {
//         setForm({
//           ticketName: ticket.ticketName || '',
//           ticketPrice: ticket.ticketPrice || 0,
//         });
//       }
//     }
//   }, [ticketId, state.tickets]);

//   // Handle form field updates
//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     });
//   };

//   // Validate form inputs
//   const validateForm = () => {
//     const newErrors = {};
//     if (!form.ticketName) newErrors.ticketName = 'Ticket name is required';
//     if (form.ticketPrice <= 0) newErrors.ticketPrice = 'Ticket price must be greater than 0';
//     return newErrors;
//   };

//   // Close modal and reset form
//   const closeUpdateShow = () => {
//     onHide();
//     setUpdateShow(false);
//     setForm({ ticketName: '', ticketPrice: 0 });
//     setValidated(false);
//     setErrors({});
//   };

//   // Handle form submission for ticket update
//   const handleUpdate = (e) => {
//     e.preventDefault();

//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       e.stopPropagation();
//     } else {
//       const updateData = {
//         ticketName: form.ticketName,
//         ticketPrice: form.ticketPrice,
//       };

//       fetch(`http://localhost:8080/tickets/${ticketId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updateData),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchTickets(); // Refresh ticket list after update
//             closeUpdateShow(); // Close modal and reset form
//           } else {
//             console.error('Failed to update the ticket');
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//     }
//     setValidated(true);
//   };

//   return (
//     <Modal show={updateShow} onHide={() => closeUpdateShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Update Ticket</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
//           <Form.Group className="m-2">
//             <Form.Label>Ticket name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               onChange={(e) => setField('ticketName', e.target.value)}
//               placeholder="Ticket name"
//               name="ticketName"
//               value={form.ticketName}
//               isInvalid={!!errors.ticketName}
//             />
//             <Form.Control.Feedback type="invalid">{errors.ticketName}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="m-2">
//             <Form.Label>Ticket price</Form.Label>
//             <Form.Control
//               required
//               type="number"
//               min="0"
//               onChange={(e) => setField('ticketPrice', Number(e.target.value))}
//               placeholder="Ticket price"
//               name="ticketPrice"
//               value={form.ticketPrice}
//               isInvalid={!!errors.ticketPrice}
//             />
//             <Form.Control.Feedback type="invalid">{errors.ticketPrice}</Form.Control.Feedback>
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

// export default UpdateTicketModal;


import React, { useState, useEffect, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { TicketContext } from '../context/TicketContext';

function UpdateTicketModal({ ticketId, show, fetchTickets, onHide }) {
  const { state } = useContext(TicketContext);

  const [updateShow, setUpdateShow] = useState(false);
  const [form, setForm] = useState({ ticketName: '', ticketPrice: 0, seatId: '', bookingId: '' });
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUpdateShow(show);
  }, [show]);

  // Set form fields by ticketId
  useEffect(() => {
    if (ticketId) {
      const ticket = state.tickets.find((ticket) => ticket.ticketId === ticketId);
      setForm(ticket);
    }
  }, [ticketId, state.tickets]);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  // Validate form input
  const validateForm = () => {
    const newErrors = {};
    if (!form.ticketName) newErrors.ticketName = 'Ticket name is required';
    if (!form.ticketPrice || form.ticketPrice <= 0) newErrors.ticketPrice = 'Ticket price is required and should be greater than 0';
    return newErrors;
  };

  const closeUpdateShow = () => {
    onHide();
    setUpdateShow(false);
    setForm({ ticketName: '', ticketPrice: 0, seatId: '', bookingId: '' });
    setValidated(false);
    setErrors({});
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      e.stopPropagation();
    } else {
      const { ticketId, ...updateData } = form;
      fetch(`http://localhost:8080/tickets/${ticketId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData), // Send seatId, bookingId, and ticketPrice
      })
        .then((response) => {
          if (response.ok) {
            fetchTickets(); // Re-fetch the updated ticket list
          } else {
            console.error('Failed to update the ticket');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      setUpdateShow(false);
      onHide();
      setForm({ ticketName: '', ticketPrice: 0, seatId: '', bookingId: '' });
      setErrors({});
    }
    setValidated(true);
  };

  return (
    <Modal show={updateShow} onHide={() => closeUpdateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Update Ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
          <Form.Group className="m-2">
            <Form.Label>Ticket name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('ticketName', e.target.value)}
              placeholder="Ticket name"
              name="ticketName"
              value={form.ticketName}
              isInvalid={!!errors.ticketName}
            />
            <Form.Control.Feedback type="invalid">{errors.ticketName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Ticket price</Form.Label>
            <Form.Control
              required
              type="number"
              min="0"
              onChange={(e) => setField('ticketPrice', Number(e.target.value))}
              placeholder="Ticket price"
              name="ticketPrice"
              value={form.ticketPrice}
              isInvalid={!!errors.ticketPrice}
            />
            <Form.Control.Feedback type="invalid">{errors.ticketPrice}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Seat ID</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('seatId', e.target.value)}
              placeholder="Seat ID"
              name="seatId"
              value={form.seatId}
            />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Booking ID</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('bookingId', e.target.value)}
              placeholder="Booking ID"
              name="bookingId"
              value={form.bookingId}
            />
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
  );
}

export default UpdateTicketModal;
