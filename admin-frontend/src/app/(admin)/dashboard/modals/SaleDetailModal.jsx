import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { SaleContext } from '../context/SaleContext';

function SaleDetailModal({ bookingId, show, onHide }) {
  const { state } = useContext(SaleContext);
  const [detailShow, setDetailShow] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState({
    customerName: '',
    movieTitle: '',
    cinemaName: '',
    tickets: [],
    snacks: [],
    ticketQuantity: 0,
    customerPhone: '',
    customerEmail: '',
    bookingId: '',
    bookingCreateAt: '',
    bookingPrice: 0,
  });

  useEffect(() => {
    setDetailShow(show);
  }, [show]);

  useEffect(() => {
    if (bookingId) {
      const booking = state.bookings.find((b) => b.bookingId === bookingId);
      if (booking) {
        setSelectedBooking({
          customerName: booking.customerName,
          movieTitle: booking.movieTitle,
          cinemaName: booking.showtime.screen.cinema.cinemaName,
          tickets: booking.tickets,
          snacks: booking.snacks,
          ticketQuantity: booking.tickets.length,
          customerPhone: booking.customerPhone,
          customerEmail: booking.customerEmail,
          bookingId: booking.bookingId,
          bookingCreateAt: booking.bookingCreateAt,
          bookingPrice: booking.bookingPrice,
        });
      }
    }
  }, [bookingId, state.bookings]);

  const closeDetailShow = () => {
    onHide();
    setDetailShow(false);
    setSelectedBooking({
      customerName: '',
      movieTitle: '',
      cinemaName: '',
      tickets: [],
      snacks: [],
      ticketQuantity: 0,
      customerPhone: '',
      customerEmail: '',
      bookingId: '',
      bookingCreateAt: '',
      bookingPrice: 0,
    });
  };

  const formatTickets = () =>
    selectedBooking.tickets.map(
      (t) => `${t.seat.seatType.seatTypeName} ${t.seat.seatName}: ${t.ticketPrice.toLocaleString()} VND`
    ).join(', ');

  const formatSnacks = () =>
    selectedBooking.snacks.map(
      (s) => `${s.snackName}: ${s.snackPrice.toLocaleString()} VND`
    ).join(', ');

  return (
    <Modal fullscreen={true} show={detailShow} onHide={closeDetailShow}>
      <Modal.Header closeButton>
        <Modal.Title>Booking Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control readOnly type="text" value={selectedBooking.customerName} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Movie Title</Form.Label>
                  <Form.Control readOnly type="text" value={selectedBooking.movieTitle} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Cinema</Form.Label>
                  <Form.Control readOnly type="text" value={selectedBooking.cinemaName} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Tickets</Form.Label>
                  <Form.Control as="textarea" rows={2} readOnly value={formatTickets()} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Snacks</Form.Label>
                  <Form.Control as="textarea" rows={2} readOnly value={formatSnacks()} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Ticket Quantity</Form.Label>
                  <Form.Control readOnly type="text" value={selectedBooking.ticketQuantity} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control readOnly type="text" value={selectedBooking.customerPhone} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control readOnly type="text" value={selectedBooking.customerEmail} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Booking ID</Form.Label>
                  <Form.Control readOnly type="text" value={selectedBooking.bookingId} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Booking Date</Form.Label>
                  <Form.Control readOnly type="text" value={new Date(selectedBooking.bookingCreateAt).toLocaleString()} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="m-2">
                  <Form.Label>Booking Price</Form.Label>
                  <Form.Control readOnly type="text" value={`${selectedBooking.bookingPrice.toLocaleString()} VND`} />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeDetailShow}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SaleDetailModal;
