import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { BookingContext } from '../context/BookingContext'

function UpdateBookingModal({ bookingId, show, fetchBookings, onHide }) {
  const { state } = useContext(BookingContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({ bookingName: '', bookingType: 0 })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // setForm by bookingId
  useEffect(() => {
    if (bookingId) {
      const booking = state.bookings.find((booking) => booking.bookingId === bookingId)
      setForm(booking)
    }
  }, [bookingId])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const validateForm = () => {
    const newErrors = {}
    if (!form.bookingName) newErrors.bookingName = 'Booking name is required'
    if (!form.bookingType) newErrors.bookingType = 'Booking type is required'
    if (!form.bookingPassword && !form.bookingId) newErrors.bookingPassword = 'Booking password is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ bookingName: '', bookingType: '' })
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
      const { bookingId, bookingPassword, ...updateData } = form
      fetch(`http://localhost:8080/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetchBookings()
          } else {
            console.error('Failed to update the booking')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      onHide()
      setForm({ bookingName: '', bookingType: '' })
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
            <Form.Label>Booking name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('bookingName', e.target.value)}
              placeholder="Booking name"
              name="bookingName"
              value={form.bookingName}
              isInvalid={!!errors.bookingName}
            />
            <Form.Control.Feedback type="invalid">{errors.bookingName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Booking type</Form.Label>
            <Form.Select
              required
              name="bookingType"
              onChange={(e) => setField('bookingType', Number(e.target.value))}
              className="bg-body text-dark border-secondary"
              value={form.bookingType}
              isInvalid={!!errors.bookingType}>
              <option value="">Select booking type</option>
              <option value={1}>Customer</option>
              <option value={2}>Staff</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.bookingType}</Form.Control.Feedback>
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
  )
}

export default UpdateBookingModal
