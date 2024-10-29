import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { SeatContext } from '../context/SeatContext'

function SeatDetailModal({ seatId, show, onHide }) {
  const { state } = useContext(SeatContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedSeat, setSelectedSeat] = useState({
    seatTypeId: '',
    cinemaId: '',
    screenId: '',
    seatName: '',
    price: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (seatId) {
      const seat = state.seats.find((seat) => seat.seatId === seatId)
      setSelectedSeat({
        seatTypeId: seat.seatType.seatTypeName,
        screenId: seat.screen.screenName,
        cinemaId: seat.screen.cinema.cinemaName + ' - ' + seat.screen.cinema.location.locationName,
        seatName: seat.seatName,
        price: seat.seatType.seatTypePrice,
      })
    }
  }, [seatId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedSeat({
      seatTypeId: '',
      screenId: '',
      cinemaId: '',
      seatName: '',
      price: '',
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
            <Form.Label>Seat Type</Form.Label>
            <Form.Control readOnly type="text" value={selectedSeat.seatTypeId} />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Screen</Form.Label>
            <Form.Control readOnly type="text" value={selectedSeat.screenId} />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Cinema</Form.Label>
            <Form.Control readOnly type="text" value={selectedSeat.cinemaId} />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Seat Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedSeat.seatName} />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>Price</Form.Label>
            <Form.Control readOnly type="text" value={selectedSeat.price} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default SeatDetailModal
