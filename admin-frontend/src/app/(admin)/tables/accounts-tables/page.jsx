import PageMetaData from '@/components/PageMetaData'
import ReactTable from '@/components/Table'
import { Col, Row, Card, CardBody, CardHeader, CardTitle, Button, Form, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const AccountsTables = () => {
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
              <Button className="btn btn-primary" onClick={() => openCreateModal()}>
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
      }) => (
        <Button variant="warning" onClick={() => openUpdateShow(accountId)}>
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
        <Button variant="danger" onClick={() => openDeleteShow(accountId)}>
          Delete
        </Button>
      ),
    },
  ]

  const [deleteShow, setDeleteShow] = useState(false)
  const [updateShow, setUpdateShow] = useState(false)
  const [createShow, setCreateShow] = useState(false)
  const [newAccount, setNewAccount] = useState({
    accountName: "",
    accountPassword: "",
    accountType: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewAccount({ ...newAccount, [name]: value })
  }
  const [input, setInput] = useState('')

  const openCreateModal = () => {
    setCreateShow(true)
  }

  const handleCreate = () => {
    console.log(newAccount)
  }

  const openUpdateShow = (accountId) => {
    setUpdateShow(true)
    const account = accounts?.find((account) => account.accountId === accountId)
    setInput(account)
  }

  const handleUpdate = (input) => {
    console.log(input)
  }

  const openDeleteShow = (accountId) => {
    setDeleteShow(true)
    setInput(accountId)
  }

  const handleDelete = (e, input) => {
    e.preventDefault()
    fetch(`http://localhost:8080/accounts/${input}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setAccounts(accounts.filter((account) => account.accountId !== input))
          setDeleteShow(false)
        } else {
          console.error('Failed to delete the account')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <>
      <PageMetaData title="Account Tables" />
      <Form.Control
        className="p-3 mb-3 rounded"
        size="lg"
        type="text"
        placeholder="Search by account name"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredAccounts && (
        <Row className="justify-content-center">
          <Col xs={12}>
            <CustomerDetailTable accounts={filteredAccounts} />
          </Col>
        </Row>
      )}

      <Modal show={deleteShow} onHide={() => setDeleteShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleDelete(e, input)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={updateShow} onHide={() => setUpdateShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal!
          {/* <Form>
            <Form.Control type="hidden" value={input} />
          </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setUpdateShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdate(input)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Form>
      <Modal show={createShow} onHide={() => setCreateShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <Form.Group className="m-2">
              <Form.Label>Account name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Account name"
                name="accountName"
                value={newAccount.accountName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>Account password</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Account password"
                name="accountPassword"
                value={newAccount.accountPassword}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>Account type</Form.Label>
              <Form.Select required name="accountType" value={newAccount.accountType} onChange={handleInputChange} className="bg-body text-dark border-secondary">
                <option value="">Select account type</option>
                <option value={1}>Customer</option>
                <option value={2}>Staff</option>
              </Form.Select>
            </Form.Group>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setCreateShow(false)}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={() => handleCreate()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Form>
    </>
  )
}
export default AccountsTables
