import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

function ChooseSeats({ errors, form, setField, selectedScreenId }) {
  const [seats, setSeats] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8080/seats`)
      .then((response) => response.json())
      .then((json) => {
        json.data = json.data.filter((seat) => seat.screen.screenId === selectedScreenId)
        setSeats(json.data)
      })
  }, [selectedScreenId])

return (
    <Form.Group className="m-2">
        <Form.Label>Seats</Form.Label>
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
                    onChange={(e) => {
                        if (e.target.checked) {
                            setField('seatIds', [...form.seatIds, seat.seatId])
                        } else {
                            setField(
                                'seatIds',
                                form.seatIds.filter((seatId) => seatId !== seat.seatId)
                            )
                        }
                    }}
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
                    onChange={(e) => {
                        if (e.target.checked) {
                            setField('seatIds', [...form.seatIds, seat.seatId])
                        } else {
                            setField(
                                'seatIds',
                                form.seatIds.filter((seatId) => seatId !== seat.seatId)
                            )
                        }
                    }}
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
                    onChange={(e) => {
                        if (e.target.checked) {
                            setField('seatIds', [...form.seatIds, seat.seatId])
                        } else {
                            setField(
                                'seatIds',
                                form.seatIds.filter((seatId) => seatId !== seat.seatId)
                            )
                        }
                    }}
                />
            ))}
        
        <Form.Control.Feedback type="invalid">
            {errors.seatIds}
        </Form.Control.Feedback>
    </Form.Group>
)
}

export default ChooseSeats
