import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Alert, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const DefaultAlerts = () => {
  return <ComponentContainerCard title="Default Alerts">
      <Alert variant="success" className="shadow-sm border-theme-white-2" role="alert">
        <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-success rounded-circle mx-auto me-1">
          <IconifyIcon icon="fa6-solid:check" className="align-self-center mb-0 text-white " />
        </div>
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>
      <Alert variant="danger" className="shadow-sm border-theme-white-2" role="alert">
        <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-danger rounded-circle mx-auto me-1">
          <IconifyIcon icon="fa6-solid:xmark" className="align-self-center mb-0 text-white " />
        </div>
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </Alert>
      <Alert variant="warning" className="shadow-sm border-theme-white-2" role="alert">
        <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-warning rounded-circle mx-auto me-1">
          <IconifyIcon icon="fa6-solid:exclamation" className="align-self-center mb-0 text-white " />
        </div>
        <strong>Well done!</strong> An example warning alert with an icon.
      </Alert>
      <Alert variant="purple" className="shadow-sm border-theme-white-2 mb-0" role="alert">
        <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-purple rounded-circle mx-auto me-1">
          <IconifyIcon icon="fa6-solid:info" className="align-self-center mb-0 text-white " />
        </div>
        A simple primary alert with{' '}
        <Link to="" className="alert-link">
          an example link
        </Link>
        . Give it a click if you like.
      </Alert>
    </ComponentContainerCard>;
};
const OutlineAlerts = () => {
  return <ComponentContainerCard title="Outline Alerts">
      <Alert variant="" className="border-2 border-success text-success" role="alert">
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>
      <Alert variant="" className="border-2 border-danger text-danger" role="alert">
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </Alert>
      <Alert variant="" className="border-2 border-warning text-warning" role="alert">
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>
      <Alert variant="" className="border-2 border-info mb-0 text-info" role="alert">
        <strong>Oh snap!</strong> Change a few things up and try submitting again. 🎉
      </Alert>
    </ComponentContainerCard>;
};
const DismissibleAlerts = () => {
  return <ComponentContainerCard title="Dismissible Alerts">
      <Alert dismissible variant="success" className="fade show shadow-sm border-theme-white-2 rounded-pill" role="alert">
        <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-success rounded-circle mx-auto me-1">
          <IconifyIcon icon="fa6-solid:check" className="align-self-center mb-0 text-white " />
        </div>
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>
      <Alert variant="danger" dismissible className="fade show shadow-sm border-theme-white-2 mb-0" role="alert">
        <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-danger rounded-circle mx-auto me-1">
          <IconifyIcon icon="fa6-solid:xmark" className="align-self-center mb-0 text-white " />
        </div>
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </Alert>
    </ComponentContainerCard>;
};
const DismissibleOutlineAlerts = () => {
  return <ComponentContainerCard title="Dismissible Outline Alerts">
      <Alert variant="" dismissible className="border-2 border-success text-success fade show rounded-pill" role="alert">
        <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-success rounded-circle mx-auto me-1">
          <IconifyIcon icon="fa6-solid:check" className="align-self-center mb-0 text-white " />
        </div>
        <strong>Well done!</strong> You successfully read this important alert message.
      </Alert>
      <Alert variant="" dismissible className="border-2 border-danger text-danger fade show mb-0" role="alert">
        <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-danger rounded-circle mx-auto me-1">
          <IconifyIcon icon="fa6-solid:xmark" className="align-self-center mb-0 text-white " />
        </div>
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </Alert>
    </ComponentContainerCard>;
};
const CustomIconAlerts = () => {
  return <ComponentContainerCard title="Custom Icon Alerts">
      <Alert variant="danger" dismissible className="fade show  border-start border-2 border-danger mb-0" role="alert">
        <div className="d-flex align-items-center gap-2">
          <IconifyIcon icon="fa6-solid:skull-crossbones" className="align-self-center fs-30 text-danger " />
          <div className="flex-grow-1 ms-2 text-truncate">
            <h5 className="mb-1 fw-bold mt-0">Primary</h5>
            <p className="mb-0">Oh snap! Change a few things up and try submitting again.</p>
          </div>
        </div>
      </Alert>
    </ComponentContainerCard>;
};
const AdditionalContent = () => {
  return <ComponentContainerCard title="Additional Content">
      <Alert variant="info" className="mb-0 border-2" role="alert">
        <h4 className="alert-heading font-18">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
          within an alert works with this kind of content.
        </p>
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </Alert>
    </ComponentContainerCard>;
};
const Alerts = () => {
  return <>
      <PageMetaData title="Alerts" />
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <DefaultAlerts />
        </Col>
        <Col md={6} lg={6}>
          <OutlineAlerts />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <DismissibleAlerts />
        </Col>
        <Col md={6} lg={6}>
          <DismissibleOutlineAlerts />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <CustomIconAlerts />
        </Col>
        <Col md={6} lg={6}>
          <AdditionalContent />
        </Col>
      </Row>
    </>;
};
export default Alerts;