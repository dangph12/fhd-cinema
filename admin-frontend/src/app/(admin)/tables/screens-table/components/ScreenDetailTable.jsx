import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table';
import { ScreenContext } from '../context/ScreenContext';
import DeleteScreenModal from '../modals/DeleteScreenModal';
import CreateScreenModal from '../modals/CreateScreenModal';
import UpdateScreenModal from '../modals/UpdateScreenModal';
import ScreenDetailModal from '../modals/ScreenDetailModal';
import TablePagination from '../../common/TablePagination';

const ScreenDetailTable = () => {
  const { state, dispatch, fetchScreens, updateQueryParams } = useContext(ScreenContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ screenId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ screenId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ screenId: null, show: false })
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({
        row: {
          original: { screenId },
        },
      }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ screenId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Screen Name',
      accessorKey: 'screenName',
    },
    {
      header: 'Screen Type',
      accessorKey: 'cinema.cinemaName',
    },
    {
      header: 'Screen Type',
      accessorKey: 'cinema.location.locationName',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({
        row: {
          original: { screenId },
        },
      }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ screenId, show: true })}>
          Update
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({
        row: {
          original: { screenId },
        },
      }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ screenId, show: true })}>
          Delete
        </Button>
      ),
    },
  ];

  if (!state || !state.screens) {
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
                  <CardTitle as="h4">Screens Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create screen
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Screens Table */}
              <ReactTable columns={columns} data={state.screens} />
              <TablePagination state={state} dispatch={dispatch} fetch={fetchScreens} updateQueryParams={updateQueryParams} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteScreenModal
        screenId={showDeleteModal.screenId}
        show={showDeleteModal.show}
        fetchScreens={fetchScreens}
        onHide={() => setShowDeleteModal({ screenId: null, show: false })}
      />
      <CreateScreenModal
        show={showCreateModal.show}
        fetchScreens={fetchScreens}
        onHide={() => setShowCreateModal({ show: false })}
      />
      <UpdateScreenModal
        screenId={showUpdateModal.screenId}
        show={showUpdateModal.show}
        fetchScreens={fetchScreens}
        onHide={() => setShowUpdateModal({ screenId: null, show: false })}
      />
      <ScreenDetailModal
        screenId={showDetailModal.screenId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ screenId: null, show: false })}
      />
    </Container>
  );
};

export default ScreenDetailTable;