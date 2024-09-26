import { Card, CardBody, Col, Row } from 'react-bootstrap';
import bahaFlag from '@/assets/images/flags/baha_flag.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
const CustomerCard = ({
  customer
}) => {
  const {
    name,
    avatar,
    email
  } = customer;
  return <Card>
      <CardBody>
        <Row className="align-items-center">
          <Col>
            <div className="d-flex align-items-center">
              <div className="position-relative">
                <img src={avatar} alt="avatar" className="rounded-circle img-fluid" />
                <div className="position-absolute top-50 start-100 translate-middle">
                  <img src={bahaFlag} alt="baha-flag" className="rounded-circle thumb-sm border border-3 border-white" />
                </div>
              </div>
              <div className="flex-grow-1 text-truncate ms-3">
                <h5 className="m-0 fs-3 fw-bold">{name}</h5>
                <p className="text-muted mb-0">@karen</p>
              </div>
            </div>
          </Col>
          <Col xs="auto" className="text-end">
            <button type="button" className="btn btn-sm btn-outline-primary px-2 d-inline-flex align-items-center">
              <IconifyIcon icon="iconoir:chat-bubble" className="fs-14 me-1" />
              Message
            </button>
          </Col>
        </Row>
        <div className="mt-3">
          <div className="text-body mb-2  d-flex align-items-center">
            <IconifyIcon icon="iconoir-language" className="fs-20 me-1 text-muted" />
            <span className="text-body fw-semibold">Language :</span> English / French / Spanish
          </div>
          <div className="text-muted mb-2 d-flex align-items-center">
            <IconifyIcon icon="iconoir-mail-out" className="fs-20 me-1" />
            <span className="text-body fw-semibold">Email :</span>
            <Link to="" className="text-primary text-decoration-underline">
              {email}
            </Link>
          </div>
          <div className="text-body mb-3 d-flex align-items-center">
            <IconifyIcon icon="iconoir-phone" className="fs-20 me-1 text-muted" />
            <span className="text-body fw-semibold">Phone :</span> +1 123 456 789
          </div>
          <ul className="mb-0 list-unstyled">
            <li className="list-inline-item">
              <span role="button" className="d-flex justify-content-center align-items-center thumb-md rounded-circle mx-auto social twitter">
                <i className="icofont-twitter fs-18 align-self-center mb-0 " />
              </span>
            </li>
            <li className="list-inline-item">
              <span role="button" className="d-flex justify-content-center align-items-center thumb-md rounded-circle mx-auto social instagram">
                <i className="icofont-instagram fs-18 align-self-center mb-0 " />
              </span>
            </li>
            <li className="list-inline-item">
              <span role="button" className="d-flex justify-content-center align-items-center thumb-md rounded-circle mx-auto social facebook">
                <i className="icofont-facebook fs-18 align-self-center mb-0 " />
              </span>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>;
};
export default CustomerCard;