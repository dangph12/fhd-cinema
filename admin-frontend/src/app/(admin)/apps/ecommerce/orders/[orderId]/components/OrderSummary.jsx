import { currency } from '@/context/constants';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const OrderSummary = () => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as={'h4'}>Order Summary</CardTitle>
          </Col>
          <Col xs="auto">
            <span className="badge rounded text-warning bg-warning-subtle fs-12 p-1">Payment pending</span>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <div>
          <div className="d-flex justify-content-between">
            <p className="text-body fw-semibold">Items subtotal :</p>
            <p className="text-body-emphasis fw-semibold">{currency}1060</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-body fw-semibold">Discount :</p>
            <p className="text-danger fw-semibold">-{currency}80</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-body fw-semibold">Tax :</p>
            <p className="text-body-emphasis fw-semibold">{currency}180.70</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-body fw-semibold">Subtotal :</p>
            <p className="text-body-emphasis fw-semibold">{currency}1160.70</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-body fw-semibold mb-0">Shipping Cost :</p>
            <p className="text-body-emphasis fw-semibold mb-0">{currency}20</p>
          </div>
        </div>
        <hr className="hr-dashed" />
        <div className="d-flex justify-content-between">
          <h4 className="mb-0">Total :</h4>
          <h4 className="mb-0">{currency}1180.70</h4>
        </div>
      </CardBody>
    </Card>;
};
export default OrderSummary;