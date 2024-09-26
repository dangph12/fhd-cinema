import { Card, CardBody, Col, Row } from 'react-bootstrap';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import CompletionChart from './CompletionChart';
import { currency } from '@/context/constants';
import { Link } from 'react-router-dom';
const ProfileCard = () => {
  return <Card>
      <CardBody>
        <Row>
          <Col lg={4} className="align-self-center mb-3 mb-lg-0">
            <div className="d-flex align-items-center flex-row flex-wrap">
              <div className="position-relative me-3">
                <img src={avatar7} alt="avatar" height={120} className="rounded-circle" />
                <Link to="" className="thumb-md justify-content-center d-flex align-items-center bg-primary text-white rounded-circle position-absolute end-0 bottom-0 border border-3 border-card-bg">
                  <IconifyIcon icon="fa-solid:camera" className="fas fa-camera" />
                </Link>
              </div>
              <div>
                <h5 className="fw-semibold fs-22 mb-1">Rosa Dodson</h5>
                <p className="mb-0 text-muted fw-medium">UI/UX Designer, USA</p>
              </div>
            </div>
          </Col>
          <Col lg={4} className="ms-auto align-self-center">
            <div className="d-flex justify-content-center">
              <div className="border-dashed rounded border-theme-color p-2 me-2 flex-grow-1 flex-basis-0">
                <h5 className="fw-semibold fs-22 mb-1">75</h5>
                <p className="text-muted mb-0 fw-medium">Projects</p>
              </div>
              <div className="border-dashed rounded border-theme-color p-2 me-2 flex-grow-1 flex-basis-0">
                <h5 className="fw-semibold fs-22 mb-1">68%</h5>
                <p className="text-muted mb-0 fw-medium">Success Rate</p>
              </div>
              <div className="border-dashed rounded border-theme-color p-2 me-2 flex-grow-1 flex-basis-0">
                <h5 className="fw-semibold fs-22 mb-1">{currency}8620</h5>
                <p className="text-muted mb-0 fw-medium">Earning</p>
              </div>
            </div>
          </Col>
          <Col lg={4} className="align-self-center">
            <Row className="row-cols-2">
              <Col className="text-end">
                <CompletionChart />
              </Col>
              <Col className="align-self-center">
                <button type="button" className="btn btn-primary  d-inline-block me-1">
                  Follow
                </button>
                <button type="button" className="btn btn-light  d-inline-block">
                  Hire Me
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
export default ProfileCard;