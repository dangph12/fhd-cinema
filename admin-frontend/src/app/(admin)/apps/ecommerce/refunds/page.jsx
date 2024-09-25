import { Col, Row } from 'react-bootstrap';
import RefundRequest from './components/RefundRequest';
import OrderSummary from './components/OrderSummary';
import RefundForm from './components/RefundForm';
import PageMetaData from '@/components/PageMetaData';
const Refunds = () => {
  return <>
      <PageMetaData title="Refunds" />
      <Row>
        <Col lg={8}>
          <RefundRequest />
        </Col>
        <Col lg={4}>
          <OrderSummary />
          <RefundForm />
        </Col>
      </Row>
    </>;
};
export default Refunds;