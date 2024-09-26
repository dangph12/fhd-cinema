import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import AllAnimations from './components/AllAnimations';
import PageMetaData from '@/components/PageMetaData';
const Animation = () => {
  return <>
      <PageMetaData title="Animation" />
      <Row className="justify-content-center">
        <Col>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4">Magic Animation</CardTitle>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              <AllAnimations />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default Animation;