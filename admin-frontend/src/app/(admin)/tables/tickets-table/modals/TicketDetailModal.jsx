import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { TicketContext } from '../context/TicketContext'

function TicketDetailModal({ ticketId, show, onHide }) {
  const { state } = useContext(TicketContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState({
    ticketName: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (ticketId) {
      const ticket = state.tickets.find((ticket) => ticket.ticketId === ticketId)
      setSelectedTicket(ticket)
    }
  }, [ticketId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedTicket({
      ticketName: '',
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
            <Form.Label>Ticket Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedTicket.ticketName} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default TicketDetailModal
