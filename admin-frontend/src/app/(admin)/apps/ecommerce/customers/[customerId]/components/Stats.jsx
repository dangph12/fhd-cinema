import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { statData } from '../data';
const StatCard = ({
  icon,
  stat,
  subText,
  title,
  variant
}) => {
  return <Card className="shadow-none border mb-3 mb-lg-0">
      <CardBody>
        <div className="d-flex align-items-center">
          <IconifyIcon icon={icon} className={`fs-24 align-self-center text-${variant} me-2`} />
          <div className="flex-grow-1 text-truncate">
            <p className="text-dark mb-0 fw-semibold fs-13">{title}</p>
            <h3 className="mt-1 mb-0 fs-18 fw-bold">
              {stat} <span className="fs-11 text-muted fw-normal">{subText}</span>{' '}
            </h3>
          </div>
        </div>
      </CardBody>
    </Card>;
};
const Stats = () => {
  return <Card>
      <CardBody>
        <Row className="g-3">
          {statData.map((stat, idx) => <Col md={6} lg={6} key={idx}>
              <StatCard {...stat} />
            </Col>)}
        </Row>
        <div className="bg-primary-subtle p-2 border-dashed border-primary rounded mt-3">
          <span className="text-primary fw-semibold">Karen Savage&apos;s</span>
          <span className="text-primary fw-normal"> best performance from last year</span>
        </div>
      </CardBody>
    </Card>;
};
export default Stats;