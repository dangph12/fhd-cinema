import { Col, Row } from 'react-bootstrap';
import ProfileCard from './components/ProfileCard';
import PersonalInformation from './components/PersonalInformation';
import ProfileView from './components/ProfileView';
import PageMetaData from '@/components/PageMetaData';
const Profile = () => {
  return <>
      <PageMetaData title="Profile" />
      <Row className="justify-content-center">
        <Col xs={12}>
          <ProfileCard />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <PersonalInformation />
        </Col>
        <Col md={8}>
          <ProfileView />
        </Col>
      </Row>
    </>;
};
export default Profile;