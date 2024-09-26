import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
const StatCard = ({
  stat
}) => {
  const {
    icon,
    state,
    subIcon,
    subTitle,
    title,
    total,
    variant
  } = stat;
  return <Card>
      <CardBody>
        <Row className="d-flex justify-content-center">
          <Col>
            <p className="text-dark mb-1 fw-semibold">{title}</p>
            <h3 className="my-2 fs-24 fw-bold">{state}k</h3>
            <p className="mb-0 text-truncate text-muted">
              <IconifyIcon icon={subIcon} className={`text-${variant} fs-18`} />
              <span className="text-dark fw-semibold">{total}</span> {subTitle}
            </p>
          </Col>
          <Col xs="auto" className="align-self-center">
            <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
              <IconifyIcon icon={icon} className="fs-30 align-self-center text-muted" />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
export default StatCard;