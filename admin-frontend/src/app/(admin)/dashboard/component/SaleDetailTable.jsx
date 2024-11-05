import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { SaleContext } from '../context/SaleContext';

const SaleDetailTable = () => {
  const { state } = useContext(SaleContext);

  return (
    <Container className="pt-3">
      <h4>Total Revenue: {state.totalPrice.toLocaleString()} VND</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Customer Name</th>
            <th>Movie Title</th>
            <th>Booking Date</th>
            <th>Ticket</th>
            <th>Snacks</th>
            <th>Ticket Quantity</th>
            <th>Booking Price</th>
          </tr>
        </thead>
        <tbody>
          {state.bookings.map((booking, index) => (
            <tr key={booking.bookingId}>
              <td>{index + 1}</td>
              <td>{booking.customerName}</td>
              <td>{booking.movieTitle}</td>
              <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
              <td>
                {booking.tickets.map(ticket => 
                  `${ticket.seat.seatType.seatTypeName} (${ticket.seat.seatName})`
                ).join(', ')}
              </td>
              <td>
                {booking.snacks.map(snack => 
                  `${snack.snackName}`
                ).join(', ')}
              </td>
              <td>{booking.tickets.length}</td>
              <td>{booking.bookingPrice.toLocaleString()} VND</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SaleDetailTable;
