import React, { useState, useContext, useEffect } from 'react'
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap'
import ReactTable from '@/components/Table'
import { BillContext } from '../context/BillContext'
import DeleteBillModal from '../modals/DeleteBillModal'
import CreateBillModal from '../modals/CreateBillModal'
import UpdateBillModal from '../modals/UpdateBillModal'
import BillDetailModal from '../modals/BillDetailModal'
import TablePagination from '../../common/TablePagination'

const BillDetailTable = () => {
  const { state, dispatch, fetchBills, updateQueryParams } = useContext(BillContext)
  const [showDeleteModal, setShowDeleteModal] = useState({ billId: null, show: false })
  const [showUpdateModal, setShowUpdateModal] = useState({ billId: null, show: false })
  const [showDetailModal, setShowDetailModal] = useState({ billId: null, show: false })
  const [showCreateModal, setShowCreateModal] = useState({ show: false })

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({
        row: {
          original: { billId },
        },
      }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ billId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Bill Id',
      accessorKey: 'billId',
    },
    {
      header: 'Bill Amount',
      accessorKey: 'billAmount',
    },
    {
      header: 'Bill Created At',
      accessorKey: 'billCreatedAt',
    },
    {
      header: 'Booking Id',
      accessorKey: 'booking.bookingId',
    },
    {
      header: 'Is Paid',
      accessorKey: 'paid',
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({
        row: {
          original: { billId },
        },
      }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ billId, show: true })}>
          Delete
        </Button>
      ),
    },
  ]

  if (!state || !state.bills) {
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
                  <CardTitle as="h4">Bills Details</CardTitle>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Bills Table */}
              <ReactTable columns={columns} data={state.bills} />
              <TablePagination state={state} dispatch={dispatch} fetch={fetchBills} updateQueryParams={updateQueryParams} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteBillModal
        billId={showDeleteModal.billId}
        show={showDeleteModal.show}
        fetchBills={fetchBills}
        onHide={() => setShowDeleteModal({ billId: null, show: false })}
      />
      <CreateBillModal show={showCreateModal.show} fetchBills={fetchBills} onHide={() => setShowCreateModal({ show: false })} />
      <UpdateBillModal
        billId={showUpdateModal.billId}
        show={showUpdateModal.show}
        fetchBills={fetchBills}
        onHide={() => setShowUpdateModal({ billId: null, show: false })}
      />
      <BillDetailModal
        billId={showDetailModal.billId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ billId: null, show: false })}
      />
    </Container>
  )
}

export default BillDetailTable
