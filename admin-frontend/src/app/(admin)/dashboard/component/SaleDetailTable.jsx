import React, { useContext, useEffect } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { SaleContext } from '../context/SaleContext'
import TablePagination from '../../tables/common/TablePagination'

const SaleDetailTable = () => {
  const { state, dispatch, fetchBookings } = useContext(SaleContext)

  const pageSize = 10 // hoặc giá trị số trang mong muốn

  useEffect(() => {
    fetchBookings(); // Fetch bookings khi component mount hoặc trang thay đổi
  }, [state.currentPage]);

  return (
    <Container className="pt-3">
      <h4>Total Revenue: {state.totalPrice.toLocaleString()} VND</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Customer Name</th>
            <th>Movie Title</th>
            <th>Cinema</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Booking ID</th>
            <th>Booking Date</th>
            <th>Booking Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.bookings.map((booking, index) => (
            <tr key={booking.bookingId}>
              <td>{index + 1 + (state.currentPage - 1) * pageSize}</td>
              <td>{booking.customerName}</td>
              <td>{booking.movieTitle}</td>
              <td>{booking.showtime.screen.cinema.cinemaName}</td>
              <td>{booking.customerPhone}</td>
              <td>{booking.customerEmail}</td>
              <td>{booking.bookingId}</td>
              <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
              <td>{booking.bookingPrice.toLocaleString()} VND</td>
              <td>
                <Button variant="primary">Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TablePagination state={state} dispatch={dispatch} fetch={fetchBookings} />
    </Container>
  )
}

export default SaleDetailTable
