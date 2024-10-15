import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

function CreateAccountModal({ show, fetchAccounts, onHide }) {
  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({ accountName: '', accountPassword: '', accountType: '' })
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
    setForm({ accountName: '', accountPassword: '', accountType: '' })
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.accountName) newErrors.accountName = 'Account name is required'
    if (!form.accountType) newErrors.accountType = 'Account type is required'
    if (!form.accountPassword && !form.accountId) newErrors.accountPassword = 'Account password is required'
    return newErrors
  }

  const handleCreate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      fetch('http://localhost:8080/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            fetchAccounts()
          } else {
            console.error('Failed to create the account')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setCreateShow(false)
      onHide()
      setForm({ accountName: '', accountPassword: '', accountType: '' })
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
            <Form.Label>Account name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('accountName', e.target.value)}
              placeholder="Account name"
              name="accountName"
              value={form.accountName}
              isInvalid={!!errors.accountName}
            />
            <Form.Control.Feedback type="invalid">{errors.accountName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Account password</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('accountPassword', e.target.value)}
              placeholder="Account password"
              name="accountPassword"
              value={form.accountPassword}
              isInvalid={!!errors.accountPassword}
            />
            <Form.Control.Feedback type="invalid">{errors.accountPassword}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Account type</Form.Label>
            <Form.Select
              required
              name="accountType"
              onChange={(e) => setField('accountType', Number(e.target.value))}
              className="bg-body text-dark border-secondary"
              value={form.accountType}
              isInvalid={!!errors.accountType}>
              <option value="">Select account type</option>
              <option value={1}>Customer</option>
              <option value={2}>Staff</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.accountType}</Form.Control.Feedback>
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

export default CreateAccountModal
