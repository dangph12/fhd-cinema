import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { CustomerContext } from '../context/CustomerContext'

function UpdateCustomerModal({ customerId, show, fetchCustomers, onHide }) {
  const { state } = useContext(CustomerContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({ customerName: '', customerType: 0 })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // setForm by customerId
  useEffect(() => {
    if (customerId) {
      const customer = state.customers.find((customer) => customer.customerId === customerId)
      setForm(customer)
    }
  }, [customerId])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const validateForm = () => {
    const newErrors = {}
    if (!form.customerName) newErrors.customerName = 'Customer name is required'
    if (!form.customerType) newErrors.customerType = 'Customer type is required'
    if (!form.customerPassword && !form.customerId) newErrors.customerPassword = 'Customer password is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ customerName: '', customerType: '' })
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
      const { customerId, customerPassword, ...updateData } = form
      fetch(`http://localhost:8080/customers/${customerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetchCustomers()
          } else {
            console.error('Failed to update the customer')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      onHide()
      setForm({ customerName: '', customerType: '' })
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
            <Form.Label>Customer name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('customerName', e.target.value)}
              placeholder="Customer name"
              name="customerName"
              value={form.customerName}
              isInvalid={!!errors.customerName}
            />
            <Form.Control.Feedback type="invalid">{errors.customerName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Customer type</Form.Label>
            <Form.Select
              required
              name="customerType"
              onChange={(e) => setField('customerType', Number(e.target.value))}
              className="bg-body text-dark border-secondary"
              value={form.customerType}
              isInvalid={!!errors.customerType}>
              <option value="">Select customer type</option>
              <option value={1}>Customer</option>
              <option value={2}>Staff</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.customerType}</Form.Control.Feedback>
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

export default UpdateCustomerModal
