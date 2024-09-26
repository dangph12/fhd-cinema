import { currentYear } from '@/context/constants';
import IconifyIcon from '../wrappers/IconifyIcon';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
const Footer = () => {
  return <footer className="footer text-center text-sm-start d-print-none">
      <div className="container-xxl">
        <Row>
          <Col xs={12}>
            <Card className="mb-0 rounded-bottom-0">
              <CardBody>
                <p className="text-muted mb-0">
                  © {currentYear} Rizz{' '}
                  <span className="text-muted d-none d-sm-inline-block float-end icons-center">
                    {' '}
                    Crafted with <IconifyIcon icon="iconoir:heart" className="text-danger" /> by Mannatthemes
                  </span>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </footer>;
};
export default Footer;