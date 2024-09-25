import IconifyIcon from '@/components/wrappers/IconifyIcon';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
const MetricsChart = () => {
  const chartOptions = {
    series: [{
      name: '2024',
      data: [2.7, 2.2, 1.3, 2.5, 1, 2.5, 1.2, 1.2, 2.7, 1, 3.6, 2.1]
    }, {
      name: '2023',
      data: [-2.3, -1.9, -1, -2.1, -1.3, -2.2, -1.1, -2.3, -2.8, -1.1, -2.5, -1.5]
    }],
    chart: {
      toolbar: {
        show: false
      },
      type: 'bar',
      fontFamily: 'inherit',
      foreColor: '#adb0bb',
      height: 292,
      stacked: true,
      offsetX: -15
    },
    colors: ['var(--bs-primary)', 'var(--bs-secondary)'],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '80%',
        columnWidth: '12%',
        borderRadius: 3,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      padding: {
        top: 0,
        bottom: 0,
        right: 0
      },
      borderColor: 'rgba(0,0,0,0.05)',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    // yaxis: {
    //   min: -5,
    //   max: 5,
    // },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
      tickAmount: 4
    }
  };
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Metrics</CardTitle>
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
        <ReactApexChart height={292} options={chartOptions} series={chartOptions.series} type="bar" className="pill-bar" />
      </CardBody>
    </Card>;
};
export default MetricsChart;