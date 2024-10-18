import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteBillModal({ billId, show, fetchBills, onHide }) {
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
    fetch(`http://localhost:8080/bills/${billId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          fetchBills();
        } else {
          console.error('Failed to delete the bill');
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
      <Modal.Body>Are you sure you want to delete this bill?</Modal.Body>
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

export default DeleteBillModal;
