import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { CinemaContext } from '../context/CinemaContext'

function UpdateCinemaModal({ cinemaId, show, fetchCinemas, onHide }) {
  const { state } = useContext(CinemaContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({ cinemaName: '', cinemaType: 0 })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // setForm by cinemaId
  useEffect(() => {
    if (cinemaId) {
      const cinema = state.cinemas.find((cinema) => cinema.cinemaId === cinemaId)
      setForm(cinema)
    }
  }, [cinemaId])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const validateForm = () => {
    const newErrors = {}
    if (!form.cinemaName) newErrors.cinemaName = 'Cinema name is required'
    if (!form.cinemaType) newErrors.cinemaType = 'Cinema type is required'
    if (!form.cinemaPassword && !form.cinemaId) newErrors.cinemaPassword = 'Cinema password is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ cinemaName: '', cinemaType: '' })
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
      const { cinemaId, cinemaPassword, ...updateData } = form
      fetch(`http://localhost:8080/cinemas/${cinemaId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetchCinemas()
          } else {
            console.error('Failed to update the cinema')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      onHide()
      setForm({ cinemaName: '', cinemaType: '' })
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
            <Form.Label>Cinema name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('cinemaName', e.target.value)}
              placeholder="Cinema name"
              name="cinemaName"
              value={form.cinemaName}
              isInvalid={!!errors.cinemaName}
            />
            <Form.Control.Feedback type="invalid">{errors.cinemaName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Cinema type</Form.Label>
            <Form.Select
              required
              name="cinemaType"
              onChange={(e) => setField('cinemaType', Number(e.target.value))}
              className="bg-body text-dark border-secondary"
              value={form.cinemaType}
              isInvalid={!!errors.cinemaType}>
              <option value="">Select cinema type</option>
              <option value={1}>Customer</option>
              <option value={2}>Staff</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.cinemaType}</Form.Control.Feedback>
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

export default UpdateCinemaModal
