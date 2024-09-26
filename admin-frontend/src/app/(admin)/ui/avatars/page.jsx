import { Col, Row } from 'react-bootstrap';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import PageMetaData from '@/components/PageMetaData';
const AvatarsCircle = () => {
  return <ComponentContainerCard title="Avatars Circle">
      <div className="d-flex align-items-center">
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-xxl rounded-circle" />
        </span>
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-xl rounded-circle" />
        </span>
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-lg rounded-circle" />
        </span>
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-md rounded-circle" />
        </span>
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-sm rounded-circle" />
        </span>
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-xs rounded-circle" />
        </span>
      </div>
    </ComponentContainerCard>;
};
const AvatarsSquare = () => {
  return <ComponentContainerCard title="Avatars Square">
      <div className="d-flex align-items-center">
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-xxl rounded" />
        </span>
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-xl rounded" />
        </span>
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-lg rounded" />
        </span>
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-md rounded" />
        </span>
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-sm rounded" />
        </span>
        <span role="button" className="me-2 d-inline-block">
          <img src={avatar9} alt="user" className="thumb-xs rounded" />
        </span>
      </div>
    </ComponentContainerCard>;
};
const TextAvatarsCircle = () => {
  return <ComponentContainerCard title="Text Avatars Circle">
      <div className="d-flex align-items-center">
        <span className="thumb-xxl justify-content-center d-flex align-items-center bg-success-subtle text-success rounded-circle me-2">MT</span>
        <span className="thumb-xl justify-content-center d-flex align-items-center bg-pink-subtle text-pink rounded-circle me-2">MT</span>
        <span className="thumb-lg justify-content-center d-flex align-items-center bg-purple-subtle text-purple rounded-circle me-2">MT</span>
        <span className="thumb-md justify-content-center d-flex align-items-center bg-warning-subtle text-warning rounded-circle me-2">MT</span>
        <span className="thumb-sm justify-content-center d-flex align-items-center bg-info-subtle text-info rounded-circle me-2">MT</span>
        <span className="thumb-xs justify-content-center d-flex align-items-center bg-dark-subtle text-dark rounded-circle me-2">MT</span>
      </div>
    </ComponentContainerCard>;
};
const TextAvatarsSquare = () => {
  return <ComponentContainerCard title="Text Avatars Square">
      <div className="d-flex align-items-center">
        <span className="thumb-xxl justify-content-center d-flex align-items-center bg-success-subtle text-success rounded me-2">MT</span>
        <span className="thumb-xl justify-content-center d-flex align-items-center bg-pink-subtle text-pink rounded me-2">MT</span>
        <span className="thumb-lg justify-content-center d-flex align-items-center bg-purple-subtle text-purple rounded me-2">MT</span>
        <span className="thumb-md justify-content-center d-flex align-items-center bg-warning-subtle text-warning rounded me-2">MT</span>
        <span className="thumb-sm justify-content-center d-flex align-items-center bg-info-subtle text-info rounded me-2">MT</span>
        <span className="thumb-xs justify-content-center d-flex align-items-center bg-dark-subtle text-dark rounded me-2">MT</span>
      </div>
    </ComponentContainerCard>;
};
const IconAvatarsCircle = () => {
  return <ComponentContainerCard title="Icon Avatars Circle">
      <div className="d-flex align-items-center">
        <span className="thumb-xxl justify-content-center d-flex align-items-center bg-success text-white rounded-circle me-2">
          <IconifyIcon icon="iconoir:profile-circle" />
        </span>
        <span className="thumb-xl justify-content-center d-flex align-items-center bg-pink text-white rounded-circle me-2">
          <IconifyIcon icon="iconoir:profile-circle" />
        </span>
        <span className="thumb-lg justify-content-center d-flex align-items-center bg-purple text-white rounded-circle me-2">
          <IconifyIcon icon="iconoir:profile-circle" />
        </span>
        <span className="thumb-md justify-content-center d-flex align-items-center bg-warning text-white rounded-circle me-2">
          <IconifyIcon icon="iconoir:profile-circle" />
        </span>
        <span className="thumb-sm justify-content-center d-flex align-items-center bg-info text-white rounded-circle me-2">
          <IconifyIcon icon="iconoir:profile-circle" />
        </span>
        <span className="thumb-xs justify-content-center d-flex align-items-center bg-dark text-white rounded-circle me-2">
          <IconifyIcon icon="iconoir:profile-circle" />
        </span>
      </div>
    </ComponentContainerCard>;
};
const IconAvatarsSquare = () => {
  return <ComponentContainerCard title="Icon Avatars Square">
      <div className="d-flex align-items-center">
        <span className="thumb-xxl justify-content-center d-flex align-items-center bg-success text-white rounded me-2">
          <IconifyIcon icon="iconoir:people-tag" />
        </span>
        <span className="thumb-xl justify-content-center d-flex align-items-center bg-pink text-white rounded me-2">
          <IconifyIcon icon="iconoir:people-tag" />
        </span>
        <span className="thumb-lg justify-content-center d-flex align-items-center bg-purple text-white rounded me-2">
          <IconifyIcon icon="iconoir:people-tag" />
        </span>
        <span className="thumb-md justify-content-center d-flex align-items-center bg-warning text-white rounded me-2">
          <IconifyIcon icon="iconoir:people-tag" />
        </span>
        <span className="thumb-sm justify-content-center d-flex align-items-center bg-info text-white rounded me-2">
          <IconifyIcon icon="iconoir:people-tag" />
        </span>
        <span className="thumb-xs justify-content-center d-flex align-items-center bg-dark text-white rounded me-2">
          <IconifyIcon icon="iconoir:people-tag" />
        </span>
      </div>
    </ComponentContainerCard>;
};
const Avatars = () => {
  return <>
      <PageMetaData title="Avatars" />
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <AvatarsCircle />
        </Col>
        <Col md={6} lg={6}>
          <AvatarsSquare />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <TextAvatarsCircle />
        </Col>
        <Col md={6} lg={6}>
          <TextAvatarsSquare />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <IconAvatarsCircle />
        </Col>
        <Col md={6} lg={6}>
          <IconAvatarsSquare />
        </Col>
      </Row>
    </>;
};
export default Avatars;