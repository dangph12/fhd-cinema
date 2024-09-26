import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import ReactApexChart from 'react-apexcharts';
const CategoriesChart = () => {
  const chartOptions = {
    series: [{
      name: 'Items',
      data: [1380, 1100, 990, 880, 740, 548, 330, 200]
    }],
    chart: {
      type: 'bar',
      height: 275,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        horizontal: true,
        distributed: true,
        barHeight: '85%',
        isFunnel: true,
        isFunnel3d: false
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (_val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      dropShadow: {
        enabled: false
      },
      style: {
        colors: ['#22c55e'],
        fontWeight: 400,
        fontSize: '13px'
      }
    },
    xaxis: {
      categories: ['Mobile', 'Men Fishion', 'Women Fishion', 'Beauty', 'Health', 'Sports', 'Kids', 'Music']
    },
    colors: ['rgba(34, 197, 94, 0.45)', 'rgba(34, 197, 94, 0.4)', 'rgba(34, 197, 94, 0.35)', 'rgba(34, 197, 94, 0.3)', 'rgba(34, 197, 94, 0.25)', 'rgba(34, 197, 94, 0.2)', 'rgba(34, 197, 94, 0.15)', 'rgba(34, 197, 94, 0.1)'],
    legend: {
      show: false
    }
  };
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Categories Data</CardTitle>
          </Col>
          <Col xs="auto">
            <div className="text-center">
              <h6 className="text-uppercase text-muted mt-1 m-0">
                <span className="fs-16 fw-semibold">24+</span> Categories
              </h6>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <ReactApexChart height={265} options={chartOptions} series={chartOptions.series} type="bar" />
        <div id="categories" className="apex-charts mt-n2" />
        <div className="text-center">
          <Button type="button" variant="primary" className="mx-auto icons-center gap-1">
            More Detail <IconifyIcon icon="fa6-solid:arrow-right-long" />{' '}
          </Button>
        </div>
      </CardBody>
    </Card>;
};
export default CategoriesChart;