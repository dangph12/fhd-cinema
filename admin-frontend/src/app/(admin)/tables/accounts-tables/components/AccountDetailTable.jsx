import React, { useState, useContext } from 'react'
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap'
import ReactTable from '@/components/Table'
import { AccountContext } from '../context/AccountContext'
import DeleteAccountModal from '../modals/DeleteAccountModal'

const AccountDetailTable = () => {
  const { state, fetchAccounts } = useContext(AccountContext)
  const [showDeleteModal, setShowDeleteModal] = useState({ accountId: null, show: false })
  const columns = [
    {
      header: 'accountName',
      accessorKey: 'accountName',
    },
    {
      header: 'accountType',
      accessorKey: 'accountType',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({
        row: {
          original: { accountId },
        },
      }) => <Button variant="warning">Update</Button>,
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
  ]
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
                  <Button className="btn btn-primary">Create account</Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Accounts Table */}
              <ReactTable columns={columns} data={state.accounts} />
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
    </Container>
  )
}

export default AccountDetailTable
