import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, ProgressBar, Row } from 'react-bootstrap';
const DeliveryDetail = () => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as="h4">Bought - Awaiting Delivery</CardTitle>
          </Col>
          <Col xs="auto">
            <span role="button" className="text-secondary icons-center gap-1">
              <IconifyIcon icon="fa6-solid:download" className="me-1" /> Download Invoice
            </span>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="position-relative m-4">
          <ProgressBar now={50} style={{
          height: 1
        }} />
          <div className="position-absolute top-0 start-0 translate-middle bg-primary text-white rounded-pill thumb-md">
            <IconifyIcon icon="iconoir:home" />
          </div>
          <div className="position-absolute top-0 start-50 translate-middle bg-primary-subtle text-primary rounded-pill thumb-md">
            <IconifyIcon icon="iconoir:delivery-truck" />
          </div>
          <div className="position-absolute top-0 start-100 translate-middle bg-light text-dark rounded-pill thumb-md">
            <IconifyIcon icon="iconoir:map-pin" />
          </div>
        </div>
        <Row className="row-cols-3">
          <Col className="text-start">
            <h6 className="mb-1">Order Created</h6>
            <p className="mb-0 text-muted fs-12 fw-medium">15 Feb 2024, 11:30 AM</p>
          </Col>
          <Col className="text-center">
            <h6 className="mb-1">On Delivery</h6>
            <p className="mb-0 text-muted fs-12 fw-medium">18 Feb 2024, 05:15 PM</p>
          </Col>
          <Col className="text-end">
            <h6 className="mb-1">Order Delivered</h6>
            <p className="mb-0 text-muted fs-12 fw-medium">20 Feb 2024, 01:00 PM</p>
          </Col>
        </Row>
        <div className="bg-primary-subtle p-2 border-dashed border-primary rounded mt-3">
          <span className="text-primary fw-semibold">Note :</span>
          <span className="text-primary fw-normal"> Ship all the ordered item together by monday and i send you an email please check. Thanks!</span>
        </div>
      </CardBody>
    </Card>;
};
export default DeliveryDetail;