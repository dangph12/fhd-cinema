import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';
import clsx from 'clsx';
import { socialStatData } from '../data';
const SocialCard = ({
  audience,
  clickCount,
  commission,
  icon,
  name,
  variant
}) => {
  return <Card>
      <CardBody>
        <Row className="d-flex justify-content-center border-dashed-bottom pb-3">
          <Col xs={9}>
            <p className="text-dark mb-0 fw-semibold fs-14">{name}</p>
            <h3 className="mt-2 mb-0 fw-bold">
              {clickCount} <span className="fs-13 text-muted">Click</span>{' '}
            </h3>
          </Col>
          <Col xs={3} className="align-self-center">
            <div className={clsx('d-flex justify-content-center align-items-center thumb-xl rounded-circle mx-auto', variant)}>
              <i className={clsx('h1 align-self-center mb-0 text-white', icon)} />
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center  mt-3 text-center">
          <Col xs={6}>
            <h5 className="mb-2 fs-18 mb-0 fw-bold">
              {audience.count} <span className="text-success fw-normal fs-12">{audience.change}%</span>
            </h5>
            <p className="text-muted mb-0 fw-semibold fs-14">Audiance</p>
          </Col>
          <Col xs={6} className="align-self-center">
            <h5 className="mb-2 fs-18 mb-0 fw-bold">
              {commission.count} <span className="text-danger fw-normal fs-12">{commission.change}%</span>{' '}
            </h5>
            <p className="text-muted mb-0 fw-semibold fs-14">Comission</p>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <Button variant="outline-primary" type="button" className="px-3">
            Report
          </Button>
        </div>
      </CardBody>
    </Card>;
};
const SocialStats = () => {
  return <>
      {socialStatData.map((social, idx) => <Col md={6} lg={4} key={idx}>
          <SocialCard {...social} />
        </Col>)}
    </>;
};
export default SocialStats;