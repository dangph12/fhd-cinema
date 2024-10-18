import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { SeatContext } from '../context/SeatContext'

function SeatDetailModal({ seatId, show, onHide }) {
  const { state } = useContext(SeatContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedSeat, setSelectedSeat] = useState({
    seatName: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (seatId) {
      const seat = state.seats.find((seat) => seat.seatId === seatId)
      setSelectedSeat(seat)
    }
  }, [seatId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedSeat({
      seatName: '',
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
            <Form.Label>Seat Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedSeat.seatName} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default SeatDetailModal
