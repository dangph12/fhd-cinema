// import React, { useState, useContext, useEffect } from 'react';
// import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
// import ReactTable from '@/components/Table';
// import { CustomerContext } from '../context/CustomerContext';
// import DeleteCustomerModal from '../modals/DeleteCustomerModal';
// import CreateCustomerModal from '../modals/CreateCustomerModal';
// import UpdateCustomerModal from '../modals/UpdateCustomerModal';
// import CustomerDetailModal from '../modals/CustomerDetailModal';
// import TablePagination from '../../common/TablePagination';

// const CustomerDetailTable = () => {
//   const { state, dispatch, fetchCustomers, updateQueryParams } = useContext(CustomerContext);
//   const [showDeleteModal, setShowDeleteModal] = useState({ customerId: null, show: false });
//   const [showUpdateModal, setShowUpdateModal] = useState({ customerId: null, show: false });
//   const [showDetailModal, setShowDetailModal] = useState({ customerId: null, show: false })
//   const [showCreateModal, setShowCreateModal] = useState({ show: false });

//   const columns = [
//     {
//       id: 'detail',
//       header: 'Detail',
//       cell: ({
//         row: {
//           original: { customerId },
//         },
//       }) => (
//         <Button variant="info" onClick={() => setShowDetailModal({ customerId, show: true })}>
//           Detail
//         </Button>
//       ),
//     },
//     {
//       header: 'Customer Name',
//       accessorKey: 'customerName',
//     },
//     {
//       header: 'Customer Type',
//       accessorKey: 'customerType',
//     },
//     {
//       id: 'update',
//       header: 'Update',
//       cell: ({
//         row: {
//           original: { customerId },
//         },
//       }) => (
//         <Button variant="warning" onClick={() => setShowUpdateModal({ customerId, show: true })}>
//           Update
//         </Button>
//       ),
//     },
//     {
//       id: 'delete',
//       header: 'Delete',
//       cell: ({
//         row: {
//           original: { customerId },
//         },
//       }) => (
//         <Button variant="danger" onClick={() => setShowDeleteModal({ customerId, show: true })}>
//           Delete
//         </Button>
//       ),
//     },
//   ];

//   if (!state || !state.customers) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs={12}>
//           <Card>
//             <CardHeader>
//               <Row className="align-items-center">
//                 <Col>
//                   <CardTitle as="h4">Customers Details</CardTitle>
//                 </Col>
//                 <Col className="text-end">
//                   <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
//                     Create customer
//                   </Button>
//                 </Col>
//               </Row>
//             </CardHeader>
//             <CardBody className="pt-0">
//               {/* Customers Table */}
//               <ReactTable columns={columns} data={state.customers} />
//               <TablePagination state={state} dispatch={dispatch} fetch={fetchCustomers} updateQueryParams={updateQueryParams} />
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//       <DeleteCustomerModal
//         customerId={showDeleteModal.customerId}
//         show={showDeleteModal.show}
//         fetchCustomers={fetchCustomers}
//         onHide={() => setShowDeleteModal({ customerId: null, show: false })}
//       />
//       <CreateCustomerModal
//         show={showCreateModal.show}
//         fetchCustomers={fetchCustomers}
//         onHide={() => setShowCreateModal({ show: false })}
//       />
//       <UpdateCustomerModal
//         customerId={showUpdateModal.customerId}
//         show={showUpdateModal.show}
//         fetchCustomers={fetchCustomers}
//         onHide={() => setShowUpdateModal({ customerId: null, show: false })}
//       />
//       <CustomerDetailModal
//         customerId={showDetailModal.customerId}
//         show={showDetailModal.show}
//         onHide={() => setShowDetailModal({ customerId: null, show: false })}
//       />
//     </Container>
//   );
// };

// export default CustomerDetailTable;

import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table';
import { CustomerContext } from '../context/CustomerContext';
import DeleteCustomerModal from '../modals/DeleteCustomerModal';
import CreateCustomerModal from '../modals/CreateCustomerModal';
import UpdateCustomerModal from '../modals/UpdateCustomerModal';
import CustomerDetailModal from '../modals/CustomerDetailModal';
import TablePagination from '../../common/TablePagination';

const CustomerDetailTable = () => {
  const { state, dispatch, fetchCustomers, updateQueryParams } = useContext(CustomerContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ customerId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ customerId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ customerId: null, show: false });
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  const pageSize = 10; 

  // Fetch dữ liệu lần đầu khi component render
  useEffect(() => {
    fetchCustomers({ pageSize, page: state.currentPage }); // Sửa lại hàm gọi fetchCustomers với pageSize và page
  }, [state.currentPage]);

  // Hàm thay đổi trang
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= state.totalPages) {
      dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage });
      updateQueryParams({ page: newPage });
      fetchCustomers({ pageSize, page: newPage }); // Gọi lại fetchCustomers khi trang thay đổi
    }
  };

  const columns = [
    // {
    //   id: 'detail',
    //   header: 'Detail',
    //   cell: ({ row: { original: { customerId } } }) => (
    //     <Button variant="info" onClick={() => setShowDetailModal({ customerId, show: true })}>
    //       Detail
    //     </Button>
    //   ),
    // },
    {
      header: 'Customer Name',
      accessorKey: 'customerName',
    },
    {
      header: 'Customer Phone',
      accessorKey: 'customerPhone',
    },
    {
      header: 'Customer Email',
      accessorKey: 'customerEmail',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({ row: { original: { customerId } } }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ customerId, show: true })}>
          Update
        </Button>
      ),
    },
    // {
    //   id: 'delete',
    //   header: 'Delete',
    //   cell: ({ row: { original: { customerId } } }) => (
    //     <Button variant="danger" onClick={() => setShowDeleteModal({ customerId, show: true })}>
    //       Delete
    //     </Button>
    //   ),
    // },
  ];

  if (!state.customers || state.customers.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4">Customers Details</CardTitle>
                </Col>
                {/* <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create customer
                  </Button>
                </Col> */}
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Customers Table */}
              <ReactTable columns={columns} data={state.customers} />
              {/* Pagination Controls */}
              <TablePagination state={state} dispatch={dispatch} fetch={fetchCustomers} updateQueryParams={updateQueryParams} />
              {/* <div className="d-flex justify-content-between align-items-center mt-3">
                <Button
                  variant="secondary"
                  disabled={state.currentPage <= 1}
                  onClick={() => handlePageChange(state.currentPage - 1)}
                >
                  Previous
                </Button>
                <span>Page {state.currentPage} of {state.totalPages}</span>
                <Button
                  variant="secondary"
                  disabled={state.currentPage >= state.totalPages}
                  onClick={() => handlePageChange(state.currentPage + 1)}
                >
                  Next
                </Button>
              </div> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteCustomerModal
        customerId={showDeleteModal.customerId}
        show={showDeleteModal.show}
        fetchCustomers={fetchCustomers}
        onHide={() => setShowDeleteModal({ customerId: null, show: false })}
      />
      <CreateCustomerModal
        show={showCreateModal.show}
        fetchCustomers={fetchCustomers}
        onHide={() => setShowCreateModal({ show: false })}/>
      <UpdateCustomerModal
        customerId={showUpdateModal.customerId}
        show={showUpdateModal.show}
        fetchCustomers={fetchCustomers}
        onHide={() => setShowUpdateModal({ customerId: null, show: false })}
      />
      <CustomerDetailModal
        customerId={showDetailModal.customerId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ customerId: null, show: false })}
      />
    </Container>
  );
};

export default CustomerDetailTable;
