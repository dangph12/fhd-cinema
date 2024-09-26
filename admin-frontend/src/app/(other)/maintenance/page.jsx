import IconifyIcon from '@/components/wrappers/IconifyIcon';
import maintenanceImg from '@/assets/images/extra/card/maintenance.png';
import { Card, CardBody, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageMetaData from '@/components/PageMetaData';
const Maintenance = () => {
  return <>
      <PageMetaData title="Maintenance" />
      <Col lg={6} className="mx-auto">
        <Card>
          <CardBody className="p-5">
            <div className="text-center">
              <img src={maintenanceImg} alt="maintenance" className="img-fluid mb-3" />
              <h6 className="mb-2 fw-medium text-dark fs-24">We are down on maintenance right now</h6>
              <p className="text-muted mb-0 text-wrap fs-15">This website is currently undergoing Scheduled maintenance.</p>
              <div className="mt-3 text-center">
                <Link className="btn btn-primary w-50" to="/">
                  Back to Dashboard <IconifyIcon icon="fa:redo" className="ms-1" />
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>;
};
export default Maintenance;