import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';
import clsx from 'clsx';
import ReactApexChart from 'react-apexcharts';
const StatCard = ({
  buttonVariant,
  change,
  icon,
  stat,
  subTitle,
  title
}) => {
  const chartOptions = {
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    chart: {
      type: 'line',
      width: 120,
      height: 35,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 4,
        left: 0,
        // bottom: 0,
        // right: 0,
        blur: 2,
        color: 'rgba(132, 145, 183, 0.3)',
        opacity: 0.35
      }
    },
    colors: ['#95a0c5'],
    stroke: {
      show: true,
      curve: 'smooth',
      width: [3],
      lineCap: 'round'
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return '';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };
  return <Card>
      <CardBody className="border-dashed-bottom pb-3">
        <Row className="d-flex justify-content-between">
          <Col xs="auto">
            <div className="d-flex justify-content-center align-items-center thumb-xl border border-secondary rounded-circle">
              <i className={clsx('h1 align-self-center mb-0 text-secondary', icon)} />
            </div>
            <h5 className="mt-2 mb-0 fs-14">{title}</h5>
          </Col>
          <Col className="align-self-center">
            <ReactApexChart height={35} options={chartOptions} series={chartOptions.series} type="line" width={120} className="float-end" />
          </Col>
        </Row>
      </CardBody>
      <CardBody>
        <Row className="d-flex justify-content-center ">
          <Col xs={12} md={6}>
            <h2 className="fs-22 mt-0 mb-1 fw-bold">{stat}</h2>
            <p className="mb-0 text-truncate text-muted">
              <span className="text-success">{change}%</span> {subTitle}
            </p>
          </Col>
          <Col xs={12} md={6} className="align-self-center text-start text-md-end">
            <Button variant={buttonVariant} size="sm" className="px-2 mt-2 mt-md-0">
              View Report
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
export default StatCard;