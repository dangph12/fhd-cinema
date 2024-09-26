import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Button, Col, FormControl, FormGroup, FormLabel, FormSelect, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PersonalInformation = () => {
  return <ComponentContainerCard title="Personal Information">
      <FormGroup className="mb-3 row">
        <FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">First Name</FormLabel>
        <Col lg={9} xl={8}>
          <FormControl type="text" defaultValue="Rosa" />
        </Col>
      </FormGroup>
      <FormGroup className="mb-3 row">
        <FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">Last Name</FormLabel>
        <Col lg={9} xl={8}>
          <FormControl type="text" defaultValue="Dodson" />
        </Col>
      </FormGroup>
      <FormGroup className="mb-3 row">
        <FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">Company Name</FormLabel>
        <Col lg={9} xl={8}>
          <FormControl type="text" defaultValue="MannatThemes" />
          <span className="form-text text-muted font-12">We&apos;ll never share your email with anyone else.</span>
        </Col>
      </FormGroup>
      <FormGroup className="mb-3 row">
        <FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">Contact Phone</FormLabel>
        <Col lg={9} xl={8}>
          <InputGroup>
            <span className="input-group-text">
              <IconifyIcon icon="la:phone" />
            </span>
            <FormControl type="text" defaultValue={+123456789} placeholder="Phone" aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
      </FormGroup>
      <FormGroup className="mb-3 row">
        <FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">Email Address</FormLabel>
        <Col lg={9} xl={8}>
          <InputGroup>
            <span className="input-group-text">
              <IconifyIcon icon="la:at" />
            </span>
            <FormControl type="text" defaultValue="rosa.dodson@demo.com" placeholder="Email" aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
      </FormGroup>
      <FormGroup className="mb-3 row">
        <FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">Website Link</FormLabel>
        <Col lg={9} xl={8}>
          <InputGroup>
            <span className="input-group-text">
              <IconifyIcon icon="la:globe" />
            </span>
            <FormControl type="text" defaultValue=" https://mannatthemes.com/" placeholder="Email" aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
      </FormGroup>
      <FormGroup className="mb-3 row">
        <FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">USA</FormLabel>
        <Col lg={9} xl={8}>
          <FormSelect>
            <option>London</option>
            <option>India</option>
            <option>USA</option>
            <option>Canada</option>
            <option>Thailand</option>
          </FormSelect>
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <div className="col-lg-9 col-xl-8 offset-lg-3">
          <Button variant="primary" className="me-1" type="submit">
            Submit
          </Button>
          <Button variant="danger" type="button">
            Cancel
          </Button>
        </div>
      </FormGroup>
    </ComponentContainerCard>;
};
const ChangePassword = () => {
  return <ComponentContainerCard title="Change Password">
      <FormGroup className="mb-3 row">
        <FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">Current Password</FormLabel>
        <Col lg={9} xl={8}>
          <FormControl type="password" placeholder="Password" />
          <Link to="" className="text-primary font-12">
            Forgot password ?
          </Link>
        </Col>
      </FormGroup>
      <FormGroup className="mb-3 row">
        <FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">New Password</FormLabel>
        <Col lg={9} xl={8}>
          <FormControl type="password" placeholder="New Password" />
        </Col>
      </FormGroup>
      <FormGroup className="mb-3 row">
        <FormLabel className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center">Confirm Password</FormLabel>
        <Col lg={9} xl={8}>
          <FormControl type="password" placeholder="Re-Password" />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Col lg={9} xl={8} className="offset-lg-3">
          <Button variant="primary" className="me-1" type="submit">
            Change Password
          </Button>
          <Button variant="danger" type="button">
            Cancel
          </Button>
        </Col>
      </FormGroup>
    </ComponentContainerCard>;
};
const OtherSettings = () => {
  return <ComponentContainerCard title="Other Settings">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="Email_Notifications" defaultChecked />
        <label className="form-check-label" htmlFor="Email_Notifications">
          Email Notifications
        </label>
        <span className="form-text text-muted fs-12 mt-0">Do you need them?</span>
      </div>
      <div className="form-check mt-2">
        <input className="form-check-input" type="checkbox" id="API_Access" />
        <label className="form-check-label" htmlFor="API_Access">
          API Access
        </label>
        <span className="form-text text-muted font-12 mt-0">Enable/Disable access</span>
      </div>
    </ComponentContainerCard>;
};
const Settings = () => {
  return <>
      <PersonalInformation />
      <ChangePassword />
      <OtherSettings />
    </>;
};
export default Settings;