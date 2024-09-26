import ReactApexChart from 'react-apexcharts';
import { Button, CardBody, CardTitle } from 'react-bootstrap';
const SummaryChart = () => {
  const chartOptions = {
    chart: {
      height: 260,
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
      floating: false,
      fontSize: '13px',
      fontFamily: 'Be Vietnam Pro, sans-serif',
      offsetX: 0,
      offsetY: 0
    },
    labels: ['Active', 'Completed', 'Assigned'],
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
  return <div className="mb-3">
      <CardBody className="pt-0 text-center">
        <ReactApexChart height={260} options={chartOptions} series={chartOptions.series} type="donut" />
        <CardTitle as="h4" className="my-2">
          Tasks Summary
        </CardTitle>
        <Button variant="outline-primary" type="button" className="px-3 mt-2">
          View Tasks
        </Button>
      </CardBody>
    </div>;
};
export default SummaryChart;