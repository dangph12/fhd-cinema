import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const LineAwesomeIcons = () => {
  return <>
      <PageMetaData title="Line Awesome Icons" />
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4" className="mb-1">
                    Line Awesome Icons
                  </CardTitle>
                  <p className="text-muted mb-0">
                    Use <code className="fs-14">&lt;i class=&quot;las la-braille&quot;&gt;&lt;/i&gt;</code>
                  </p>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              <Row className="icon-demo-content">
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:accessible-icon" /> lab la-accessible-icon
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:blind" /> las la-blind
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:low-vision" /> las la-low-vision
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:tty" /> las la-tty
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:braille" /> las la-braille
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:phone-volume" /> las la-phone-volume
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:universal-access" /> las la-universal-access
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:question-circle" /> lar la-question-circle
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:bell" /> lar la-bell
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:exclamation-circle" /> las la-exclamation-circle
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:bell-slash" /> las la-bell-slash
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:fish" /> las la-fish
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:cat" /> las la-cat
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:angle-down" /> las la-angle-down
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:angle-up" /> las la-angle-up
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:angle-left" /> las la-angle-left
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:angle-right" /> las la-angle-right
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:arrow-circle-down" /> las la-arrow-circle-down
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:arrow-circle-up" /> las la-arrow-circle-up
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:arrow-circle-left" /> las la-arrow-circle-left
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:arrow-circle-right" /> las la-arrow-circle-right
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:facebook" /> lab la-facebook
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:twitter" /> lab la-twitter
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <IconifyIcon icon="la:whatsapp" /> lab la-whatsapp
                </Col>
              </Row>
              <div className="p-3 border border-primary bg-primary-subtle rounded">
                <Row>
                  <Col>
                    <h5 className="text-primary fs-18 mb-1 fw-semibold">Line Awesome Icons</h5>
                    <p className="text-muted mb-0 fs-14">Swap Font Awesome for modern line icons in one line of code.</p>
                    <p className="text-muted mb-0 fs-14">
                      Line Awesome is a free alternative for Font Awesome 5.11.2. It consists of ~1380 flat icons that offer complete coverage of the
                      main Font Awesome icon set.
                    </p>
                  </Col>
                  <Col xs="auto" className="align-self-center">
                    <a href="https://icons8.com/line-awesome" target="_blank" type="button" className="btn btn-primary">
                      More Icons
                    </a>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default LineAwesomeIcons;