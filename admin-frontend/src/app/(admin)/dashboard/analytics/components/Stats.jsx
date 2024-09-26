import { Card, CardBody, Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { statData } from '../data';
const StatCard = ({
  change,
  icon,
  stat,
  subTitle,
  title,
  variant
}) => {
  return <Card>
      <CardBody>
        <Row className="d-flex justify-content-center border-dashed-bottom pb-3">
          <Col xs={9}>
            <p className="text-dark mb-0 fw-semibold fs-14">{title}</p>
            <h3 className="mt-2 mb-0 fw-bold">{stat}</h3>
          </Col>
          <Col xs={3} className="align-self-center">
            <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
              <IconifyIcon icon={icon} className="h1 align-self-center mb-0 text-secondary" />
            </div>
          </Col>
        </Row>
        <p className="mb-0 text-truncate text-muted mt-3">
          <span className={`text-${variant}`}>{change}</span> {subTitle}
        </p>
      </CardBody>
    </Card>;
};
const Stats = () => {
  return <Row className="justify-content-center">
      {statData.map((stat, idx) => <Col md={6} lg={4} key={idx}>
          <StatCard {...stat} />
        </Col>)}
    </Row>;
};
export default Stats;