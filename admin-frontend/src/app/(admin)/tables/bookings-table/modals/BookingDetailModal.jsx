import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { BookingContext } from '../context/BookingContext'

function BookingDetailModal({ bookingId, show, onHide }) {
  const { state } = useContext(BookingContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState({
    bookingName: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (bookingId) {
      const booking = state.bookings.find((booking) => booking.bookingId === bookingId)
      setSelectedBooking(booking)
    }
  }, [bookingId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedBooking({
      bookingName: '',
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
            <Form.Label>Booking Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedBooking.bookingName} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default BookingDetailModal
