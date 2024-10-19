import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { AccountContext } from '../context/AccountContext'

function AccountDetailModal({ accountId, show, onHide }) {
  const { state } = useContext(AccountContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState({
    accountName: '',
    accountType: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (accountId) {
      const account = state.accounts.find((account) => account.accountId === accountId)
      // set accountName for selectedAccount
      if (account) {
        setSelectedAccount({
          accountName: account.accountName,
          accountType: account.accountType,
          customerName: account.customerName,
          customerEmail: account.customerEmail,
          customerPhone: account.customerPhone,
        })
      }
      console.log(selectedAccount)
    }
  }, [accountId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedAccount({
      accountName: '',
      accountType: '',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
    })
  }

  return (
    <Modal show={detailShow} onHide={() => closeDetailShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Detail Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="detailForm">
          <Form.Group className="m-2">
            <Form.Label>Account Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedAccount.accountName} />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Account Type</Form.Label>
            <Form.Control readOnly type="text" value={selectedAccount.accountType} />
          </Form.Group>
          {selectedAccount.accountType === 'Customer' && (
            <>
              <Form.Group className="m-2">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control readOnly type="text" value={selectedAccount.customerName} />
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>Customer Email</Form.Label>
                <Form.Control readOnly type="text" value={selectedAccount.customerEmail} />
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>Customer Phone</Form.Label>
                <Form.Control readOnly type="text" value={selectedAccount.customerPhone} />
              </Form.Group>
            </>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default AccountDetailModal
