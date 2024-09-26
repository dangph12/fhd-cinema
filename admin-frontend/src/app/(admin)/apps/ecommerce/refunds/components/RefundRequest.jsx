import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { getAllOrderItems } from '@/helpers/data';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const RefundRequest = () => {
  const [orderItems, setOrderItems] = useState();
  useEffect(() => {
    ;
    (async () => {
      const data = await getAllOrderItems();
      setOrderItems(data);
    })();
  }, []);
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as="h4">Refund Request</CardTitle>
            <p className="mb-0 text-muted mt-1">Orders #234755</p>
          </Col>
          <Col xs="auto">
            <Link to="/apps/ecommerce/orders/1001" className="text-secondary">
              <IconifyIcon icon="fa6-solid:circle-info" className="me-1" /> Order Detail
            </Link>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="table-responsive">
          <table className="table mb-0">
            <thead className="table-light">
              <tr>
                <th>Item</th>
                <th className="text-end">Price</th>
                <th className="text-end">Quantity</th>
                <th className="text-end">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderItems?.map((order, idx) => <tr key={idx}>
                  <td>
                    {order.product && <img src={order.product?.image} alt="product" height={40} />}
                    <p className="d-inline-block align-middle mb-0">
                      <span className="d-block align-middle mb-0 product-name text-body">{order.product?.name}</span>
                      <span className="text-muted font-13">{order.product?.description}</span>
                    </p>
                  </td>
                  <td className="text-end">
                    {currency}
                    {order.product?.sellPrice}
                  </td>
                  <td className="text-end">{order.quantity}</td>
                  <td className="text-end">
                    {currency}
                    {order.total}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>;
};
export default RefundRequest;