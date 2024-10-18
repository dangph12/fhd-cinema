import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { BillContext } from '../context/BillContext'

function BillDetailModal({ billId, show, onHide }) {
  const { state } = useContext(BillContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedBill, setSelectedBill] = useState({
    billId: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    console.log(billId)
    if (billId) {
      const bill = state.bills.find((bill) => bill.billId === billId)
      setSelectedBill({ billId: bill.billId })
      console.log(selectedBill)
    }
  }, [billId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedBill({
      billId: '',
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
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default BillDetailModal
