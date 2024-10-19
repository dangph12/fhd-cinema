import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { AccountContext } from '../context/AccountContext'

function UpdateAccountModal({ accountId, show, fetchAccounts, onHide }) {
  const { state } = useContext(AccountContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({
    accountName: '',
    accountType: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // setForm by accountId
  useEffect(() => {
    if (accountId) {
      const account = state.accounts.find((account) => account.accountId === accountId)
      setForm(account)
    }
  }, [accountId])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const validateForm = () => {
    const newErrors = {}
    if (!form.accountName) newErrors.accountName = 'Account name is required'
    if (!form.accountType) newErrors.accountType = 'Account type is required'
    if (!form.customerName) newErrors.customerName = 'Customer name is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ accountName: '', accountType: '' })
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
      const { accountId, accountPassword, ...updateData } = form
      fetch(`http://localhost:8080/accounts/${accountId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetchAccounts()
          } else {
            console.error('Failed to update the account')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      onHide()
      setForm({ accountName: '', accountType: '' })
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
            <Form.Label>Account type</Form.Label>
            <Form.Select
              required
              name="accountType"
              onChange={(e) => setField('accountType', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.accountType}
              isInvalid={!!errors.accountType}>
              <option value="">Select account type</option>
              <option value={"Admin"}>Admin</option>
              <option value={"Customer"}>Customer</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.accountType}</Form.Control.Feedback>
          </Form.Group>
          {form.accountType === 'Customer' && (
            <>
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
                <Form.Label>Customer email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => setField('customerEmail', e.target.value)}
                  placeholder="Customer email"
                  name="customerEmail"
                  value={form.customerEmail}
                />
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>Customer phone</Form.Label>
                <Form.Control
                  type="tel"
                  onChange={(e) => setField('customerPhone', e.target.value)}
                  placeholder="Customer phone"
                  name="customerPhone"
                  value={form.customerPhone}
                />
              </Form.Group>
            </>
          )}
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

export default UpdateAccountModal
