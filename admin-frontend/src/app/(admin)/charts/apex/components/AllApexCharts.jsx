import ComponentContainerCard from '@/components/ComponentContainerCard';
import ReactApexChart from 'react-apexcharts';
import { Button, Col, Row } from 'react-bootstrap';
import { basicAreaChartOpts, basicBarChartOpts, basicColumnChartOpts, basicLineChartOpts, basicTreemapChartOpts, bubbleChartOpts, CircularGuageChartOpts, columnWithLabelChartOpts, dateTimeAreaChartOpts, donutChartOpts, LineWithDataLabelsOpts, monochromeChartOpts, multipleRadialbarChartOpts, multipleYAxisChartOpts, patternedDonutChartOpts, pieChartOpts, polarAreaChartOpts, radialbarChartOpts, simpleCandlestickChartOpts, sparkChartOpts1, sparkChartOpts2, sparkChartOpts3, treemapColorChartOpts } from '../data';
const AllApexCharts = () => {
  return <>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Basic Line Chart">
            <ReactApexChart height={350} options={basicLineChartOpts} series={basicLineChartOpts.series} type="line" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Line with Data Labels">
            <ReactApexChart height={350} options={LineWithDataLabelsOpts} series={LineWithDataLabelsOpts.series} type="area" />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Basic Area Chart">
            <ReactApexChart height={350} options={basicAreaChartOpts} series={basicAreaChartOpts.series} type="area" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Area Chart - Datetime X-Axis">
            <div className="toolbar">
              <Button variant="outline-light" className="me-1" size="sm" id="one_month">
                1M
              </Button>
              <Button variant="outline-light" className="me-1" size="sm" id="six_months">
                6M
              </Button>
              <Button variant="outline-light" className="me-1" size="sm" active id="one_year">
                1Y
              </Button>
              <Button variant="outline-light" className="me-1" size="sm" id="ytd">
                YTD
              </Button>
              <Button variant="outline-light" size="sm" id="all">
                ALL
              </Button>
            </div>
            <ReactApexChart height={350} options={dateTimeAreaChartOpts} series={dateTimeAreaChartOpts.series} type="area" />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Basic Column Chart">
            <ReactApexChart height={380} options={basicColumnChartOpts} series={basicColumnChartOpts.series} type="bar" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Column Chart With Datalabels">
            <ReactApexChart height={380} options={columnWithLabelChartOpts} series={columnWithLabelChartOpts.series} type="bar" />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Basic Bar Chart">
            <ReactApexChart height={380} options={basicBarChartOpts} series={basicBarChartOpts.series} type="bar" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Multiple Y-Axis Chart">
            <ReactApexChart height={380} options={multipleYAxisChartOpts} series={multipleYAxisChartOpts.series} type="line" />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="3D Bubble Chart">
            <ReactApexChart height={380} options={bubbleChartOpts} series={bubbleChartOpts.series} type="bubble" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Simple Candlestick Chart">
            <ReactApexChart height={380} options={simpleCandlestickChartOpts} series={simpleCandlestickChartOpts.series} type="candlestick" />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Basic Treemap">
            <ReactApexChart height={350} options={basicTreemapChartOpts} series={basicTreemapChartOpts.series} type="treemap" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Treemap Color">
            <ReactApexChart height={350} options={treemapColorChartOpts} series={treemapColorChartOpts.series} type="treemap" />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Polar Area">
            <ReactApexChart className="overflow-hidden" height={380} width={420} options={polarAreaChartOpts} series={polarAreaChartOpts.series} type="polarArea" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={6}>
          <ComponentContainerCard title="Monochrome">
            <ReactApexChart className="overflow-hidden" width={380} options={monochromeChartOpts} series={monochromeChartOpts.series} type="polarArea" />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <ComponentContainerCard title="Simple Pie Chart">
            <ReactApexChart height={320} options={pieChartOpts} series={pieChartOpts.series} type="pie" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={4}>
          <ComponentContainerCard title="Gradient Donut Chart">
            <ReactApexChart height={320} options={donutChartOpts} series={donutChartOpts.series} type="donut" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={4}>
          <ComponentContainerCard title="Patterned Donut Chart">
            <ReactApexChart height={320} options={patternedDonutChartOpts} series={patternedDonutChartOpts.series} type="donut" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={4}>
          <ComponentContainerCard title="Basic RadialBar Chart">
            <ReactApexChart height={360} options={radialbarChartOpts} series={radialbarChartOpts.series} type="radialBar" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={4}>
          <ComponentContainerCard title="Multiple RadialBars">
            <ReactApexChart height={360} options={multipleRadialbarChartOpts} series={multipleRadialbarChartOpts.series} type="radialBar" />
          </ComponentContainerCard>
        </Col>
        <Col md={6} lg={4}>
          <ComponentContainerCard title="Stroked Circular Guage">
            <ReactApexChart height={385} options={CircularGuageChartOpts} series={CircularGuageChartOpts.series} type="radialBar" />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12}>
          <ComponentContainerCard title="Sparkline inline">
            <Row>
              <Col md={4}>
                <ReactApexChart height={160} options={sparkChartOpts1} series={sparkChartOpts1.series} type="area" className="apex-charts" />
              </Col>
              <Col md={4}>
                <ReactApexChart height={160} options={sparkChartOpts2} series={sparkChartOpts2.series} type="area" className="apex-charts" />
              </Col>
              <Col md={4}>
                <ReactApexChart height={160} options={sparkChartOpts3} series={sparkChartOpts3.series} type="area" className="apex-charts" />
              </Col>
            </Row>
          </ComponentContainerCard>
        </Col>
      </Row>
    </>;
};
export default AllApexCharts;