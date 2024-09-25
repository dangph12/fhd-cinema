import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const ComponentContainerCard = ({
  title,
  children
}) => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as="h4">{title}</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <>{children}</>
      </CardBody>
    </Card>;
};
export default ComponentContainerCard;