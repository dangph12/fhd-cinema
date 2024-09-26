import { Button, Col, Row, Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import useToggle from '@/hooks/useToggle';
import { useState } from 'react';
import { kebabToTitleCase } from '@/utils/change-casing';
import logoSm from '@/assets/images/logo-sm.png';
import user5 from '@/assets/images/users/avatar-5.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const BasicToast = () => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle(true);
  return <ComponentContainerCard title="Basic">
      <Toast show={isOpen} onClose={toggle} role="alert">
        <ToastHeader>
          <img src={logoSm} height={20} alt="logo" className="me-1" />
          <h5 className="me-auto my-0">Rizz</h5>
          <small>11 mins ago</small>
        </ToastHeader>
        <ToastBody>Hello, world! This is a toast message.</ToastBody>
      </Toast>
    </ComponentContainerCard>;
};
const TranslucentToast = () => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle(true);
  return <ComponentContainerCard title="Translucent">
      <div className="bg-light p-3">
        <Toast show={isOpen} onClose={toggle} role="alert">
          <ToastHeader>
            <img src={logoSm} alt="logo-sm" height={20} className="me-1" />
            <h5 className="me-auto my-0">Rizz</h5>
            <small>11 mins ago</small>
          </ToastHeader>
          <ToastBody>Hello, world! This is a toast message.</ToastBody>
        </Toast>
      </div>
    </ComponentContainerCard>;
};
const StackingToast = () => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle(true);
  const {
    isTrue: toastOpen,
    toggle: toastToggle
  } = useToggle(true);
  return <ComponentContainerCard title="Stacking">
      <div className="bg-light p-3">
        <ToastContainer className="position-relative">
          <Toast show={isOpen} onClose={toggle} role="alert">
            <ToastHeader>
              <img src={logoSm} alt="logo-sm" height={20} className="me-1" />
              <h5 className="me-auto my-0">Rizz</h5>
              <small>11 mins ago</small>
            </ToastHeader>
            <ToastBody>Hello, world! This is a toast message.</ToastBody>
          </Toast>
          <Toast show={toastOpen} onClose={toastToggle} role="alert">
            <ToastHeader>
              <img src={logoSm} alt="logo-sm" height={20} className="me-1" />
              <h5 className="me-auto my-0">Rizz</h5>
              <small>11 mins ago</small>
            </ToastHeader>
            <ToastBody>Hello, world! This is a toast message.</ToastBody>
          </Toast>
        </ToastContainer>
      </div>
    </ComponentContainerCard>;
};
const CustomContentToast = () => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle(true);
  const {
    isTrue: toastOpen,
    toggle: toastToggle
  } = useToggle(true);
  const {
    isTrue: toastOpen2,
    toggle: toastToggle2
  } = useToggle(true);
  return <ComponentContainerCard title="Custom Content">
      <div className="bg-light p-3">
        <Toast show={isOpen} onClose={toggle} className="d-flex align-items-center mb-2" role="alert" aria-live="assertive" aria-atomic="true">
          <ToastBody>Hello, world! This is a toast message.</ToastBody>
          <button type="button" className="btn-close ms-auto me-2" onClick={toggle} />
        </Toast>
        <Toast show={toastOpen} onClose={toastToggle} className="mb-2" role="alert" aria-live="assertive" aria-atomic="true">
          <ToastBody>
            Hello, world! This is a toast message.
            <div className="mt-2 pt-2 border-top">
              <Button variant="primary" size="sm" className="me-1" type="button">
                Take action
              </Button>
              <Button variant="secondary" size="sm" onClick={toastToggle}>
                Close
              </Button>
            </div>
          </ToastBody>
        </Toast>
        <Toast show={toastOpen2} onClose={toastToggle2} className="toast d-flex align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <ToastBody>Hello, world! This is a toast message.</ToastBody>
          <button type="button" className="btn-close btn-close-white ms-auto me-2" onClick={toastToggle2} />
        </Toast>
      </div>
    </ComponentContainerCard>;
};
const ToastPlacements = () => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle(true);
  const [position, setPosition] = useState('top-start');
  const placements = ['top-start', 'top-center', 'top-end', 'middle-start', 'middle-center', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'];
  return <ComponentContainerCard title="Toast Placement">
      <form>
        <div className="form-group mb-3">
          <label htmlFor="selectToastPlacement">Toast placement</label>
          <select className="form-select mt-2" onChange={e => setPosition(e.currentTarget.value)}>
            <option defaultChecked disabled>
              Select a position...
            </option>
            {placements.map((placement, idx) => {
            return <option value={placement} key={idx}>
                  {kebabToTitleCase(placement)}
                </option>;
          })}
          </select>
        </div>
      </form>
      <div aria-live="polite" aria-atomic="true" className="position-relative bd-example-toasts" style={{
      height: 260,
      backgroundColor: 'rgba(235, 240, 247, 0.1)'
    }}>
        <ToastContainer position={position} className="position-absolute p-3" id="toastPlacement">
          <Toast show={isOpen} onClose={toggle}>
            <ToastHeader>
              <img src={logoSm} alt="logo-sm" height={20} className="me-1" />
              <h5 className="me-auto my-0">Rizz</h5>
              <small>11 mins ago</small>
            </ToastHeader>
            <ToastBody>Hello, world! This is a toast message.</ToastBody>
          </Toast>
        </ToastContainer>
      </div>
    </ComponentContainerCard>;
};
const CustomToast = () => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle(true);
  return <ComponentContainerCard title="Custom Toast">
      <Toast show={isOpen} onClose={toggle} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header border-0">
          <button type="button" className="btn-close ms-auto " onClick={toggle}></button>
        </div>
        <ToastBody className="text-center">
          <img alt="user" src={user5} className="d-block mx-auto rounded-circle thumb-xl" />
          <h5 className="fw-bold mt-3 mb-1">Charles Smith</h5>
          <p className="text-muted mb-0">UI/UX front end developer</p>
          <div className="mt-3 mb-2 d-inline-flex gap-1">
            <Button variant="outline-primary" className="btn-icon-circle btn-icon-circle-sm">
              <IconifyIcon icon="fa-brands:facebook-f" />
            </Button>
            <Button variant="outline-info" className="btn-icon-circle btn-icon-circle-sm">
              <IconifyIcon icon="fa-brands:twitter" />
            </Button>
            <Button variant="outline-pink" className="btn-icon-circle btn-icon-circle-sm">
              <IconifyIcon icon="fa-brands:dribbble" />
            </Button>
          </div>
        </ToastBody>
      </Toast>
    </ComponentContainerCard>;
};
const AllToasts = () => {
  return <Row className="justify-content-center">
      <Col md={6}>
        <BasicToast />
        <StackingToast />
        <ToastPlacements />
      </Col>
      <Col md={6}>
        <TranslucentToast />
        <CustomContentToast />
        <CustomToast />
      </Col>
    </Row>;
};
export default AllToasts;