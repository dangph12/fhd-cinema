import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { CinemaContext } from '../context/CinemaContext'

function CinemaDetailModal({ cinemaId, show, onHide }) {
  const { state } = useContext(CinemaContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedCinema, setSelectedCinema] = useState({
    cinemaName: '',
    locationName: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (cinemaId) {
      const cinema = state.cinemas.find((cinema) => cinema.cinemaId === cinemaId)
      setSelectedCinema({
        cinemaName: cinema.cinemaName,
        locationName: cinema.location.locationName,
      })
    }
  }, [cinemaId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedCinema({
      cinemaName: '',
      locationName: '',
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
            <Form.Label>Cinema Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedCinema.cinemaName} />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Location Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedCinema.locationName} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default CinemaDetailModal
