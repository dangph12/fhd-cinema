import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table';
import { SeatContext } from '../context/SeatContext';
import DeleteSeatModal from '../modals/DeleteSeatModal';
import CreateSeatModal from '../modals/CreateSeatModal';
import UpdateSeatModal from '../modals/UpdateSeatModal';
import SeatDetailModal from '../modals/SeatDetailModal';
import TablePagination from '../../common/TablePagination';

const SeatDetailTable = () => {
  const { state, dispatch, fetchSeats, updateQueryParams } = useContext(SeatContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ seatId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ seatId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ seatId: null, show: false })
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({
        row: {
          original: { seatId },
        },
      }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ seatId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Seat Name',
      accessorKey: 'seatName',
    },
    {
      header: 'Seat Type',
      accessorKey: 'seatType.seatTypeName',
    },
    {
      header: 'Seat Type',
      accessorKey: 'seatType.seatTypePrice',
    },
    {
      header: 'Booked',
      accessorKey: 'booked',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({
        row: {
          original: { seatId },
        },
      }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ seatId, show: true })}>
          Update
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({
        row: {
          original: { seatId },
        },
      }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ seatId, show: true })}>
          Delete
        </Button>
      ),
    },
  ];

  if (!state || !state.seats) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4">Seats Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create seat
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Seats Table */}
              <ReactTable columns={columns} data={state.seats} />
              <TablePagination state={state} dispatch={dispatch} fetch={fetchSeats} updateQueryParams={updateQueryParams} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteSeatModal
        seatId={showDeleteModal.seatId}
        show={showDeleteModal.show}
        fetchSeats={fetchSeats}
        onHide={() => setShowDeleteModal({ seatId: null, show: false })}
      />
      <CreateSeatModal
        show={showCreateModal.show}
        fetchSeats={fetchSeats}
        onHide={() => setShowCreateModal({ show: false })}
      />
      <UpdateSeatModal
        seatId={showUpdateModal.seatId}
        show={showUpdateModal.show}
        fetchSeats={fetchSeats}
        onHide={() => setShowUpdateModal({ seatId: null, show: false })}
      />
      <SeatDetailModal
        seatId={showDetailModal.seatId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ seatId: null, show: false })}
      />
    </Container>
  );
};

export default SeatDetailTable;