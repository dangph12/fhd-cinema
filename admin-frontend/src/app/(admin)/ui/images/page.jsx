import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';
import colorBg2 from '@/assets/images/extra/color-bg-2.jpg';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import PageMetaData from '@/components/PageMetaData';
const ResponsiveImage = () => {
  return <ComponentContainerCard title="Responsive Images">
      <img src={colorBg2} alt="color-image" className="img-fluid rounded" />
    </ComponentContainerCard>;
};
const SquareImageCard = () => {
  return <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <img width={138} height={138} src={avatar1} alt="avatar" className="img-thumbnail" />
          </div>
          <div className="flex-grow-1 ms-3 text-truncate">
            <h4 className="mb-1 fw-semibold">Kathryn Money</h4>
            <p className="text-muted mb-3 font-13">UI &amp; UX Designer, Japan</p>
            <Button variant="primary" size="sm" type="button">
              Message
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>;
};
const RoundedImageCard = () => {
  return <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <img src={avatar10} alt="avatar" className="rounded" />
          </div>
          <div className="flex-grow-1 ms-3 text-truncate">
            <h4 className="mb-1 fw-semibold">Anthony Stover</h4>
            <p className="text-muted mb-3 font-13">Frontend Developer, USA</p>
            <Button variant="primary" size="sm" type="button">
              Message
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>;
};
const CircleImageCard = () => {
  return <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <img src={avatar8} alt="avatar" className="rounded-circle" />
          </div>
          <div className="flex-grow-1 ms-3 text-truncate">
            <h4 className="mb-1 fw-semibold">Catherine Orman</h4>
            <p className="text-muted mb-3 font-13">Backend Developer, Canada</p>
            <Button variant="primary" size="sm" type="button">
              Message
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>;
};
const FloatAligningImages = () => {
  return <ComponentContainerCard title="Aligning Images (float)">
      <img src={avatar4} alt="avatar" className="rounded float-start" />
      <img src={avatar7} alt="avatar" className="rounded float-end" />
    </ComponentContainerCard>;
};
const AligningImage = () => {
  return <ComponentContainerCard title="Aligning Images">
      <img src={avatar6} alt="avatar" className="rounded d-block mx-auto" />
    </ComponentContainerCard>;
};
const Images = () => {
  return <>
      <PageMetaData title="Images" />
      <Row className="justify-content-center">
        <Col>
          <ResponsiveImage />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <SquareImageCard />
        </Col>
        <Col md={6} lg={4}>
          <RoundedImageCard />
        </Col>
        <Col md={6} lg={4}>
          <CircleImageCard />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <FloatAligningImages />
        </Col>
        <Col md={6}>
          <AligningImage />
        </Col>
      </Row>
    </>;
};
export default Images;