import React, { useState, useEffect, useContext } from 'react'
import { BookingContext } from '../context/BookingContext'
import { Modal } from 'react-bootstrap'

function MessageBookingModal({ show, onHide }) {
  const { state } = useContext(BookingContext)
  const [messageShow, setMessageShow] = useState(false)

  useEffect(() => {
    setMessageShow(show)
  }, [show])

  return (
    <Modal show={messageShow} onHide={() => onHide()}>
      <Modal.Header closeButton>
        <Modal.Title>Message Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
    </Modal>
  )
}

export default MessageBookingModal
