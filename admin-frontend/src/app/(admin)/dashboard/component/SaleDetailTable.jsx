import React, { useContext, useEffect, useState } from 'react'
import { Container, Table, Button, Dropdown } from 'react-bootstrap'
import { SaleContext } from '../context/SaleContext'
import TablePagination from '../../tables/common/TablePagination'
import SaleDetailModal from '../modals/SaleDetailModal'

const SaleDetailTable = () => {
  const { state, dispatch, fetchBookings } = useContext(SaleContext)
  const [showModal, setShowModal] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState(null)

  const pageSize = 10 // hoặc giá trị số trang mong muốn

  useEffect(() => {
    fetchBookings(); // Fetch bookings khi component mount hoặc trang thay đổi
  }, [state.currentPage, state.filters.sortBy, state.filters.sortDirection]); // Gọi lại khi sortBy hoặc sortDirection thay đổi

  // Hàm xử lý thay đổi sắp xếp
  const handleSortChange = (sortBy, sortDirection) => {
    dispatch({ type: 'SET_FILTERS', payload: { sortBy, sortDirection } })
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 }) // Reset về trang đầu khi thay đổi sắp xếp
    fetchBookings()
  }

  const handleShowDetails = (booking) => {
    setSelectedBooking(booking)
    setShowModal(true)
  }

  return (
    <Container className="pt-3">
      <div className="d-flex justify-content-between align-items-center">
        <h4>Total Revenue: {state.totalPrice.toLocaleString()} VND</h4>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-sort">
            Sort Options
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleSortChange('bookingCreateAt', 'DESC')}>
              Show in descending order by Booking Date
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('bookingCreateAt', 'ASC')}>
              Show in ascending order by Booking Date
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('bookingPrice', 'DESC')}>
              Show in descending order by Booking Price
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('bookingPrice', 'ASC')}>
              Show in ascending order by Booking Price
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
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
                  <Button variant="primary" onClick={() => handleShowDetails(booking)}>Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TablePagination state={state} dispatch={dispatch} fetch={fetchBookings} />

      {/* Modal for Booking Details */}
      {selectedBooking && (
        <SaleDetailModal
          show={showModal}
          onHide={() => setShowModal(false)}
          booking={selectedBooking}
        />
      )}
    </Container>
  )
}

export default SaleDetailTable
