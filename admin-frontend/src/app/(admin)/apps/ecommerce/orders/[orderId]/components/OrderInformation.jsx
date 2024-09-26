import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import bahaFlag from '@/assets/images/flags/baha_flag.jpg';
const OrderInformation = () => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as={'h4'}>Order Information</CardTitle>
          </Col>
          <Col xs="auto">
            <span role="button" className="text-secondary icons-center">
              <IconifyIcon icon="fa6-solid:pen" className="me-1" /> Edit
            </span>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <div>
          <div className="d-flex justify-content-between mb-2">
            <p className="text-body fw-semibold">
              <IconifyIcon icon="iconoir:profile-circle" className="text-secondary fs-20 align-middle me-1" />
              Username :
            </p>
            <p className="text-body-emphasis fw-semibold">@donFlo</p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p className="text-body fw-semibold">
              <IconifyIcon icon="iconoir:people-tag" className="text-secondary fs-20 align-middle me-1" />
              Full Name :
            </p>
            <p className="text-body-emphasis fw-semibold">Don Flowers</p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p className="text-body fw-semibold">
              <IconifyIcon icon="iconoir:mail" className="text-secondary fs-20 align-middle me-1" />
              Email :
            </p>
            <p className="text-body-emphasis fw-semibold">DonIFlowers@jourrapide.com</p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p className="text-body fw-semibold">
              <IconifyIcon icon="iconoir:dollar-circle" className="text-secondary fs-20 align-middle me-1" />
              Total Payment :
            </p>
            <p className="text-body-emphasis fw-semibold">
              <span className="text-primary">{currency}2450</span> ({currency}30 for transportation)
            </p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p className="text-body fw-semibold">
              <IconifyIcon icon="iconoir:calendar" className="text-secondary fs-20 align-middle me-1" />
              Order Date :
            </p>
            <p className="text-body-emphasis fw-semibold">31 Dec 2023</p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p className="text-body fw-semibold">
              <IconifyIcon icon="iconoir:calendar" className="text-secondary fs-20 align-middle me-1" />
              Delivery Date :
            </p>
            <p className="text-body-emphasis fw-semibold">05 Jan 2024</p>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <p className="text-body fw-semibold">
              <IconifyIcon icon="iconoir:delivery-truck" className="text-secondary fs-20 align-middle me-1" />
              Courier :
            </p>
            <p className="text-body-emphasis fw-semibold">FedEx Corporation</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-body fw-semibold">
              <IconifyIcon icon="iconoir:map-pin" className="text-secondary fs-20 align-middle me-1" />
              Address :
            </p>
            <p className="text-body-emphasis fw-semibold">
              <img src={bahaFlag} alt="flag" className="thumb-sm rounded-circle d-inline-block me-1" />
              718 Bingamon Branch Road <br /> Central Valley, NY 10917
            </p>
          </div>
        </div>
      </CardBody>
    </Card>;
};
export default OrderInformation;