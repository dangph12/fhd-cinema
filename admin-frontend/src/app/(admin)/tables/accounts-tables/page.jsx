import PageMetaData from '@/components/PageMetaData'
import ReactTable from '@/components/Table'
import { Col, Row, Card, CardBody, CardHeader, CardTitle, Button, Form, Modal, InputGroup } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const AccountsTables = () => {
  // Fetch data
  const [accounts, setAccounts] = useState()
  useEffect(() => {
    fetch('http://localhost:8080/accounts')
      .then((response) => response.json())
      .then((json) => setAccounts(json.data))
  }, [])

  // Search
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  const filteredAccounts = accounts?.filter((account) => account.accountName.toLowerCase().includes(searchTerm.toLowerCase()))

  // Render table
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
              <Button className="btn btn-primary" onClick={() => openCreateShow()}>
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

  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  // Delete
  const [deleteShow, setDeleteShow] = useState(false)
  const openDeleteShow = (accountId) => {
    setDeleteShow(true)
    setField('accountId', accountId)
  }

  const closeDeleteShow = () => {
    setDeleteShow(false)
    setForm({})
  }

  const handleDelete = (e) => {
    e.preventDefault()
    setDeleteShow(false)
    deleteAccount(form)
    setForm({})
  }

  const deleteAccount = (form) => {
    fetch(`http://localhost:8080/accounts/${form.accountId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        setAccounts((prevAccounts) => prevAccounts.filter((account) => account.accountId !== form.accountId))
      })
      .catch((error) => console.log(error))
  }

  // Create
  const [createShow, setCreateShow] = useState(false)
  const openCreateShow = () => {
    setCreateShow(true)
  }

  const closeCreateShow = () => {
    setCreateShow(false)
    setForm({})
  }

  const handleCreate = (e) => {
    e.preventDefault()
    setCreateShow(false)
    createAccount(form)
    setForm({})
  }

  const createAccount = (form) => {
    fetch('http://localhost:8080/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((json) => {
        setAccounts((prevAccounts) => [...prevAccounts, json.data])
      })
      .catch((error) => console.log(error))
  }

  // Update
  const [updateShow, setUpdateShow] = useState(false)

  const openUpdateShow = (accountId) => {
    setUpdateShow(true)
    // Get updateAccount by accountId
    const updateAccount = accounts.find((account) => account.accountId === accountId)
    setField('accountId', accountId)
    setField('accountName', updateAccount.accountName)
    setField('accountPassword', updateAccount.accountPassword)
    setField('accountType', updateAccount.accountType)
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

      <Modal show={deleteShow} onHide={() => closeDeleteShow()}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control type="hidden" value={form} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeDeleteShow()}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleDelete(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={createShow} onHide={() => closeCreateShow()}>
        <Modal.Header closeButton>
          <Modal.Title>Update Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Account Name</Form.Label>
              <Form.Control type="text" placeholder="Account name" required onChange={(e) => setField('accountName', e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Password</Form.Label>
              <Form.Control type="text" placeholder="Account password" required onChange={(e) => setField('accountPassword', e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Select onChange={(e) => setField('accountType', e.target.value)}>
                <option className="text-dark bg-light">Open this select menu</option>
                <option value="1" className="text-dark bg-light">Customer</option>
                <option value="2" className="text-dark bg-light">Staff</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeCreateShow()}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={(e) => handleCreate(e)}>
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
            <Form.Control type="hidden"/>
          </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setUpdateShow(false)}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default AccountsTables
