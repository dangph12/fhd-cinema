import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

function CreateScreenModal({ show, fetchScreens, onHide }) {
  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({ screenName: '', cinemaId: '' })
  const [cinemas, setCinemas] = useState([])
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  useEffect(() => {
    fetch('http://localhost:8080/cinemas')
      .then((response) => response.json())
      .then((json) => {
        setCinemas(json.data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  const closeCreateShow = () => {
    onHide()
    setCreateShow(false)
    setForm({ screenName: '', cinemaId: '' })
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.screenName) newErrors.screenName = 'Screen name is required'
    if (!form.cinemaId) newErrors.screenType = 'Cinema is required'
    return newErrors
  }

  const handleCreate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      fetch('http://localhost:8080/screens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            fetchScreens()
          } else {
            console.error('Failed to create the screen')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setCreateShow(false)
      onHide()
      setForm({ screenName: '', cinemaId: '' })
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
            <Form.Label>Screen name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('screenName', e.target.value)}
              placeholder="Screen name"
              name="screenName"
              value={form.screenName}
              isInvalid={!!errors.screenName}
              
            />
            <Form.Control.Feedback type="invalid">{errors.screenName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Cinema</Form.Label>
            <Form.Select
              required
              onChange={(e) => setField('cinemaId', e.target.value)}
              value={form.cinemaId}
              isInvalid={!!errors.cinemaId}
              className="bg-body text-dark border-secondary"
            >
              <option value="">Select cinema</option>
              {cinemas.map((cinema) => (
                <option key={cinema.cinemaId} value={cinema.cinemaId}>
                  {cinema.cinemaName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.cinemaId}</Form.Control.Feedback>
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

export default CreateScreenModal
