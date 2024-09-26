import IconifyIcon from '@/components/wrappers/IconifyIcon';
import errorImg from '@/assets/images/extra/error.svg';
import logoSm from '@/assets/images/logo-sm.png';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageMetaData from '@/components/PageMetaData';
const NotFound = () => {
  return <>
      <PageMetaData title="Page Not Found" />
      <div className="container-xxl">
        <Row className="vh-100 d-flex justify-content-center">
          <Col xs={12} className="align-self-center">
            <CardBody>
              <Row>
                <Col lg={4} className="mx-auto">
                  <Card>
                    <CardBody className="p-0 bg-black auth-header-box rounded-top">
                      <div className="text-center p-3">
                        <Link to="/" className="logo logo-admin">
                          <img src={logoSm} height={50} alt="logo" className="auth-logo" />
                        </Link>
                        <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Oops! Sorry page does not found</h4>
                        <p className="text-muted fw-medium mb-0">Back to dashboard of Rizz</p>
                      </div>
                    </CardBody>
                    <CardBody className="pt-0">
                      <div className="ex-page-content text-center">
                        <img src={errorImg} alt={'error-img'} height={170} />
                        <h1 className="my-2">404!</h1>
                        <h5 className="fs-16 text-muted mb-3">Something went wrong</h5>
                      </div>
                      <Link to="/" className="btn btn-primary w-100">
                        Back to Dashboard <IconifyIcon icon="fa-solid:redo" className="ms-1" />
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Col>
        </Row>
      </div>
    </>;
};
export default NotFound;