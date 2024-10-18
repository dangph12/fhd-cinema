import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table';
import { ShowtimeContext } from '../context/ShowtimeContext';
import DeleteShowtimeModal from '../modals/DeleteShowtimeModal';
import CreateShowtimeModal from '../modals/CreateShowtimeModal';
import UpdateShowtimeModal from '../modals/UpdateShowtimeModal';
import ShowtimeDetailModal from '../modals/ShowtimeDetailModal';
import TablePagination from '../../common/TablePagination';

const ShowtimeDetailTable = () => {
  const { state, dispatch, fetchShowtimes, updateQueryParams } = useContext(ShowtimeContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ showtimeId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ showtimeId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ showtimeId: null, show: false })
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({
        row: {
          original: { showtimeId },
        },
      }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ showtimeId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Showtime Name',
      accessorKey: 'showtimeName',
    },
    {
      header: 'Showtime Type',
      accessorKey: 'showtimeType',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({
        row: {
          original: { showtimeId },
        },
      }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ showtimeId, show: true })}>
          Update
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({
        row: {
          original: { showtimeId },
        },
      }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ showtimeId, show: true })}>
          Delete
        </Button>
      ),
    },
  ];

  if (!state || !state.showtimes) {
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
                  <CardTitle as="h4">Showtimes Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create showtime
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Showtimes Table */}
              <ReactTable columns={columns} data={state.showtimes} />
              <TablePagination state={state} dispatch={dispatch} fetch={fetchShowtimes} updateQueryParams={updateQueryParams} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteShowtimeModal
        showtimeId={showDeleteModal.showtimeId}
        show={showDeleteModal.show}
        fetchShowtimes={fetchShowtimes}
        onHide={() => setShowDeleteModal({ showtimeId: null, show: false })}
      />
      <CreateShowtimeModal
        show={showCreateModal.show}
        fetchShowtimes={fetchShowtimes}
        onHide={() => setShowCreateModal({ show: false })}
      />
      <UpdateShowtimeModal
        showtimeId={showUpdateModal.showtimeId}
        show={showUpdateModal.show}
        fetchShowtimes={fetchShowtimes}
        onHide={() => setShowUpdateModal({ showtimeId: null, show: false })}
      />
      <ShowtimeDetailModal
        showtimeId={showDetailModal.showtimeId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ showtimeId: null, show: false })}
      />
    </Container>
  );
};

export default ShowtimeDetailTable;