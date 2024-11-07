import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { CinemaContext } from '../context/CinemaContext'; 

function CreateCinemaModal({ show, fetchCinemas, onHide }) {
  const { state } = useContext(CinemaContext)

  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({ cinemaName: '', locationName: '' })
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
    setForm({ cinemaName: '', locationName: '' })
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.cinemaName) newErrors.cinemaName = 'Cinema name is required'
    if (!form.locationName) newErrors.locationId = 'Location is required'
    return newErrors
  }

  const handleCreate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      fetch('http://localhost:8080/cinemas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            fetchCinemas()
          } else {
            console.error('Failed to create the cinema')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setCreateShow(false)
      onHide()
      setForm({ cinemaName: '', cinemaPassword: '', cinemaType: '' })
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
            <Form.Label>Location</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('locationName', e.target.value)}
              placeholder="Location Name"
              name="locationName"
              value={form.locationName}
              isInvalid={!!errors.locationName}
            />
            <Form.Control.Feedback type="invalid">{errors.locationName}</Form.Control.Feedback>
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

export default CreateCinemaModal
