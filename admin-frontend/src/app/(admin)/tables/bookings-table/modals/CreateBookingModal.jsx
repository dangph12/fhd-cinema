import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import ChooseCustomer from './ChooseCustomer'
import ChooseShowtime from './ChooseShowtime'
import ChooseSeats from './ChooseSeats'
import ChooseSnacks from './ChooseSnacks'
import { BookingContext } from '../context/BookingContext'

function CreateBookingModal({ show, fetchBookings, onHide }) {
  const [createShow, setCreateShow] = useState(false)
  const { dispatch } = useContext(BookingContext)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({
    customerId: '',
    showtimeId: '',
    seatIds: [],
    snackIds: [],
  })
  const [selectedScreenId, setSelectedScreenId] = useState('')
  const [selectedSnacks, setSelectedSnacks] = useState([])
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  const closeCreateShow = () => {
    onHide()
    setCreateShow(false)
    setForm({
      customerId: '',
      showtimeId: '',
      seatIds: [],
      snackIds: [],
    })
    setValidated(false)
    setErrors({})
    setSelectedScreenId('')
    setSelectedSnacks([])
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.customerId) {
      newErrors.customerId = 'Please select a customer'
    }
    if (!form.showtimeId) {
      newErrors.showtimeId = 'Please select a showtime'
    }
    if (selectedScreenId && form.seatIds.length === 0) {
      newErrors.seatIds = 'Please select at least one seat'
    }
    return newErrors
  }

  const finishForm = () => {
    selectedSnacks.forEach((snack) => {
      // loop quantity times to add snackId to snackIds
      for (let i = 0; i < snack.quantity; i++) {
        form.snackIds.push(snack.snackId)
      }
    })
  }

  const createBooking = async () => {
    try {
      const response = await fetch('http://localhost:8080/bills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
    
      if (response.ok) {
        const bookingMessage = await response.json();
        console.log(bookingMessage.data);
        dispatch({ type: 'SET_MESSAGE', payload: bookingMessage.data })
        fetchBookings();
      } else {
        console.error('Failed to create the booking');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleCreate = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      finishForm()
      createBooking()
      closeCreateShow()
    }
  }

  return (
    <Modal fullscreen={true} show={createShow} onHide={() => closeCreateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Create Booking</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
          <ChooseCustomer errors={errors} form={form} setField={setField} />
          <ChooseShowtime errors={errors} form={form} setField={setField} setSelectedScreenId={setSelectedScreenId} />
          <ChooseSeats errors={errors} form={form} setField={setField} selectedScreenId={selectedScreenId}  setErrors={setErrors} />
          <ChooseSnacks errors={errors} selectedSnacks={selectedSnacks} setSelectedSnacks={setSelectedSnacks} />
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
  )
}

export default CreateBookingModal
