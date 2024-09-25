import { Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import { barChartConfig, donutChartConfig, lineChartConfig, pieChartConfig, polarChartConfig, radarChartConfig } from '../data';
const AllChartJsCharts = () => {
  useEffect(() => {
    const lineChartTag = document.getElementById('lineChart');
    const lineChart = new Chart(lineChartTag, lineChartConfig);
    const donutChartTag = document.getElementById('doughnut');
    const donutChart = new Chart(donutChartTag, donutChartConfig);
    const barChartTag = document.getElementById('bar');
    const barChart = new Chart(barChartTag, barChartConfig);
    const polarChartTag = document.getElementById('polarArea');
    const polarChart = new Chart(polarChartTag, polarChartConfig);
    const pieChartTag = document.getElementById('pie');
    const pieChart = new Chart(pieChartTag, pieChartConfig);
    const radarChartTag = document.getElementById('radar');
    const radarChart = new Chart(radarChartTag, radarChartConfig);
    return () => {
      lineChart.destroy();
      donutChart.destroy();
      barChart.destroy();
      polarChart.destroy();
      pieChart.destroy();
      radarChart.destroy();
    };
  }, []);
  return <>
      <Row className="justify-content-center">
        <Col md={6} lg={8}>
          <ComponentContainerCard title="Line Chart">
            <canvas id="lineChart" width={300} height={300} />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={4}>
          <ComponentContainerCard title="Donut Chart">
            <canvas id="doughnut" height={300} />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={8}>
          <ComponentContainerCard title="Bar Chart">
            <canvas id="bar" height={300} />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={4}>
          <ComponentContainerCard title="Polar Chart">
            <canvas id="polarArea" height={300} />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Pie Chart">
            <canvas id="pie" height={300} />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Radar Chart">
            <canvas id="radar" height={300} />
          </ComponentContainerCard>
        </Col>
      </Row>
    </>;
};
export default AllChartJsCharts;