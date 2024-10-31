import React, { useState, useContext, useEffect } from 'react'
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap'
import ReactTable from '@/components/Table'
import { BookingContext } from '../context/BookingContext'
import DeleteBookingModal from '../modals/DeleteBookingModal'
import CreateBookingModal from '../modals/CreateBookingModal'
import UpdateBookingModal from '../modals/UpdateBookingModal'
import BookingDetailModal from '../modals/BookingDetailModal'
import BookingMessageModal from '../modals/BookingMessageModal'
import TablePagination from '../../common/TablePagination'

const BookingDetailTable = () => {
  const { state, dispatch, fetchBookings, updateQueryParams } = useContext(BookingContext)
  const [showDeleteModal, setShowDeleteModal] = useState({ bookingId: null, show: false })
  const [showUpdateModal, setShowUpdateModal] = useState({ bookingId: null, show: false })
  const [showDetailModal, setShowDetailModal] = useState({ bookingId: null, show: false })
  const [showCreateModal, setShowCreateModal] = useState({ show: false })
  const [showMessageModal, setShowMessageModal] = useState({ show: false })

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({
        row: {
          original: { bookingId },
        },
      }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ bookingId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Booking Id',
      accessorKey: 'bookingId',
    },
    {
      header: 'Booking Movie',
      accessorKey: 'movie.movieTitle',
    },
    {
      header: 'Booking Showtime',
      accessorKey: 'showtime.showtimeAt',
    },
    {
      header: 'Booking Created At',
      accessorKey: 'bookingCreateAt',
    },
    // {
    //   id: 'update',
    //   header: 'Update',
    //   cell: ({
    //     row: {
    //       original: { bookingId },
    //     },
    //   }) => (
    //     <Button variant="warning" onClick={() => setShowUpdateModal({ bookingId, show: true })}>
    //       Update
    //     </Button>
    //   ),
    // },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({
        row: {
          original: { bookingId },
        },
      }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ bookingId, show: true })}>
          Delete
        </Button>
      ),
    },
  ]

  useEffect(() => {
    setShowMessageModal({ show: Object.keys(state.message).length > 0 })
  }, [state.message])

  const onHide = () => {
    setShowMessageModal({ show: false })
    dispatch({ type: 'SET_MESSAGE', payload: {} })
  }

  if (!state || !state.bookings) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4">Bookings Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create booking
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Bookings Table */}
              <ReactTable columns={columns} data={state.bookings} />
              <TablePagination state={state} dispatch={dispatch} fetch={fetchBookings} updateQueryParams={updateQueryParams} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteBookingModal
        bookingId={showDeleteModal.bookingId}
        show={showDeleteModal.show}
        fetchBookings={fetchBookings}
        onHide={() => setShowDeleteModal({ bookingId: null, show: false })}
      />
      <CreateBookingModal show={showCreateModal.show} fetchBookings={fetchBookings} onHide={() => setShowCreateModal({ show: false })} />
      <UpdateBookingModal
        bookingId={showUpdateModal.bookingId}
        show={showUpdateModal.show}
        fetchBookings={fetchBookings}
        onHide={() => setShowUpdateModal({ bookingId: null, show: false })}
      />
      <BookingDetailModal
        bookingId={showDetailModal.bookingId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ bookingId: null, show: false })}
      />
      <BookingMessageModal show={showMessageModal.show} onHide={onHide} />
    </Container>
  )
}

export default BookingDetailTable
