import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { getAllOrderItems } from '@/helpers/data';
import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const OrderItems = ({
  order
}) => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    ;
    (async () => {
      const data = await getAllOrderItems();
      setOrders(data);
    })();
  }, []);
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as="h4">Orders #{order.id}</CardTitle>
            <p className="mb-0 text-muted mt-1">15 March 2024 at 09:45 am from draft orders</p>
          </Col>
          <Col xs="auto">
            <button className="btn btn-primary">
              <IconifyIcon icon="fa6-solid:plus" className="me-1" /> Add Item
            </button>
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
              {orders?.map((order, idx) => <tr key={idx}>
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
export default OrderItems;