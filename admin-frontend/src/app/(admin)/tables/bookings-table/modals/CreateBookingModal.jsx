import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

function CreateBookingModal({ show, fetchBookings, onHide }) {
  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({ bookingName: '', bookingType: '' })
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
    setForm({ bookingName: '', bookingPassword: '', bookingType: '' })
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.bookingName) newErrors.bookingName = 'Booking name is required'
    if (!form.bookingType) newErrors.bookingType = 'Booking type is required'
    return newErrors
  }

  const handleCreate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      fetch('http://localhost:8080/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            fetchBookings()
          } else {
            console.error('Failed to create the booking')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setCreateShow(false)
      onHide()
      setForm({ bookingName: '', bookingPassword: '', bookingType: '' })
      setErrors({})
    }
    setValidated(true)
  }
  return (
    <Modal show={createShow} onHide={() => closeCreateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Create Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
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
              onChange={(e) => setField('bookingType', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.bookingType}
              isInvalid={!!errors.bookingType}>
              <option value="">Select booking type</option>
              <option value={'Admin'}>Admin</option>
              <option value={'Customer'}>Customer</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.bookingType}</Form.Control.Feedback>
          </Form.Group>
          {form.bookingType == 'Customer' ? (
            <>
              <Form.Group className="m-2">
                <Form.Label>Customer name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => setField('customerName', e.target.value)}
                  placeholder="Customer name"
                  name="bookingPassword"
                  value={form.bookingPassword}
                  isInvalid={!!errors.bookingPassword}
                />
                <Form.Control.Feedback type="invalid">{errors.bookingPassword}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>Customer Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  onChange={(e) => setField('customerEmail', e.target.value)}
                  placeholder="Customer email"
                  name="customerEmail"
                  value={form.customerEmail}
                  isInvalid={!!errors.customerEmail}
                />
                <Form.Control.Feedback type="invalid">{errors.customerEmail}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>Customer Phone</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => setField('customerPhone', e.target.value)}
                  placeholder="Customer phone"
                  name="customerPhone"
                  value={form.customerPhone}
                  isInvalid={!!errors.customerPhone}
                />
                <Form.Control.Feedback type="invalid">{errors.customerPhone}</Form.Control.Feedback>
              </Form.Group>
            </>
          ) : null}
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

export default CreateBookingModal
