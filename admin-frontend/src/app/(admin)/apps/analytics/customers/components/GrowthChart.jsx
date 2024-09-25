import IconifyIcon from '@/components/wrappers/IconifyIcon';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
const GrowthChart = () => {
  const chartOptions = {
    series: [{
      name: 'New Customers ',
      data: [0, 20, 15, 19, 14, 25, 30]
    }, {
      name: 'Returning Customers',
      data: [0, 8, 7, 13, 26, 16, 25]
    }],
    chart: {
      fontFamily: 'inherit',
      height: 233,
      type: 'line',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ['var(--bs-primary)', 'var(--bs-primary-bg-subtle)'],
    grid: {
      show: true,
      strokeDashArray: 3
    },
    stroke: {
      curve: 'smooth',
      colors: ['var(--bs-primary)', 'var(--bs-primary-bg-subtle)'],
      width: 2
    },
    markers: {
      colors: ['var(--bs-primary)', 'var(--bs-primary-bg-subtle)'],
      strokeColors: 'transparent'
    },
    tooltip: {
      x: {
        show: false
      },
      followCursor: true
    }
  };
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Customers Growth</CardTitle>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <DropdownToggle className="btn bt btn-light">
                <i className="icofont-calendar fs-5 me-1" />
                This Year
                <IconifyIcon icon="la:angle-down" className="ms-1" />
              </DropdownToggle>
              <DropdownMenu align={'end'}>
                <DropdownItem href="#">Today</DropdownItem>
                <DropdownItem href="#">Last Week</DropdownItem>
                <DropdownItem href="#">Last Month</DropdownItem>
                <DropdownItem href="#">This Year</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <ReactApexChart height={233} options={chartOptions} series={chartOptions.series} type="line" />
      </CardBody>
    </Card>;
};
export default GrowthChart;