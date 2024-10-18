import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table';
import { CustomerContext } from '../context/CustomerContext';
import DeleteCustomerModal from '../modals/DeleteCustomerModal';
import CreateCustomerModal from '../modals/CreateCustomerModal';
import UpdateCustomerModal from '../modals/UpdateCustomerModal';
import CustomerDetailModal from '../modals/CustomerDetailModal';
import TablePagination from '../../common/TablePagination';

const CustomerDetailTable = () => {
  const { state, dispatch, fetchCustomers, updateQueryParams } = useContext(CustomerContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ customerId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ customerId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ customerId: null, show: false })
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({
        row: {
          original: { customerId },
        },
      }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ customerId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Customer Name',
      accessorKey: 'customerName',
    },
    {
      header: 'Customer Type',
      accessorKey: 'customerType',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({
        row: {
          original: { customerId },
        },
      }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ customerId, show: true })}>
          Update
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({
        row: {
          original: { customerId },
        },
      }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ customerId, show: true })}>
          Delete
        </Button>
      ),
    },
  ];

  if (!state || !state.customers) {
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
                  <CardTitle as="h4">Customers Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create customer
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Customers Table */}
              <ReactTable columns={columns} data={state.customers} />
              <TablePagination state={state} dispatch={dispatch} fetch={fetchCustomers} updateQueryParams={updateQueryParams} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteCustomerModal
        customerId={showDeleteModal.customerId}
        show={showDeleteModal.show}
        fetchCustomers={fetchCustomers}
        onHide={() => setShowDeleteModal({ customerId: null, show: false })}
      />
      <CreateCustomerModal
        show={showCreateModal.show}
        fetchCustomers={fetchCustomers}
        onHide={() => setShowCreateModal({ show: false })}
      />
      <UpdateCustomerModal
        customerId={showUpdateModal.customerId}
        show={showUpdateModal.show}
        fetchCustomers={fetchCustomers}
        onHide={() => setShowUpdateModal({ customerId: null, show: false })}
      />
      <CustomerDetailModal
        customerId={showDetailModal.customerId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ customerId: null, show: false })}
      />
    </Container>
  );
};

export default CustomerDetailTable;