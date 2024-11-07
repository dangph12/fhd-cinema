import React from 'react'
import { Modal, Button, Container, Row, Col, Table } from 'react-bootstrap'

const SaleDetailModal = ({ show, onHide, booking }) => {
  if (!booking) return null

  // Render danh sách ghế
  const renderTickets = () => {
    return booking.tickets.map((ticket, index) => (
      <tr key={ticket.ticketId}>
        <td>{index + 1}</td>
        <td>{ticket.seat.seatType.seatTypeName}</td>
        <td>{ticket.seat.seatName}</td>
        <td>{ticket.ticketPrice.toLocaleString()} VND</td>
      </tr>
    ))
  }

  // Render danh sách đồ ăn kèm
  const renderSnacks = () => {
    const snackCounts = {}
    booking.snacks.forEach((snack) => {
      snackCounts[snack.snackName] = (snackCounts[snack.snackName] || 0) + 1
    })
    return Object.keys(snackCounts).map((snackName, index) => (
      <tr key={index}>
        <td>{snackName}</td>
        <td>{snackCounts[snackName]}x {booking.snacks[0].snackPrice.toLocaleString()} VND</td>
      </tr>
    ))
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Booking Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col><strong>Customer Name:</strong> {booking.customerName}</Col>
            <Col><strong>Phone:</strong> {booking.customerPhone}</Col>
          </Row>
          <Row>
            <Col><strong>Email:</strong> {booking.customerEmail}</Col>
            <Col><strong>Booking ID:</strong> {booking.bookingId}</Col>
          </Row>
          <Row>
            <Col><strong>Movie Title:</strong> {booking.movieTitle}</Col>
            <Col><strong>Cinema:</strong> {booking.showtime.screen.cinema.cinemaName}</Col>
          </Row>
          <Row>
            <Col><strong>Booking Date:</strong> {new Date(booking.bookingCreateAt).toLocaleString()}</Col>
            <Col><strong>Total Price:</strong> {booking.bookingPrice.toLocaleString()} VND</Col>
          </Row>

          <h5 className="mt-4">Tickets</h5>
          <Table striped bordered>
            <thead>
              <tr>
                <th>No</th>
                <th>Seat Type</th>
                <th>Seat Name</th>
                <th>Ticket Price</th>
              </tr>
            </thead>
            <tbody>{renderTickets()}</tbody>
          </Table>

          <Row className="mt-3">
            <Col><strong>Ticket Quantity:</strong> {booking.tickets.length}</Col>
          </Row>

          <h5>Snacks</h5>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Snack</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{renderSnacks()}</tbody>
          </Table>

        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SaleDetailModal
