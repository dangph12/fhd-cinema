import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { ShowtimeContext } from '../context/ShowtimeContext'

function ShowtimeDetailModal({ showtimeId, show, onHide }) {
  const { state } = useContext(ShowtimeContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedShowtime, setSelectedShowtime] = useState({
    showtimeName: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (showtimeId) {
      const showtime = state.showtimes.find((showtime) => showtime.showtimeId === showtimeId)
      setSelectedShowtime(showtime)
    }
  }, [showtimeId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedShowtime({
      showtimeName: '',
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
            <Form.Label>Showtime Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedShowtime.showtimeName} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default ShowtimeDetailModal
