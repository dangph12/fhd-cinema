import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import { Col, ProgressBar, Row } from 'react-bootstrap';
const BasicExample = () => {
  return <ComponentContainerCard title="Basic">
      <ProgressBar className="mb-3" now={10} />
      <ProgressBar className="mb-3" now={20} />
      <ProgressBar className="mb-3" now={30} />
      <ProgressBar className="mb-3" now={40} />
      <ProgressBar className="mb-3" now={50} />
      <ProgressBar now={60} />
    </ComponentContainerCard>;
};
const StripedAndAnimated = () => {
  return <ComponentContainerCard title="Striped And Animated">
      <ProgressBar now={15} variant="warning" striped className="mb-3" />
      <ProgressBar now={30} striped variant="success" className="mb-3" />
      <ProgressBar now={45} striped className="mb-3" />
      <ProgressBar now={60} variant="info" animated striped className="mb-3" />
      <ProgressBar now={75} variant="danger" animated striped className="mb-3" />
      <ProgressBar now={90} animated striped />
    </ComponentContainerCard>;
};
const LabelsAndMultipleBars = () => {
  return <ComponentContainerCard title="Labels And Multiple Bars">
      <ProgressBar variant="secondary" className="mb-3" now={20} label="20%" />
      <ProgressBar variant="secondary" className="mb-3" striped now={40} label="40%" />
      <ProgressBar className="progress mb-3">
        <ProgressBar now={20} label="20%" />
        <ProgressBar now={20} variant="secondary" striped label="20%" />
        <ProgressBar now={20} variant="info" striped label="20%" />
      </ProgressBar>
      <ProgressBar className="progress">
        <ProgressBar now={20} />
        <ProgressBar now={40} variant="secondary" />
        <ProgressBar now={20} variant="info" />
      </ProgressBar>
    </ComponentContainerCard>;
};
const HeightProgressBar = () => {
  return <ComponentContainerCard title="Height">
      <ProgressBar now={15} className="mb-3" style={{
      height: 3
    }} />
      <ProgressBar now={45} striped className="mb-3" />
      <ProgressBar now={60} striped style={{
      height: 14
    }} />
    </ComponentContainerCard>;
};
const VerticalProgress = () => {
  return <ComponentContainerCard title="Vertical">
      <Row>
        <Col md={4} className="d-flex justify-content-center">
          <div className="progress progress-vertical my-3" style={{
          height: 8
        }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{
            height: '25%'
          }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <div className="progress progress-vertical my-3" style={{
          height: 8
        }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{
            height: '50%'
          }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <div className="progress progress-vertical my-3" style={{
          height: 8
        }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{
            height: '75%'
          }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <div className="progress progress-vertical-bottom my-3" style={{
          height: 8
        }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{
            height: '10%'
          }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <div className="progress progress-vertical-bottom my-3" style={{
          height: 8
        }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{
            height: '25%'
          }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <div className="progress progress-vertical-bottom my-3" style={{
          height: 8
        }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{
            height: '50%'
          }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <div className="progress progress-vertical-bottom my-3" style={{
          width: 30
        }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{
            height: '75%'
          }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <div className="progress progress-vertical-bottom my-3" style={{
          width: 30
        }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{
            height: '100%'
          }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
              100%
            </div>
          </div>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const ProgressBars = () => {
  return <>
      <PageMetaData title="Progress" />
      <Row className="justify-content-center">
        <Col md={6}>
          <BasicExample />
        </Col>
        <Col md={6}>
          <StripedAndAnimated />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <LabelsAndMultipleBars />
        </Col>
        <Col md={6}>
          <HeightProgressBar />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <VerticalProgress />
        </Col>
      </Row>
    </>;
};
export default ProgressBars;