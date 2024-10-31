import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { SeatContext } from '../context/SeatContext'

function UpdateSeatModal({ seatId, show, fetchSeats, onHide }) {
  const { state } = useContext(SeatContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({ seatTypeId: '', screenId: '', seatName: '' })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // setForm by seatId
  useEffect(() => {
    if (seatId) {
      const seat = state.seats.find((seat) => seat.seatId === seatId)
      if (seat) {
        setForm({
          seatTypeId: seat.seatType.seatTypeId,
          screenId: seat.screen.screenId,
          seatName: seat.seatName,
        })
      }
    }
  }, [seatId, state.seats])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const validateForm = () => {
    const newErrors = {}
    if (!form.seatTypeId) newErrors.seatTypeId = 'Seat type is required'
    if (!form.screenId) newErrors.screenId = 'Screen is required'
    if (!form.seatName) newErrors.seatName = 'Seat name is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ seatTypeId: '', screenId: '', seatName: '' })
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
      fetch(`http://localhost:8080/seats/${seatId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            fetchSeats()
          } else {
            console.error('Failed to update the seat')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      onHide()
      setForm({ seatTypeId: '', screenId: '', seatName: '' })
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

export default UpdateSeatModal