// import React, { useState, useEffect } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'

// function CreateTicketModal({ show, fetchTickets, onHide }) {
//   const [createShow, setCreateShow] = useState(false)

//   useEffect(() => {
//     setCreateShow(show)
//   }, [show])

//   const [form, setForm] = useState({ ticketName: '', ticketType: '' })
//   const [validated, setValidated] = useState(false)
//   const [errors, setErrors] = useState({})

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     })
//   }

//   const closeCreateShow = () => {
//     onHide()
//     setCreateShow(false)
//     setForm({ ticketName: '', ticketPassword: '', ticketType: '' })
//     setValidated(false)
//     setErrors({})
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (!form.ticketName) newErrors.ticketName = 'Ticket name is required'
//     if (!form.ticketType) newErrors.ticketType = 'Ticket type is required'
//     return newErrors
//   }

//     // Handle the date selection and format it to "YYYY-MM-DDT00:00:00"
//     const handleDateChange = (e) => {
//       const selectedDate = e.target.value; // This is the "YYYY-MM-DD" format from the date input
//       const formattedDate = `${selectedDate}T00:00:00`; // Append "T00:00:00" to make it "YYYY-MM-DDT00:00:00"
//       setField('newsCreateAt', formattedDate); // Set the formatted date in the form state
//     };

//   const handleCreate = (e) => {
//     e.preventDefault()

//     const newErrors = validateForm()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       e.stopPropagation()
//     } else {
//       fetch('http://localhost:8080/tickets', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchTickets()
//           } else {
//             console.error('Failed to create the ticket')
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error)
//         })
//       setCreateShow(false)
//       onHide()
//       setForm({ ticketName: '', ticketPassword: '', ticketType: '' })
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
//             <Form.Label>Ticket Price</Form.Label>
//             <Form.Select
//               required
//               name="ticketType"
//               onChange={(e) => setField('ticketType', e.target.value)}
//               className="bg-body text-dark border-secondary"
//               value={form.ticketType}
//               isInvalid={!!errors.ticketType}>
//               <option value="">Select ticket type</option>
//               <option value={'Admin'}>Admin</option>
//               <option value={'Customer'}>Customer</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.ticketType}</Form.Control.Feedback>
//           </Form.Group>
//           {form.ticketType == 'Customer' ? (
//             <>
//               <Form.Group className="m-2">
//                 <Form.Label>Customer name</Form.Label>
//                 <Form.Control
//                   required
//                   type="text"
//                   onChange={(e) => setField('customerName', e.target.value)}
//                   placeholder="Customer name"
//                   name="ticketPassword"
//                   value={form.ticketPassword}
//                   isInvalid={!!errors.ticketPassword}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.ticketPassword}</Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group className="m-2">
//                 <Form.Label>Customer Email</Form.Label>
//                 <Form.Control
//                   required
//                   type="email"
//                   onChange={(e) => setField('customerEmail', e.target.value)}
//                   placeholder="Customer email"
//                   name="customerEmail"
//                   value={form.customerEmail}
//                   isInvalid={!!errors.customerEmail}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.customerEmail}</Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group className="m-2">
//                 <Form.Label>Customer Phone</Form.Label>
//                 <Form.Control
//                   required
//                   type="text"
//                   onChange={(e) => setField('customerPhone', e.target.value)}
//                   placeholder="Customer phone"
//                   name="customerPhone"
//                   value={form.customerPhone}
//                   isInvalid={!!errors.customerPhone}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.customerPhone}</Form.Control.Feedback>
//               </Form.Group>
//             </>
//           ) : null}
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

// export default CreateTicketModal

import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

function CreateTicketModal({ show, fetchTickets, onHide }) {
  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({ ticketName: '', ticketPrice: '', ticketType: '' })
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
    setForm({ ticketName: '', ticketPrice: '', ticketType: '' })
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.ticketName) newErrors.ticketName = 'Ticket name is required'
    if (!form.ticketPrice || isNaN(form.ticketPrice)) newErrors.ticketPrice = 'Valid ticket price is required'
    if (!form.ticketType) newErrors.ticketType = 'Ticket type is required'
    return newErrors
  }

   // Handle the date selection and format it to "YYYY-MM-DDT00:00:00"
   const handleDateChange = (e) => {
    const selectedDate = e.target.value; // This is the "YYYY-MM-DD" format from the date input
    const formattedDate = `${selectedDate}T00:00:00`; // Append "T00:00:00" to make it "YYYY-MM-DDT00:00:00"
    setField('newsCreateAt', formattedDate); // Set the formatted date in the form state
  };

  const handleCreate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      fetch('http://localhost:8080/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => response.json()) // Parse the JSON response
        .then((data) => {
          console.log('Created ticket:', data) // Output the ticket details (ticketId, ticketPrice, etc.)
          fetchTickets() // Refresh the ticket list
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setCreateShow(false)
      onHide()
      setForm({ ticketName: '', ticketPrice: '', ticketType: '' })
      setErrors({})
    }
    setValidated(true)
  }

  return (
    <Modal show={createShow} onHide={() => closeCreateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Create Ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
          <Form.Group className="m-2">
            <Form.Label>Ticket Name</Form.Label>
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
            <Form.Label>Ticket Price</Form.Label>
            <Form.Control
              required
              type="number"
              onChange={(e) => setField('ticketPrice', e.target.value)}
              placeholder="Ticket price"
              name="ticketPrice"
              value={form.ticketPrice}
              isInvalid={!!errors.ticketPrice}
            />
            <Form.Control.Feedback type="invalid">{errors.ticketPrice}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Ticket Type</Form.Label>
            <Form.Select
              required
              name="ticketType"
              // onChange={(e) => setField('ticketType', e.target.value)}
              onChange={handleDateChange}
              type="date"
              className="bg-body text-dark border-secondary"
              value={form.ticketType}
              isInvalid={!!errors.ticketType}>
              <option value="">Select ticket type</option>
              <option value="Admin">Admin</option>
              <option value="Customer">Customer</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.ticketType}</Form.Control.Feedback>
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

export default CreateTicketModal

