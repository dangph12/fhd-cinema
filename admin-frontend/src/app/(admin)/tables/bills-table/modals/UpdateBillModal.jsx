import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { BillContext } from '../context/BillContext'

function UpdateBillModal({ billId, show, fetchBills, onHide }) {
  const { state } = useContext(BillContext)

  const [updateShow, setUpdateShow] = useState(false)

  const [form, setForm] = useState({ billName: '', billType: 0 })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setUpdateShow(show)
  }, [show])

  // setForm by billId
  useEffect(() => {
    if (billId) {
      const bill = state.bills.find((bill) => bill.billId === billId)
      setForm(bill)
    }
  }, [billId])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }
  const validateForm = () => {
    const newErrors = {}
    if (!form.billName) newErrors.billName = 'Bill name is required'
    if (!form.billType) newErrors.billType = 'Bill type is required'
    if (!form.billPassword && !form.billId) newErrors.billPassword = 'Bill password is required'
    return newErrors
  }

  const closeUpdateShow = () => {
    onHide()
    setUpdateShow(false)
    setForm({ billName: '', billType: '' })
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
      const { billId, billPassword, ...updateData } = form
      fetch(`http://localhost:8080/bills/${billId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetchBills()
          } else {
            console.error('Failed to update the bill')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      onHide()
      setForm({ billName: '', billType: '' })
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
              onChange={(e) => setField('billType', Number(e.target.value))}
              className="bg-body text-dark border-secondary"
              value={form.billType}
              isInvalid={!!errors.billType}>
              <option value="">Select bill type</option>
              <option value={1}>Customer</option>
              <option value={2}>Staff</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.billType}</Form.Control.Feedback>
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

export default UpdateBillModal
