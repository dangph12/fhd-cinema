import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { getAllProducts } from '@/helpers/data';
import { getProductStatusIcon, getProductStatusVariant } from '@/utils/variants-icons';
import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Orders = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    ;
    (async () => {
      const data = await getAllProducts();
      setOrders(data);
    })();
  }, []);
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as="h4">Orders</CardTitle>
          </Col>
          <Col xs="auto">
            <Button variant="primary">
              <IconifyIcon icon="fa6-solid:eye" className="me-1" /> View All
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="table-responsive">
          <table className="table mb-0">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Date</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orders && orders.slice(0, 5).map((order, idx) => <tr key={idx}>
                    <td>
                      <Link to="/ecommerce/orders">#{order.id}</Link>
                    </td>
                    <td>
                      <p className="d-inline-block align-middle mb-0">
                        <span className="d-block align-middle mb-0 product-name text-body">{order.name}</span>
                        <span className="text-muted font-13">{order.description}</span>
                      </p>
                    </td>
                    <td>{order.createdAt.toLocaleDateString()}</td>
                    <td>UPI</td>
                    <td>
                      <span className={`badge bg-${getProductStatusVariant(order.status)}-subtle text-${getProductStatusVariant(order.status)}`}>
                        <IconifyIcon icon={getProductStatusIcon(order.status)} className="fas fa-check me-1" /> {order.status}
                      </span>
                    </td>
                    <td>
                      {currency}
                      {order.price}
                    </td>
                  </tr>)}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>;
};
export default Orders;