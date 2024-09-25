import { Col, Row } from 'react-bootstrap';
import CustomerDetails from './components/CustomerDetails';
import CustomersData from './components/CustomersData';
import GrowthChart from './components/GrowthChart';
import SocialStats from './components/SocialStats';
import PageMetaData from '@/components/PageMetaData';
const Customers = () => {
  return <>
      <PageMetaData title="Customers" />
      <Row>
        <Col md={12} lg={5}>
          <CustomersData />
        </Col>
        <Col md={12} lg={7}>
          <GrowthChart />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <SocialStats />
      </Row>
      <Row>
        <Col xs={12}>
          <CustomerDetails />
        </Col>
      </Row>
    </>;
};
export default Customers;