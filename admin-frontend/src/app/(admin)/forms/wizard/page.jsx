import { Col, Row } from 'react-bootstrap';
import BasicWizard from './components/BasicWizard';
import PageMetaData from '@/components/PageMetaData';
const Wizard = () => {
  return <>
      <PageMetaData title="Wizard" />
      <Row className="justify-content-center">
        <Col xs={12}>
          <BasicWizard />
        </Col>
      </Row>
    </>;
};
export default Wizard;