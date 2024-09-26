import { CardBody, Col, Row } from 'react-bootstrap';
import { Suspense } from 'react';
import Preloader from '@/components/Preloader';
const OtherLayout = ({
  children
}) => {
  return <div className="container-xxl">
      <Row className="vh-100 d-flex justify-content-center">
        <Col xs={12} className="align-self-center">
          <CardBody>
            <Row>
              <Suspense fallback={<Preloader />}>{children}</Suspense>
            </Row>
          </CardBody>
        </Col>
      </Row>
    </div>;
};
export default OtherLayout;