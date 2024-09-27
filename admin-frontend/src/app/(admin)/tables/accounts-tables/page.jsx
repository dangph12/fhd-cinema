import PageMetaData from '@/components/PageMetaData'
import CustomComponentContainerCard from '@/components/CustomComponentContainerCard'
import ReactTable from '@/components/Table'
import { Col, FormCheck, Row, Card, CardBody, CardHeader, CardTitle, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const AccountsTables = () => {
  const handleUpdate = (id) => {
    // Implement the update logic here
    console.log(`Update account with id: ${id}`)
  }

  const handleDelete = (id) => {
    // Implement the update logic here
    console.log(`Delete account with id: ${id}`)
  }

  const CustomerDetailTable = ({ accounts }) => {
    const pageSizeList = [2, 5, 10, 20, 50]
    return (
      <Card>
      <CardHeader>
        <Row className="align-items-center">
        <Col>
          <CardTitle as="h4">Accounts Details</CardTitle>
        </Col>
        <Col className="text-end">
          <Button
          className="btn btn-primary"
          onClick={() => {
            // Implement the create logic here
            console.log('Create new account')
          }}
          >
          Create account
          </Button>
        </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <ReactTable
        columns={columns}
        data={accounts}
        rowsPerPageList={pageSizeList}
        pageSize={10}
        tableClass="datatable"
        theadClass="table-light"
        showPagination
        />
      </CardBody>
      </Card>
    )
  }
  const [accounts, setAccounts] = useState()

  useEffect(() => {
    fetch('http://localhost:8080/accounts')
      .then((response) => response.json())
      .then((json) => setAccounts(json.data))
  }, [])

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredAccounts = accounts?.filter((account) => account.accountName.toLowerCase().includes(searchTerm.toLowerCase()))

  const columns = [
    {
      header: 'accountId',
      accessorKey: 'accountId',
    },
    {
      header: 'accountName',
      accessorKey: 'accountName',
    },
    {
      header: 'accountType',
      accessorKey: 'customer.customerName',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({
        row: {
          original: { accountId },
        },
      }) => (
        <button
          onClick={() => handleUpdate(accountId)}
          style={{
            padding: '5px 10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}>
          Update
        </button>
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
        <button
          onClick={() => handleDelete(accountId)}
          style={{
            padding: '5px 10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: 'red',
            color: 'white',
            cursor: 'pointer',
          }}>
          Delete
        </button>
      ),
    },
  ]

  return (
    <>
      <PageMetaData title="Account Tables" />
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search by account name"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            fontSize: '16px',
          }}
        />
      </div>
      {filteredAccounts && (
        <Row className="justify-content-center">
          <Col xs={12}>
            <CustomerDetailTable accounts={accounts} />
          </Col>
        </Row>
      )}
    </>
  )
}
export default AccountsTables
