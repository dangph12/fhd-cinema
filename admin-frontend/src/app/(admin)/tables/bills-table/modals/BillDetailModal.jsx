import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { BillContext } from '../context/BillContext'

function BillDetailModal({ billId, show, onHide }) {
  const { state } = useContext(BillContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedBill, setSelectedBill] = useState({
    billId: '',
    billAmount: '',
    billCreatedAt: '',
    bookingId: '',
    vouchers: [],
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (billId) {
      const bill = state.bills.find((bill) => bill.billId === billId)
      setSelectedBill({
        billId: bill.billId,
        billAmount: bill.billAmount,
        billCreatedAt: bill.billCreatedAt,
        bookingId: bill.bookingDto.bookingId,
        vouchers: bill.vouchers,
      })
    }
  }, [billId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedBill({
      billId: '',
      billAmount: '',
      billCreatedAt: '',
      bookingId: '',
      vouchers: [],
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
            <Form.Label>Bill Id</Form.Label>
            <Form.Control readOnly type="text" value={selectedBill.billId} />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Bill Amount</Form.Label>
            <Form.Control readOnly type="text" value={selectedBill.billAmount} />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Bill Created At</Form.Label>
            <Form.Control readOnly type="text" value={selectedBill.billCreatedAt} />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Booking Id</Form.Label>
            <Form.Control readOnly type="text" value={selectedBill.bookingId} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default BillDetailModal
