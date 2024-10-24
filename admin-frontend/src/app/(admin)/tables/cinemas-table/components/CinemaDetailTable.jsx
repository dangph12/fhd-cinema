import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table';
import { CinemaContext } from '../context/CinemaContext';
import DeleteCinemaModal from '../modals/DeleteCinemaModal';
import CreateCinemaModal from '../modals/CreateCinemaModal';
import UpdateCinemaModal from '../modals/UpdateCinemaModal';
import CinemaDetailModal from '../modals/CinemaDetailModal';
import TablePagination from '../../common/TablePagination';

const CinemaDetailTable = () => {
  const { state, dispatch, fetchCinemas, updateSearchParams } = useContext(CinemaContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ cinemaId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ cinemaId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ cinemaId: null, show: false })
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({
        row: {
          original: { cinemaId },
        },
      }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ cinemaId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Cinema Name',
      accessorKey: 'cinemaName',
    },
    {
      header: 'Location Name',
      accessorKey: 'location.locationName',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({
        row: {
          original: { cinemaId },
        },
      }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ cinemaId, show: true })}>
          Update
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({
        row: {
          original: { cinemaId },
        },
      }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ cinemaId, show: true })}>
          Delete
        </Button>
      ),
    },
  ];

  if (!state || !state.cinemas) {
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
                  <CardTitle as="h4">Cinemas Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create cinema
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Cinemas Table */}
              <ReactTable columns={columns} data={state.cinemas} />
              <TablePagination state={state} dispatch={dispatch} fetch={fetchCinemas} updateSearchParams={updateSearchParams} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteCinemaModal
        cinemaId={showDeleteModal.cinemaId}
        show={showDeleteModal.show}
        fetchCinemas={fetchCinemas}
        onHide={() => setShowDeleteModal({ cinemaId: null, show: false })}
      />
      <CreateCinemaModal
        show={showCreateModal.show}
        fetchCinemas={fetchCinemas}
        onHide={() => setShowCreateModal({ show: false })}
      />
      <UpdateCinemaModal
        cinemaId={showUpdateModal.cinemaId}
        show={showUpdateModal.show}
        fetchCinemas={fetchCinemas}
        onHide={() => setShowUpdateModal({ cinemaId: null, show: false })}
      />
      <CinemaDetailModal
        cinemaId={showDetailModal.cinemaId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ cinemaId: null, show: false })}
      />
    </Container>
  );
};

export default CinemaDetailTable;