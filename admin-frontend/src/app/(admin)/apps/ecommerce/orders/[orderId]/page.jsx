import { getOrderById } from '@/helpers/data';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import DeliveryDetail from './components/DeliveryDetail';
import OrderInformation from './components/OrderInformation';
import OrderItems from './components/OrderItems';
import OrderSummary from './components/OrderSummary';
import PageMetaData from '@/components/PageMetaData';
const OrderDetails = () => {
  const {
    orderId
  } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState();
  useEffect(() => {
    ;
    (async () => {
      if (orderId) {
        const data = await getOrderById(orderId ?? '');
        if (data) setOrder(data);else navigate('/not-found');
      }
    })();
  }, [orderId]);
  return <>
      <PageMetaData title="Order Details" />
      <Row>
        <Col lg={8}>
          {order && <OrderItems order={order} />}
          <DeliveryDetail />
        </Col>
        <Col lg={4}>
          <OrderSummary />
          <OrderInformation />
        </Col>
      </Row>
    </>;
};
export default OrderDetails;