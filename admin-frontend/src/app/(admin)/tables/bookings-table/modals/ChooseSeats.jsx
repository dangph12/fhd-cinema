import { disableWorkerMessageHandler } from 'prismjs'
import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

function ChooseSeats({ errors, form, setField, selectedScreenId, setErrors }) {
  const [seats, setSeats] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/seats`)
      .then((response) => response.json())
      .then((json) => {
        json.data = json.data.filter((seat) => seat.screen.screenId === selectedScreenId)
        setSeats(json.data)
      })
  }, [selectedScreenId])

  const handleCheckboxChange = (seatId, checked) => {
    if (checked) {
      setField('seatIds', [...form.seatIds, seatId])
    } else {
      setField('seatIds', form.seatIds.filter((id) => id !== seatId))
    }
  }

  const validateSeats = () => {
    if (form.seatIds.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        seatIds: 'At least one seat must be selected',
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        seatIds: '',
      }))
    }
  }

  useEffect(() => {
    validateSeats()
  }, [form.seatIds])

  return (
    <Form.Group className="m-2">
      <Form.Label>Seats</Form.Label>
      {errors.seatIds && <div className="text-danger">{errors.seatIds}</div>}
      <div>Normal Seats</div>
      {seats
        .filter((seat) => seat.seatType.seatTypeName === 'Ghế thường')
        .map((seat) => (
          <Form.Check
            inline
            key={seat.seatId}
            type="checkbox"
            label={seat.seatName}
            checked={form.seatIds.includes(seat.seatId)}
            onChange={(e) => handleCheckboxChange(seat.seatId, e.target.checked)}
            disabled={seat.booked}
          />
        ))}
      <div>VIP Seats</div>
      {seats
        .filter((seat) => seat.seatType.seatTypeName === 'VIP')
        .map((seat) => (
          <Form.Check
            inline
            key={seat.seatId}
            type="checkbox"
            label={seat.seatName}
            checked={form.seatIds.includes(seat.seatId)}
            onChange={(e) => handleCheckboxChange(seat.seatId, e.target.checked)}
            disabled={seat.booked}
          />
        ))}
      <div>Couple Seats</div>
      {seats
        .filter((seat) => seat.seatType.seatTypeName === 'Couple')
        .map((seat) => (
          <Form.Check
            inline
            key={seat.seatId}
            type="checkbox"
            label={seat.seatName}
            checked={form.seatIds.includes(seat.seatId)}
            onChange={(e) => handleCheckboxChange(seat.seatId, e.target.checked)}
            disabled={seat.booked}
          />
        ))}
    </Form.Group>
  )
}

export default ChooseSeats