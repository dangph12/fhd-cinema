import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { NewsContext } from '../context/NewsContext'

function UpdateNewsModal({ newsId, show, fetchNews, onHide }) {
  const { state } = useContext(NewsContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({ newsName: '', newsType: 0 })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // setForm by newsId
  useEffect(() => {
    if (newsId) {
      const news = state.news.find((news) => news.newsId === newsId)
      setForm(news)
    }
  }, [newsId])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const validateForm = () => {
    const newErrors = {}
    if (!form.newsName) newErrors.newsName = 'News name is required'
    if (!form.newsType) newErrors.newsType = 'News type is required'
    if (!form.newsPassword && !form.newsId) newErrors.newsPassword = 'News password is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ newsName: '', newsType: '' })
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
      const { newsId, newsPassword, ...updateData } = form
      fetch(`http://localhost:8080/news/${newsId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetchNews()
          } else {
            console.error('Failed to update the news')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      onHide()
      setForm({ newsName: '', newsType: '' })
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
            <Form.Label>News name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('newsName', e.target.value)}
              placeholder="News name"
              name="newsName"
              value={form.newsName}
              isInvalid={!!errors.newsName}
            />
            <Form.Control.Feedback type="invalid">{errors.newsName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>News type</Form.Label>
            <Form.Select
              required
              name="newsType"
              onChange={(e) => setField('newsType', Number(e.target.value))}
              className="bg-body text-dark border-secondary"
              value={form.newsType}
              isInvalid={!!errors.newsType}>
              <option value="">Select news type</option>
              <option value={1}>Customer</option>
              <option value={2}>Staff</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.newsType}</Form.Control.Feedback>
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

export default UpdateNewsModal
