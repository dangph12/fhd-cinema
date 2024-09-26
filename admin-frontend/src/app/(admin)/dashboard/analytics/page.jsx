import { Col, Row } from 'react-bootstrap'
import AudienceOverviewChart from './components/AudienceOverviewChart'
import BrowserAndTrafficReport from './components/BrowserAndTrafficReport'
import NewVisitors from './components/NewVisitors'
import Stats from './components/Stats'
import TotalVisits from './components/TotalVisits'
import TrafficSources from './components/TrafficSources'
import WorldTraffic from './components/WorldTraffic'
import PageMetaData from '@/components/PageMetaData'
const AnalyticDashboard = () => {
  return (
    <>
      {/* <PageMetaData title="Analytics" />
      <Stats />
      <Row className="justify-content-center">
        <Col md={6} lg={8}>
          <AudienceOverviewChart />
        </Col>
        <Col md={6} lg={4}>
          <NewVisitors />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <BrowserAndTrafficReport />
        </Col>
        <Col lg={6}>
          <TotalVisits />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <TrafficSources />
        </Col>
        <Col md={6} lg={8}>
          <WorldTraffic />
        </Col>
      </Row> */}
    </>
  )
}
export default AnalyticDashboard
