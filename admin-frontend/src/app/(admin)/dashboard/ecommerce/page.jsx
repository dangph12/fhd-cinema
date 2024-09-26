import { Col, Row } from 'react-bootstrap';
import { statData } from './data';
import StatCard from './components/StatCard';
import MonthlyIncome from './components/MonthlyIncome';
import PopularProducts from './components/PopularProducts';
import Customers from './components/Customers';
import TopSellingByCountry from './components/TopSellingByCountry';
import CategoriesChart from './components/CategoriesChart';
import RecentOrders from './components/RecentOrders';
import PageMetaData from '@/components/PageMetaData';
const Ecommerce = () => {
  return <>
      <PageMetaData title="Ecommerce" />

      <Row>
        <Col md={12} lg={4}>
          {statData.map((stat, idx) => <StatCard {...stat} key={idx} />)}
        </Col>

        <Col md={12} lg={8}>
          <MonthlyIncome />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={8}>
          <PopularProducts />
        </Col>
        <Col md={6} lg={4}>
          <Customers />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <TopSellingByCountry />
        </Col>
        <Col md={6} lg={4}>
          <CategoriesChart />
        </Col>
        <Col md={6} lg={4}>
          <RecentOrders />
        </Col>
      </Row>
    </>;
};
export default Ecommerce;