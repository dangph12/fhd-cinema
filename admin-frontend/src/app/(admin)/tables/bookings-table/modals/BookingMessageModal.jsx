import React, { useState, useEffect, useContext } from 'react'
import { BookingContext } from '../context/BookingContext'
import { Modal, Button } from 'react-bootstrap'

function BookingMessageModal({ show, onHide }) {
  const { state } = useContext(BookingContext)
  const [messageShow, setMessageShow] = useState(show)

  useEffect(() => {
    setMessageShow(show)
  }, [show])

  return (
    <>
      {state.message && (
        <Modal show={messageShow} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Message Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {state.message.bookingDto && (
              <>
                <p>
                  <strong>Booking ID: </strong> {state.message.bookingDto.bookingId}
                </p>
                <p>
                  <strong>Showtime: </strong> {state.message.bookingDto.showtime.showtimeAt} - {state.message.bookingDto.showtime.screen.screenName} -{' '}
                  {state.message.bookingDto.showtime.screen.cinema.cinemaName} - {state.message.bookingDto.showtime.screen.cinema.location.locationName}
                </p>
              </>
            )}
            <p>
              <strong>Bill ID: </strong> {state.message.billId}
            </p>
            <p>
              <strong>Bill Amount: </strong> {state.message.billAmount}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}

export default BookingMessageModal