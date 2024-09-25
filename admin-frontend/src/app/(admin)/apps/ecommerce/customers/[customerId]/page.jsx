import { getCustomersById } from '@/helpers/data';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import CustomerCard from './components/CustomerCard';
import Orders from './components/Orders';
import Stats from './components/Stats';
const CustomerDetails = () => {
  const {
    customerId
  } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState();
  useEffect(() => {
    ;
    (async () => {
      if (customerId) {
        const data = await getCustomersById(customerId ?? '');
        if (data) setCustomer(data);else navigate('/not-found');
      }
    })();
  }, [customerId]);
  return <>
      <Row>
        <Col md={12} lg={5}>
          {customer && <CustomerCard customer={customer} />}
        </Col>
        <Col md={12} lg={7}>
          <Stats />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Orders />
        </Col>
      </Row>
    </>;
};
export default CustomerDetails;