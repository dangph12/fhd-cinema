import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

function CreateSeatModal({ show, fetchSeats, onHide }) {
  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({ seatName: '', seatType: '' })
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
    setForm({ seatName: '', seatPassword: '', seatType: '' })
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.seatName) newErrors.seatName = 'Seat name is required'
    if (!form.seatType) newErrors.seatType = 'Seat type is required'
    return newErrors
  }

  const handleCreate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
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
      setCreateShow(false)
      onHide()
      setForm({ seatName: '', seatPassword: '', seatType: '' })
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
            <Form.Label>Seat name</Form.Label>
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
          <Form.Group className="m-2">
            <Form.Label>Seat type</Form.Label>
            <Form.Select
              required
              name="seatType"
              onChange={(e) => setField('seatType', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.seatType}
              isInvalid={!!errors.seatType}>
              <option value="">Select seat type</option>
              <option value={'Admin'}>Admin</option>
              <option value={'Customer'}>Customer</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.seatType}</Form.Control.Feedback>
          </Form.Group>
          {form.seatType == 'Customer' ? (
            <>
              <Form.Group className="m-2">
                <Form.Label>Customer name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => setField('customerName', e.target.value)}
                  placeholder="Customer name"
                  name="seatPassword"
                  value={form.seatPassword}
                  isInvalid={!!errors.seatPassword}
                />
                <Form.Control.Feedback type="invalid">{errors.seatPassword}</Form.Control.Feedback>
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

export default CreateSeatModal
