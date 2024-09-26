import { Button, Card, CardBody, CardGroup, CardHeader, CardLink, CardSubtitle, CardText, CardTitle, Col, ListGroup, ListGroupItem, NavLink, Row } from 'react-bootstrap';
import cardImg3 from '@/assets/images/extra/card/ex-card.png';
import cardImg1 from '@/assets/images/extra/card/img-1.jpg';
import cardImg2 from '@/assets/images/extra/card/v-card.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import PageMetaData from '@/components/PageMetaData';
import { Link } from 'react-router-dom';
const Card1 = () => {
  return <Card>
      <img className="card-img-top img-fluid bg-light-alt" src={cardImg1} alt="Card image cap" />
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as={'h4'}>Card title</CardTitle>
          </Col>
          <Col xs="auto">
            <img className="rounded-circle me-1" src={avatar7} alt="user-avatar" height={24} />
            <span className="badge bg-primary-subtle text-primary">30 May 2024</span>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <CardText className="text-muted ">
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        </CardText>
        <Button variant="outline-primary" className="btn-sm">
          Go somewhere
        </Button>
      </CardBody>
    </Card>;
};
const Card2 = () => {
  return <Card>
      <CardHeader>
        <CardTitle as={'h4'}>Card Body</CardTitle>
      </CardHeader>
      <CardBody className="pt-0">
        <CardSubtitle as={'p'} className="fs-14 mb-2">
          This is the card subtitle
        </CardSubtitle>
        <CardText className="text-muted">
          Some quick example text the bulk of the card&apos;s content. It is a long established fact that a reader will be distracted by the readable
          content.
        </CardText>
      </CardBody>
    </Card>;
};
const Card3 = () => {
  return <Card>
      <CardBody>
        <h6 className="card-subtitle fs-14 mb-2">This is the card subtitle</h6>
        <CardText className="text-muted">
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        </CardText>
        <CardLink role="button" className="text-primary">
          Card link
        </CardLink>
        <CardLink role="button" className="text-primary">
          Another link
        </CardLink>
      </CardBody>
    </Card>;
};
const Card4 = () => {
  return <Card>
      <CardHeader className="bg-primary">
        <CardTitle as={'h4'} className="text-white">
          Header - Primary
        </CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className="text-muted">
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        </CardText>
      </CardBody>
      <p className="card-footer bg-light-alt m-0">Footer - 2024 Rizz</p>
    </Card>;
};
const Card5 = () => {
  return <Card>
      <CardBody>
        <blockquote className="card-bodyquote mb-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a amet, consectetur adipiscing elit ante.</p>
          <footer className="blockquote-footer fs-14 mb-0 mt-2">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </CardBody>
    </Card>;
};
const ListGroupCard = () => {
  return <Card>
      <CardHeader>
        <CardTitle as={'h4'}>List Group</CardTitle>
      </CardHeader>
      <CardBody className="pt-0">
        <ListGroup className="list-group-flush border mb-3">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <CardText className="text-muted">
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        </CardText>
        <Link to="" className="btn btn-outline-primary btn-sm me-1">
          Go somewhere
        </Link>
        <Link to="" className="btn btn-outline-secondary btn-sm">
          Finish
        </Link>
      </CardBody>
    </Card>;
};
const Card6 = () => {
  return <Card>
      <Row className="g-0">
        <Col md={4}>
          <img src={cardImg2} className="img-fluid rounded-start" alt="..." />
        </Col>
        <Col md={8}>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <CardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>;
};
const Card7 = () => {
  return <Card className="text-center">
      <CardHeader>
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <NavLink active href="#">
              Active
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#">Link</NavLink>
          </li>
          <li className="nav-item">
            <NavLink disabled href="#" tabIndex={-1} aria-disabled="true">
              Disabled
            </NavLink>
          </li>
        </ul>
      </CardHeader>
      <CardBody>
        <CardTitle className="mb-2">Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button variant="primary" size="sm">
          Go somewhere
        </Button>
      </CardBody>
    </Card>;
};
const Card8 = () => {
  return <Card>
      <Row className="g-0">
        <Col md={8}>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <CardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Col>
        <Col md={4}>
          <img src={cardImg2} className="img-fluid rounded-end" alt="..." />
        </Col>
      </Row>
    </Card>;
};
const SpecialTitleCard1 = () => {
  return <Card>
      <CardHeader>
        <CardTitle as={'h4'}>Special title treatment</CardTitle>
      </CardHeader>
      <CardBody className="pt-0">
        <CardText className="text-muted ">With supporting text below as a natural lead-in to additional content.</CardText>
        <Button variant="primary" size="sm">
          Go somewhere
        </Button>
      </CardBody>
    </Card>;
};
const SpecialTitleCard2 = () => {
  return <Card className="text-center">
      <CardHeader>
        <CardTitle as={'h4'}>Special title treatment</CardTitle>
      </CardHeader>
      <CardBody className="pt-0">
        <CardText className="text-muted ">With supporting text below as a natural lead-in to additional content.</CardText>
        <Button variant="primary" size="sm">
          Go somewhere
        </Button>
      </CardBody>
    </Card>;
};
const SpecialTitleCard3 = () => {
  return <Card className="text-end">
      <CardHeader>
        <CardTitle as={'h4'}>Special title treatment</CardTitle>
      </CardHeader>
      <CardBody className="pt-0">
        <CardText className="text-muted ">With supporting text below as a natural lead-in to additional content.</CardText>
        <Button variant="primary" size="sm">
          Go somewhere
        </Button>
      </CardBody>
    </Card>;
};
const CardsGroup = () => {
  return <CardGroup className="mb-3">
      {Array.from(new Array(Math.floor(3))).map((_card, idx) => <Card key={idx}>
          <img className="img-fluid bg-light-alt" src={cardImg3} alt="Card image" />
          <CardHeader>
            <CardTitle as={'h4'}>Card Groups</CardTitle>
          </CardHeader>
          <CardBody className="pt-0">
            <CardText>This is a wider card supporting text below to content.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>)}
    </CardGroup>;
};
const Card9 = () => {
  return <Card className="mb-3">
      <Row className="g-0">
        <Col md={4} className="bg-light-alt align-self-center">
          <img src={cardImg3} alt="..." className="img-fluid bg-light-alt" />
        </Col>
        <Col md={8}>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText className="mb-0">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <CardText className="mb-0">
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>;
};
const CardWithImage = () => {
  return <Card>
      <img src={cardImg3} width={306} height={114} className="card-img-top bg-light-alt" alt="..." />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>
          This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </CardText>
      </CardBody>
    </Card>;
};
const Cards = () => {
  return <>
      <PageMetaData title="Cards" />
      <Row className="justify-content-center">
        <Col md={6} lg={3}>
          <Card1 />
        </Col>
        <Col md={6} xl={3}>
          <Card2 />
          <Card3 />
        </Col>
        <Col md={6} xl={3}>
          <Card4 />
          <Card5 />
        </Col>
        <Col md={6} xl={3}>
          <ListGroupCard />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Card6 />
        </Col>
        <Col lg={4}>
          <Card7 />
        </Col>
        <Col lg={4}>
          <Card8 />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <SpecialTitleCard1 />
        </Col>
        <Col lg={4}>
          <SpecialTitleCard2 />
        </Col>
        <Col lg={4}>
          <SpecialTitleCard3 />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <CardsGroup />
          <Card9 />
        </Col>
        <Col lg={6}>
          <Row className="row-cols-1 row-cols-md-2 gx-3">
            {Array.from(new Array(Math.floor(4))).map((_card, idx) => <Col key={idx}>
                <CardWithImage />
              </Col>)}
          </Row>
        </Col>
      </Row>
    </>;
};
export default Cards;