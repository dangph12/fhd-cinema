import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { ShowtimeContext } from '../context/ShowtimeContext'

function UpdateShowtimeModal({ showtimeId, show, fetchShowtimes, onHide }) {
  const { state } = useContext(ShowtimeContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({ showtimeName: '', showtimeType: 0 })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // setForm by showtimeId
  useEffect(() => {
    if (showtimeId) {
      const showtime = state.showtimes.find((showtime) => showtime.showtimeId === showtimeId)
      setForm(showtime)
    }
  }, [showtimeId])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const validateForm = () => {
    const newErrors = {}
    if (!form.showtimeName) newErrors.showtimeName = 'Showtime name is required'
    if (!form.showtimeType) newErrors.showtimeType = 'Showtime type is required'
    if (!form.showtimePassword && !form.showtimeId) newErrors.showtimePassword = 'Showtime password is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ showtimeName: '', showtimeType: '' })
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
      const { showtimeId, showtimePassword, ...updateData } = form
      fetch(`http://localhost:8080/showtimes/${showtimeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
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
      setForm({ showtimeName: '', showtimeType: '' })
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
            <Form.Label>Showtime name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('showtimeName', e.target.value)}
              placeholder="Showtime name"
              name="showtimeName"
              value={form.showtimeName}
              isInvalid={!!errors.showtimeName}
            />
            <Form.Control.Feedback type="invalid">{errors.showtimeName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Showtime type</Form.Label>
            <Form.Select
              required
              name="showtimeType"
              onChange={(e) => setField('showtimeType', Number(e.target.value))}
              className="bg-body text-dark border-secondary"
              value={form.showtimeType}
              isInvalid={!!errors.showtimeType}>
              <option value="">Select showtime type</option>
              <option value={1}>Customer</option>
              <option value={2}>Staff</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.showtimeType}</Form.Control.Feedback>
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

export default UpdateShowtimeModal