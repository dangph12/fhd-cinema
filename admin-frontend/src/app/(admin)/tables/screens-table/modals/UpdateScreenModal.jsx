

import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { ScreenContext } from '../context/ScreenContext'

function UpdateScreenModal({ screenId, show, fetchScreens, onHide }) {
  const { state } = useContext(ScreenContext)

  const [updateShow, setUpdateShow] = useState(false)
  const [form, setForm] = useState({ screenName: '', location: '', cinema: '' })
  const [locations, setLocations] = useState([])
  const [cinemas, setCinemas] = useState([])
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // Lấy thông tin màn hình hiện tại dựa trên `screenId` để cập nhật form
  useEffect(() => {
    if (screenId) {
      const screen = state.screens.find((screen) => screen.screenId === screenId)
      if (screen) {
        setForm({
          screenName: screen.screenName,
          location: screen.locationId,
          cinema: screen.cinemaId
        })
      }
    }
  }, [screenId, state.screens])

  // Lấy dữ liệu locations từ API
  useEffect(() => {
    fetch('http://localhost:8080/locations')
      .then((response) => response.json())
      .then((json) => setLocations(json.data))
      .catch((error) => console.error('Error fetching locations:', error))
  }, [])

  // Lấy dữ liệu cinemas từ API
  useEffect(() => {
    fetch('http://localhost:8080/cinemas')
      .then((response) => response.json())
      .then((json) => setCinemas(json.data))
      .catch((error) => console.error('Error fetching cinemas:', error))
  }, [])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.screenName) newErrors.screenName = 'Screen name is required'
    if (!form.location) newErrors.location = 'Location is required'
    if (!form.cinema) newErrors.cinema = 'Cinema is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ screenName: '', location: '', cinema: '' })
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
      const updateData = {
        screenName: form.screenName,
        locationId: form.location,
        cinemaId: form.cinema
      }
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
            closeUpdateShow() // Đóng modal sau khi cập nhật thành công
          } else {
            console.error('Failed to update the screen')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
    setValidated(true)
  }

  return (
    <Modal show={updateShow} onHide={() => closeUpdateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Update Screen</Modal.Title>
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
            <Form.Label>Location</Form.Label>
            <Form.Select
              required
              name="location"
              onChange={(e) => setField('location', e.target.value)}
              value={form.location}
              isInvalid={!!errors.location}
              className="bg-body text-dark border-secondary"
            >
              <option value="">Select location</option>
              {locations.map((location) => (
                <option key={location.locationId} value={location.locationId}>
                  {location.locationName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Cinema</Form.Label>
            <Form.Select
              required
              name="cinema"
              onChange={(e) => setField('cinema', e.target.value)}
              value={form.cinema}
              isInvalid={!!errors.cinema}
              className="bg-body text-dark border-secondary"
            >
              <option value="">Select cinema</option>
              {cinemas.map((cinema) => (
                <option key={cinema.cinemaId} value={cinema.cinemaId}>
                  {cinema.cinemaName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.cinema}</Form.Control.Feedback>
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

