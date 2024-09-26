import { Card, CardBody, Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import ReactApexChart from 'react-apexcharts';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import { Link } from 'react-router-dom';
const NewVisitors = () => {
  const users = [avatar1, avatar2, avatar4, avatar3];
  const chartOptions = {
    series: [{
      name: 'Visitors',
      data: [20, 38, 38, 72, 55, 63, 43]
    }],
    chart: {
      height: 230,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 1,
        colorStops: [{
          offset: 0,
          color: 'rgba(106, 155, 155, 0.4)',
          opacity: 1
        }, {
          offset: 100,
          color: 'rgba(106, 155, 155, 0.4)',
          opacity: 1
        }]
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '55%',
        // endingShape: "rounded",
        borderRadius: 5
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      type: 'category',
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      axisBorder: {
        show: false,
        color: 'rgba(119, 119, 142, 0.05)',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: false,
        borderType: 'solid',
        color: 'rgba(119, 119, 142, 0.05)',
        // width: 6,
        offsetX: 0,
        offsetY: 0
      },
      labels: {
        rotate: -90,
        style: {
          colors: 'rgb(107 ,114 ,128)',
          fontSize: '12px'
        }
      }
    }
  };
  return <Card>
      <CardBody>
        <Row className="align-items-center">
          <Col>
            <p className="text-dark mb-0 fw-semibold fs-14">New Visitors</p>
            <h2 className="mt-0 mb-0 fw-bold">1,282</h2>
          </Col>
          <Col xs={'auto'} className="align-self-center">
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
            <small className="text-muted ms-0">Logined Visitors</small>
          </Col>
        </Row>
        <ReactApexChart height={230} options={chartOptions} series={chartOptions.series} type="bar" className="mb-2" />
        <button type="button" className="btn btn-primary w-100 btn-lg fs-14 flex-centered gap-1">
          More Detail <IconifyIcon icon="fa6-solid:arrow-right-long" className="" />
        </button>
      </CardBody>
    </Card>;
};
export default NewVisitors;