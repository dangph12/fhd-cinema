import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteCustomerModal({ customerId, show, fetchCustomers, onHide }) {
  const [deleteShow, setDeleteShow] = useState(false);

  useEffect(() => {
    setDeleteShow(show);
  }, [show]);

  const closeDeleteShow = () => {
    setDeleteShow(false);
    onHide();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/customers/${customerId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          fetchCustomers();
        } else {
          console.error('Failed to delete the customer');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    closeDeleteShow();
  };

  return (
    <Modal show={deleteShow} onHide={closeDeleteShow}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this customer?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeDeleteShow}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteCustomerModal;
