import PageMetaData from '@/components/PageMetaData'
import ReactTable from '@/components/Table'
import { Col, Row, Card, CardBody, CardHeader, CardTitle, Button, Form, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const AccountsTables = () => {
  const [accounts, setAccounts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [deleteShow, setDeleteShow] = useState(false)
  const [updateShow, setUpdateShow] = useState(false)
  const [createShow, setCreateShow] = useState(false)
  const [form, setForm] = useState({
    accountName: '',
    accountType: '',
    accountPassword: '',
  })

  useEffect(() => {
    fetch('http://localhost:8080/accounts')
      .then((response) => response.json())
      .then((json) => setAccounts(json.data))
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredAccounts = accounts.filter((account) => account.accountName.toLowerCase().includes(searchTerm.toLowerCase()))

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

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  const openCreateShow = () => {
    setCreateShow(true)
  }

  const closeCreateShow = () => {
    setCreateShow(false)
    setForm({
      accountName: '',
      accountType: '',
      accountPassword: '',
    })
  }

  const handleCreate = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (response.ok) {
          fetch('http://localhost:8080/accounts')
            .then((response) => response.json())
            .then((json) => setAccounts(json.data))
          setCreateShow(false)
        } else {
          console.error('Failed to create the account')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    setForm({
      accountName: '',
      accountType: '',
      accountPassword: '',
    })
  }

  const openUpdateShow = (accountId) => {
    setUpdateShow(true)
    const account = accounts.find((account) => account.accountId === accountId)
    setForm({
      accountId: accountId,
      accountName: account?.accountName || '',
      accountType: account?.accountType || '',
    })
  }

  const closeUpdateShow = () => {
    setUpdateShow(false)
    setForm({
      accountName: '',
      accountType: '',
      accountPassword: '',
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8080/accounts/${form.accountId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accountName: form.accountName,
        accountType: form.accountType,
      }),
    })
      .then((response) => {
        if (response.ok) {
          fetch('http://localhost:8080/accounts')
            .then((response) => response.json())
            .then((json) => setAccounts(json.data))
          setUpdateShow(false)
        }
      })
    setForm({
      accountName: '',
      accountType: '',
      accountPassword: '',
    })
  }

  const openDeleteShow = (accountId) => {
    setDeleteShow(true)
    setField('accountId', accountId)
  }

  const closeDeleteShow = () => {
    setDeleteShow(false)
    setForm({
      accountName: '',
      accountType: '',
      accountPassword: '',
    })
  }

  const handleDelete = (e) => {
    e.preventDefault()

    fetch(`http://localhost:8080/accounts/${form.accountId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setAccounts(accounts.filter((account) => account.accountId !== form.accountId))
          setDeleteShow(false)
        } else {
          console.error('Failed to delete the account')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    setForm({
      accountName: '',
      accountType: '',
      accountPassword: '',
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

      <Modal show={deleteShow} onHide={() => closeDeleteShow()}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete account</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeDeleteShow()}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleDelete(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={updateShow} onHide={() => closeUpdateShow()}>
        <Modal.Header closeButton>
          <Modal.Title>Update Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="m-2">
              <Form.Label>Account name</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={(e) => setField('accountName', e.target.value)}
                placeholder="Account name"
                name="accountName"
                value={form.accountName}
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>Account type</Form.Label>
              <Form.Select
                required
                name="accountType"
                onChange={(e) => setField('accountType', Number(e.target.value))}
                className="bg-body text-dark border-secondary"
                value={form.accountType}>
                <option value="">Select account type</option>
                <option value={1}>Customer</option>
                <option value={2}>Staff</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeUpdateShow()}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleUpdate(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={createShow} onHide={() => closeCreateShow()}>
        <Modal.Header closeButton>
          <Modal.Title>Create Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="m-2">
              <Form.Label>Account name</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={(e) => setField('accountName', e.target.value)}
                placeholder="Account name"
                name="accountName"
                value={form.accountName}
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>Account password</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={(e) => setField('accountPassword', e.target.value)}
                placeholder="Account password"
                name="accountPassword"
                value={form.accountPassword}
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>Account type</Form.Label>
              <Form.Select
                required
                name="accountType"
                onChange={(e) => setField('accountType', Number(e.target.value))}
                className="bg-body text-dark border-secondary"
                value={form.accountType}>
                <option value="">Select account type</option>
                <option value={1}>Customer</option>
                <option value={2}>Staff</option>
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
    </>
  )
}

export default AccountsTables
