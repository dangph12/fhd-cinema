import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
const StarterPage = () => {
  return <>
      <PageMetaData title="Starter Page" />
      <Row>
        <Col md={12} lg={6}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4">Card title &amp; Dropdown</CardTitle>
                </Col>
                <Col xs="auto">
                  <Dropdown>
                    <DropdownToggle as="a" className="btn bt btn-light" aria-expanded="false">
                      <i className="icofont-calendar fs-5 me-1" /> This Year
                      <IconifyIcon icon="la:angle-down" className="ms-1" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <DropdownItem href="#">Today</DropdownItem>
                      <DropdownItem href="#">Last Week</DropdownItem>
                      <DropdownItem href="#">Last Month</DropdownItem>
                      <DropdownItem href="#">This Year</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0"></CardBody>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle>Card Title</CardTitle>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0"></CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default StarterPage;