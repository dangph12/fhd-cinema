import ComponentContainerCard from '@/components/ComponentContainerCard';
import { useLayoutContext } from '@/context/useLayoutContext';
import { AreaChart, BarChart, BoxPlotChart, BubbleChart, BulletChart, ColumnChart, HeatmapChart, LineChart, PieChart, RadialBarChart, ScatterChart, TreemapChart } from '@toast-ui/react-chart';
import { Col, Row } from 'react-bootstrap';
import { areaChartOpts, barChartOpts, boxPlotChartOpts, bubbleChartOpts, bulletChartOpts, columnChartOpts, heatmapChartOpts, lineChartOpts, pieChartOpts, radialbarChartOpts, scatterChartOpts, treemapChartOpts } from '../data';
import '@toast-ui/chart/dist/toastui-chart.min.css';
const AllToastCharts = () => {
  return <>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Bar Chart">
            <DivWithThemeBG>
              <BarChart data={barChartOpts.data} options={barChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Column Chart">
            <DivWithThemeBG>
              <ColumnChart data={columnChartOpts.data} options={columnChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Line Chart">
            <DivWithThemeBG>
              <LineChart data={lineChartOpts.data} options={lineChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Area Chart">
            <DivWithThemeBG>
              <AreaChart data={areaChartOpts.data} options={areaChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Bubble Chart">
            <DivWithThemeBG>
              <BubbleChart data={bubbleChartOpts.data} options={bubbleChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Scatter Chart">
            <DivWithThemeBG>
              <ScatterChart data={scatterChartOpts.data} options={scatterChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Pie Chart">
            <DivWithThemeBG>
              <PieChart data={pieChartOpts.data} options={pieChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Boxplot chart">
            <DivWithThemeBG>
              <BoxPlotChart data={boxPlotChartOpts.data} options={boxPlotChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Heatmap chart">
            <DivWithThemeBG>
              <HeatmapChart data={heatmapChartOpts.data} options={heatmapChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Treemap chart">
            <DivWithThemeBG>
              <TreemapChart data={treemapChartOpts.data} options={treemapChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Bullet chart">
            <DivWithThemeBG>
              <BulletChart data={bulletChartOpts.data} options={bulletChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Radial chart">
            <DivWithThemeBG>
              <RadialBarChart data={radialbarChartOpts.data} options={radialbarChartOpts.options} />
            </DivWithThemeBG>
          </ComponentContainerCard>
        </Col>
      </Row>
    </>;
};
export default AllToastCharts;
const DivWithThemeBG = ({
  children
}) => {
  const {
    theme
  } = useLayoutContext();
  const getBgColor = () => theme === 'dark' ? '#00000030' : '#fefefe';
  return <div style={{
    backgroundColor: getBgColor()
  }}>{children}</div>;
};