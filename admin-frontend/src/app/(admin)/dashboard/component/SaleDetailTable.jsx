// import React, { useState, useContext, useEffect } from 'react';
// import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle, Table } from 'react-bootstrap';
// import ReactTable from '@/components/Table'; // Ensure this component exists
// import { SaleContext } from '../context/SaleContext';
// import SaleDetailModal from '../modal/SaleDetailModal';
// import TablePagination from '../../common/TablePagination';

// const SaleDetailTable = () => {
//   const { state, dispatch, fetchSales, updateQueryParams } = useContext(SaleContext);
//   const [showDetailModal, setShowDetailModal] = useState({ movieId: null, show: false });

//   useEffect(() => {
//     fetchSales();
//   }, [state.currentPage]);

//   const columns = [
//     // {
//     //   id: 'detail',
//     //   header: 'Detail',
//     //   cell: ({ row: { original: { showtimeId } } }) => (
//     //     <Button variant="info" onClick={() => setShowDetailModal({ movieId, show: true })}>
//     //       Detail
//     //     </Button>
//     //   ),
//     // },
//     {
//       header: 'Movie Title',
//       accessorKey: 'movie.movieTitle',
//     },
//     {
//       header: 'Total Revenue',
//       accessorKey: 'totalRevenue',
//     },
//   ];

//   if (!state || !state.sales) {
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
//                   <CardTitle as="h4">Sale Details</CardTitle>
//                 </Col>
//               </Row>
//             </CardHeader>
//             <CardBody className="pt-0">
//               {/* Showtimes Table */}
//               <ReactTable columns={columns} data={state.sales} />
//               {/* Pagination Controls */}
//               <TablePagination
//                 state={state}
//                 dispatch={dispatch}
//                 fetch={fetchSales}
//                 updateQueryParams={updateQueryParams}
//               />
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//       <SaleDetailModal
//         showtimeId={showDetailModal.showtimeId}
//         show={showDetailModal.show}
//         onHide={() => setShowDetailModal({ movieId: null, show: false })}
//       />
//     </Container>
//   );
// };

// export default SaleDetailTable;


import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table'; // Đảm bảo rằng thành phần này tồn tại
import { SaleContext } from '../context/SaleContext';
import TablePagination from '../../tables/common/TablePagination';

const SaleDetailTable = () => {
  const { state, dispatch, fetchSales, updateQueryParams } = useContext(SaleContext);
  const [showDetailModal, setShowDetailModal] = useState({ movieId: null, show: false });

  useEffect(() => {
    fetchSales();
  }, [state.currentPage]);

  const columns = [
    {
      header: 'Movie Title',
      accessorKey: 'movie.movieTitle',
    },
    {
      header: 'Total Revenue',
      accessorKey: 'totalRevenue',
    },
  ];

  if (!state || !state.sales) {
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
                  <CardTitle as="h4">Sale Details</CardTitle>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              <ReactTable columns={columns} data={state.sales} />
              <TablePagination
                state={state}
                dispatch={dispatch}
                fetch={fetchSales}
                updateQueryParams={updateQueryParams}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SaleDetailTable;
