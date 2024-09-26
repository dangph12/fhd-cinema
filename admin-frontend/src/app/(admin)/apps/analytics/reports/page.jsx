import PageMetaData from '@/components/PageMetaData';
import { Col, Row } from 'react-bootstrap';
import MetricsChart from './components/MetricsChart';
import SocialMedia from './components/SocialMedia';
import TopCountry from './components/TopCountry';
import VisitsDetails from './components/VisitsDetails';
const Reports = () => {
  return <>
      <PageMetaData title="Reports" />
      <Row>
        <Col md={12} lg={3}>
          <TopCountry />
        </Col>
        <Col md={12} lg={9}>
          <MetricsChart />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <VisitsDetails />
        </Col>
        <Col lg={6}>
          <SocialMedia />
        </Col>
      </Row>
    </>;
};
export default Reports;