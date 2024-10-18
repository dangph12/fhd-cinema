import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table';
import { AccountContext } from '../context/AccountContext';
import DeleteAccountModal from '../modals/DeleteAccountModal';
import CreateAccountModal from '../modals/CreateAccountModal';
import UpdateAccountModal from '../modals/UpdateAccountModal';
import AccountDetailModal from '../modals/AccountDetailModal';
import TablePagination from '../../common/TablePagination';

const AccountDetailTable = () => {
  const { state, dispatch, fetchAccounts, updateQueryParams } = useContext(AccountContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ accountId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ accountId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ accountId: null, show: false })
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({
        row: {
          original: { accountId },
        },
      }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ accountId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Account Name',
      accessorKey: 'accountName',
    },
    {
      header: 'Account Type',
      accessorKey: 'accountType',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({
        row: {
          original: { accountId },
        },
      }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ accountId, show: true })}>
          Update
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({
        row: {
          original: { accountId },
        },
      }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ accountId, show: true })}>
          Delete
        </Button>
      ),
    },
  ];

  if (!state || !state.accounts) {
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
                  <CardTitle as="h4">Accounts Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create account
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Accounts Table */}
              <ReactTable columns={columns} data={state.accounts} />
              <TablePagination state={state} dispatch={dispatch} fetch={fetchAccounts} updateQueryParams={updateQueryParams} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteAccountModal
        accountId={showDeleteModal.accountId}
        show={showDeleteModal.show}
        fetchAccounts={fetchAccounts}
        onHide={() => setShowDeleteModal({ accountId: null, show: false })}
      />
      <CreateAccountModal
        show={showCreateModal.show}
        fetchAccounts={fetchAccounts}
        onHide={() => setShowCreateModal({ show: false })}
      />
      <UpdateAccountModal
        accountId={showUpdateModal.accountId}
        show={showUpdateModal.show}
        fetchAccounts={fetchAccounts}
        onHide={() => setShowUpdateModal({ accountId: null, show: false })}
      />
      <AccountDetailModal
        accountId={showDetailModal.accountId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ accountId: null, show: false })}
      />
    </Container>
  );
};

export default AccountDetailTable;