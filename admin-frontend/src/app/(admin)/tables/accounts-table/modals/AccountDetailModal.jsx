import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { AccountContext } from '../context/AccountContext'

function AccountDetailModal({ accountId, show, onHide }) {
  const { state } = useContext(AccountContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState({
    accountName: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (accountId) {
      const account = state.accounts.find((account) => account.accountId === accountId)
      // set accountName for selectedAccount
      if (account) {
        setSelectedAccount({ accountName: account.accountName });
      }
      console.log(selectedAccount)
    }
  }, [accountId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedAccount({
      accountName: '',
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
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default AccountDetailModal
