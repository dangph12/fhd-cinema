import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const IconoirIcons = () => {
  return <>
      <PageMetaData title="Iconoir Icons" />

      <Row className="justify-content-center">
        <Col xs={12}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4" className="mb-1">
                    Iconoir Icons
                  </CardTitle>
                  <p className="text-muted mb-0">
                    Use <code className="fs-14">&lt;i class=&quot;iconoir-cycling&quot;&gt;&lt;/i&gt;</code>
                  </p>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              <Row className="icon-demo-content">
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:cycling" /> iconoir-cycling
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:cinema-old" /> iconoir-cinema-old
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:flower" /> iconoir-flower
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:fire-flame" /> iconoir-fire-flame
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:no-smoking-circle" /> iconoir-no-smoking-circle
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:palette" /> iconoir-palette
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:report-columns" /> iconoir-report-columns
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:reports-solid" /> iconoir-reports-solid
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:soccer-ball" /> iconoir-soccer-ball
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:trophy" /> iconoir-trophy
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:wolf" /> iconoir-wolf
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:keyframes-couple" /> iconoir-keyframes-couple
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:microphone" /> iconoir-microphone
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:microphone-mute" /> iconoir-microphone-mute
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:priority-down" /> iconoir-priority-down
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:dollar-circle" /> iconoir-dollar-circle
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:umbrella" /> iconoir-umbrella
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:quote-solid" /> iconoir-quote-solid
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:suitcase" /> iconoir-suitcase
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:cloud-upload" /> iconoir-cloud-upload
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:bell" /> iconoir-bell
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:bell-off" /> iconoir-bell-off
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:chat-bubble" /> iconoir-chat-bubble
                </Col>
                <Col sm={6} md={4} lg={3} className="d-grid">
                  <IconifyIcon icon="iconoir:mail" /> iconoir-mail
                </Col>
              </Row>
              <div className="p-3 border border-primary bg-primary-subtle rounded">
                <Row>
                  <Col>
                    <h5 className="text-primary fs-18 mb-1 fw-semibold">Iconoir Icons</h5>
                    <p className="text-muted mb-0 fs-14">
                      A high-quality selection of free icons. Your new alternative to Noun Project, Flaticon, and all Figma resources. Available in
                      SVG, Font, React, React Native, Flutter, Figma and Framer.
                    </p>
                  </Col>
                  <Col xs="auto" className="align-self-center">
                    <a href="https://iconoir.com/" target="_blank" type="button" className="btn btn-primary">
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
export default IconoirIcons;