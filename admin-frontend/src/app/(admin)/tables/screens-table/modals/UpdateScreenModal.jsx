import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { ScreenContext } from '../context/ScreenContext'

function UpdateScreenModal({ screenId, show, fetchScreens, onHide }) {
  const { state } = useContext(ScreenContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({ screenName: '', screenType: 0 })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // setForm by screenId
  useEffect(() => {
    if (screenId) {
      const screen = state.screens.find((screen) => screen.screenId === screenId)
      setForm(screen)
    }
  }, [screenId])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const validateForm = () => {
    const newErrors = {}
    if (!form.screenName) newErrors.screenName = 'Screen name is required'
    if (!form.screenType) newErrors.screenType = 'Screen type is required'
    if (!form.screenPassword && !form.screenId) newErrors.screenPassword = 'Screen password is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ screenName: '', screenType: '' })
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
      const { screenId, screenPassword, ...updateData } = form
      fetch(`http://localhost:8080/screens/${screenId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetchScreens()
          } else {
            console.error('Failed to update the screen')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      onHide()
      setForm({ screenName: '', screenType: '' })
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
            <Form.Label>Screen type</Form.Label>
            <Form.Select
              required
              name="screenType"
              onChange={(e) => setField('screenType', Number(e.target.value))}
              className="bg-body text-dark border-secondary"
              value={form.screenType}
              isInvalid={!!errors.screenType}>
              <option value="">Select screen type</option>
              <option value={1}>Customer</option>
              <option value={2}>Staff</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.screenType}</Form.Control.Feedback>
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

export default UpdateScreenModal
