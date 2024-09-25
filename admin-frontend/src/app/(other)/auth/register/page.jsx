import RegisterForm from './components/RegisterForm';
import logoSmImg from '@/assets/images/logo-sm.png';
import PageMetaData from '@/components/PageMetaData';
import { Card, CardBody, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Register = () => {
  return <>
      <PageMetaData title="Register" />
      <Col lg={4} className="mx-auto">
        <Card>
          <CardBody className="p-0 bg-black auth-header-box rounded-top">
            <div className="text-center p-3">
              <Link to="/" className="logo logo-admin">
                <img src={logoSmImg} height={50} alt="logo" className="auth-logo" />
              </Link>
              <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Create an account</h4>
              <p className="text-muted fw-medium mb-0">Enter your detail to Create your account today.</p>
            </div>
          </CardBody>
          <CardBody className="pt-0">
            <RegisterForm />

            <div className="text-center">
              <p className="text-muted">
                Already have an account ?
                <Link to="/auth/login" className="text-primary ms-2">
                  Log in
                </Link>
              </p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>;
};
export default Register;