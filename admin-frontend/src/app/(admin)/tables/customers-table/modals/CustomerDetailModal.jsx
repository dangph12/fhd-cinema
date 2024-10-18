import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { CustomerContext } from '../context/CustomerContext'

function CustomerDetailModal({ customerId, show, onHide }) {
  const { state } = useContext(CustomerContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState({
    customerName: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (customerId) {
      const customer = state.customers.find((customer) => customer.customerId === customerId)
      setSelectedCustomer(customer)
    }
  }, [customerId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedCustomer({
      customerName: '',
    })
  }

  return (
    <Modal show={detailShow} onHide={() => closeDetailShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Detail Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="detailForm">
          <Form.Group className="m-2">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedCustomer.customerName} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default CustomerDetailModal
