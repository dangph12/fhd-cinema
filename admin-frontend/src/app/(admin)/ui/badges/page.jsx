import { Badge, Button, Col, Row } from 'react-bootstrap';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Link } from 'react-router-dom';
import PageMetaData from '@/components/PageMetaData';
const BadgeExample = () => {
  return <ComponentContainerCard title="Badge Examples">
      <div className="icons-center gap-1 flex-wrap">
        <Badge bg="primary">Primary</Badge>
        <Badge bg="secondary">Secondary</Badge>
        <Badge bg="success">Success</Badge>
        <Badge bg="danger">Danger</Badge>
        <Badge bg="warning">Warning</Badge>
        <Badge bg="info">Info</Badge>
        <Badge bg="light" className="text-dark">
          Light
        </Badge>
        <Badge bg="dark">Dark</Badge>
      </div>
    </ComponentContainerCard>;
};
const PillBadges = () => {
  return <ComponentContainerCard title="Pill Badges">
      <div className="icons-center gap-1 flex-wrap">
        <Badge bg="primary" pill>
          Primary
        </Badge>
        <Badge bg="secondary" pill>
          Secondary
        </Badge>
        <Badge bg="success" pill>
          Success
        </Badge>
        <Badge bg="danger" pill>
          Danger
        </Badge>
        <Badge bg="warning" pill>
          Warning
        </Badge>
        <Badge bg="info" pill>
          Info
        </Badge>
        <Badge bg="light" pill className="text-dark">
          Light
        </Badge>
        <Badge bg="dark" pill>
          Dark
        </Badge>
      </div>
    </ComponentContainerCard>;
};
const LinksBadges = () => {
  return <ComponentContainerCard title="Links Badges">
      <div className="icons-center gap-1 flex-wrap">
        <Link to="" className="badge bg-primary">
          Primary
        </Link>
        <Link to="" className="badge bg-secondary">
          Secondary
        </Link>
        <Link to="" className="badge bg-success">
          Success
        </Link>
        <Link to="" className="badge bg-danger">
          Danger
        </Link>
      </div>
    </ComponentContainerCard>;
};
const LinksPillBadges = () => {
  return <ComponentContainerCard title="Links Badges">
      <div className="icons-center gap-1 flex-wrap">
        <Badge bg="primary" as={Link} to="">
          Primary
        </Badge>
        <Badge bg="secondary" as={Link} to="">
          Secondary
        </Badge>
        <Badge bg="success" as={Link} to="">
          Success
        </Badge>
        <Badge bg="danger" as={Link} to="">
          Danger
        </Badge>
      </div>
    </ComponentContainerCard>;
};
const SubtleBadges = () => {
  return <ComponentContainerCard title="Badges Subtle">
      <div className="icons-center gap-1 flex-wrap">
        <span className="badge bg-primary-subtle text-primary">Primary</span>
        <span className="badge bg-secondary-subtle text-secondary">Secondary</span>
        <span className="badge bg-success-subtle text-success">Success</span>
        <span className="badge bg-danger-subtle text-danger">Danger</span>
        <span className="badge bg-warning-subtle text-warning">Warning</span>
        <span className="badge bg-info-subtle text-info">Info</span>
        <span className="badge bg-purple-subtle text-purple">Purple</span>
        <span className="badge bg-dark-subtle text-dark">Dark</span>
      </div>
    </ComponentContainerCard>;
};
const SubtlePillBadges = () => {
  return <ComponentContainerCard title="Badges Pill Subtle">
      <div className="icons-center gap-1 flex-wrap">
        <span className="badge rounded-pill bg-primary-subtle text-primary">Primary</span>
        <span className="badge rounded-pill bg-secondary-subtle text-secondary">Secondary</span>
        <span className="badge rounded-pill bg-success-subtle text-success">Success</span>
        <span className="badge rounded-pill bg-danger-subtle text-danger">Danger</span>
        <span className="badge rounded-pill bg-warning-subtle text-warning">Warning</span>
        <span className="badge rounded-pill bg-info-subtle text-info">Info</span>
        <span className="badge rounded-pill bg-pink-subtle text-pink">Pink</span>
        <span className="badge rounded-pill bg-dark-subtle text-dark">Dark</span>
      </div>
    </ComponentContainerCard>;
};
const OutlineBadges = () => {
  return <ComponentContainerCard title="Outline Badges">
      <div className="icons-center gap-1 flex-wrap">
        <span className="badge bg-transparent border border-primary text-primary">Primary</span>
        <span className="badge bg-transparent border border-secondary text-secondary">Secondary</span>
        <span className="badge bg-transparent border border-success text-success">Success</span>
        <span className="badge bg-transparent border border-danger text-danger">Danger</span>
        <span className="badge bg-transparent border border-warning text-warning">Warning</span>
        <span className="badge bg-transparent border border-info text-info">Info</span>
        <span className="badge bg-transparent border border-purple text-purple">Purple</span>
        <span className="badge bg-transparent border border-dark text-dark">Dark</span>
      </div>
    </ComponentContainerCard>;
};
const OutlinePillBadges = () => {
  return <ComponentContainerCard title="Outline Pill Badges">
      <div className="icons-center gap-1 flex-wrap">
        <span className="badge rounded-pill bg-transparent border border-primary text-primary">Primary</span>
        <span className="badge rounded-pill bg-transparent border border-secondary text-secondary">Secondary</span>
        <span className="badge rounded-pill bg-transparent border border-success text-success">Success</span>
        <span className="badge rounded-pill bg-transparent border border-danger text-danger">Danger</span>
        <span className="badge rounded-pill bg-transparent border border-warning text-warning">Warning</span>
        <span className="badge rounded-pill bg-transparent border border-info text-info">Info</span>
        <span className="badge rounded-pill bg-transparent border border-purple text-purple">Purple</span>
        <span className="badge rounded-pill bg-transparent border border-dark text-dark">Dark</span>
      </div>
    </ComponentContainerCard>;
};
const ButtonsWithBadge = () => {
  return <ComponentContainerCard title="Buttons With Badge">
      <div className="icons-center gap-1 flex-wrap">
        <Button variant="primary" size="sm">
          Notifications <span className="badge bg-light text-dark">4</span>
        </Button>
        <Button variant="secondary" size="sm">
          Notifications <span className="badge bg-light text-dark">8</span>
        </Button>
      </div>
    </ComponentContainerCard>;
};
const ButtonAndPosition = () => {
  return <ComponentContainerCard title="Buttons With Positioned Badge">
      <Button variant="primary" type="button" className="position-relative">
        Notifications
        <span className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle">
          <small className="thumb-xs">12</small>
        </span>
      </Button>
      <Button variant="secondary" type="button" className="position-relative ms-2">
        Notifications
        <span className="position-absolute top-0 start-100 translate-middle bg-primary px-1 border border-light rounded">
          <small className="fs-10">New</small>
        </span>
      </Button>
    </ComponentContainerCard>;
};
const Badges = () => {
  return <>
      <PageMetaData title="Badges" />
      <Row className="justify-content-center">
        <Col md={6}>
          <BadgeExample />
        </Col>
        <Col md={6}>
          <PillBadges />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <LinksBadges />
        </Col>
        <Col md={6}>
          <LinksPillBadges />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <SubtleBadges />
        </Col>
        <Col md={6}>
          <SubtlePillBadges />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <OutlineBadges />
        </Col>
        <Col md={6}>
          <OutlinePillBadges />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <ButtonsWithBadge />
        </Col>
        <Col md={6}>
          <ButtonAndPosition />
        </Col>
      </Row>
    </>;
};
export default Badges;