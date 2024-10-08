import PageMetaData from '@/components/PageMetaData'
import ReactTable from '@/components/Table'
import { Col, Row, Card, CardBody, CardHeader, CardTitle, Button, Form, Modal, Container, Pagination } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const AccountsTables = () => {
  const accountApiUrl = `http://localhost:8080/accounts?search=${query}&page=${currentPage}`

  const [accounts, setAccounts] = useState([])
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const [deleteShow, setDeleteShow] = useState(false)
  const [updateShow, setUpdateShow] = useState(false)
  const [createShow, setCreateShow] = useState(false)

  const [form, setForm] = useState({})
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    fetch(accountApiUrl)
      .then((response) => response.json())
      .then((json) => setAccounts(json.data))

    // fetch total counts of accounts, then calc totalPages = Math.ceil(counts / 50)
    fetch('http://localhost:8080/accounts/counts')
      .then((response) => response.json())
      .then((json) => setTotalPages(Math.ceil(json.data / 50)))
  }, [])

  const filteredAccounts = accounts?.filter((account) => {
    return (
      // filter type by filters
      filters.length === 0 || filters.includes(account.accountType)
    )
  })

  const handleSearch = (event) => {
    setQuery(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSearch(event)
    }
  }

  const AccountDetailTable = ({ accounts }) => {
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
          {/* Accounts Table */}
          <ReactTable columns={columns} data={accounts} />
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
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.accountName) newErrors.accountName = 'Account name is required'
    if (!form.accountType) newErrors.accountType = 'Account type is required'
    if (!form.accountPassword && !form.accountId) newErrors.accountPassword = 'Account password is required'
    return newErrors
  }

  const handleCreate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
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
          } else {
            console.error('Failed to create the account')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setCreateShow(false)
      setForm({
        accountName: '',
        accountType: '',
        accountPassword: '',
      })
      setErrors({})
    }
    setValidated(true)
  }

  const openUpdateShow = (accountId) => {
    setUpdateShow(true)
    const account = accounts.find((account) => account.accountId === accountId)
    const updatedForm = {
      accountId: accountId,
      accountName: account?.accountName || '',
      accountType: account?.accountType || '',
      accountPassword: '',
    }
    setForm(updatedForm)
  }

  const closeUpdateShow = () => {
    setUpdateShow(false)
    setForm({
      accountName: '',
      accountType: '',
      accountPassword: '',
    })
    setValidated(false)
    setErrors({})
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      const { accountId, accountPassword, ...updateData } = form
      fetch(`http://localhost:8080/accounts/${accountId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetch('http://localhost:8080/accounts')
              .then((response) => response.json())
              .then((json) => setAccounts(json.data))
          } else {
            console.error('Failed to update the account')
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setUpdateShow(false)
      setForm({
        accountName: '',
        accountType: '',
        accountPassword: '',
      })
      setErrors({})
    }
    setValidated(true)
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
        } else {
          console.error('Failed to delete the account')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    setDeleteShow(false)
    setForm({
      accountName: '',
      accountType: '',
      accountPassword: '',
    })
  }

  return (
    <>
      <PageMetaData title="Account Tables" />
      {/* search */}
      <Container className="pt-3">
        <Row>
          <Col md={8}>
            <Form.Control
              className="p-3 mb-3 rounded"
              size="lg"
              type="text"
              placeholder="Search by account name"
              value={query}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
            />
          </Col>
          <Col md={4} className="d-flex flex-column align-items-start fs-4">
            <Form.Check
              label="Customer"
              name="filter"
              onChange={(e) => {
                if (e.target.checked) {
                  setFilters([...filters, 'Customer'])
                } else {
                  setFilters(filters.filter((filter) => filter !== 'Customer'))
                }
              }}
            />
            <Form.Check
              label="Staff"
              name="filter"
              onChange={(e) => {
                if (e.target.checked) {
                  setFilters([...filters, 'Staff'])
                } else {
                  setFilters(filters.filter((filter) => filter !== 'Staff'))
                }
              }}
            />
          </Col>
        </Row>
      </Container>

      {/* account detail */}
      {filteredAccounts && (
        <Row className="justify-content-center">
          <Col xs={12}>
            <AccountDetailTable accounts={filteredAccounts} />
          </Col>
        </Row>
      )}

      {/* Pagination */}
      <Container className="d-flex justify-content-center mt-3">
        <Pagination>
          <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </Container>

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
          <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
            <Form.Group className="m-2">
              <Form.Label>Account name</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={(e) => setField('accountName', e.target.value)}
                placeholder="Account name"
                name="accountName"
                value={form.accountName}
                isInvalid={!!errors.accountName}
              />
              <Form.Control.Feedback type="invalid">{errors.accountName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>Account type</Form.Label>
              <Form.Select
                required
                name="accountType"
                onChange={(e) => setField('accountType', Number(e.target.value))}
                className="bg-body text-dark border-secondary"
                value={form.accountType === 'Customer' ? 1 : 2}
                isInvalid={!!errors.accountType}>
                <option value="">Select account type</option>
                <option value={1}>Customer</option>
                <option value={2}>Staff</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.accountType}</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeUpdateShow()}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="updateForm">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={createShow} onHide={() => closeCreateShow()}>
        <Modal.Header closeButton>
          <Modal.Title>Create Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
            <Form.Group className="m-2">
              <Form.Label>Account name</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={(e) => setField('accountName', e.target.value)}
                placeholder="Account name"
                name="accountName"
                value={form.accountName}
                isInvalid={!!errors.accountName}
              />
              <Form.Control.Feedback type="invalid">{errors.accountName}</Form.Control.Feedback>
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
                isInvalid={!!errors.accountPassword}
              />
              <Form.Control.Feedback type="invalid">{errors.accountPassword}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>Account type</Form.Label>
              <Form.Select
                required
                name="accountType"
                onChange={(e) => setField('accountType', Number(e.target.value))}
                className="bg-body text-dark border-secondary"
                value={form.accountType === 'Customer' ? 1 : 2}
                isInvalid={!!errors.accountType}>
                <option value="">Select account type</option>
                <option value={1}>Customer</option>
                <option value={2}>Staff</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.accountType}</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeCreateShow()}>
            Close
          </Button>
          <Button type="submit" variant="primary" form="createForm">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AccountsTables
