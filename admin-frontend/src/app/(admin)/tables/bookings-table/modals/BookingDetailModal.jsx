import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { BookingContext } from '../context/BookingContext'

function BookingDetailModal({ bookingId, show, onHide }) {
  const { state } = useContext(BookingContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState({
    movie: '',
    showtime: '',
    screen: '',
    cinema: '',
    seats: [],
    snacks: [],
    price: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (bookingId) {
      const booking = state.bookings.find((booking) => booking.bookingId === bookingId)
      setSelectedBooking({
        movie: booking.movie.movieTitle,
        showtime: booking.showtime.showtimeAt,
        screen: booking.showtime.screen.screenName,
        cinema: booking.showtime.screen.cinema.cinemaName + ' - ' + booking.showtime.screen.cinema.location.locationName,
        seats: booking.tickets.map(ticket => ticket.seat.seatName),
        snacks: booking.snacks.map(snack => snack.snackName),
        price: booking.bookingPrice,
      })
    }
  }, [bookingId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedBooking({
      movie: '',
      showtime: '',
      screen: '',
      cinema: '',
      seats: [],
      snacks: [],
      price: '',
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
            <Form.Label>Movie</Form.Label>
            <Form.Control readOnly type="text" value={selectedBooking.movie} />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Showtime</Form.Label>
            <Form.Control readOnly type="text" value={selectedBooking.showtime} />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Screen</Form.Label>
            <Form.Control readOnly type="text" value={selectedBooking.screen} />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Cinema</Form.Label>
            <Form.Control readOnly type="text" value={selectedBooking.cinema} />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Seats</Form.Label>
            <Form.Control
              readOnly
              type="text"
              value={selectedBooking.seats.join(", ")}
            />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Snacks</Form.Label>
            <Form.Control
              readOnly
              type="text"
              value={selectedBooking.snacks.join(", ")}
            />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Price</Form.Label>
            <Form.Control readOnly type="text" value={selectedBooking.price} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default BookingDetailModal
