import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

function ChooseSnacks({ errors, selectedSnacks, setSelectedSnacks }) {
  const [snacks, setSnacks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/snacks')
      .then((response) => response.json())
      .then((json) => {
        setSnacks(json.data)
      })
  }, [])

  const handleSnackChange = (snackId, newValue) => {
    setSelectedSnacks((prev) => {
      const newSnacks = [...prev]
      const index = newSnacks.findIndex((snack) => snack.snackId === snackId)
      if (index === -1) {
        newSnacks.push({ snackId, quantity: newValue })
      } else {
        newSnacks[index].quantity = newValue
      }
      return newSnacks
    })
  }

  return (
    <Form.Group className="m-2">
      <Form.Label>Snack IDs</Form.Label>
      <div className="container">
        {snacks.map((snack) => (
          <div key={snack.snackId} className="row align-items-center mb-2">
            <Form.Label className="col me-2">{snack.snackName}</Form.Label>
            <button
              type="button"
              className="btn btn-secondary col-auto me-2"
              onClick={() =>
                handleSnackChange(snack.snackId, Math.max(0, (selectedSnacks.find((s) => s.snackId === snack.snackId)?.quantity || 0) - 1))
              }>
              -
            </button>
            <Form.Control
              type="number"
              value={selectedSnacks.find((s) => s.snackId === snack.snackId)?.quantity || 0}
              onChange={() => handleSnackChange(snack.snackId, event.target.value)}
              min="0"
              className="col-auto me-2"
              style={{ width: '60px' }}
            />
            <button
              type="button"
              className="btn btn-secondary col-auto"
              onClick={() => handleSnackChange(snack.snackId, (selectedSnacks.find((s) => s.snackId === snack.snackId)?.quantity || 0) + 1)}>
              +
            </button>
          </div>
        ))}
      </div>
    </Form.Group>
  )
}

export default ChooseSnacks
