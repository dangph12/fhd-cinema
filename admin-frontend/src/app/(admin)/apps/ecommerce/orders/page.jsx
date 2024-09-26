import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import OrdersTable from './components/OrdersTable';
import { getAllProducts } from '@/helpers/data';
import { useEffect, useState } from 'react';
import PageMetaData from '@/components/PageMetaData';
const Orders = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    ;
    (async () => {
      const data = await getAllProducts();
      setOrders(data);
    })();
  }, []);
  return <>
      <PageMetaData title="Orders" />
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4">Orders</CardTitle>
                </Col>
                <Col xs="auto">
                  <button className="btn btn-primary">
                    <IconifyIcon icon="fa6-solid:plus" className="me-1" /> Add Order
                  </button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">{orders && <OrdersTable orders={orders} />}</CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default Orders;