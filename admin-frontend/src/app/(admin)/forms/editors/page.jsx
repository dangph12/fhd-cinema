import { Col, Row } from 'react-bootstrap';
import AllEditors from './components/AllEditors';
import PageMetaData from '@/components/PageMetaData';
const Editors = () => {
  return <>
      <PageMetaData title="Editors" />
      <Row className="justify-content-center">
        <Col xs={12}>
          <AllEditors />
        </Col>
      </Row>
    </>;
};
export default Editors;