// import React, { useState, useEffect } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'

// function CreateSeatModal({ show, fetchSeats, onHide }) {
//   const [createShow, setCreateShow] = useState(false)

//   useEffect(() => {
//     setCreateShow(show)
//   }, [show])

//   const [form, setForm] = useState({ seatName: '', seatType: '' })
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
//     setForm({ seatName: '', seatType: '' })
//     setValidated(false)
//     setErrors({})
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (!form.seatName) newErrors.seatName = 'Seat name is required'
//     if (!form.seatType) newErrors.seatType = 'Seat type is required'
//     return newErrors
//   }

//   const handleCreate = (e) => {
//     e.preventDefault()

//     const newErrors = validateForm()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       e.stopPropagation()
//     } else {
//       fetch('http://localhost:8080/seats', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchSeats()
//             closeCreateShow() // Đóng modal sau khi tạo thành công
//           } else {
//             console.error('Failed to create the seat')
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error)
//         })
//     }
//     setValidated(true)
//   }

//   return (
//     <Modal show={createShow} onHide={() => closeCreateShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Create Seat</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
//           <Form.Group className="m-2">
//             <Form.Label>Seat Name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               onChange={(e) => setField('seatName', e.target.value)}
//               placeholder="Enter seat name"
//               name="seatName"
//               value={form.seatName}
//               isInvalid={!!errors.seatName}
//             />
//             <Form.Control.Feedback type="invalid">{errors.seatName}</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>Seat Type</Form.Label>
//             <Form.Select
//               required
//               name="seatType"
//               onChange={(e) => setField('seatType', e.target.value)}
//               className="bg-body text-dark border-secondary"
//               value={form.seatType}
//               isInvalid={!!errors.seatType}>
//               <option value="">Select seat type</option>
//               <option value="standard">Ghế thường</option>
//               <option value="vip">VIP</option>
//               <option value="couple">Couple</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.seatType}</Form.Control.Feedback>
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

// export default CreateSeatModal


import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap'
import { SeatContext } from '../context/SeatContext'

function CreateSeatModal({ show, onHide }) {
  const { state, fetchSeats } = useContext(SeatContext)

  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({
    seatTypeId: '',
    screenId: '',
    seatName: '',
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
      seatTypeId: '',
      screenId: '',
      seatName: '',
    })
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.seatTypeId) newErrors.seatTypeId = 'Seat type is required'
    if (!form.screenId) newErrors.screenId = 'Screen is required'
    if (!form.seatName) newErrors.seatName = 'Seat name is required'
    return newErrors
  }

  const createSeat = async () => {
    fetch('http://localhost:8080/seats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (response.ok) {
          fetchSeats()
        } else {
          console.error('Failed to create the seat')
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
      await createSeat()
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
            <Form.Label>Seat Type</Form.Label>
            <Form.Select
              required
              name="seatTypeId"
              onChange={(e) => setField('seatTypeId', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.seatTypeId}
              isInvalid={!!errors.seatTypeId}>
              <option value="">Select seat type</option>
              {state.seatsTypes.map((seatType) => (
                <option key={seatType.seatTypeId} value={seatType.seatTypeId}>
                  {seatType.seatTypeName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.seatTypeId}</Form.Control.Feedback>
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
            <Form.Label>Seat Name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('seatName', e.target.value)}
              placeholder="Seat name"
              name="seatName"
              value={form.seatName}
              isInvalid={!!errors.seatName}
            />
            <Form.Control.Feedback type="invalid">{errors.seatName}</Form.Control.Feedback>
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

export default CreateSeatModal