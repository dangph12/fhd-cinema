import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import { Link } from 'react-router-dom';
const Customers = () => {
  const users = [avatar1, avatar2, avatar4, avatar3];
  const chartOptions = {
    chart: {
      height: 280,
      type: 'donut'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%'
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [50, 25, 25],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      // verticalAlign: '',
      floating: false,
      fontSize: '13px',
      fontFamily: 'Be Vietnam Pro, sans-serif',
      offsetX: 0,
      offsetY: 0
    },
    labels: ['Currenet', 'New', 'Retargeted'],
    colors: ['#22c55e', '#08b0e7', '#ffc728'],
    responsive: [{
      breakpoint: 600,
      options: {
        plotOptions: {
          donut: {
            customScale: 0.2
          }
        },
        chart: {
          height: 240
        },
        legend: {
          show: false
        }
      }
    }],
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' %';
        }
      }
    }
  };
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Customers</CardTitle>
          </Col>
          <Col xs="auto">
            <div className="img-group d-flex">
              {users.map((user, idx) => <Link className="user-avatar position-relative d-inline-block ms-n2" to="" key={idx}>
                  <img src={user} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                </Link>)}
              <a href="" className="user-avatar position-relative d-inline-block ms-1">
                <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">
                  +6
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <ReactApexChart height={280} options={chartOptions} series={chartOptions.series} type="donut" />
        <div id="customers" className="apex-charts" />
        <div className="bg-light py-3 px-2 mb-0 mt-2 text-center rounded">
          <h6 className="mb-0">
            <i className="icofont-calendar fs-5 me-1" /> 01 January 2024 to 31 December 2024
          </h6>
        </div>
        <p className="text-secondary text-truncate mb-0 rounded mt-2 text-center">
          To review the new order by Jems.{' '}
          <Link to="" className="text-primary text-decoration-underline">
            detail
          </Link>{' '}
        </p>
      </CardBody>
    </Card>;
};
export default Customers;