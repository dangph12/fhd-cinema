import PageMetaData from '@/components/PageMetaData';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const IcoFont = () => {
  return <>
      <PageMetaData title="IconFont Icons" />
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4" className="mb-1">
                    Icofont Icons
                  </CardTitle>
                  <p className="text-muted mb-0">
                    Use <code className="fs-14">&lt;i class=&quot;icofont-bathtub&quot;&gt;&lt;/i&gt;</code>
                  </p>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              <Row className="icon-demo-content">
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-angry-monster" /> icofont-angry-monster
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-bathtub" /> icofont-bathtub
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-bird-wings" /> icofont-bird-wings
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-bow" /> icofont-bow
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-circuit" /> icofont-circuit
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-dart" /> icofont-dart
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-disability-race" /> icofont-disability-race
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-brand-mercedes" /> icofont-brand-mercedes
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-brand-puma" /> icofont-brand-puma
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-bank-alt" /> icofont-bank-alt
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-money-bag" /> icofont-money-bag
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-chart-pie" /> icofont-chart-pie
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-chart-flow-1" /> icofont-chart-flow-1
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-recycling-man" /> icofont-recycling-man
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-vehicle-delivery-van" /> icofont-vehicle-delivery-van
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-baht" /> icofont-baht
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-euro" /> icofont-euro
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-lira" /> icofont-lira
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-headphone" /> icofont-headphone
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-rounded-right" /> icofont-rounded-right
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-rounded-left" /> icofont-rounded-left
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-bell-alt" /> icofont-bell-alt
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-pencil-alt-5" /> icofont-pencil-alt-5
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <i className="icofont-instrument" /> icofont-instrument
                </Col>
              </Row>
              <div className="p-3 border border-primary bg-primary-subtle rounded">
                <Row>
                  <Col>
                    <h5 className="text-primary fs-18 mb-1 fw-semibold">Icofont Icons</h5>
                    <p className="text-muted mb-0 fs-14">
                      Welcome to IcoFont, your ultimate digital resource for meticulously crafted icons. IcoFont is a free platform designed to ignite
                      creativity and breathe life into your digital designs.
                    </p>
                  </Col>
                  <Col xs="auto" className="align-self-center">
                    <a href="https://icofont.com/" target="_blank" type="button" className="btn btn-primary">
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
export default IcoFont;