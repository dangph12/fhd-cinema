import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table';
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