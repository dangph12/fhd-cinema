import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';
import dastyle from '@/assets/images/extra/dashboards/dastyle.jpg';
import metrica from '@/assets/images/extra/dashboards/metrica.jpg';
import crovex from '@/assets/images/extra/dashboards/crovex.jpg';
import frogetor from '@/assets/images/extra/dashboards/frogetor.jpg';
import PageMetaData from '@/components/PageMetaData';
const Ribbons = () => {
  return <>
      <PageMetaData title="Ribbons" />
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <div className="ribbon4 rib4-blue">
              <span className="ribbon4-band ribbon4-band-blue text-white text-center">50% off</span>
            </div>
            <CardBody className="position-relative">
              <Row>
                <Col xs="auto">
                  <img src={dastyle} alt="user" height={150} className="align-self-center shadow-sm mb-3 mb-lg-0" />
                </Col>
                <Col className="align-self-center">
                  <p className="font-18 fw-semibold mb-2">Dastyle - Admin &amp; Dashboard Template</p>
                  <p className="text-muted">
                    Dastyle is a Bootstrap admin dashboard, It is fully responsive and included awesome features to help build web applications fast
                    and easy.
                  </p>
                  <Button variant="primary" size="sm" className="mb-1 me-1">
                    Live Priview
                  </Button>
                  <Button size="sm" variant="outline-secondary" className="mb-1">
                    Download Now
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className="ribbon4 rib4-blue">
              <span className="ribbon4-band ribbon4-band-blue text-white text-center">50% off</span>
            </div>
            <CardBody className="position-relative">
              <Row>
                <Col xs="auto">
                  <img src={crovex} alt="user" height={150} className="align-self-center shadow-sm mb-3 mb-lg-0" />
                </Col>
                <div className="col align-self-center">
                  <p className="font-18 fw-semibold mb-2">Crovex - Admin &amp; Dashboard Template</p>
                  <p className="text-muted">
                    Crovex is a Bootstrap admin dashboard, It is fully responsive and included awesome features to help build web applications fast
                    and easy.
                  </p>
                  <Button variant="primary" size="sm" className="mb-1 me-1">
                    Live Priview
                  </Button>
                  <Button size="sm" variant="outline-secondary" className="mb-1">
                    Download Now
                  </Button>
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <div className="ribbon1 rib1-danger">
              <span className="text-white text-center rib1-danger">50% off</span>
            </div>
            <CardBody className="position-relative">
              <Row>
                <Col xs="auto">
                  <img src={metrica} alt="user" height={150} className="align-self-center mb-3 shadow-sm mb-lg-0" />
                </Col>
                <Col className="align-self-center">
                  <p className="font-18 fw-semibold mb-2">Metrica - Admin &amp; Dashboard Template</p>
                  <p className="text-muted">
                    Metrica is a Bootstrap admin dashboard, It is fully responsive and included awesome features to help build web applications fast
                    and easy.
                  </p>
                  <Button variant="primary" size="sm" className="mb-1 me-1">
                    Live Priview
                  </Button>
                  <Button size="sm" variant="outline-secondary" className="mb-1">
                    Download Now
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className="ribbon1 rib1-danger">
              <span className="text-white text-center rib1-danger">50% off</span>
            </div>
            <CardBody className="position-relative">
              <Row>
                <Col xs="auto">
                  <img src={frogetor} alt="user" height={150} className="align-self-center mb-3 shadow-sm mb-lg-0" />
                </Col>
                <div className="col align-self-center">
                  <p className="font-18 fw-semibold mb-2">Frogetor - Admin &amp; Dashboard Template</p>
                  <p className="text-muted">
                    Frogetor is a Bootstrap admin dashboard, It is fully responsive and included awesome features to help build web applications fast
                    and easy.
                  </p>
                  <Button variant="primary" size="sm" className="mb-1 me-1">
                    Live Priview
                  </Button>
                  <Button size="sm" variant="outline-secondary" className="mb-1">
                    Download Now
                  </Button>
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <div className="ribbon3 rib3-primary">
              <span className="text-white text-center rib3-primary">50% off</span>
            </div>
            <CardBody className="position-relative">
              <Row>
                <Col xs="auto">
                  <img src={dastyle} alt="user" height={150} className="align-self-center mb-3 shadow-sm mb-lg-0" />
                </Col>
                <div className="col align-self-center">
                  <p className="font-18 fw-semibold mb-2">Dastyle - Admin &amp; Dashboard Template</p>
                  <p className="text-muted">
                    Dastyle is a Bootstrap admin dashboard, It is fully responsive and included awesome features to help build web applications fast
                    and easy.
                  </p>
                  <Button variant="primary" size="sm" className="mb-1 me-1">
                    Live Priview
                  </Button>
                  <Button size="sm" variant="outline-secondary" className="mb-1">
                    Download Now
                  </Button>
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className="ribbon3 rib3-primary">
              <span className="text-white text-center rib3-primary">50% off</span>
            </div>
            <CardBody className="position-relative">
              <Row>
                <Col xs="auto">
                  <img src={metrica} alt="user" height={150} className="align-self-center mb-3 shadow-sm mb-lg-0" />
                </Col>
                <div className="col align-self-center">
                  <p className="font-18 fw-semibold mb-2">Metrica - Admin &amp; Dashboard Template</p>
                  <p className="text-muted">
                    Metrica is a Bootstrap admin dashboard, It is fully responsive and included awesome features to help build web applications fast
                    and easy.
                  </p>
                  <Button variant="primary" size="sm" className="mb-1 me-1">
                    Live Priview
                  </Button>
                  <Button size="sm" variant="outline-secondary" className="mb-1">
                    Download Now
                  </Button>
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <div className="ribbon2 rib2-warning">
              <span className="text-white text-center rib3-warning fs-11">50% off</span>
            </div>
            <CardBody className="position-relative">
              <Row>
                <Col xs="auto">
                  <img src={crovex} alt="user" height={150} className="align-self-center mb-3 shadow-sm mb-lg-0" />
                </Col>
                <Col className="align-self-center">
                  <p className="font-18 fw-semibold mb-2">Crovex - Admin &amp; Dashboard Template</p>
                  <p className="text-muted">
                    Crovex is a Bootstrap admin dashboard, It is fully responsive and included awesome features to help build web applications fast
                    and easy.
                  </p>
                  <Button variant="primary" size="sm" className="mb-1 me-1">
                    Live Priview
                  </Button>
                  <Button size="sm" variant="outline-secondary" className="mb-1">
                    Download Now
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className="ribbon2 rib2-warning">
              <span className="text-white text-center rib3-warning fs-11">50% off</span>
            </div>
            <CardBody className="position-relative">
              <Row>
                <Col xs="auto">
                  <img src={frogetor} alt="user" height={150} className="align-self-center mb-3 shadow-sm mb-lg-0" />
                </Col>
                <div className="col align-self-center">
                  <p className="font-18 fw-semibold mb-2">Frogetor - Admin &amp; Dashboard Template</p>
                  <p className="text-muted">
                    Frogetor is a Bootstrap admin dashboard, It is fully responsive and included awesome features to help build web applications fast
                    and easy.
                  </p>
                  <Button variant="primary" size="sm" className="mb-1 me-1">
                    Live Priview
                  </Button>
                  <Button size="sm" variant="outline-secondary" className="mb-1">
                    Download Now
                  </Button>
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default Ribbons;