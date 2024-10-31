// import React, { useState, useEffect, useContext } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'
// import { CustomerContext } from '../context/CustomerContext'

// function UpdateCustomerModal({ customerId, show, fetchCustomers, onHide }) {
//   const { state } = useContext(CustomerContext)

//   const [updateShow, setUpdateShow] = useState(false)

//   const [form, setForm] = useState({ customerName: '', customerType: 0 })
//   const [validated, setValidated] = useState(false)
//   const [errors, setErrors] = useState({})

//   useEffect(() => {
//     setUpdateShow(show)
//   }, [show])

//   // setForm by customerId
//   useEffect(() => {
//     if (customerId) {
//       const customer = state.customers.find((customer) => customer.customerId === customerId)
//       setForm(customer)
//     }
//   }, [customerId])

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     })
//   }
//   const validateForm = () => {
//     const newErrors = {}
//     if (!form.customerName) newErrors.customerName = 'Customer name is required'
//     if (!form.customerType) newErrors.customerType = 'Customer type is required'
//     if (!form.customerPassword && !form.customerId) newErrors.customerPassword = 'Customer password is required'
//     return newErrors
//   }

//   const closeUpdateShow = () => {
//     onHide()
//     setUpdateShow(false)
//     setForm({ customerName: '', customerType: '' })
//     setValidated(false)
//     setErrors({})
//   }

//   const handleUpdate = (e) => {
//     e.preventDefault()

//     const newErrors = validateForm()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       e.stopPropagation()
//     } else {
//       const { customerId, customerPassword, ...updateData } = form
//       fetch(`http://localhost:8080/customers/${customerId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updateData),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchCustomers()
//           } else {
//             console.error('Failed to update the customer')
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error)
//         })
//       setUpdateShow(false)
//       onHide()
//       setForm({ customerName: '', customerType: '' })
//       setErrors({})
//     }
//     setValidated(true)
//   }
//   return (
//     <Modal show={updateShow} onHide={() => closeUpdateShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Update Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
//           <Form.Group className="m-2">
//             <Form.Label>Customer name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               onChange={(e) => setField('customerName', e.target.value)}
//               placeholder="Customer name"
//               name="customerName"
//               value={form.customerName}
//               isInvalid={!!errors.customerName}
//             />
//             <Form.Control.Feedback type="invalid">{errors.customerName}</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>Customer type</Form.Label>
//             <Form.Select
//               required
//               name="customerType"
//               onChange={(e) => setField('customerType', Number(e.target.value))}
//               className="bg-body text-dark border-secondary"
//               value={form.customerType}
//               isInvalid={!!errors.customerType}>
//               <option value="">Select customer type</option>
//               <option value={1}>Customer</option>
//               <option value={2}>Staff</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.customerType}</Form.Control.Feedback>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={() => closeUpdateShow()}>
//           Close
//         </Button>
//         <Button variant="primary" type="submit" form="updateForm">
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }

// export default UpdateCustomerModal

import React, { useState, useEffect, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { CustomerContext } from '../context/CustomerContext';

function UpdateCustomerModal({ customerId, show, fetchCustomers, onHide }) {
  const { state } = useContext(CustomerContext);

  const [updateShow, setUpdateShow] = useState(false);
  const [form, setForm] = useState({ customerName: '', customerPhone: '', customerEmail: '' });
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  // Hiển thị modal khi nhấn nút Update
  useEffect(() => {
    setUpdateShow(show);
  }, [show]);

  // Cập nhật thông tin form dựa trên customerId
  useEffect(() => {
    if (customerId) {
      const customer = state.customers.find((customer) => customer.customerId === customerId);
      if (customer) {
        setForm({
          customerName: customer.customerName || '',
          customerPhone: customer.customerPhone || '',
          customerEmail: customer.customerEmail || ''
        });
      }
    }
  }, [customerId, state.customers]);

  // Hàm để cập nhật giá trị form
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  // Hàm kiểm tra và trả về lỗi form (nếu có)
  const validateForm = () => {
    const newErrors = {};
    if (!form.customerName) newErrors.customerName = 'Customer name is required';
    if (!form.customerPhone) newErrors.customerPhone = 'Customer phone is required';
    if (!form.customerEmail) newErrors.customerEmail = 'Customer email is required';
    return newErrors;
  };

  // Đóng modal và reset form
  const closeUpdateShow = () => {
    onHide();
    setUpdateShow(false);
    setForm({ customerName: '', customerPhone: '', customerEmail: '' });
    setValidated(false);
    setErrors({});
  };

  // Xử lý cập nhật thông tin khách hàng khi submit form
  const handleUpdate = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      e.stopPropagation();
    } else {
      // Chuẩn bị dữ liệu để gửi (tương tự Postman)
      const updateData = {
        customerName: form.customerName,
        customerPhone: form.customerPhone,
        customerEmail: form.customerEmail,
      };

      // Gửi yêu cầu cập nhật lên server
      fetch(`http://localhost:8080/customers/${customerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData), 
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'success') {
            fetchCustomers(); // Làm mới danh sách khách hàng
          } else {
            console.error('Failed to update the customer');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      setUpdateShow(false);
      onHide();
      setForm({ customerName: '', customerPhone: '', customerEmail: '' });
      setErrors({});
    }
    setValidated(true);
  };

  return (
    <Modal show={updateShow} onHide={() => closeUpdateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Update Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
          <Form.Group className="m-2">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('customerName', e.target.value)}
              placeholder="Customer Name"
              name="customerName"
              value={form.customerName || ''}
              isInvalid={!!errors.customerName}
            />
            <Form.Control.Feedback type="invalid">{errors.customerName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Customer Phone</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('customerPhone', e.target.value)}
              placeholder="Customer Phone"
              name="customerPhone"
              value={form.customerPhone || ''}
              isInvalid={!!errors.customerPhone}
            />
            <Form.Control.Feedback type="invalid">{errors.customerPhone}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Customer Email</Form.Label>
            <Form.Control
              required
              type="email"
              onChange={(e) => setField('customerEmail', e.target.value)}
              placeholder="Customer Email"
              name="customerEmail"
              value={form.customerEmail || ''}
              isInvalid={!!errors.customerEmail}
            />
            <Form.Control.Feedback type="invalid">{errors.customerEmail}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeUpdateShow}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="updateForm">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateCustomerModal;
