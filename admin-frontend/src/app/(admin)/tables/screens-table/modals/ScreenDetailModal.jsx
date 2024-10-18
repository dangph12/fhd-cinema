import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { ScreenContext } from '../context/ScreenContext'

function ScreenDetailModal({ screenId, show, onHide }) {
  const { state } = useContext(ScreenContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedScreen, setSelectedScreen] = useState({
    screenName: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (screenId) {
      const screen = state.screens.find((screen) => screen.screenId === screenId)
      setSelectedScreen(screen)
    }
  }, [screenId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedScreen({
      screenName: '',
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
            <Form.Label>Screen Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedScreen.screenName} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default ScreenDetailModal
