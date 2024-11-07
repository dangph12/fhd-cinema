import React, { useState, useEffect, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { ScreenContext } from '../context/ScreenContext';

function UpdateScreenModal({ screenId, show, fetchScreens, onHide }) {
  const { state } = useContext(ScreenContext);

  const [updateShow, setUpdateShow] = useState(false);
  const [form, setForm] = useState({
    screenName: '',
    cinemaId: '',
  });
  const [cinemas, setCinemas] = useState([]);
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUpdateShow(show);
  }, [show]);

  // Fetch cinemas from API
  useEffect(() => {
    fetch('http://localhost:8080/cinemas')
      .then((response) => response.json())
      .then((json) => setCinemas(json.data))
      .catch((error) => console.error('Error fetching cinemas:', error));
  }, []);

  // Populate form with the selected screen item details based on screenId
  useEffect(() => {
    if (screenId) {
      const screen = state.screens.find((screenItem) => screenItem.screenId === screenId);
      if (screen) {
        setForm({
          screenName: screen.screenName,
          cinemaId: screen.cinema.cinemaId,
        });
      }
    }
  }, [screenId, state.screens]);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.screenName) newErrors.screenName = 'Screen name is required';
    if (!form.cinemaId) newErrors.cinemaId = 'Cinema is required';
    return newErrors;
  };

  const closeUpdateShow = () => {
    onHide();
    setUpdateShow(false);
    setForm({ screenName: '', cinemaId: '' });
    setValidated(false);
    setErrors({});
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      e.stopPropagation();
    } else {
      const updateData = {
        screenId: screenId,
        screenName: form.screenName,
        cinemaId: form.cinemaId,
      };

      fetch(`http://localhost:8080/screens/${screenId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetchScreens(); // Refresh the screen list after update
            closeUpdateShow();
          } else {
            console.error('Failed to update the screen');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    setValidated(true);
  };

  return (
    <Modal show={updateShow} onHide={() => closeUpdateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Update Screen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
          <Form.Group className="m-2">
            <Form.Label>Screen name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('screenName', e.target.value)}
              placeholder="Screen name"
              name="screenName"
              value={form.screenName}
              isInvalid={!!errors.screenName}
            />
            <Form.Control.Feedback type="invalid">{errors.screenName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Cinema</Form.Label>
            <Form.Select
              required
              name="cinemaId"
              onChange={(e) => setField('cinemaId', e.target.value)}
              value={form.cinemaId}
              isInvalid={!!errors.cinemaId}
              className="bg-body text-dark border-secondary"
            >
              <option value="">Select cinema</option>
              {cinemas.map((cinema) => (
                <option key={cinema.cinemaId} value={cinema.cinemaId}>
                  {cinema.cinemaName} - {cinema.location.locationName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.cinemaId}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeUpdateShow()}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="updateForm">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateScreenModal;
