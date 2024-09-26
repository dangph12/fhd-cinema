import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import { customerStats } from '../data';
const CustomersData = () => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Customers Data</CardTitle>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <DropdownToggle className="btn bt btn-light">
                <i className="icofont-calendar fs-5 me-1" />
                This Year
                <IconifyIcon icon="la:angle-down" className="ms-1" />
              </DropdownToggle>
              <DropdownMenu align={'end'}>
                <DropdownItem href="#">Today</DropdownItem>
                <DropdownItem href="#">Last Week</DropdownItem>
                <DropdownItem href="#">Last Month</DropdownItem>
                <DropdownItem href="#">This Year</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <Row className="g-3">
          {customerStats.map((stat, idx) => <Col md={6} key={idx}>
              <Card className="shadow-none border mb-3 mb-lg-0">
                <CardBody>
                  <Row className="align-items-center">
                    <Col className="text-center">
                      <span className="fs-18 fw-semibold">{stat.stat}</span>
                      <h6 className="text-uppercase text-muted mt-2 m-0">{stat.title}</h6>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>)}
        </Row>
      </CardBody>
    </Card>;
};
export default CustomersData;