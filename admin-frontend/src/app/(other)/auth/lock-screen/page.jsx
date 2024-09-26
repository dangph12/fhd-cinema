import LockScreenForm from './components/LockScreenForm';
import logoSmImg from '@/assets/images/logo-sm.png';
import PageMetaData from '@/components/PageMetaData';
import { Card, CardBody, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const LockScreen = () => {
  return <>
      <PageMetaData title="Lock Screen" />
      <Col lg={4} className="mx-auto">
        <Card>
          <CardBody className="p-0 bg-black auth-header-box rounded-top">
            <div className="text-center p-3">
              <Link to="/" className="logo logo-admin">
                <img src={logoSmImg} height={50} alt="logo" className="auth-logo" />
              </Link>
              <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Enter Password</h4>
              <p className="text-muted fw-medium mb-0">Hello Mark, enter your password to unlock the screen !</p>
            </div>
          </CardBody>
          <CardBody className="pt-0">
            <LockScreenForm />

            <div className="text-center  mb-2">
              <p className="text-muted">
                Not you ? return
                <Link to="/auth/login" className="text-primary ms-2">
                  Login in here
                </Link>
              </p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>;
};
export default LockScreen;