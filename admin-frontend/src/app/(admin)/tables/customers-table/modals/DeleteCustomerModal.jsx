// import React, { useState, useEffect } from 'react';
// import { Modal, Button } from 'react-bootstrap';

// function DeleteCustomerModal({ customerId, show, fetchCustomers, onHide }) {
//   const [deleteShow, setDeleteShow] = useState(false);

//   useEffect(() => {
//     setDeleteShow(show);
//   }, [show]);

//   const closeDeleteShow = () => {
//     setDeleteShow(false);
//     onHide();
//   };

//   const handleDelete = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:8080/customers/${customerId}`, {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (response.ok) {
//           fetchCustomers();
//         } else {
//           console.error('Failed to delete the customer');
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//     closeDeleteShow();
//   };

//   return (
//     <Modal show={deleteShow} onHide={closeDeleteShow}>
//       <Modal.Header closeButton>
//         <Modal.Title>Delete Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>Are you sure you want to delete this customer?</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={closeDeleteShow}>
//           Close
//         </Button>
//         <Button variant="danger" onClick={handleDelete}>
//           Delete
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default DeleteCustomerModal;


import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteCustomerModal({ customerId, show, fetchCustomers, onHide }) {
  const [deleteShow, setDeleteShow] = useState(false);

  // Hiển thị modal khi thay đổi trạng thái 'show'
  useEffect(() => {
    setDeleteShow(show);
  }, [show]);

  // Đóng modal
  const closeDeleteShow = () => {
    setDeleteShow(false);
    onHide();
  };

  // Xử lý việc xóa khách hàng
  const handleDelete = (e) => {
    e.preventDefault();

    // Gửi yêu cầu xóa đến API
    fetch(`http://localhost:8080/customers/${customerId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Nếu xóa thành công, cập nhật danh sách khách hàng
          fetchCustomers();
        } else {
          console.error('Failed to delete the customer');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // Đóng modal sau khi yêu cầu hoàn tất
    closeDeleteShow();
  };

  return (
    <Modal show={deleteShow} onHide={closeDeleteShow}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Customer</Modal.Title>
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
