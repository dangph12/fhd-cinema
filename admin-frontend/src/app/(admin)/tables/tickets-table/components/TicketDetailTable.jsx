import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table';
import { TicketContext } from '../context/TicketContext';
import DeleteTicketModal from '../modals/DeleteTicketModal';
import CreateTicketModal from '../modals/CreateTicketModal';
import UpdateTicketModal from '../modals/UpdateTicketModal';
import TicketDetailModal from '../modals/TicketDetailModal';
import TablePagination from '../../common/TablePagination';

const TicketDetailTable = () => {
  const { state, dispatch, fetchTickets, updateQueryParams } = useContext(TicketContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ ticketId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ ticketId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ ticketId: null, show: false })
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({
        row: {
          original: { ticketId },
        },
      }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ ticketId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Ticket Name',
      accessorKey: 'ticketName',
    },
    {
      header: 'Ticket Type',
      accessorKey: 'ticketType',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({
        row: {
          original: { ticketId },
        },
      }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ ticketId, show: true })}>
          Update
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({
        row: {
          original: { ticketId },
        },
      }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ ticketId, show: true })}>
          Delete
        </Button>
      ),
    },
  ];

  if (!state || !state.tickets) {
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
                  <CardTitle as="h4">Tickets Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create ticket
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Tickets Table */}
              <ReactTable columns={columns} data={state.tickets} />
              <TablePagination state={state} dispatch={dispatch} fetch={fetchTickets} updateQueryParams={updateQueryParams} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteTicketModal
        ticketId={showDeleteModal.ticketId}
        show={showDeleteModal.show}
        fetchTickets={fetchTickets}
        onHide={() => setShowDeleteModal({ ticketId: null, show: false })}
      />
      <CreateTicketModal
        show={showCreateModal.show}
        fetchTickets={fetchTickets}
        onHide={() => setShowCreateModal({ show: false })}
      />
      <UpdateTicketModal
        ticketId={showUpdateModal.ticketId}
        show={showUpdateModal.show}
        fetchTickets={fetchTickets}
        onHide={() => setShowUpdateModal({ ticketId: null, show: false })}
      />
      <TicketDetailModal
        ticketId={showDetailModal.ticketId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ ticketId: null, show: false })}
      />
    </Container>
  );
};

export default TicketDetailTable;