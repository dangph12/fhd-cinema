import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

function ChooseCustomer({ errors, form, setField }) {
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/customers')
      .then((response) => response.json())
      .then((json) => {
        setCustomers(json.data)
      })
  }, [])

  return (
    <Form.Group className="m-2">
      <Form.Label>Customer</Form.Label>
      <Form.Select
        required
        name="customerId"
        onChange={(e) => setField('customerId', e.target.value)}
        className="bg-body text-dark border-secondary"
        value={form.customerId}
        isInvalid={!!errors.customerId}
        style={{ maxHeight: '150px', overflowY: 'auto' }}>
        <option key="default" value="">
          Select customer
        </option>
        {customers.map((customer, index) => (
          <option key={index} value={customer.customerId}>
            {customer.customerName}
          </option>
        ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid">{errors.customerId}</Form.Control.Feedback>
    </Form.Group>
  )
}

export default ChooseCustomer
