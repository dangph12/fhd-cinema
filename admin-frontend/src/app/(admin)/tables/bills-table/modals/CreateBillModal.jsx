import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

function CreateBillModal({ show, fetchBills, onHide }) {
  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({ billName: '', billType: '' })
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
    setForm({ billName: '', billPassword: '', billType: '' })
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.billName) newErrors.billName = 'Bill name is required'
    if (!form.billType) newErrors.billType = 'Bill type is required'
    return newErrors
  }

  const handleCreate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      fetch('http://localhost:8080/bills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            fetchBills()
          } else {
            console.error('Failed to create the bill')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setCreateShow(false)
      onHide()
      setForm({ billName: '', billPassword: '', billType: '' })
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
            <Form.Label>Bill name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('billName', e.target.value)}
              placeholder="Bill name"
              name="billName"
              value={form.billName}
              isInvalid={!!errors.billName}
            />
            <Form.Control.Feedback type="invalid">{errors.billName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Bill type</Form.Label>
            <Form.Select
              required
              name="billType"
              onChange={(e) => setField('billType', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.billType}
              isInvalid={!!errors.billType}>
              <option value="">Select bill type</option>
              <option value={'Admin'}>Admin</option>
              <option value={'Customer'}>Customer</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.billType}</Form.Control.Feedback>
          </Form.Group>
          {form.billType == 'Customer' ? (
            <>
              <Form.Group className="m-2">
                <Form.Label>Customer name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => setField('customerName', e.target.value)}
                  placeholder="Customer name"
                  name="billPassword"
                  value={form.billPassword}
                  isInvalid={!!errors.billPassword}
                />
                <Form.Control.Feedback type="invalid">{errors.billPassword}</Form.Control.Feedback>
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

export default CreateBillModal
